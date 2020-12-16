function _load() {
	let arr = [
		{
			tag: "h1",
			content: "Szabó Sebestyén",

		},
		{
			tag: "p",
			content: "Front-end developer",
		},
	];

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
	}

	root.addEventListener("click", function (e) {
		root.classList.toggle("clicked");
	});
	

}

window.addEventListener("load", _load);
