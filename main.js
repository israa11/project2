
let wordsAll = [
  "Hello",
  "Programming",
  "Code",
  "Javascript",
  "Town",
  "Country",
  "Testing",
  "Youtube",
  "Linkedin",
  "Twitter",
  "Github",
  "Leetcode",
  "Internet",
  "Python",
  "Scala",
  "Destructuring",
  "Paradigm",
  "Styling",
  "Cascade",
  "Documentation",
  "Coding",
  "Funny",
  "Working",
  "Dependencies",
  "Task",
  "Runner",
  "Roles",
  "Test",
  "Rust",
  "Playing"

];


// Setting Levels
const lvls = {
  "Easy": 5,
  "Normal": 3,
  "Hard": 2
};


let timer;

const lvlNameSpan = document.querySelector(".message .lvl");
const secondsSpan = document.querySelector(".message .seconds");

const word = document.querySelector(".word");
const timeSpan = document.querySelector(".time span");

const inputText = document.querySelector(".text");
const upcomingWords  = document.querySelector(".words");
const playStart = document.querySelector(".start");
const totalScore = document.querySelector(".score .total");
const gotScore = document.querySelector(".score .got")
let finished = document.querySelector(".finish")
let defaultLevelName =  "Normal";
totalScore.innerText = wordsAll.length;

lvlNameSpan.innerText = defaultLevelName;
secondsSpan.innerText = lvls[defaultLevelName];

playStart.addEventListener("click", (e)=>{
e.target.remove();

inputText.focus();
displayWords()
getTime()
})


const displayWords =() => {
  upcomingWords.innerHTML =  "";
let wordRandom = wordsAll[Math.floor(Math.random() * wordsAll.length )];
word.innerText = wordRandom;

let wordIndex = wordsAll.indexOf(wordRandom)
wordsAll.splice( wordIndex , 1)

wordsAll.forEach(word=>{
const  div = document.createElement("div");
div.innerText = word;
upcomingWords.appendChild(div)
})

}

const getTime =()=>{
timeSpan.innerText = lvls[defaultLevelName];
 timer = setInterval(()=>{
  
  timeSpan.innerText -- ;
  if(timeSpan.innerText <= 0){
    clearInterval(timer)
    compaireValue();
    
  }
  }, 1000);
  
}



const compaireValue =()=>{


  if(inputText.value.toLowerCase() === word.innerText.toLowerCase()){
    inputText.value = "";
  
    gotScore.innerText ++ ;
  
    if(wordsAll.length > 0  ){
      getTime()
      displayWords()
    }
    else{
      upcomingWords.remove()
      let span = document.createElement("span");
      span.className = 'good';
      let spanText = document.createTextNode("Congratz");
      span.appendChild(spanText);
      finished.appendChild(span)
    }
    
    


   } else{
    let span = document.createElement("span");
    span.className = 'bad';
    let spanText = document.createTextNode("Game Over");
    span.appendChild(spanText);
    finished.appendChild(span)
      clearInterval(timer)
          }
}

