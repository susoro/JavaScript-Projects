const quizData = [

  {
    question: `when does it end this shitshow?`,
    a: '2023',
    b: '2025',
    c: '2030',
    d: 'never end',
    correct: 'd',
  }, {
    question: `경수가 제일 좋아하는 음식은?`,
    a: '치킨',
    b: '피자',
    c: '회',
    d: '족발',
    correct: 'c',
  },
  {
    question: `경수의 사주 음양오행에 가장 많은 성질을 가지고 있는것은?`,
    a: '목',
    b: '화',
    c: '토',
    d: '수',
    correct: 'b',
  },
  {
    question: `경수가 살고싶어하고 매일 노래를 부르는 아파트는?`,
    a: '삼익비치 아파트',
    b: '아크로 포레스트',
    c: '한양 아파트',
    d: '반포 자이',
    correct: 'b',
  }

]

const answerEls = document.querySelectorAll('.answer');
const quiz = document.getElementById('quiz');
const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
  deselectAnswers();

  const currentQuizData = quizData[currentQuiz];

  questionEl.innerText = currentQuizData.question;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;


}

function getSelected() {

  let answer = undefined;


  answerEls.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  });
  return answer;
}

function deselectAnswers(){
  answerEls.forEach((answerEl) => {
    answerEl.checked = false;

  });
}


submitBtn.addEventListener("click", () => {

  // check to see the answer
  const answer = getSelected();

  if (answer) {

    if(answer===quizData[currentQuiz].correct){
      score++;
    }
    
    currentQuiz++;
    if (currentQuiz < quizData.length) {
      loadQuiz();
    } else {
      // todo: show results;
      quiz.innerHTML = `
      <h3>정답을 ${score}/${quizData.length}개 맞추었습니다.경수와 광야에서 만납시다! </h3>
      <button onclick = "location.reload()">다시도전</button>`;
    }
  }
});