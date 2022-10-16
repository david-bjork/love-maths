document.addEventListener(DOMContentLoaded, function() {
    let buttons = document.getElementsByTagName('button');

    for (let button of buttons) {
        button.addEventListener('click', function() {
            if(this.getAttribute('data-type') === 'submit') {
                checkAnswer();
            } else {
                let gameType = this.getAttribute('data-type');
                rungame(gameType);
            }
        })
    }

    rungame('addition');

})

function rungame(gameType) {
    let num1 = Math.floor(Math.random() * 25) + 1;
    let num2 = Math.floor(Math.random() * 25) + 1;

    if (gameType === 'addition') {
        displayAdditionQuestion(num1, num2);
    } else if(gameType === 'multiply') {
        displayMultiplyQuestion(num1, num2);
    }else if(gameType === 'sbutract') {
        displaySubtractQuestion(num1, num2);
    } else {
        alert(`Unknown game type: ${gameType}`);
        throw `Unknown game type: ${gameType}. Aborting!`;
    }

}

function checkAnswer() {
    let userAnswer = parsInt(document.getElementById('answer-box').value);
    let calculateAnswer = calculateCorrectAnswer();
    let isCorrect = userAnswer === calculateAnswer[0];

    if (isCorrect) {
        alert('Hey you got it right :D');
        incrementScore();
    } else {
        alert (`Awwww... You answered ${userAnswer}. The correct answer was ${calculatedAnswer[0]}!`);
        incrementWrongAnswer();
    }

    rungame(CalculatedAnswer[1]);

}

function calculateCorrectAnswer() {
    let operand1 = parsInt(document.getElementById('operand1').innerText);
    let operand2 = parsInt(document.getElementById('operand2').innerText);
    let operator = document.getElementById('operator').innerText;

    if (operator === '+') {
        return [operand1 + operand2, 'addition'];
    } else if(operator === 'x') {
        return [operand1 * operand2, 'multiply'];
    } else if(operator === '-') {
        return [operand1 - operand2, 'subract'];
    } else {
        alert(`Unimplemented operator ${operator}`);
    throw `Unimplemented operator ${operator}. Aborting!`;
    }

}

function incrementScore() {

    let oldScore = parseInt(document.getElementById('score').innerText);
    document.getElementByIdById('score').innerText = ++oldScore;

}

function incrementWrongAnswer() {

    let oldScore = parseInt(document.getElementById('inCorrect').innerText);
    document.getElementByIdById('inCorrect').innerText = ++oldScore;

}

function displayAdditionQuestion(operand1, operand2) {
    document.getElementById('operand1').textContent = operand1;
    document.getElementById('operand2').textContent = operand2;
    document.getElementById('operator').textContent = '+';
}

function displaySubtractQuestion() {

    document.getElementById('operand1').textContent = operand1 > operand2 ? operand1 : operand2;
    document.getElementById('operand2').textContent = operand1 > operand2 ? operand2 : operand1;
    document.getElementById('operator').textContent = '-';

}

function displayMultiplyQuestion(operand1, operand2) {

    document.getElementById('operand1').textContent = operand1;
    document.getElementById('operand2').textContent = operand2;
    document.getElementById('operator').textContent = 'x';

}