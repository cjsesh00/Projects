/**
 * Example store structure
 */
'use strict';

const STORE = {
  // 5 or more questions are required
  questions: [
    {
      id: cuid(),
      question: `What was the name of George Jetson's son on the Hanna-Barbera cartoon The Jetsons?`,
      answers: [
        'Tim',
        'Elroy',
        'George Junior',
        'Steven'
      ],
      correct: 1
    },
    
    {
      id: cuid(),
      question: `Which cartoon character's catchphrase was 'It's wabbit season and I'm hunting wabbits?`,
      answers: [
        'Elmer Fudd',
        'Wiley Coyote',
        'Yosemite Sam',
        'Fred Flintstone'
      ],
      correct:0
    },
    {
      id: cuid(),
      question: 'Yogi Bear is famous for stealing pic-a-nic baskets. Where does he live?',
      answers: [
        'Jellystone Park',
        'Big Bear State Park',
        'Happy Springs Park',
        'Furry Creek'
      ],
      correct: 0
    },
    {
      id: cuid(),
      question: `What was the name of Rocko's dog in Rocko's Modern Life?`,
      answers: [
        'Fido',
        'Spot',
        'Spunky',
        'Tex'
      ],
      correct: 2
    },
    {
      id: cuid(),
      question: `What is Spongebob and Sandy's favorite sport in Spongebob Squarepants?`,
      answers: [
        'Jellyfishing',
        'Karate',
        'Rugby',
        'Basketball'
      ],
      correct: 1
    }
  ],
  quizStarted: false,
  questionNumber: 0,
  score: 0
};

/**
 *
 * Your app should include a render() function, that regenerates
 * the view each time the store is updated. See your course
 * material, consult your instructor, and reference the slides
 * for more details.
 *
 * NO additional HTML elements should be added to the index.html file.
 *
 * You may add attributes (classes, ids, etc) to the existing HTML elements, or link stylesheets or additional scripts if necessary
 *
 */

//function buttonSelection() {
//delegates listener to radio buttons and returns input value


  //console.log('buttonSelection fired');
//}

///function displayQuestion() {
  //generates html to be used by render() displaying the current question


  //console.log('displayQuestion fired');
//}

//function submitAnswer() {
  //delegates listener to 'submit' button when user has finalized answer to question,
  //and calls answerCheck()  

  //console.log('submitAnswer fired');
//}

//function answerCheck() {
  //validates user submission vs correct 'answer' and calls answerCorrect()
  //if user answered correctly. calls displayQuestion() after validation.

  //console.log('answerCheck has fired');
//}

//function answerCorrect() {
  //updates 'score' in 'DATA'
    //STORE.score ++;

  //console.log('answerCorrect fired');
//}




/******************* TEMPLATE GENERATION FUNCTIONS *******************/
// These functions return HTML templates
function generateStartScreenHtml(){
  return `
  <div class = "start-screen">
  <h1>How well do you know your favorite cartoon characters</h1>
  <button type="button" id="start">Start Quiz</button>
  <div>
  `;
}

function generateQuestionNumberAndScoreHtml() {
  return `
  <ul class="question and score">
    <li id="question-number">
      Question Number: ${STORE.currentQuestion + 1}/${STORE.questions.length}
    </li>
    <li id="score">
      Score: ${STORE.score}/${STORE.questions.length}
    </li>
  <ul>`
}

function generateAnswersHtml(){
  const answersArray = STORE.questions[STORE.currentQuestion].answers;
  let answersHtml = '';
  let i = 0;

  answersArray.forEach(answer => {
    answersHtml += `
    <div id="option-container-${i}">
      <input type="radio" name="options" id="option${i+1}" value="${answer}" tabindex="${i + 1} required>
      <label for="option${i +1}">${answer}</label>
    </div>
    `;
    i++;
  });
  return answersHtml;
}


function generateQuestionHtml(){
  let currentQuestion = STORE.questions[STORE.currentQuestion];
  return `
    <form id="question-form" class="question-form">
      <fieldset>
        <div class="question">
          <legend>${currentQuestion.question}</legend>
        </div>
        <div class="options">
          <div class="answers">
            ${generateAnswersHtml()}
          </div>
        </div>
        <button type="submit" id="submit-answer-btn" tabindex="5">Submit</button>
        <button type="button" id="next-question-btn" tabindex="6">Next></button>
      </fieldset>
    </form>
  `;
}

/******************* RENDER FUNCTION(S) *******************/
// This function conditionally replaces the contents of the <main> tag based on the state of the store
function render() {
  let html = '';

  if (STORE.quizStarted === false) {
    $('main').html(generateStartScreenHtml());
    return;
  }

  else if (STORE.currentQuestion < STORE.questions.length) {
    html = generateQuestionNumberAndScoreHtml();
    html += generateQuestionHtml();
    $('main').html(html);
  }
  
  else {
    $('main').html(generateResultsScreen());
  }
  // console.log('render fired');
}

/******************* EVENT HANDLER FUNCTIONS *******************/
// These functions handle events (submit, click, etc)
function handleStartClick(){
  $('main').on('click', '#start', function(event) {
    STORE.quizStarted = true;
    render();
  });
}

function handleNextQuestionClick(){
  $('main').on('click', function(event) {
    
  });
}

function handleQuestionFormSubmission(){

}

function handleRestartButtonClick(){
  $('body').on('click', '#restart', () => {
    restartQuiz();
    render();
  });
}

function handleQuizApp() {
  render();
  handleStartClick();
  handleNextQuestionClick();
  handleQuestionFormSubmission();
  handleRestartButtonClick();
}

function restartQuiz(){
  STORE.quizStarted = false;
  STORE.currentQuestion = 0;
  STORE.score = 0;
}

$(handleQuizApp);