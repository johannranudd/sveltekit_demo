import { writable, get } from 'svelte/store';
import { getItem, setItem } from '@/storage/localstorage';
import type { ILanguage } from '@/types';

export const languages = [
	{
		code: 'en',
		language: 'English',
		locale: './en.json'
	},
	{
		code: 'es',
		language: 'Spanish',
		locale: './es.json'
	}
];

const defaultLanguage: ILanguage = {
	code: 'en',
	language: 'English',
	locale: './en.json'
};

export const language = writable<ILanguage>(initializeDefaultLanguage());
let currentFile = await import(`@/lib/translation/${defaultLanguage.code}.json`);

// getLanguageFile(initializeDefaultLanguage().code)
function initializeDefaultLanguage() {
	if (typeof window !== 'undefined') {
		const languageInStorage = getItem('language');
		if (!languageInStorage) {
			setItem('language', defaultLanguage);
			getLanguageFile(defaultLanguage.code);
			return defaultLanguage;
		} else {
			// getLanguageFile(languageInStorage.code);
			return languageInStorage;
		}
	} else {
		// getLanguageFile(defaultLanguage.code);
		return defaultLanguage;
	}
}

async function getLanguageFile(lang: string) {
	const language = languages.find((item) => item.code === lang);
	// console.log(language.locale);
	if (language && typeof window !== 'undefined') {
		try {
			const module = await import(`@/lib/translation/${lang}.json`);
			console.log(module);
			currentFile = module;
			return module;
			// return `@/lib/translation/${lang}.json`;
		} catch (error) {
			console.error('Failed to load language file:', error);
			return `Error loading translations`;
		}
	} else {
		console.error('Language not found:', lang);
		return `Language not found: ${lang}`;
	}
}

export const translation = async (str: string): Promise<string> => {
	if (typeof window !== 'undefined') {
		const languageInStorage = getItem('language');
		console.log(currentFile);
		const file = await getLanguageFile(languageInStorage.code);
		console.log(file[str]);
		return file[str];
	} else {
		return 'No translation';
	}
};

export async function setLanguage(newLang: ILanguage) {
	if (typeof window !== 'undefined') {
		setItem('language', newLang);
		language.set(newLang);
		//  getLanguageFile(newLang.code);
		// translation.set(await getLanguageFile(newLang.code));
		// console.log(translation);
	}
}
