<script lang="ts">
	import { page } from '$app/stores';

	type Greetings = {
		[key in 'en' | 'es' | 'fr']: string;
	};

	const greetings = {
		en: 'Hello',
		es: 'Hola',
		fr: 'Bonjour'
	};

	const { lang } = $page.params;
	const greeting = greetings[lang as keyof Greetings] ?? 'Hello';
</script>

<h1>{greeting}!</h1>
