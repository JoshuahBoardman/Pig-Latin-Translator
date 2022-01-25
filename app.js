const form = document.getElementById("translation-form");
const input = document.getElementById("form-text-area");
const output = document.getElementById("translation-output");

function englishToPigLatin() {
    let inputToWords = input.value.split(' ');
    const wordToPigLatin = inputToWords.map(word => {
        const regex = new RegExp(/[aeiou]/i);
        let indexOfFirstVowel = word.search(regex);
        if(indexOfFirstVowel === 0){
            word = `${word}ay`
            return word;
        } else {
            let wordStart = word.substring(0, indexOfFirstVowel);
            let wordBody = word.substring(indexOfFirstVowel);
            word = `${wordBody}${wordStart}ay`;
            return word;
        }
    });
    const pigLatinString = wordToPigLatin.join(" ");
    return pigLatinString;
};

function displayPigLatin(string) {
    output.innerText = string;
}

form.addEventListener("submit", e => {
    e.preventDefault();
    
    const pigLatinString = englishToPigLatin();
    displayPigLatin(pigLatinString);
    input.value = "";
});