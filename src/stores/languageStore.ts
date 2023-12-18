import { writable, get } from 'svelte/store';
import { getItem, setItem } from '@/storage/localstorage';
import type { ILanguage } from '@/types';
import enJSONFile from '$lib/translation/en.json';
import esJSONFile from '$lib/translation/es.json';
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

// export const language = writable<ILanguage>(initializeDefaultLanguage());
let currentFile = await import(`@/lib/translation/${defaultLanguage.code}.json`);
export const language = writable<Promise<ILanguage>>(initializeDefaultLanguage());

// getLanguageFile(initializeDefaultLanguage().code)
async function initializeDefaultLanguage() {
	if (typeof window !== 'undefined') {
		const languageInStorage = getItem('language');
		if (!languageInStorage) {
			setItem('language', defaultLanguage);
			currentFile = await getLanguageFile(defaultLanguage.code);
			return defaultLanguage;
		} else {
			currentFile = await getLanguageFile(languageInStorage.code);
			return languageInStorage;
		}
	} else {
		currentFile = await getLanguageFile(defaultLanguage.code);
		return defaultLanguage;
	}
}

async function getLanguageFile(lang: string) {
	const language = languages.find((item) => item.code === lang);
	if (language && typeof window !== 'undefined') {
		// console.log(language);
		// console.log(language.code);
		// console.log(esJSONFile);
		try {
			currentFile = await import(`@/lib/translation/${lang}.json`);
			return currentFile;
		} catch (error) {
			console.error('Failed to load language file:', error);
			return `Error loading translations`;
		}
	} else {
		console.error('Language not found:', lang);
		return `Language not found: ${lang}`;
	}
}

export const translation = (str: string) => {
	if (typeof window !== 'undefined') {
		console.log(currentFile);
		console.log(currentFile[str]);
		return currentFile[str];
	} else {
		return 'No translation';
	}
};

export async function setLanguage(newLang: Promise<ILanguage>) {
	if (typeof window !== 'undefined') {
		setItem('language', newLang);
		const languageInStorage = getItem('language');
		console.log(newLang);
		language.set(newLang);
		currentFile = await getLanguageFile(languageInStorage.code);
		console.log(currentFile);
	}
}
