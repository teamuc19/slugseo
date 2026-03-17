import { createConnection } from '$lib/db/mysql';

export async function load() {
	const connection = await createConnection();

	const [products] = await connection.execute(
		'SELECT id, name, slug, description, price, image_url FROM products ORDER BY name'
	);

	return {
		products
	};
}