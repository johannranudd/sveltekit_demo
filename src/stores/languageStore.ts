import { writable } from 'svelte/store';
import { getItem, setItem } from '@/storage/localstorage';
import type { ILanguage } from '@/types';

export function languageStore(initialValue: ILanguage = getItem('language')) {
	const language = writable(initialValue || getItem('language'));
	function setLanguage(newLang: any) {
		console.log(language);
		console.log(newLang);
		// language.update((l) => (l = newLang));
		// setItem('language', { ...newLang });
	}
	console.log(language);

	return {
		...language,
		setLanguage
	};
}
