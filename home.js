
const userInput = document.querySelector('input')
const btn = document.querySelector('button')
const resultOutput= document.querySelector('.plagPercent')

let param = userInput.value;
const url = 'https://plagiarism-checker-and-auto-citation-generator-multi-lingual.p.rapidapi.com/plagiarism';
const options = {
	method: 'POST',
	headers: {
		'content-type': 'application/json',
		'X-RapidAPI-Key': '59e4555677mshae39f6a463553fap1d7df8jsn40b5818ebee1',
		'X-RapidAPI-Host': 'plagiarism-checker-and-auto-citation-generator-multi-lingual.p.rapidapi.com'
	},
	body: {
		text: '${param}',
		language: 'en',
		includeCitations: false,
		scrapeSources: false
	}
};
async function getPlagData(){
    try {
        const response = await fetch(url,options)
        if (!response.ok) {
            throw new Error(`Getting error: ${response}`);
        }
        
        const result = await response.text();
		
        resultOutput.innerHTML =JSON.parse(result).percentPlagiarism;
    } catch (err) {
        console.log(err);
    }
    }
    
btn.addEventListener('click',getPlagData)



