function _load() {
	let arr = [
		{
			tag: "h1",
			content: "Szabó Sebestyén",

		},
		{
			tag: "p",
			content: "Lorem ipsum",
		},
	];
/* 
	for (let index = 0; index < array.length; index++) {
		const element = array[index];
		
	} */

	const root = document.getElementById("root");

	for (const iterator of arr) {

		root.insertAdjacentHTML("beforeend", `
			<${iterator.tag}>${iterator.content}</${iterator.tag}>
		`);

		console.log(iterator.tag);
	}

	

}

window.addEventListener("load", _load);
