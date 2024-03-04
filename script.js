const quizQuestions = [
    { type: 'trueFalse', question: 'Trái đất tròn hay vuông?', answer: true },
    { type: 'trueFalse', question: 'Trái đất tròn hay vuông?', answer: true },
    { type: 'trueFalse', question: 'Trái đất tròn hay vuông?', answer: false },
    { type: 'trueFalse', question: 'Trái đất tròn hay vuông?', answer: true },
    { type: 'trueFalse', question: 'Trái đất tròn hay vuông?', answer: false },
    { type: 'trueFalse', question: 'Trái đất tròn hay vuông?', answer: true },
    { type: 'trueFalse', question: 'Trái đất tròn hay vuông?', answer: true },
    { type: 'trueFalse', question: 'Trái đất tròn hay vuông?', answer: false },
    { type: 'trueFalse', question: 'Trái đất tròn hay vuông?', answer: false },
    { type: 'trueFalse', question: 'Trái đất tròn hay vuông?', answer: true },

    { type: 'multipleChoice', question: 'Tại sao bạn nghĩ nó hình vuông?', options: ['A', 'B', 'C', 'D'], answer: 'A' },
    { type: 'multipleChoice', question: 'Tại sao bạn nghĩ nó hình vuông?', options: ['A', 'B', 'C', 'D'], answer: 'A' },
    { type: 'multipleChoice', question: 'Tại sao bạn nghĩ nó hình vuông?', options: ['A', 'B', 'C', 'D'], answer: 'C' },
    { type: 'multipleChoice', question: 'Tại sao bạn nghĩ nó hình vuông?', options: ['A', 'B', 'C', 'D'], answer: 'B' },
    { type: 'multipleChoice', question: 'Tại sao bạn nghĩ nó hình vuông?', options: ['A', 'B', 'C', 'D'], answer: 'A' },
    { type: 'multipleChoice', question: 'Tại sao bạn nghĩ nó hình vuông?', options: ['A', 'B', 'C', 'D'], answer: 'D' },
    { type: 'multipleChoice', question: 'Tại sao bạn nghĩ nó hình vuông?', options: ['A', 'B', 'C', 'D'], answer: 'D' },
    { type: 'multipleChoice', question: 'Tại sao bạn nghĩ nó hình vuông?', options: ['A', 'B', 'C', 'D'], answer: 'A' },
    { type: 'multipleChoice', question: 'Tại sao bạn nghĩ nó hình vuông?', options: ['A', 'B', 'C', 'D'], answer: 'A' },
    { type: 'multipleChoice', question: 'Tại sao bạn nghĩ nó hình vuông?', options: ['A', 'B', 'C', 'D'], answer: 'C' },

    { type: 'multipleSelect', question: 'Nếu nó hình tròn thì sao?', options: ['A', 'B', 'C', 'D'], answer: ['A', 'C'] },
    { type: 'multipleSelect', question: 'Nếu nó hình tròn thì sao?', options: ['A', 'B', 'C', 'D'], answer: ['A', 'B'] },
    { type: 'multipleSelect', question: 'Nếu nó hình tròn thì sao?', options: ['A', 'B', 'C', 'D'], answer: ['A', 'C'] },
    { type: 'multipleSelect', question: 'Nếu nó hình tròn thì sao?', options: ['A', 'B', 'C', 'D'], answer: ['A', 'D'] },
    { type: 'multipleSelect', question: 'Nếu nó hình tròn thì sao?', options: ['A', 'B', 'C', 'D'], answer: ['B', 'D'] },
    { type: 'multipleSelect', question: 'Nếu nó hình tròn thì sao?', options: ['A', 'B', 'C', 'D'], answer: ['B', 'C'] },
    { type: 'multipleSelect', question: 'Nếu nó hình tròn thì sao?', options: ['A', 'B', 'C', 'D'], answer: ['B', 'D'] },
    { type: 'multipleSelect', question: 'Nếu nó hình tròn thì sao?', options: ['A', 'B', 'C', 'D'], answer: ['C', 'A'] },
    { type: 'multipleSelect', question: 'Nếu nó hình tròn thì sao?', options: ['A', 'B', 'C', 'D'], answer: ['C', 'D'] },
    { type: 'multipleSelect', question: 'Nếu nó hình tròn thì sao?', options: ['A', 'B', 'C', 'D'], answer: ['D', 'B'] },

    { type: 'essay', question: 'Nó là hình cầu mà?' },
    { type: 'essay', question: 'Nó là hình cầu mà?' },
    { type: 'essay', question: 'Nó là hình cầu mà?' },
    { type: 'essay', question: 'Nó là hình cầu mà?' },
    { type: 'essay', question: 'Nó là hình cầu mà?' },
    { type: 'essay', question: 'Nó là hình cầu mà?' },
    { type: 'essay', question: 'Nó là hình cầu mà?' },
    { type: 'essay', question: 'Nó là hình cầu mà?' },
    { type: 'essay', question: 'Nó là hình cầu mà?' },
    { type: 'essay', question: 'Nó là hình cầu mà?' },
  ];
  
  let userAnswers = [];
  function saveInfo() {
    const fullName = document.getElementById('fullName').value;
    const dob = document.getElementById('dob').value;
    const ID = document.getElementById('ID').value;
    const address = document.getElementById('address').value;

    localStorage.setItem('fullName', fullName);
    localStorage.setItem('dob', dob);
    localStorage.setItem('ID', ID);
    localStorage.setItem('address', address);

  window.location.href = 'quiz.html';
}

  function startQuiz() {
    const HumanForm = document.getElementById('HumanForm');
    const quizContainer = document.getElementById('quizContainer');
  
    HumanForm.classList.add('hidden');
    quizContainer.classList.remove('hidden');
  
    generateQuizQuestions();
  }
  

  function checkAnswers() {
    for (let i = 0; i < quizQuestions.length; i++) {
      const questionType = quizQuestions[i].type;
      const inputName = `q${i}`;

      if (questionType === 'trueFalse' || questionType === 'multipleChoice') {
        const selectedOption = document.querySelector(`input[name="${inputName}"]:checked`);
        if (!selectedOption) {
          alert(`Bạn chưa trả lời câu hỏi ${i + 1}`);
          return false; 
        }
      } else if (questionType === 'multipleSelect') {
        const selectedOptions = document.querySelectorAll(`input[name="${inputName}"]:checked`);
        if (selectedOptions.length === 0) {
          alert(`Bạn chưa trả lời câu hỏi ${i + 1}`);
          return false; 
        }
      } else if (questionType === 'essay') {
        const essayAnswer = document.querySelector(`textarea[name="${inputName}"]`);
        if (!essayAnswer.value.trim()) {
          alert(`Bạn chưa trả lời câu hỏi ${i + 1}`);
          return false; 
        }
      }
    }
  
    alert('Ấn Ok để xác nhận hoàn thành!');
    return true;
  }

  function generateQuizQuestions() {
    const quizContainer = document.getElementById('quizContainer');
  
    quizContainer.innerHTML = '';
  
    for (let i = 0; i < quizQuestions.length; i++) {
      const questionElement = document.createElement('div');
      questionElement.innerHTML = `<p>${i + 1}. ${quizQuestions[i].question}</p>`;
  
      if (quizQuestions[i].type === 'trueFalse') {
        questionElement.innerHTML += `
          <label><input type="radio" name="q${i}" value="true"> Đúng</label>
          <label><input type="radio" name="q${i}" value="false"> Sai</label>
        `;
      } else if (quizQuestions[i].type === 'multipleChoice') {
        for (let j = 0; j < quizQuestions[i].options.length; j++) {
          questionElement.innerHTML += `
            <label><input type="radio" name="q${i}" value="${quizQuestions[i].options[j]}"> ${quizQuestions[i].options[j]}</label>
          `;
        }
      } else if (quizQuestions[i].type === 'multipleSelect') {
        for (let j = 0; j < quizQuestions[i].options.length; j++) {
          questionElement.innerHTML += `
            <label><input type="checkbox" name="q${i}" value="${quizQuestions[i].options[j]}"> ${quizQuestions[i].options[j]}</label>
          `;
        }
      } else if (quizQuestions[i].type === 'essay') {
        questionElement.innerHTML += `
          <textarea name="q${i}" rows="4" cols="50" placeholder="Nhập câu trả lời"></textarea>
        `;
      }
  
      quizContainer.appendChild(questionElement);
      var button = document.getElementById('showquiz');
      if (button) {
            button.style.display = 'none';
        }
      
    }
    var button = document.getElementById('showquiz');
      if (button) {
            button.style.display = 'none';
      }
      document.getElementById('submit').style.display = 'block';
  }
  
  function submitQuiz() {
    if(checkAnswers()){
      var correctCount = 0;
      var wrongCount = 0;
      const quizContainer = document.getElementById('quizContainer');
      const resultContainer = document.getElementById('resultContainer');
    
      userAnswers = [];
      for (let i = 0; i < quizQuestions.length; i++) {
        const questionType = quizQuestions[i].type;
        const answerElement = document.querySelector(`input[name="q${i}"]:checked, textarea[name="q${i}"]`);
    
        if (answerElement) {
          if (questionType === 'multipleSelect') {
            const selectedOptions = Array.from(document.querySelectorAll(`input[name="q${i}"]:checked`)).map(option => option.value);
            userAnswers.push({ question: i + 1, type: questionType, answer: selectedOptions });
          } else {
            userAnswers.push({ question: i + 1, type: questionType, answer: answerElement.value });
          }
        }
      }
    
      var correct_answer =["Answer Correct","Answer Wrong"];
      for (let i = 0; i < userAnswers.length; i++) {
        const randomIndex = Math.floor(Math.random() * correct_answer.length);
        var answer =correct_answer[randomIndex];
        if (answer === 'Answer Correct') {
          correctCount++;
        } else {
          wrongCount++;
        }
      }

      localStorage.setItem('correctCount', correctCount);
      localStorage.setItem('wrongCount', wrongCount);
      window.location.href = 'result.html';

    }
  }