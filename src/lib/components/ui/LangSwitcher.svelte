<script lang="ts">
	import { languages } from '$lib/translation/languages';
	import language, { setLanguage } from '@/stores/languageStore';
</script>

<ul class="flex gap-4">
	{#each languages as lang}
		<li>
			<button class="primary-btn" on:click={() => setLanguage(lang)}>{lang.language}</button>
		</li>
	{/each}
</ul>
