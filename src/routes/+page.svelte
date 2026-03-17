<script>
	import background from '$lib/assets/background.jpg';
</script>

<svelte:head>
	<title>Nature Wonders</title>
	<meta
		name="description"
		content="Discover beautiful landscapes and explore all available products."
	/>
</svelte:head>

<section
	class="relative flex min-h-screen items-center justify-center bg-cover bg-center"
	style={`background-image: linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)), url(${background});`}
>
	<div class="px-4 text-center text-white">
		<h1 class="mb-3 text-5xl font-bold md:text-6xl">Nature Wonders</h1>
		<p class="mb-6 text-lg md:text-xl">Discover beautiful landscapes around the world</p>

		<a
			href="/products"
			class="inline-block rounded-xl bg-white px-6 py-3 font-semibold text-black shadow-md transition hover:scale-105"
		>
			View Products
		</a>
	</div>
</section>