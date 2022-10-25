// questions variables

var  questionsIndex [
  {
    question: "What does CSS stand for?",
    choices: "Custom Style Sheet, Cool Stuff Sheet, Cascading Style Sheet, Computer Style Sheet",
    answer: "Cascading Style Sheet",
  },
  {
    question: "What Do you use to move your cursor?",
    choices: "Mouse, Stick, Keyboard, Brain",
    answer: "Mouse",
  },
  {
    question: "What does HTML mean?",
    choices: "Hypertext Markup Language, Hulahoop Maker Latte, Hovertop Mountain Loop, Hungryturbo Munchie Lips",
    answer: "Hypertext Markup Language",
  },
  {
    question: "What is the meaning of life?",
    choices: "42, Love, Food, Music",
    answer: "42"
  },
];

var timeLeft = document.querySelector('#timer');

var start = document.querySelector('#start')

var secondsLeft = 60;

start.addEventListener("click", function() {
  var timerInterval = setInterval(function() {
    secondsLeft--;
    timeEl.textContent = secondsLeft 
    if(secondsLeft === 0) {
      clearInterval(timerInterval);
    }
  }, 1000);
}