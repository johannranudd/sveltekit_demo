<script>
	import { onMount, setContext } from 'svelte';
	import { navigationModel } from '$lib/components/layout/navigation.model';
	import LangSwitcher from '$lib/components/ui/LangSwitcher.svelte';
	import Counter from '../ui/Counter.svelte';
	let colorMode = 'light';
	function changeColorMode() {
		colorMode = colorMode === 'light' ? 'dark' : 'light';
		document.documentElement.setAttribute('data-theme', colorMode);
	}

	// Set initial theme on component mount
	onMount(() => {
		document.documentElement.setAttribute('data-theme', colorMode);
	});

	// const count = countStore();
</script>

<nav class="flex h-[70px] justify-between border-b p-4">
	<h3><a href="/">Logo</a></h3>
	<button class="primary-btn" on:click={changeColorMode}>color mode</button>
	<!-- <LangSwitcher /> -->
	<!-- <Counter /> -->
	<ul class="flex gap-4">
		{#each navigationModel as path}
			<li><a href={path.link}>{path.name}</a></li>
		{/each}
	</ul>
</nav>
