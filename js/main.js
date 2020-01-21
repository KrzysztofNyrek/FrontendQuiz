"use strict"

//Variables definitions
let answerButton = document.querySelector(".button--js");
let AnswerBox = document.querySelector(".answer-box--js");
let answerBoxText = document.querySelector(".answer-box__text--js");
let finalResultBox = document.querySelector(".final-result--js");
let partScoreDisplay = document.querySelector(".answer-box__score--js");
let finalScoreDisplay = document.querySelector(".final-result__score--js");
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
    sessionStorage.setItem("QuestionHistory", '');
    totalQuestionNumber =0;
  });
}else if (totalQuestionNumber >10){
  sessionStorage.setItem("QuestionHistory", '');
  sessionStorage.setItem("SessionTotalQuestion", 0);
  sessionStorage.setItem("SessionTotalScore", 0);
  totalQuestionNumber =0;
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
let question4 = new Question('Jaki znacznik HTML pozwala bez użycia CSS dopasować rozmiar obrazu do wymiaru ekranu?', 'img', 'iframe', 'source srcset', 3);
let question5 = new Question('Czy jednostka REM odnosi się do wartości czcionki:', 'rodzica', 'root\'a', 'domyślnej wielkości czcionki w systemie', 2);
let question6 = new Question('Czy w Java Script można podać jako parametr funkcji inną funkcję?', 'Tak', 'Nie', 'Nie wiem', 1);
let question7 = new Question('Czy zmienna let zadeklarowana w ciele funkcji będzie dostępna poza tą funkcją?', 'Tak', 'Nie', 'Nie wiem', 2);
let question8 = new Question('W celu porównania danych wraz z ich typem należy użyć znaku:', '==', '$==', '===', 3);
let question9 = new Question('Promise w Java Script pozwala na:', 'deklarowanie zmiennych w dowolnym miejscu w kodzie', 'przesyłanie danych z formularza na serwer', 'pozwala sterować przepływem kodu asynchronicznego', 3);
let question10 = new Question('Właściwość will-change w CSS pozwala na:', 'zmodyfikowanie elementu na stronie przez użytkownika', 'informuje przeglądarkę, że dany element będzie się zmieniał', 'zmodyfikowanie danego elementu CSS przez JavaScript', 2);
let question11 = new Question('Co to znaczy, że kod jest asynchroniczny?', 'przeglądarka może wykonywać część kodu w tle', 'część kodu napisana jest w Java Script, a część w React', 'kod wykona się w odwrotnej kolejności', 1);
let question12 = new Question('Ternary operator to:', 'operator nadpisujący wartość poprzednią', 'uproszczony zapis wyrażenia warunkowego if', 'operator terminowo wyłączający wskazany blok kodu', 2);
let question13 = new Question('Czy dane zawarte w local Storage zostaną usunięte, kiedy użytkownik wyczyści ciasteczka z przeglądarki?', 'Tak', 'Nie', 'Nie wiem', 2);
let question14 = new Question('<script> możemy wpiąc w HTML:', 'tylko w sekcji HEAD', 'tylko na końcu sekcji BODY', 'w obu miejscach', 3);
let question15 = new Question('\'git checkout\' służy do:', 'sprawdzenia stanu repozytorium', 'sprawdzenia połączenia z serwerem', 'zmiany gałęzi kodu', 3);
let question16 = new Question('Do czego służy CSS Sprites?', 'do łączenia wielu plików css w jeden plik', 'do łączenia wielu plików graficznych w jeden plik', 'do łączenia wielu plików JS w jeden plik', 2);
let question17 = new Question('\'Git log --oneline <TAG>\' wykona następującą akcję:', 'doda TAG do ostatniego commita będącego na serwerze', 'wyświetli log commita oznaczonego wskazanym tagiem', 'wyświetli historię od commita zaznaczonego wskazanym tagiem', 3);
let question18 = new Question('\'gitk\' wywoła','consolę git\'a', 'narzędzie do przeglądania historii projektu', 'narzędzie do komunikacji z serwerem', 2);
let question19 = new Question('Flex-basis pozwala określić:', 'maksymalny rozmiar elementu', 'położenie obiektu w kontenerze', 'domyślne ułożenie elementu względem innych elementów', 1);
let question20 = new Question('Typ input radiobutton pozwala na:', 'wybranie dwóch elementów z listy', 'wybranie losowego elementu z listy', 'wybranie tylko jednego elementu z listy', 3);

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
  randomNumber = Math.round(Math.random() * 19);
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
    randomNumber = Math.round(Math.random() * 19);
    testValue = 0;
    for (i=0; i<questionStorageNbr.length; i++){
      if(randomNumber === questionStorageNbr[i]){
        testValue = -1;
      }
    }
    i += 1;
  } while (testValue < 0 && i < 10);
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
  case 4:
    question.textContent = question5.questionValue;
    ans1.textContent = question5.answer1;
    ans2.textContent = question5.answer2;
    ans3.textContent = question5.answer3;
    correctAnswerNumber = question5.correctAnswer;
  break;
  case 5:
    question.textContent = question6.questionValue;
    ans1.textContent = question6.answer1;
    ans2.textContent = question6.answer2;
    ans3.textContent = question6.answer3;
    correctAnswerNumber = question6.correctAnswer;
  break;
  case 6:
    question.textContent = question7.questionValue;
    ans1.textContent = question7.answer1;
    ans2.textContent = question7.answer2;
    ans3.textContent = question7.answer3;
    correctAnswerNumber = question7.correctAnswer;
  break;
  case 7:
    question.textContent = question8.questionValue;
    ans1.textContent = question8.answer1;
    ans2.textContent = question8.answer2;
    ans3.textContent = question8.answer3;
    correctAnswerNumber = question8.correctAnswer;
  break;
  case 8:
    question.textContent = question9.questionValue;
    ans1.textContent = question9.answer1;
    ans2.textContent = question9.answer2;
    ans3.textContent = question9.answer3;
    correctAnswerNumber = question9.correctAnswer;
  break;
  case 9:
    question.textContent = question10.questionValue;
    ans1.textContent = question10.answer1;
    ans2.textContent = question10.answer2;
    ans3.textContent = question10.answer3;
    correctAnswerNumber = question10.correctAnswer;
  break;
  case 10:
    question.textContent = question11.questionValue;
    ans1.textContent = question11.answer1;
    ans2.textContent = question11.answer2;
    ans3.textContent = question11.answer3;
    correctAnswerNumber = question11.correctAnswer;
  break;
  case 11:
    question.textContent = question12.questionValue;
    ans1.textContent = question12.answer1;
    ans2.textContent = question12.answer2;
    ans3.textContent = question12.answer3;
    correctAnswerNumber = question12.correctAnswer;
  break;
  case 12:
    question.textContent = question13.questionValue;
    ans1.textContent = question13.answer1;
    ans2.textContent = question13.answer2;
    ans3.textContent = question13.answer3;
    correctAnswerNumber = question13.correctAnswer;
  break;
  case 13:
    question.textContent = question14.questionValue;
    ans1.textContent = question14.answer1;
    ans2.textContent = question14.answer2;
    ans3.textContent = question14.answer3;
    correctAnswerNumber = question14.correctAnswer;
  break;
  case 14:
    question.textContent = question15.questionValue;
    ans1.textContent = question15.answer1;
    ans2.textContent = question15.answer2;
    ans3.textContent = question15.answer3;
    correctAnswerNumber = question15.correctAnswer;
  break;
  case 15:
    question.textContent = question16.questionValue;
    ans1.textContent = question16.answer1;
    ans2.textContent = question16.answer2;
    ans3.textContent = question16.answer3;
    correctAnswerNumber = question16.correctAnswer;
  break;
  case 16:
    question.textContent = question17.questionValue;
    ans1.textContent = question17.answer1;
    ans2.textContent = question17.answer2;
    ans3.textContent = question17.answer3;
    correctAnswerNumber = question17.correctAnswer;
  break;
  case 17:
    question.textContent = question18.questionValue;
    ans1.textContent = question18.answer1;
    ans2.textContent = question18.answer2;
    ans3.textContent = question18.answer3;
    correctAnswerNumber = question18.correctAnswer;
  break;
  case 18:
    question.textContent = question19.questionValue;
    ans1.textContent = question19.answer1;
    ans2.textContent = question19.answer2;
    ans3.textContent = question19.answer3;
    correctAnswerNumber = question19.correctAnswer;
  break;
  case 19:
    question.textContent = question20.questionValue;
    ans1.textContent = question20.answer1;
    ans2.textContent = question20.answer2;
    ans3.textContent = question20.answer3;
    correctAnswerNumber = question20.correctAnswer;
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
