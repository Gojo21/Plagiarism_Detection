

const userInput = document.querySelector('input')
const btn = document.querySelector('button')
const resultOutput= document.querySelector('.plagPercent')
const inputText = userInput.value;
const checksource=()=>{
//inputText = userInput.value;
	fetch('https://plagiarism-source-checker-with-links.p.rapidapi.com/data', {
		method: 'POST',
		headers: {
			'content-type': 'application/x-www-form-urlencoded',
			'X-RapidAPI-Key': '59e4555677mshae39f6a463553fap1d7df8jsn40b5818ebee1',
			'X-RapidAPI-Host': 'plagiarism-source-checker-with-links.p.rapidapi.com'
		},
		body: new URLSearchParams({
			text: `{inputText}`,
		})
	})
	.then(response=>response.text())
	.then(response=>console.log(response))
    .catch (error=>console.log(error));
}
btn.addEventListener('click',checksource)