<script>
	import '../styles/global.css';
	import Navbar from '$lib/components/layout/navbar.svelte';
	import Footer from '$lib/components/layout/footer.svelte';
</script>

<Navbar />
<main class="p-4">
	<slot />
</main>
<Footer />
