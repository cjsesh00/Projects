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

function main() {
  startQuiz();

  console.log('main fired');
}

function renderPage() {
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

  // console.log('renderPage fired');
}


function startQuiz() {
//displays intro and welcomes user to quiz
  const intro = 
  `
  <div class = "start">
  <h1>How well do you know your favorite cartoon characters</h1>
  <a href =><input type= "Submit"></input></a>
  <div>
  `

  $("main").html(intro)

  console.log('startQuiz fired');
}

//function displayButtons() {
  //generates radio buttons to be used as answer selection
      //<input type="radio" id="answer1" name="answer1" value= 0>
      //<label for=""></label><br>
      //<input type="radio" id="answer2" name="answer2" value= 1>
      //<label for=""></label><br>
      //<input type="radio" id="answer3" name="answer3" value= 2>
      //<label for=""></label><br>
      //<input type="radio" id="answer4" name="answer4" value= 3>
      //<label for=""></label><br>
      
      //<input type= "Submit"></input>

  //console.log('displayButtons has fired');
//}

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






$(main);