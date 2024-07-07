const quizData = [
  {
    question: "What is the capital of France?",
    choices: ["Paris", "London", "Berlin", "Madrid"],
    correctAnswer: "Paris"
  },
  {
    question: "Which continent is Egypt located in?",
    choices: ["Europe", "Africa", "Asia", "South America"],
    correctAnswer: "Africa"
  },
  {
    question: "What is the largest ocean on Earth?",
    choices: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
    correctAnswer: "Pacific Ocean"
  },
  {
    question: "Which country is known as the Land of the Rising Sun?",
    choices: ["China", "Japan", "Thailand", "South Korea"],
    correctAnswer: "Japan"
  },
  {
    question: "What is the longest river in the world?",
    choices: ["Amazon River", "Nile River", "Yangtze River", "Mississippi River"],
    correctAnswer: "Nile River"
  },
  {
    question: "Which desert is the largest in the world?",
    choices: ["Sahara Desert", "Gobi Desert", "Kalahari Desert", "Arabian Desert"],
    correctAnswer: "Sahara Desert"
  },
  {
    question: "Which is the smallest country in the world?",
    choices: ["Monaco", "San Marino", "Liechtenstein", "Vatican City"],
    correctAnswer: "Vatican City"
  },
  {
    question: "Which country has the most natural lakes?",
    choices: ["Canada", "USA", "Russia", "India"],
    correctAnswer: "Canada"
  },
  {
    question: "Which mountain range is the longest in the world?",
    choices: ["Andes", "Rockies", "Himalayas", "Alps"],
    correctAnswer: "Andes"
  },
  {
    question: "Which country has the most islands?",
    choices: ["Indonesia", "Finland", "Sweden", "Philippines"],
    correctAnswer: "Sweden"
  },
  {
    question: "Which is the largest island in the world?",
    choices: ["Greenland", "Borneo", "Madagascar", "New Guinea"],
    correctAnswer: "Greenland"
  },
  {
    question: "What is the capital city of Australia?",
    choices: ["Sydney", "Melbourne", "Brisbane", "Canberra"],
    correctAnswer: "Canberra"
  },
  {
    question: "Which country is home to the Great Barrier Reef?",
    choices: ["Australia", "Brazil", "South Africa", "Mexico"],
    correctAnswer: "Australia"
  },
  {
    question: "Which river flows through Paris?",
    choices: ["Seine", "Thames", "Danube", "Rhone"],
    correctAnswer: "Seine"
  },
  {
    question: "What is the capital city of Canada?",
    choices: ["Toronto", "Vancouver", "Ottawa", "Montreal"],
    correctAnswer: "Ottawa"
  },
  {
    question: "What is the smallest continent by land area?",
    choices: ["Europe", "Australia", "Antarctica", "South America"],
    correctAnswer: "Australia"
  },
  {
    question: "What is the tallest mountain in the world?",
    choices: ["K2", "Kangchenjunga", "Mount Everest", "Lhotse"],
    correctAnswer: "Mount Everest"
  },
  {
    question: "Which US state is the largest by area?",
    choices: ["Texas", "California", "Alaska", "Montana"],
    correctAnswer: "Alaska"
  },
  {
    question: "Which country is both in Europe and Asia?",
    choices: ["Turkey", "Russia", "Kazakhstan", "All of the above"],
    correctAnswer: "All of the above"
  },
  {
    question: "Which is the longest wall in the world?",
    choices: ["Great Wall of China", "Berlin Wall", "Hadrian's Wall", "Western Wall"],
    correctAnswer: "Great Wall of China"
  },
  {
    question: "Which country has the largest population?",
    choices: ["India", "USA", "China", "Indonesia"],
    correctAnswer: "China"
  },
  {
    question: "Which country is known for the Eiffel Tower?",
    choices: ["Italy", "Spain", "France", "Germany"],
    correctAnswer: "France"
  },
  {
    question: "Which continent is the Sahara Desert located in?",
    choices: ["Asia", "South America", "Africa", "Australia"],
    correctAnswer: "Africa"
  },
  {
    question: "Which country is famous for its maple syrup?",
    choices: ["USA", "Canada", "Norway", "Russia"],
    correctAnswer: "Canada"
  },
  {
    question: "Which city is known as the Big Apple?",
    choices: ["Los Angeles", "San Francisco", "Chicago", "New York City"],
    correctAnswer: "New York City"
  },
  {
    question: "What is the currency of Japan?",
    choices: ["Won", "Yen", "Dollar", "Rupee"],
    correctAnswer: "Yen"
  },
  {
    question: "Which country is home to the Amazon Rainforest?",
    choices: ["Peru", "Colombia", "Brazil", "Venezuela"],
    correctAnswer: "Brazil"
  },
  {
    question: "Which ocean is the Maldives located in?",
    choices: ["Atlantic Ocean", "Indian Ocean", "Pacific Ocean", "Arctic Ocean"],
    correctAnswer: "Indian Ocean"
  },
  {
    question: "Which is the largest desert in the world?",
    choices: ["Gobi Desert", "Arabian Desert", "Antarctic Desert", "Sahara Desert"],
    correctAnswer: "Antarctic Desert"
  },
  {
    question: "Which country is known as the Land of Fire and Ice?",
    choices: ["Iceland", "Greenland", "Norway", "Finland"],
    correctAnswer: "Iceland"
  },
  {
    question: "Which is the tallest waterfall in the world?",
    choices: ["Niagara Falls", "Angel Falls", "Victoria Falls", "Iguazu Falls"],
    correctAnswer: "Angel Falls"
  },
  {
    question: "What is the capital of Italy?",
    choices: ["Venice", "Milan", "Naples", "Rome"],
    correctAnswer: "Rome"
  },
  {
    question: "Which continent is the Great Wall of China located in?",
    choices: ["Asia", "Europe", "Africa", "South America"],
    correctAnswer: "Asia"
  },
  {
    question: "Which country has the most volcanoes?",
    choices: ["Japan", "Indonesia", "USA", "Philippines"],
    correctAnswer: "Indonesia"
  },
  {
    question: "Which river is the longest in Europe?",
    choices: ["Danube", "Volga", "Rhine", "Elbe"],
    correctAnswer: "Volga"
  },
  {
    question: "Which continent has the most countries?",
    choices: ["Asia", "Africa", "Europe", "South America"],
    correctAnswer: "Africa"
  },
  {
    question: "What is the capital of Spain?",
    choices: ["Barcelona", "Seville", "Valencia", "Madrid"],
    correctAnswer: "Madrid"
  },
  {
    question: "Which country is known for the Colosseum?",
    choices: ["France", "Italy", "Greece", "Spain"],
    correctAnswer: "Italy"
  },
  {
    question: "Which is the deepest ocean in the world?",
    choices: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
    correctAnswer: "Pacific Ocean"
  },
  {
    question: "Which country is known for its tulips?",
    choices: ["Belgium", "France", "Netherlands", "Denmark"],
    correctAnswer: "Netherlands"
  },
  {
    question: "Which continent is the Amazon Rainforest located in?",
    choices: ["Africa", "Asia", "South America", "Australia"],
    correctAnswer: "South America"
  },
  {
    question: "Which country is famous for the Great Barrier Reef?",
    choices: ["Australia", "Brazil", "South Africa", "India"],
    correctAnswer: "Australia"
  },
  {
    question: "What is the capital of Russia?",
    choices: ["St. Petersburg", "Moscow", "Novosibirsk", "Kazan"],
    correctAnswer: "Moscow"
  },
  {
    question: "Which country has the most UNESCO World Heritage Sites?",
    choices: ["China", "Italy", "Spain", "Germany"],
    correctAnswer: "Italy"
  },
  {
    question: "Which is the smallest ocean in the world?",
    choices: ["Atlantic Ocean", "Indian Ocean", "Pacific Ocean", "Arctic Ocean"],
    correctAnswer: "Arctic Ocean"
  }
];


