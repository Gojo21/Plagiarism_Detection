
const userInput = document.querySelector('input')
const btn = document.querySelector('button')
const resultOutput= document.querySelector('.plagPercent')

async function checkPlagiarism(url, options) {
    try {
        const response = await fetch(url, options);
        const result = await response.text();
        console.log(result);
    } catch (error) {
        console.error(error);
    }
}

btn.addEventListener('click', () => {
    const userInput = document.querySelector('input');
    const param = userInput.value;
    const resultOutput = document.querySelector('.plagPercent');
    const url = 'https://plagiarism-source-checker-with-links.p.rapidapi.com/data';
    const options = {
        method: 'POST',
        headers: {
            'content-type': 'application/x-www-form-urlencoded',
            'X-RapidAPI-Key': '59e4555677mshae39f6a463553fap1d7df8jsn40b5818ebee1',
            'X-RapidAPI-Host': 'plagiarism-source-checker-with-links.p.rapidapi.com'
        },
        body: `${param}`
    };
    checkPlagiarism(url, options);
});