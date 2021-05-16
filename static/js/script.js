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
  console.log(yourChoice);
  var humanChoice, botChoice;
  // humanChoice = humanChoice.id;
  botChoice = numberToChoice(randToRpsInt());
  alert(botChoice);
  //results = decideWinner(humanChoice, botChoice); //[0,1] human lost | bot won, for exemple
  // message = finalMessage(results); // {'message' : 'Você venceu', 'color' : 'green'}
  // rpsFront = (yourChoice.id, botChoice, message);
}

function randToRpsInt() {
  return Math.floor(Math.random() * 3);
}

function numberToChoice(number) {
  return ["rock", "paper", "scissors"][number];
}
