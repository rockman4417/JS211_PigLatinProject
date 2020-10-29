

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
       animateCSS("string-display", 'rotateIn');
      return arr2.join(" ")
    
    }
    
    else {
      
      // for words that start with a vowel:
        if (["a", "e", "i", "o", "u"].indexOf(str[0]) > -1) {
            display.innerHTML = str.toUpperCase()+"yay".toUpperCase()
            animateCSS("string-display", 'rotateIn');
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
        
        animateCSS("string-display", 'rotateIn');
        
        return str;}
    }
}

const animateCSS = (element, animation, prefix = 'animate__') =>
  // We create a Promise and return it
  new Promise((resolve, reject) => {
    const animationName = `${prefix}${animation}`;
    const node = document.getElementById(element)

    node.classList.add(`${prefix}animated`, animationName);

    // When the animation ends, we clean the classes and resolve the Promise
    function handleAnimationEnd() {
      node.classList.remove(`${prefix}animated`, animationName);
      resolve('Animation ended');
    }

    node.addEventListener('animationend', handleAnimationEnd, {once: true});
  });