const fs = require('fs')
const path = require('path')

fs.readFile(path.join(__dirname, './index.html'), 'utf8', (err, data) => {
	// console.log(data)
	const cssreg = /<style>[\s\S]*<\/style>/
	const jsreg = /<script>[\s\S]*<\/script>/
	const css = cssreg.exec(data)[0]
	const newCss = css.replace('<style>', '').replace('</style>', '')

	console.log('🚀 ~ file: 03.js ~ line 8 ~ fs.readFile ~ css', newCss)
	fs.writeFile(path.join(__dirname, './index.css'), newCss, err => {
		if (err) {
			console.log(err)
		}
	})
})
