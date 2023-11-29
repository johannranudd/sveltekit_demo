import { writable } from 'svelte/store';
import { getItem, setItem } from '@/storage/localstorage';
import type { ILanguage } from '@/types';

// Initialize default language
function initializeDefaultLanguage() {
	if (typeof window !== 'undefined') {
		const languageInStorage = getItem('language');
		if (!languageInStorage) {
			const defaultLanguage: ILanguage = {
				code: 'en',
				language: 'English',
				locale: './en.json'
			};
			setItem('language', defaultLanguage);
			return defaultLanguage;
		} else {
			return languageInStorage;
		}
	} else {
		return {
			code: 'en',
			language: 'English',
			locale: './en.json'
		};
	}
}

const initialLang = initializeDefaultLanguage();
const language = writable<ILanguage>(initialLang);

export function setLanguage(newLang: ILanguage) {
	language.set(newLang);
	if (typeof window !== 'undefined') {
		setItem('language', newLang);
	}
}

// Export the store instance
export default language;
