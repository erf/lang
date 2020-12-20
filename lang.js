/**
 * Initialize the lang API given a translation map.
 *
 * @param {Object} translations_p - the translation object with translations for all supported languages.
 * @returns {Object} the lang API
 */
function lang(translations_p) {
	let translations = translations_p

	let code = localStorage.getItem('lang_code')

	if (!code) {
		code = 'en'
	}

	/**
	 * Set the current language, given a language code, matching a translation key.
	 *
	 * @param {string} code_p - the language code (translation key)
	 */
	function setLang(code_p) {
		code = code_p
		localStorage.setItem('lang_code', code_p)
	}

	/**
	 * Get a translation given a tag and an optional set of arguments.
	 *
	 * @param {string} tag - a translation key
	 * @param  {...any} args  - an arbitrary array of arguments that matches `{}` in a translation
	 */
	function tr(tag, ...args) {
		let str = translations[code][tag]
		if (args.length) {
			let index = 0
			str = str.replaceAll('{}', () => args[index++])
		}
		return str;
	}

	return { setLang, tr, }
}