// CHALLENGE 1 - ADD CODE BELOW 

function musicPlayer(songs) {
    for (let i = 0; i < songs.length; i++) {
        console.log(`Now playing: "${songs[i].songName}" by ${songs[i].artistName}`)
    }
}

musicPlayer(songs);
// UNCOMMENT THE CODE BELOW TO CHECK YOUR WORK
// You'll know you're right if the console output logs all of the songs listed below, in order. 

const songs = [
    { songName: "Toxic", artistName: "Britney Spears" },
    { songName: "Sun is Sunshine", artistName: "Bob Marley" },
    { songName: "Easy On Me", artistName: "Adele" },
    { songName: "DNA", artistName: "BTS" },
];
musicPlayer(songs); // => should log:
// Now playing: "Toxic" by Britney Spears
// Now playing: "Sun is Sunshine" by Bob Marley
// Now playing: "Easy On Me" by Adele
// Now playing: "DNA" by BTS



// CHALLENGE 2 - ADD CODE BELOW

function findOddNumbers(numbers) {
    for (let i = 0; i < numbers.length; i++) {
        if (!(numbers[i] % 2 === 0)) {
            console.log(numbers[i])
        }
    }
}


// UNCOMMENT THESE LINES TO CHECK YOUR WORK
console.log(findOddNumbers([90013, 11801, 10012, 10006, 67001]));
// => should return [90013, 11801, 67001]



// CHALLENGE 3 - ADD CODE BELOW

function capitalizeThreeLetters(word) {
    return word.toUpperCase().slice(0, 3) + word.slice(3)
}

// UNCOMMENT THESE LINES TO CHECK YOUR WORK
console.log(capitalizeThreeLetters('welcome'));
// => should return 'WELcome'
console.log(capitalizeThreeLetters('codesmith'));
// => should return 'CODesmith'


// CS PREP ADMISSIONS CHALLENGE - ADD CODE BELOW


function applyAll(arr, fn) {
    return arr.map(fn)
}
function capitalizeThreeLetters(word) {
    return word.toUpperCase().slice(0, 3) + word.slice(3)

}


// UNCOMMENT THESE LINES TO CHECK YOUR WORK
console.log(applyAll(['mai', 'brian', 'jeho', 'han'], capitalizeThreeLetters));
 // => should return ['MAI', 'BRIan', 'JEHo', 'HAN']

