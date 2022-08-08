
//1) Sum Zero
function addToZero(array) {
    for (let i = 0; i < array.length; i++)
        for (let j = 0; j < array.length; j++) {
            if (array[i] + array[j] === 0) {
                return true;
            }
        }

    return false
}

console.log(addToZero([]));
console.log(addToZero([1]));
console.log(addToZero([1, 2, 3]));
console.log(addToZero([1, 2, 3, -2]));

//Run time - O(n2) - O (n square)

//2) Unique Characters

function hasUniqueChars(str) {
    let uniqueStr = ""
  
    for (let i = 0; i < str.length; i++) {
      if (uniqueStr.includes(str[i])) {
        return false
      } else {
        uniqueStr += str[i]
      }
    }
    return true
  }
console.log(hasUniqueChars("Monday"));
console.log(hasUniqueChars("Moonday"));

//Run time O(n)
  



//3) Pangram Sentence

function isPangram (input){
    input = input.toLowerCase()
    let alphabet = "abcdefghijklmnopqrstuvwxyz";
    for (let i =0 ;i < alphabet.length; i++){
        let found = input.indexOf(alphabet[i])
        if(found == -1){
            return false 
        }
    }
    return true
}

console.log(isPangram("The quick brown fox jumps over the lazy dog!"));
console.log(isPangram("I like cats, but not mice"));


// Run time O(1), given that it will only run for all alhabets

//4) Longest Word

function findLongestWord(words){
 let longestWord = words.sort(function(a, b) { 
        return b.length - a.length;
      });
      return longestWord[0].length;
}
console.log(findLongestWord(["hi", "hello"]));

// Runtime : 𝑂(𝑛log𝑛) sort alogrithm runtime
 