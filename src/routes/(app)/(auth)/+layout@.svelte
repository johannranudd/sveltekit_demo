<script>
	import Footer from '$lib/components/layout/footer.svelte';
</script>

<!-- <div class="h-[calc(100vh-140px)] w-screen border border-red-500 bg-red-500"> -->
<div class="h-screen w-screen">
	<div class="h-[70px]">
		<h1>auth navbar</h1>
	</div>
	<div class="border border-red-300 bg-red-300">
		<h1>auth layout</h1>
		<slot />
	</div>
	<Footer />
</div>
