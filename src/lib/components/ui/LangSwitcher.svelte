<script lang="ts">
	import { languages } from '$lib/translation/languages';
	function setLang(lang: any) {
		console.log(lang);
	}
</script>

<ul class="flex gap-4">
	{#each languages as lang}
		<li><button class="primary-btn" on:click={() => setLang(lang)}>{lang.code}</button></li>
	{/each}
</ul>
