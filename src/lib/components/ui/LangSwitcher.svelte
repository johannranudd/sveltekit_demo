<script lang="ts">
	import { languages } from '$lib/translation/languages';
	import { setItem } from '@/storage/localstorage';
	import { languageStore } from '@/stores/languageStore';

	const lang = languageStore();
</script>

<ul class="flex gap-4">
	{#each languages as lang}
		<li>
			<button class="primary-btn" on:click={() => lang.setLanguage(lang)}>{lang.language}</button>
		</li>
	{/each}
</ul>
