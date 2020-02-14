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
  currentQuestion: 0,
  score: 0
};


/******************* TEMPLATE GENERATION FUNCTIONS *******************/
// These functions return HTML templates

// This function generates the start screen
function generateStartScreenHtml(){
  return `
  <div class = "start-screen">
  <h1>How well do you know your favorite cartoon characters</h1>
  <button type="button" id="start">Start Quiz</button>
  <div>
  `;
}
// This function returns the HTML template for the question number and score display
function generateQuestionNumberAndScoreHtml() {
  return `
  <ul class="question and score">
    <li id="question-number">
      Question Number: ${STORE.currentQuestion + 1}/${STORE.questions.length}
    </li>
    <li id="score">
      Score: ${STORE.score}/${STORE.questions.length}
    </li>
  <ul>
  `;
}

// This function generates the answer html
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

// This function generates the question html
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

// This function generates the results html
function generateResultsScreen(){
  return `
  <div class="results>
    <form id="js-restart-quiz">
      <fieldset>
        <div class="row">
          <div class="col-12">
            <legend>Your Score is: ${STORE.score}/${STORE.questions.length}</legend>
          </div>
        </div>
      </fieldset>
    </form>
  </div>
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
}

/******************* EVENT HANDLER FUNCTIONS *******************/
// These functions handle events (submit, click, etc)

// This function handles users clicking the start button
function handleStartClick(){
  $('main').on('click', '#start', function(event) {
    STORE.quizStarted = true;
    render();
  });
}

// This function handles users clicking the next question button
function handleNextQuestionClick(){
  $('main').on('click','#submit-answer-btn', function(event) {
    STORE.currentQuestion ++;
    render();
  });
}

// This function handles users clicking the submit button on the question form
function handleQuestionFormSubmission(){

}

// These functions handle users clicking the restart quiz button
function restartQuiz(){
  STORE.quizStarted = false;
  STORE.currentQuestion = 0;
  STORE.score = 0;
}

function handleRestartButtonClick(){
  $('body').on('click', '#restart', () => {
    restartQuiz();
    render();
  });
}

// This function handles page load
function handleQuizApp() {
  render();
  handleStartClick();
  handleNextQuestionClick();
  handleQuestionFormSubmission();
  handleRestartButtonClick();
}

$(handleQuizApp);