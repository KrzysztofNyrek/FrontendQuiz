"use strict"

//Variables definitions
let answerButton = document.querySelector(".button--js");
let AnswerBox = document.querySelector(".answer-box--js");
let answerBoxText = document.querySelector(".answer-box__text--js");
let finalResultBox = document.querySelector(".final-result--js");
let partScoreDisplay = document.querySelector(".answer-box__score--js");
let finalScoreDisplay = document.querySelector(".final__score--js");
let moveOnButton = document.querySelector(".answer-box__button--js");
let finalButton = document.querySelector(".final-result__button--js");

let finalyComment = document.querySelector(".final-result__summary--js");

//Used session storage to avoid losing data when browser refreshing page
let totalScore = JSON.parse(sessionStorage.getItem("SessionTotalScore"));
let temporaryAnswer = JSON.parse(sessionStorage.getItem("TemporaryAnswer")); //keep value true/false to load AnswerBox or wrongAnswerBox
let totalQuestionNumber = JSON.parse(sessionStorage.getItem("SessionTotalQuestion"));

// Set Session Total Score variable in session storage
if(totalScore === null){
  sessionStorage.setItem("SessionTotalScore", 0);
}
//Check if it's first round or another round and display popup box 
if(totalQuestionNumber === null){
  sessionStorage.setItem("SessionTotalQuestion", 0);

}else if(totalQuestionNumber >0 && totalQuestionNumber <10){
  AnswerBox.classList.remove('answer-box--visible');
  
    if(temporaryAnswer === 1){
      answerBoxText.textContent = "Świetna odpowiedź";
    }else{
      answerBoxText.textContent = "Następnym razem pójdzie Ci lepiej ;)"
    }
  partScoreDisplay.textContent = totalScore;
  moveOnButton.addEventListener('click', (e) =>{
    AnswerBox.classList.add('answer-box--visible');
  });
//Display final result box
}else if(totalQuestionNumber === 10){
  finalResultBox.classList.remove('final-result--visible');

  if(totalScore < 5){
    finalyComment.textContent ="Jeśli poćwiczysz jeszcze trochę, na pewno będziesz znał odpowiedź na większość pytań";
  }else if (totalScore >= 5 && totalScore < 8){
    finalyComment.textContent = "Już prawie wiesz wszystko :)";
  }else{
    finalyComment.textContent = "Jesteś super FrontEnd HERO";
  }
  finalScoreDisplay.textContent = totalScore;
  //Refresh page to delete all session storage
  finalButton.addEventListener('click', (e) =>{
    finalResultBox.classList.add('final-result--visible');
    sessionStorage.setItem("SessionTotalQuestion", 0);
    sessionStorage.setItem("SessionTotalScore", 0);
    window.location.reload(false);
  });
}

//Question storage section
function Question(questionValue, answer1, answer2, answer3, correctAnswer, correctAnswerMessage, wrongAnswerMessage){
  this.questionValue = questionValue;
  this.answer1 = answer1;
  this.answer2 = answer2;
  this.answer3 = answer3;
  this.correctAnswer = correctAnswer;
}
//Question value
let question1 = new Question('Czy JS jest super?', 'Tak', 'Nie', 'Nie wiem', 1);
let question2 = new Question('Jak wyśrodkować div na stronie?', 'margin: 0 auto', 'text-adjusting: center', 'div: center', 1);
let question3 = new Question('Jaką wartość box-sizing trzeba ustawić w CSS, żeby padding nie powiększył wymiarów box\'a', 'content-box', 'border-box', 'inherit', 2);
let question4 = new Question('Jaki znacznik HTML pozwala bez użycia CSS dopasować rozmiar obrazu do wymiaru ekranu?', 'img', 'iframe', 'picture', 3);

//Variables definitions
let question = document.querySelector(".question--js");
let ans1 = document.querySelector(".answer__choice1--js");
let ans2 = document.querySelector(".answer__choice2--js");
let ans3 = document.querySelector(".answer__choice3--js");
let correctAnswerNumber;
let randomNumber;
let questionStorage;
let questionStorageLength;
let questionStorageNbr = [];
let testValue;
let questionStr;
let questionNumber;
let questionHistory = sessionStorage.getItem("QuestionHistory");

//Question pick mechanism
if(questionHistory === null){
  randomNumber = Math.round(Math.random() * 3);
  sessionStorage.setItem("QuestionHistory", randomNumber);
  
}else{
  questionStorage = questionHistory.split(",");
  let i = 0;
  questionStorageLength = questionStorage.length;

    for (i=0; i < questionStorageLength; i++){
      questionStr = questionStorage[i];
      questionNumber = Number(questionStr);
      questionStorageNbr.push(questionNumber);
    }
  //Check if question appeared in current quiz earlier and if so change the question number
  do{
    randomNumber = Math.round(Math.random() * 3);
    testValue = 0;
    for (i=0; i<questionStorageNbr.length; i++){
      if(randomNumber === questionStorageNbr[i]){
        testValue = -1;
      }
    }
    i += 1;
  } while (testValue < 0 && i < 5);
  questionStorageNbr.push(randomNumber);
  sessionStorage.setItem("QuestionHistory", questionStorageNbr);
}
//Push question value to the browser
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
  case 2:
    question.textContent = question3.questionValue;
    ans1.textContent = question3.answer1;
    ans2.textContent = question3.answer2;
    ans3.textContent = question3.answer3;
    correctAnswerNumber = question3.correctAnswer;
  break;
  case 3:
    question.textContent = question4.questionValue;
    ans1.textContent = question4.answer1;
    ans2.textContent = question4.answer2;
    ans3.textContent = question4.answer3;
    correctAnswerNumber = question4.correctAnswer;
  break;
};

//Send answer and count points
answerButton.addEventListener('click', (e) =>{
  
  //Increas and storage number of question
  totalQuestionNumber += 1;
  sessionStorage.setItem('SessionTotalQuestion', totalQuestionNumber);

  //Checked if answer is good and added point if so
  let answerValue = document.querySelector('input[name="answerX"]:checked').value;
  if (answerValue == correctAnswerNumber){
    totalScore += 1;
    sessionStorage.setItem('SessionTotalScore', totalScore);
    sessionStorage.setItem('TemporaryAnswer', 1);
  }else{
    sessionStorage.setItem('TemporaryAnswer', 0);
  }
});
