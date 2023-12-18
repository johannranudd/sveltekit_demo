<script lang="ts">
	import { goto, beforeNavigate, afterNavigate } from '$app/navigation';
	function handleClick() {
		console.log('handleClick');
		goto('/products');
	}
	beforeNavigate((navigation) => {
		console.log({ before: navigation });
	});
	afterNavigate((navigation) => {
		console.log({ after: navigation });
	});
</script>

<h1>Welcome to SvelteKit</h1>
<button on:click={handleClick}>Place order</button>
