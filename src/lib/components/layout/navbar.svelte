<script>
	import { onMount } from 'svelte';
	import { navigationModel } from '$lib/components/layout/navigation.model';
	import LangSwitcher from '$lib/components/ui/LangSwitcher.svelte';

	let colorMode = 'light';
	function changeColorMode() {
		colorMode = colorMode === 'light' ? 'dark' : 'light';
		document.documentElement.setAttribute('data-theme', colorMode);
	}

	// Set initial theme on component mount
	onMount(() => {
		document.documentElement.setAttribute('data-theme', colorMode);
	});
</script>

<nav class="flex justify-between border-b p-4">
	<h3><a href="/">Logo</a></h3>
	<button on:click={changeColorMode}>color mode</button>
	<LangSwitcher />
	<ul class="flex gap-4">
		{#each navigationModel as path}
			<li><a href={path.link}>{path.name}</a></li>
		{/each}
	</ul>
</nav>
