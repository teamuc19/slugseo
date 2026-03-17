<script>
	let { data } = $props();
</script>

<svelte:head>
	<title>Products | Nature Wonders</title>
	<meta name="description" content="Browse all products from Nature Wonders." />
</svelte:head>

<section class="min-h-screen bg-gray-100 py-12">
	<div class="mx-auto max-w-6xl px-4">
		<div class="mb-10 text-center">
			<h1 class="mb-2 text-4xl font-bold text-gray-900">Our Products</h1>
			<p class="text-gray-600">Click on a product to open the detail page</p>
		</div>

		{#if !data.products || data.products.length === 0}
			<p class="text-center text-xl font-semibold text-red-600">No products found.</p>
		{:else}
			<div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
				{#each data.products as product (product.id)}
					<a
						href={`/products/${product.slug}`}
						class="overflow-hidden rounded-2xl bg-white shadow-md transition hover:-translate-y-1 hover:shadow-xl"
					>
						<img
							src={product.image_url}
							alt={product.name}
							class="h-52 w-full object-cover"
						/>

						<div class="p-5 text-center">
							<h2 class="mb-3 text-2xl font-semibold text-gray-900">{product.name}</h2>
							<p class="mb-4 line-clamp-3 text-base leading-7 text-gray-600">
								{product.description}
							</p>
							<p class="text-2xl font-bold text-black">
								€ {Number(product.price).toFixed(2)}
							</p>
						</div>
					</a>
				{/each}
			</div>
		{/if}
	</div>
</section>