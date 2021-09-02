//Dependencies 
var readlineSync = require('readline-sync');
const chalk = require('chalk');

//Welcome Screen
console.log(chalk.blue("Welcome to the Fandom Quiz!"));
var userName = readlineSync.question("Enter your name: ");

console.log(chalk.cyan("Welcome! " + userName + " We will play a fandom quiz about Pokemons "));

var score = 0;

//Database of Highscores
var highScores = [{
  name: "Gaurav",
  score: 5,
},
{
  name: "Sudipto",
  score: 3,
},
{
  name: "Ariyan",
  score: 3,
},
]

//Function to play Quiz
function Quiz(question,answer)
{
  var userAnswer = readlineSync.question(question);
  if (userAnswer === answer)
  {
    console.log(chalk.green("correct"));
    score++;
  }
  else
  {
    console.log(chalk.red("wrong"));
  }
  console.log("Your current score is: ", score);
  console.log("---------------");
}

//Array and List of questions
var questions = [
  {
    question: "Which pokemon is the mascot of the poke world? ",
    answer: "Pikachu",
  },
  {
    question: "What is the name of the protagonist in the Pokemon anime? ",
    answer: "Ash",
  },
  {
    question: "What is the signature move of the pokemon called Charizard? ",
    answer: "Flamethrower",
  },
  {
    question: "Who is the god of all pokemons? ",
    answer: "Arceus",
  },
  {
    question: "What is the name of the Pokemon champion in the Hoen region? ",
    answer: "Steven",
  },
]

//FOR Loop to play all questions
for(i = 0; i < questions.length; i++)
{
  Quiz(questions[i].question,questions[i].answer);
}

console.log(chalk.bgGreen("Congratulations! Your final score is " + score));
console.log("--------------------");

console.log(chalk.magenta("Following are the HIGHSCORES. Send me a screenshot of your score so that I can update it!"));
for(i = 0; i < highScores.length; i++)
{
  console.log(highScores[i].name + ": " + highScores[i].score);
}