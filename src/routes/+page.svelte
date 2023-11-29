<script lang="ts">
	import { getLanguage } from '@/lib/translation/languages';

	// import { languages } from '$lib/translation/languages';
	import language from '@/stores/languageStore';
	// console.log(languages);
	//! !!!!!!!todo: get the right file here!!!!!!!!!!!!!!!!!!!!!!!!
	const lang = getLanguage('es');
	console.log(lang);
</script>

<h1>Welcome to SvelteKit</h1>
<p>Language: {$language.language}</p>
