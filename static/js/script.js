function ageInDays() {
  var birthYear = prompt("Que ano você nasceu?");
  var ageInDays = (2021 - birthYear) * 365;
  var h1 = document.createElement("h1");
  var textAnswer = document.createTextNode(
    "Você tem " + ageInDays + " dias de vida."
  );
  h1.setAttribute("id", "ageInDays");
  h1.appendChild(textAnswer);
  document.getElementById("flex-box-result").appendChild(h1);
}

function reset() {
  document.getElementById("ageInDays").remove();
}

//Challenge 2: Cat Generator
function generateCat() {
  var image = document.createElement("img");
  var div = document.getElementById("flex-cat-gen");
  image.src =
    "http://thecatapi.com/api/images/get?fortmat=src&type=gif&size=small";
  div.appendChild(image);
}

//Challenge 3: Pedra Papel Tesoura
function rpsGame(yourChoice) {  
  var humanChoice, botChoice;
  humanChoice = yourChoice.id;

  botChoice = numberToChoice(randToRpsInt());
  console.log("Você escolheu: ", yourChoice.id);
  console.log("Computador escolheu: ", botChoice);
  
  results = decideWinner(humanChoice, botChoice); //[0,1] human lost | bot won, for exemple
  console.log(results);

  message = finalMessage(results); // {'message' : 'Você venceu', 'color' : 'green'}
  console.log(message);
  rpsFrontEnd(yourChoice.id, botChoice, message);
}

function randToRpsInt() {
  return Math.floor(Math.random() * 3);
}

function numberToChoice(number) {
  return ["pedra", "papel", "tesoura"][number];
}

function decideWinner(yourChoice, computerChoice) {
  var rpsDatabase = {
    'pedra': { 'tesoura': 1, 'pedra': 0.5, 'papel': 0 },
    'papel': { 'pedra': 1, 'papel': 0.5, 'tesoura': 0 },
    'tesoura': { 'papel': 1, 'tesoura': 0.5, 'pedra': 0 },
  };

  var yourScore = rpsDatabase[yourChoice][computerChoice];
  var computerScore = rpsDatabase[computerChoice][yourChoice];

  return [yourScore, computerScore];
}

function finalMessage([yourScore, computerScore]) {
  if(yourScore === 0){
    return {'message': 'Você perdeu!', 'color' : 'red'};  
  } else if (yourScore === 0.5) { 
    return  {'message' : 'Você empatou!', 'color' : 'yellow'};
  }else{
    return  {'message': 'Você venceu!', 'color': 'green'};
  }
}

function rpsFrontEnd(humanImageChoice, botImageChoice, finalMessage) {
  var imagesDataBase = {
    'pedra' : document.getElementById('pedra').src,
    'papel' : document.getElementById('papel').src,
    'tesoura' : document.getElementById('tesoura').src
  }

  // lets remove all the images
  document.getElementById('pedra').remove();
  document.getElementById('papel').remove();
  document.getElementById('tesoura').remove();


  var humanDiv = document.createElement('div');
  var botDiv = document.createElement('div');
  var messageDiv = document.createElement('div');

  humanDiv.innerHTML = "<img src='" + imagesDataBase[humanImageChoice] + "' heigth=150 width=150 style='box-shadow: 0px 10px 50px rgba(37, 50, 233,1);'>";
  messageDiv.innerHTML = "<h1 style='color: " + finalMessage['color'] + "; font-size: 3rem; padding: 2rem; '>" + finalMessage['message'] + "</h1>";
  botDiv.innerHTML = "<img src='" + imagesDataBase[botImageChoice] + "' heigth=150 width=150 style='box-shadow: 0px 10px 50px rgba(243, 38, 24,1);'>";

  document.getElementById('flex-box-rps-div').appendChild(humanDiv);
  document.getElementById('flex-box-rps-div').appendChild(messageDiv);
  document.getElementById('flex-box-rps-div').appendChild(botDiv);


}

var all_buttons = document.getElementsByTagName('button');
console.log(all_buttons);

var copyAllButtons = [];
for (let i=0; i<all_buttons.length; i++){
  copyAllButtons.push(all_buttons[i].classList[1]); // acess second class
}

function buttonColorChange(buttonThingy) {
  if(buttonThingy.value === 'red'){
    buttonsRed();
  } else if (buttonThingy.value === 'green'){
    buttonsGreen();
  } else if (buttonThingy.value === 'reset'){
    buttonColorReset();
  } else if (buttonThingy.value === 'random'){
    randomColors();
  }
}

function buttonsRed() {
  for(let i=0; i < all_buttons.length; i++){
    all_buttons[i].classList.remove(all_buttons[i].classList[1]);
    all_buttons[i].classList.add('btn-danger');
  }
}

function buttonsGreen() {
  for(let i=0; i < all_buttons.length; i++){
    all_buttons[i].classList.remove(all_buttons[i].classList[1]);
    all_buttons[i].classList.add('btn-success');
  }
}

function buttonColorReset() {
  for (let i=0; i < all_buttons.length; i++) {
    all_buttons[i].classList.remove(all_buttons[i].classList[1]);
    all_buttons[i].classList.add(copyAllButtons[i]);
  }
}

function randomColors() {
  let choices =['btn-primary', 'btn-danger', 'btn-success', 'btn-warning']

  for (let i=0; i < all_buttons.length; i++){
  let randomNumber = Math.floor(Math.random() * 4);
  all_buttons[i].classList.remove(all_buttons[i].classList[1]);
  all_buttons[i].classList.add(choices[randomNumber]);
}
}



  