import { error } from '@sveltejs/kit';
import { createConnection } from '$lib/db/mysql';

export async function load({ params }) {
	const connection = await createConnection();

	const [rows] = await connection.execute(
		'SELECT id, name, slug, description, price, image_url FROM products WHERE slug = ?',
		[params.slug]
	);

	if (!rows.length) {
		throw error(404, 'Product not found');
	}

	return {
		product: rows[0]
	};
}