
const userInput = document.querySelector('input')
const btn = document.querySelector('button')
const resultOutput= document.querySelector('.plagPercent')



const plagcheck = () =>{
    inputText = userInput.value;
    fetch("https://plagiarism-checker-and-auto-citation-generator-multi-lingual.p.rapidapi.com/plagiarism",{
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            'X-RapidAPI-Key': '59e4555677mshae39f6a463553fap1d7df8jsn40b5818ebee1',
            'X-RapidAPI-Host': 'plagiarism-checker-and-auto-citation-generator-multi-lingual.p.rapidapi.com'
        },
        body: JSON.stringify({
            text: `${inputText}`,
            language: 'en',
            includeCitations: false,
            scrapeSources: false
        })
    })
    .then(response => {
        if(response.ok){
            console.log(response.text());
            return response.text();
        }
        else{
            throw new Error('Network response was not ok.');
        }
    })
    .then(data => {
        console.log(data);
        resultOutput.innerHTML = data;
    })
    .catch(error => console.error(error));
}
btn.addEventListener('click',plagcheck)