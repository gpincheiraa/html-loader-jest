const htmlLoader = require('html-loader')

module.exports = {
	process(sourceText) {
		return {
			code: htmlLoader(sourceText)
		}
	}
}
