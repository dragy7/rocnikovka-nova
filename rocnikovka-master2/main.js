let array = [
  "Jak se nazývá automat podobný člověku",
  "Jedovatý had v Česku",
  "Co značí slovo defenziva? ",
  "Kde se udělují tituly doktor, docent, profesor?",
  "Odmocnina z 36 je ..",
  "Ve kterém roce vznikla Československá republika?",
  "Jak se jmenují plod jehličnanů?",
  "Která africká řeka je nejdelší?",
  "Co je základní jednotkou délky?",
  "Z které země pochází oblíbené mobilní telefony Nokia",
  "Který orgán v lidském těle filtruje krev a vyrábí moč?",
  "Jakým písmenem označíš římskou desítku?",
  "Které zvíře je v Indii posvátné?",
  "Jaký je český název pro ping-pong? ",
  "Kolik vrcholů má koule? ",
  
  ]


const answers = [
  "robot",
  "zmije",
  "obrana",
  "vysoká škola",
  "6",
  "1918",
  "šiška",
  "nil",
  "metr",
  "finsko",
  "ledviny",
  "x",
  "kráva",
  "stolní tenis",
  "žádný",
]


const win = [
  [4, 5, 6],
  [1, 2],
] 

const answerWindow = document.getElementById("answerWindow");
const question = document.getElementById("question");
const submit = document.getElementById("submit");
const input = document.getElementById("answer");

const hex = document.getElementsByClassName("hex");

[...hex].forEach(element => { // Projete všechny hex 
  element.onclick = () => {
    if(element.dataset.used != "true"){
      let random = Math.floor(Math.random() * 14);
      question.innerText = array[random];
    
      submit.onclick = () => {
        if(input.value == answers[random]){
          element.dataset.used = "true";
          updateHex();
          console.log("správně")
        } else {
          element.dataset.used = "wrong";
          updateHex();
        }
    }
    } else {
      alert("toto políčko bylo už odpovězeno")
    }
  }
});



let updateHex = () => {
  [...hex].forEach(element => {
    if(element.dataset.used == "true") {
      element.style.backgroundColor = "green";
    }else if(element.dataset.used == "wrong"){
      element.style.backgroundColor = "black";
    }
  });
  chceckWin();
}


const chceckWin = () => {
  let arr = [];
  let count = 0;
  [...hex].forEach(element => {
    for (let i = 0; i < win.length; i++) {
      for (let j = 0; j < win[i].length; j++) {
        const es = win[i][j];
        if(element.dataset.id == es){
          if(element.dataset.used == "true"){
            count++;
            console.log(arr)
            console.log("přidávám")
          }
        }
      }
    }
    
  });
}

chceckWin()
start.onclick = () => {
  answerWindow.style.display = "block";
  showGameArea()
  hideStartMenu()
  console.log("start button clicked")
  showzpet()
  showAnswer()
  showQuestion()
  showSubmit()
}
zpet.onclick = () => {
  answerWindow.style.display = "none";
  console.log("zpet button click")
  showStartMenu()
  hideGameArea()
  hidezpet()
  hidePravidlaText()
  hideAnswer()
  hideSubmit()
  hideQuestion()
}
pravidla.onclick = () => {
  console.log("pravidla buttno click")
  hideStartMenu()
  hideGameArea()
  showzpet()
  showPravidlaText()
  hideAnswer()
  hideQuestion()
  hideSubmit()
}

function showGameArea() {
  gameArea.style.display = "inline";
}

function hideGameArea() {
  gameArea.style.display = "none";
}

function hideStartMenu() {
  startMenu.style.display = "none";
}

function showStartMenu() {
  startMenu.style.display = "inline";
}
function hidezpet() {
  zpet.style.display = "none";
}
function showzpet() {
  zpet.style.display = "inline";
}
function showPravidlaText() {
  pravidlaText.style.display = "inline";
}
function hidePravidlaText() {
  pravidlaText.style.display = "none";
}
function hideAnswer() {
  answer.style.display = "none";
}
function showAnswer() {
  answer.style.display = "inline";
}
function showQuestion() {
  question.style.display = "inline";
}
function hideQuestion() {
  question.style.display = " none";
}
function hideSubmit() {
  submit.style.question = "none";
}
function showSubmit() {
  submit.style.display = "inline";
}

