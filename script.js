let myString = "abcba";
let button = document.getElementById("button");
let palindrome = document.getElementById("palindrome");
let anagram = document.getElementById("anagram");
let wordCount = document.getElementById("wordCount");
let maxCharacter = document.getElementById("maxCharacter");

//palindrome checker
function palindromeChecker(myString) {
    myString = myString.toLowerCase().split(" ").join("");
    let length = myString.length;

    for (let i = 0; i < length / 2; i++) {
        if (myString[i] !== myString[length - 1 - i]) {
            return false;
        }
    }
    return true;
}

function showPalindrome() {
    if (palindromeChecker(myString))
        palindrome.textContent = "Yes";
    else
        palindrome.textContent = "No";
}

//anagram creation
function getRandomInt(n) {
    return Math.floor(Math.random() * n);
}

function showAnagram(myString) {

    myString = myString.toLowerCase();
    let arr = myString.split('');
    let n = arr.length;

    for (let i = 0; i < n - 1; ++i) {
        let j = getRandomInt(n);

        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }

    let newAnagram = arr.join('');
    anagram.textContent = `${newAnagram}`;
}

//counter of words
function showCount(myString) {

    let arr = myString.split(' ');
    wordCount.textContent = `${arr.length}`;
}

//counter of maximum occuring character
function maxOccChar(myString) {
    myString = myString.toLowerCase().split(" ").join("");
    let charCounts = {};
    let maxChar = "";
    for (let i = 0; i < myString.length; i++) {
        let char = myString[i];
        if (!charCounts[char]) {
            charCounts[char] = 0;
        }
        charCounts[char]++;
        if (maxChar == '' || charCounts[char] > charCounts[maxChar]) {
            maxChar = char;
        }
    }
    maxCharacter.textContent = `"${maxChar}", occurs ${charCounts[maxChar]} time(s)`;
}

// When button clicked
button.addEventListener("click", function () {
    myString = document.getElementById("input").value;
    showPalindrome();
    showAnagram(myString);
    showCount(myString);
    maxOccChar(myString);
});