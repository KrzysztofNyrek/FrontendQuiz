"use strict"

//Question storage section
const question1 = {
  questionValue: 'Czy JS jest super?',
  answer1: "Tak",
  answer2: "Nie",
  answer3: "Nie wiem",
  correctAnswer: 1,
  correctAnswerMessage: 'Masz rację, ottrzymujesz 1 punkt.',
  wrongAnswerMessage: "Niestety nie. Prawidłowa odpowiedź brzmi: JS jest super"
};

const question2 = {
  questionValue: 'Jak wyśrodkować element na stronie?',
  answer1: "margin: 0 auto",
  answer2: "text-adjusting: center",
  answer3: "div: center",
  correctAnswer: 2,
  correctAnswerMessage: 'Masz rację, ottrzymujesz 1 punkt.',
  wrongAnswerMessage: "Niestety nie. Prawidłowa odpowiedź brzmi: margin: 0 auto"
};

//Build question section
let randomNumber = Math.floor(Math.random() * 1 + 1);
const question = document.querySelector(".question--js");
const ans1 = document.querySelector(".answer__choice1--js");
const ans2 = document.querySelector(".answer__choice2--js");
const ans3 = document.querySelector(".answer__choice3--js");

//Question select
switch (randomNumber){
  case 1:
    question.textContent = question1.questionValue;
    ans1.textContent = question1.answer1;
    ans2.textContent = question1.answer2;
    ans3.textContent = question1.answer3;
    break;
  case 2:
    question.textContent = question2.questionValue;
    ans1.textContent = question2.answer1;
    ans2.textContent = question2.answer2;
    ans3.textContent = question2.answer3;
  break;
};