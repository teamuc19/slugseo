import { createConnection } from '$lib/db/mysql.js';
import { PUBLIC_BASE_URL } from '$env/static/public';

export async function GET() {
	const baseUrl = PUBLIC_BASE_URL || 'https://deine-domain.de';

	try {
		const connection = await createConnection();

		const [products] = await connection.execute(`
			SELECT slug, image_url
			FROM products
			WHERE slug IS NOT NUL
			ORDER BY name ASC
		`);

		const now = new Date().toISOString();

		const staticUrls = [
			{
				loc: `${baseUrl}/`,
				lastmod: now
			}
		];

		const productUrls = products.map((product) => ({
			loc: `${baseUrl}/products/${product.slug}`,
			lastmod: now,
			image: product.image_url || ''
		}));

		const allUrls = [...staticUrls, ...productUrls];

		const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${allUrls
	.map((url) => {
		const imageTag = url.image
			? `<image:image><image:loc>${escapeXml(url.image)}</image:loc></image:image>`
			: '';

		return `	<url>
		<loc>${escapeXml(url.loc)}</loc>
		<lastmod>${url.lastmod}</lastmod>
		${imageTag}
	</url>`;
	})
	.join('\n')}
</urlset>`;

		return new Response(xml, {
			headers: {
				'Content-Type': 'application/xml',
				'Cache-Control': 'public, max-age=3600'
			}
		});
	} catch (error) {
		console.error('Sitemap generation error:', error);
		return new Response('Error generating sitemap', { status: 500 });
	}
}

function escapeXml(str) {
	if (!str) return '';
	return str
		.replace(/&/g, '&amp;')
		.replace(/</g, '&lt;')
		.replace(/>/g, '&gt;')
		.replace(/"/g, '&quot;')
		.replace(/'/g, '&apos;');
}
