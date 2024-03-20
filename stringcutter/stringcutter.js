//this program will accept a sentence (string) as an input and separate it into individual words
//short, to help me cut and interpret user input

let sentence = "This is an example of a sentence"; //seven words in this sentence

let wordsArray = sentence.split(" "); //split the sentence into an array based on the " " delimiter

console.log(wordsArray.length); //show length of the array, should match the number of words in the sentence

//for each word in the array, print the word
for(let i = 0; i < wordsArray.length; i++){
    console.log(wordsArray[i]);
}

