// !works below
// export async function getLanguage(lang: string) {
// 	const language = languages.find((item) => item.code === lang);

// 	if (language) {
// 		try {
// 			const module = await import(`./${lang}`);
// 			// Assuming the locale file exports some data you need
// 			const data = module.default;
// 			console.log(data);
// 			return data;
// 		} catch (error) {
// 			console.error('Failed to load language file:', error);
// 		}
// 	} else {
// 		console.error('Language not found:', lang);
// 	}
// }
// !works above
