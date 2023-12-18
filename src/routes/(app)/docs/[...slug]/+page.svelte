<script>
	import { page } from '$app/stores';
	const slugArr = $page.params.slug.split('/').filter((item) => item !== '');
</script>

<div>
	{#if slugArr.length > 0}
		{#each slugArr as slug}
			<p>{slug}</p>
		{/each}
	{:else}
		<p>No slugs detected</p>
	{/if}
</div>
