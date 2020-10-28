'use strict';

// brings in the assert module for unit testing
const assert = require('assert');
// brings in the readline module to access the command line
const readline = require('readline');
// use the readline module to print out to the command line
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});



const pigLatin = (str) => {
  
  str=str.toLowerCase().trim();
  
  
  
  if (str.includes(" ")) {
    
     let arr = str.split(" ")
     console.log(arr)
      let map1
      let arr2 = []
      map1 = arr.map(x => {
        
      // for words that start with a vowel:
      if (["a", "e", "i", "o", "u"].indexOf(x[0]) > -1) {
         x=x+"yay";
         arr[x] = x+"yay"
         
         
      }
  
      // for words that start with one or more consonants
     else {
     //check for multiple consonants
         for (let i = 0; i<x.length; i++){
             if (["a", "e", "i", "o", "u"].indexOf(x[i]) > -1){
                 let firstcons = x.slice(0, i);
                 let middle = x.slice(i, x.length);
                 x = middle+firstcons+"ay";
                arr2.push(x)
                 break;}
                 
                 
              }
              
     }
     
     });
     
    return arr2.join(" ")
  
  }
  
  else {
    
    // for words that start with a vowel:
      if (["a", "e", "i", "o", "u"].indexOf(str[0]) > -1) {
          return str=str+"yay";
      }
  
      // for words that start with one or more consonants
     else {
     //check for multiple consonants
         for (let i = 0; i<str.length; i++){
             if (["a", "e", "i", "o", "u"].indexOf(str[i]) > -1){
                 let firstcons = str.slice(0, i);
                 let middle = str.slice(i, str.length);
                 str = middle+firstcons+"ay";
                 break;}
              }
      return str;}
  }
      
  
  }
  

// the first function called in the program to get an input from the user
// to run the function use the command: node main.js
// to close it ctrl + C
const getPrompt = () => {
  rl.question('word ', (answer) => {
    console.log( pigLatin(answer) );
    getPrompt();
  });
}

// Unit Tests
// You use them run the command: npm test main.js
// to close them ctrl + C
if (typeof describe === 'function') {

  describe('#pigLatin()', () => {
    it('should translate a simple word', () => {
      assert.equal(pigLatin('car'), 'arcay');
      assert.equal(pigLatin('dog'), 'ogday');
    });
    it('should translate a complex word', () => {
      assert.equal(pigLatin('create'), 'eatecray');
      assert.equal(pigLatin('valley'), 'alleyvay');
    });
    it('should attach "yay" if word begins with vowel', () => {
      assert.equal(pigLatin('egg'), 'eggyay');
      assert.equal(pigLatin('emission'), 'emissionyay');
    });
    it('should lowercase and trim word before translation', () => {
      assert.equal(pigLatin('HeLlO '), 'ellohay');
      assert.equal(pigLatin(' RoCkEt'), 'ocketray');
    });
    it('should translate multiple words', () => {
      assert.equal(pigLatin('pig latin'), 'igpay atinlay');
      assert.equal(pigLatin('big penis'), 'igbay enispay');
    });
  });
} else {

  getPrompt();

}






// **********
//   HINTS
// **********

// break your code into pieces and focus on one piece at a time...
// 1. if word begins with a vowel send to one function: adds "yay"
// 2. if word begins in with a consonant send to another function: splices off beginning, returns word with new ending.
// 3. if multiple words, create array of words, loop over them, sending them to different functions and creating a new array with the new words.