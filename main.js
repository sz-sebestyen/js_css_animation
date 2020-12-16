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

	for (const it of arr) {

		const e = document.createElement(it.tag);
		console.log(e);

		e.insertAdjacentHTML("beforeend", it.content);
		root.insertAdjacentElement("beforeend", e);
/* 
		root.insertAdjacentHTML("beforeend", `
			<${it.tag}>${it.content}</${it.tag}>
		`); */

		//console.log(it.tag);
	}

	

}

window.addEventListener("load", _load);
