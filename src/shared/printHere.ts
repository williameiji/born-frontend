export default function printHere() {
	let printContents: string = document.getElementById("printablediv")
		?.innerHTML as string;
	let originalContents: string = document.body.innerHTML;
	document.body.innerHTML = printContents;

	window.print();

	document.body.innerHTML = originalContents;
}
