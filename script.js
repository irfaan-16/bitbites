const [...runButtons] = document.querySelectorAll('.run');

runButtons.forEach((button) => {
	button.addEventListener('click', (e) => {
		const button = e.target;
		console.log();
		const code =
			button.parentElement.parentElement.querySelector('pre').textContent;
        // const lang=button.getAttributte('')
		localStorage.setItem('code', {code:JSON.stringify(code)});
		window.location.pathname = '/editor.html';
	});
});
// runButtons.addEventListener('click', (e) => {
// 	const button = e.target;
// 	const code = button.closest('pre');
// 	console.log(code);
// });
