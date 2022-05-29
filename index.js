// Other option i plan to implement:
// css class
// radio input - problem value

const submit_btn = document.getElementById("submitBtn");
const ratingState = document.getElementById("ratingState");
const thankyouState = document.getElementById("thankyouState");
const output = document.getElementById("output");
const btn = document.getElementsByClassName("ratingBtn");

submit_btn.addEventListener("click", () => {
	let rating_selected;

	ratingState.style.display = "none";
	thankyouState.style.display = "flex";

	for (const opt of btn) {
		if (opt.checked) {
			rating_selected = opt.value;
			output.innerText = rating_selected;
		}
	}
});
