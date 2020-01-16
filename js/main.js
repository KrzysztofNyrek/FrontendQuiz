"use strict"


//Variables definitions
let totalScore = JSON.parse(sessionStorage.getItem("SesionTotalScore"));
let answerButton = document.querySelector(".button--js");
let correctAnswerBox = document.querySelector(".correct-answer--js");
let wrongAnswerBox = document.querySelector(".wrong-answer--js");
let finalResultBox = document.querySelector(".final-result--js");
let partScoreDisplay = document.querySelector(".box-score--js");
let moveOnButton = document.querySelector(".box-button--js");
let temporaryAnswer = JSON.parse(sessionStorage.getItem("TemporaryAnswer")); //keep value true/false to load correctAnswerBox or wrongAnswerBox

if(totalScore === null){
  sessionStorage.setItem("SesionTotalScore", 0);
}
//Used sesion storage to keep Total number of question
let totalQuestionNumber = JSON.parse(sessionStorage.getItem("SesionTotalQuestion"));

if(totalQuestionNumber === null){
  sessionStorage.setItem("SesionTotalQuestion", 0);

}else if(totalQuestionNumber >0 && totalQuestionNumber <10 && temporaryAnswer == 1){
  correctAnswerBox.classList.remove('correct-answer--visible');
  partScoreDisplay.textContent = totalScore;
  moveOnButton.addEventListener('click', (e) =>{
    correctAnswerBox.classList.add('correct-answer--visible');
  });

}else if(totalQuestionNumber == 10){
  alert('Koniec testu');
  sessionStorage.setItem("SesionTotalQuestion", 0);
  sessionStorage.setItem("SesionTotalScore", 0);
}

//Question storage section
function Question(questionValue, answer1, answer2, answer3, correctAnswer, correctAnswerMessage, wrongAnswerMessage){
  this.questionValue = questionValue;
  this.answer1 = answer1;
  this.answer2 = answer2;
  this.answer3 = answer3;
  this.correctAnswer = correctAnswer;
  this.correctAnswerMessage = correctAnswerMessage;
  this.wrongAnswerMessage = wrongAnswerMessage;
}

let question1 = new Question('Czy JS jest super?', 'Tak', 'Nie', 'Nie wiem', 1, 'Masz rację, otrzymujesz 1 punkt.', 'Niestety nie. Prawidłowa odpowiedź brzmi: JS jest super');

let question2 = new Question('Jak wyśrodkować element na stronie?', 'margin: 0 auto', 'text-adjusting: center', 'div: center', 2, 'Masz rację, otrzymujesz 1 punkt.', 'Niestety nie. Prawidłowa odpowiedź brzmi: margin: 0 auto');

//Build question section
let randomNumber = Math.round(Math.random() * 1);
let question = document.querySelector(".question--js");
let ans1 = document.querySelector(".answer__choice1--js");
let ans2 = document.querySelector(".answer__choice2--js");
let ans3 = document.querySelector(".answer__choice3--js");
let correctAnswerNumber;

//Question select
switch (randomNumber){
  case 0:
    question.textContent = question1.questionValue;
    ans1.textContent = question1.answer1;
    ans2.textContent = question1.answer2;
    ans3.textContent = question1.answer3;
    correctAnswerNumber = question1.correctAnswer;
    break;
  case 1:
    question.textContent = question2.questionValue;
    ans1.textContent = question2.answer1;
    ans2.textContent = question2.answer2;
    ans3.textContent = question2.answer3;
    correctAnswerNumber = question2.correctAnswer;
  break;
};
//Answer service

answerButton.addEventListener('click', (e) =>{
  
  //Increas number of question
  totalQuestionNumber += 1;
  sessionStorage.setItem('SesionTotalQuestion', totalQuestionNumber);

  //Checked if answer is good and added point if so
  let answerValue = document.querySelector('input[name="answerX"]:checked').value;
  if (answerValue == correctAnswerNumber){
    totalScore += 1;
    sessionStorage.setItem('SesionTotalScore', totalScore);
    sessionStorage.setItem('TemporaryAnswer', 1);
  }
});
