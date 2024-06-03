
"use strict";
// "use strict" - это режим, который будет проверять правильность написания кода, особенно в части объявления переменных


//==========================================
const $ = document.querySelector.bind(document);
// назначение $ поможет сократить написание кода, ниже описаны две идентичные переменные, но с $ код получился короче:
// const quiz = $(".quiz");
// const = quiz = document.querySelector('.quiz');
const quiz = document.querySelector(".quiz");
const warning = document.querySelector(".warning");
// кнопка вперед
const btnNext = document.querySelector(".quiz__next-btn");
let count = 0;
// счетчик правильных ответов
let userScore = 0;

if (typeof questions !== 'undefined' && questions.length > 0) {
    quiz.classList.remove('hidden');
    showQuestions(count);
} else {
    warning.classList.remove('hidden');
}
// программирование кнопки Далее, т.к. по клику на неё запускается функция nextQuestion
btnNext.addEventListener('click', nextQuestion);

function showQuestions(index) {
    const title = document.querySelector(".quiz__title");
    const list = document.querySelector(".quiz__list");
    const total = document.querySelector(".quiz__total");
    let progress = document.querySelector(".quiz__progress-inner");

    title.innerHTML = `${questions[index].question}`;
    list.innerHTML = '';
    
    questions[index].options.forEach((item, questionNumber) => {
        const text = `<li class="quiz__option">${questionNumber + 1}. ${item}</li>`;
        list.insertAdjacentHTML("beforeend", text)
    });

    // Переменная, в которую записываются все варианты ответов
    const options = list.querySelectorAll(".quiz__option");
    // добавляем с помощью JS в код <ul class="quiz__list"> функцию onclick="optionSelected"
    // получится <ul onclick="optionSelected" class="quiz__list">
    options.forEach(item => item.setAttribute("onclick", "optionSelected(this)"));
    // this обозначает вариант ответа, который нажал пользователь

    total.innerHTML = `${index + 1} из ${questions.length}`;
    progress.style.width = `${Math.round(((index + 1) / questions.length) * 100)}%`;
}
// function rightAnswers(index) {
//     const list = document.querySelector(".quiz__list");
//     const answers = 

// }

function optionSelected(answer) {
    // вариант ответа, который нажал пользователь
    // методом slice() обрезал номер вопроса, для сопоставления с вариантом ответа
  const userAnswer = answer.textContent.slice(3);   
    // правильный ответ, берем из массива
    const correctAnswer = questions[count].answer;
    // записываем все варианты ответа
    const options = document.querySelectorAll(".quiz__option");
    // значек правильного ответа (галочка)
    const iconCorrect = "<span'>&#10004;</span>";
    // значек НЕправильного ответа (кирпич)
    const iconIncorrect = "<span'>&#9940;</span>";

    if (userAnswer == correctAnswer) {
        userScore += 1;
        answer.classList.add("correct");
        answer.insertAdjacentHTML("beforeend", iconCorrect);
    } else {
        answer.classList.add("incorrect");
        answer.insertAdjacentHTML("beforeend", iconIncorrect);
        // если ответ не правильный, показывается правильный ответ, методом slice() обрезал номер вопроса, для сопоставления с вариантом ответа
        options.forEach(item => {
            if (item.textContent.slice(3) == correctAnswer) {
                setTimeout(() => {
                    item.classList.add("correct");
                    item.insertAdjacentHTML("beforeend", iconCorrect);
                }, 100);
            }
        });
    }
 
    options.forEach(item => item.classList.add("disabled"));
}
// функция нажатия кнопки Далее
function nextQuestion() {
    // в option ищем любую вкладку
    const option = document.querySelector(".quiz__option");
    // находим блок .result, где будет выводится результат
    const result = document.querySelector(".result");
    // блок вывода текста результата
    const resultText = document.querySelector(".result__text");
    // устанавливаем условие, что делаем на последнем вопросе:
    if ((count + 1) == questions.length && option.classList.contains('disabled')) {
        result.classList.remove('hidden');
        quiz.classList.add('hidden');
        resultText.innerHTML = `Количество правильных ответов: ${userScore} из ${questions.length}`;
        return;

    }
    // проверяем, ответил ли пользователь на вопрос, если нет то информируем его об этом
    if (option.classList.contains('disabled')) {
        // если пользователь дал ответ, то у кнопок появляется класс disabled
        count++;
        showQuestions(count);
    } else {
        alert('Выбери ответ, потом переходи к следующему вопросу');
    }
}