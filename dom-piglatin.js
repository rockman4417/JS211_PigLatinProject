const pigLatin = (str) => {

    let display = document.getElementById("string-display")
    str = document.getElementById("display-element-to-string").value
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
           arr2.push(x)
           
           
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
       
       display.innerHTML = arr2.join(" ").toUpperCase()
      return arr2.join(" ")
    
    }
    
    else {
      
      // for words that start with a vowel:
        if (["a", "e", "i", "o", "u"].indexOf(str[0]) > -1) {
            display.innerHTML = str=str+"yay".toUpperCase()
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
        display.innerHTML = str.toUpperCase()
        return str;}
    }
}

