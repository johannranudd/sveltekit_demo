<script lang="ts">
	import { language, translation } from '@/stores/languageStore';
	console.log(translation('greeting'));
</script>

<h1>Welcome to SvelteKit</h1>
<p>Language: {$language.language}</p>

<p>{translation('greeting')}</p>
