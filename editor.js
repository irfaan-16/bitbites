const html = document
	.getElementById('html')
	.nextElementSibling.querySelector('.CodeMirror-code');
const css = document
	.getElementById('css')
	.nextElementSibling.querySelector('.CodeMirror-code');
const js = document
	.getElementById('js')
	.nextElementSibling.querySelector('.CodeMirror-code');

const output = document.getElementById('output').contentWindow.document;

const generateCode = (codeContainer, e) => {
	const [...children] = codeContainer.children;
	let code = '';
	// console.log(e);
	children.forEach((codeLine) => {
		// if (codeLine.textContent.trim().length > 0) {
		code += codeLine.textContent.replace(codeLine.textContent.charAt(0), '');
		// }
	});

	console.log(code);
	return code;
};

document.body.addEventListener('keyup', () => {
	output.open();
	output.write(
		generateCode(html) +
			'<style>' +
			generateCode(css) +
			'</style>' +
			'<script>' +
			generateCode(js) +
			'</scrip' +
			't>'
	);
	output.close();
});

// const getGeneratedPageURL = ({ html, css, js }) => {
// 	const getBlobURL = (code, type) => {
// 		const blob = new Blob([code], { type });
// 		return URL.createObjectURL(blob);
// 	};

// 	const cssURL = getBlobURL(css, 'text/css');
// 	const jsURL = getBlobURL(js, 'text/javascript');

// 	const source = `
//     <html>
//       <head>
//         ${css && `<link rel="stylesheet" type="text/css" href="${cssURL}" />`}
//         ${js && `<script defer src="${jsURL}"></script>`}
//       </head>
//       <body>
//         ${html || ''}
//       </body>
//     </html>
//   `;

// 	return getBlobURL(source, 'text/html');
// };

// const url = getGeneratedPageURL({
// 	html: '<h2 id="para">Go ahead and make changes :)</h2>',
// 	css: 'h2 { color: teal; font-family:sans-serif;}',
// 	js: '',
// });

// const iframe = document.querySelector('#output');
// iframe.src = url;

// document.body.addEventListener('keyup', (e) => {
// 	let url = getGeneratedPageURL({
// 		html: generateCode(html),
// 		css: generateCode(css),
// 		js: generateCode(js,e),
// 	});
// 	iframe.src = url;
// });
