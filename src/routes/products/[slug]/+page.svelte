<script>
	let { data } = $props();
</script>

<svelte:head>
	<title>{data.product.name} | Nature Wonders</title>
	<meta name="description" content={data.product.description} />
</svelte:head>

<section class="min-h-screen bg-gray-100 py-12">
	<div class="mx-auto max-w-5xl px-4">
		<a
			href="/products"
			class="mb-6 inline-block rounded-lg bg-white px-4 py-2 font-medium text-gray-800 shadow transition hover:bg-gray-50"
		>
			← Back to products
		</a>

		<div class="grid gap-8 rounded-3xl bg-white p-6 shadow-lg md:grid-cols-2 md:p-10">
			<div>
				<img
					src={data.product.image_url}
					alt={data.product.name}
					class="h-80 w-full rounded-2xl object-cover md:h-96"
				/>
			</div>

			<div class="flex flex-col justify-center">
				<p class="mb-2 text-sm font-semibold uppercase tracking-widest text-gray-500">
					Product Detail
				</p>

				<h1 class="mb-4 text-4xl font-bold text-gray-900">{data.product.name}</h1>

				<p class="mb-6 text-lg leading-8 text-gray-600">{data.product.description}</p>

				<p class="mb-4 text-3xl font-bold text-black">
					€ {Number(data.product.price).toFixed(2)}
				</p>

				<p class="text-sm text-gray-500">Slug: {data.product.slug}</p>
			</div>
		</div>
	</div>
</section>