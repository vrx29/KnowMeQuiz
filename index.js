const readline = require('readline-sync');

const chalk = require('chalk');

var username = readline.question(chalk.bgBlueBright("What is your name ? "));
console.log("----------------------------------------");
console.log(chalk.blue.bold("Welcome " + chalk.red.underline(username) +" Let's see How Well Do You Know Me"));
console.log("----------------------------------------");
var score = 0;

var highScore = [
  {
    name : "Vineet",
    score : 5
  }
]

var questions = [
  {
    question : "What is my name ? ",
    answer : "vineet"
  },
  {
    question : "Where Am I From ? ",
    answer : "UP"
  },
  {
    question : "What is my age ? ",
    answer : "23"
  },
  {
    question : "What is my favourite food ? ",
    answer : "Pizza"
  },
  {
    question : "What is my favourite sport ? ",
    answer : "Cricket" 
  }
]

function play(question, answer){
  var userAnswer = readline.question(chalk.blue.bold(question))
  if(userAnswer.toUpperCase() === answer.toUpperCase()){
    score += 1;
    console.log(chalk.green.bold("Correct :-) "))
  } else {
    console.log(chalk.red.bold("Wrong :-("))
  }
  console.log(chalk.green.bold("Current Score is -> "+ score));
}

for(var i = 0; i < questions.length; i++){
  var currentQuestion = questions[i];
  play(currentQuestion.question,currentQuestion.answer);
  console.log("------------------------------");
}

console.log(chalk.green.bold("Your Final Score is -> "+score));

console.log("------------------------------------------------");

console.log("Checkout the Top Scores")

for(var i = 0; i < highScore.length; i++){
  console.log(highScore[i].name + "-> " + highScore[i].score);
}