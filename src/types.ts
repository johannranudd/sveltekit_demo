export type Greetings = {
	[key in 'en' | 'es' | 'fr' | 'de']: string;
};

export interface ILanguage {
	code: string;
	language: string;
	locale: string;
}
