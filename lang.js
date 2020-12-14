function lang(translations_p) {
	let translations = translations_p

	let code = localStorage.getItem('lang_code')

	if (!code) {
		code = 'en'
	}

	function setLang(code_p) {
		code = code_p
		localStorage.setItem('lang_code', code_p)
	}

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