const quizContainer = document.getElementById('quiz');
const retryButton = document.getElementById('retry-button');

function renderQuiz() {
  quizContainer.innerHTML = '';
  quizData.forEach((quizItem, index) => {
    const questionDiv = document.createElement('div');
    questionDiv.classList.add('question');
    questionDiv.innerHTML = `
          <p>${quizItem.question}</p>
          <ul>
              ${quizItem.choices.map(choice => `
                  <li>
                      <label>
                          <input type="radio" name="question${index}" value="${choice}">
                          ${choice}
                      </label>
                  </li>
              `).join('')}
          </ul>
          <p class="feedback" id="feedback${index}"></p>
      `;
    quizContainer.appendChild(questionDiv);
  });

  // Add event listeners to all radio buttons to handle label highlighting
  const allRadioButtons = document.querySelectorAll('input[type="radio"]');
  allRadioButtons.forEach(radio => {
    radio.addEventListener('change', function () {
      // Remove the selected-label class from all labels in this question
      const labels = this.closest('ul').querySelectorAll('label');
      labels.forEach(label => label.classList.remove('selected-label'));
      // Add the selected-label class to the selected label
      this.closest('label').classList.add('selected-label');
    });
  });
}

function submitQuiz() {
  let score = 0;
  quizData.forEach((quizItem, index) => {
    const selectedOption = document.querySelector(`input[name="question${index}"]:checked`);
    const feedback = document.getElementById(`feedback${index}`);
    if (selectedOption) {
      if (selectedOption.value === quizItem.correctAnswer) {
        score++;
        feedback.innerHTML = "Correct!";
        feedback.classList.add('correct');
      } else {
        feedback.innerHTML = `Wrong! Correct answer is ${quizItem.correctAnswer}.`;
        feedback.classList.add('wrong');
      }
    } else {
      feedback.innerHTML = `No answer selected! Correct answer is ${quizItem.correctAnswer}.`;
      feedback.classList.add('wrong');
    }
  });
  alert(`Your score: ${score}/${quizData.length}`);
  retryButton.style.display = 'block';
}

function retryQuiz() {
  renderQuiz();
  retryButton.style.display = 'none';
}

renderQuiz();
