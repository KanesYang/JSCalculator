// calculator

// global vars

var num1 = '';
var num2 = '';
var operator = '';
var flag = 0;
var display = document.getElementById('display');
var equalTo = 0;
var opFlag = 0;

//function 

//set number

function setValue(number) {
    if (equalTo === 1) {
        clearButton();
    }

    if (flag === 0) {
        num1 += number;
        display.innerHTML += number;
    } else {
        opFlag = 0;
        num2 += number;
        display.innerHTML += number;
    }
    if (num1.length > 10 || num2.length > 10) {
        display.innerHTML = 'Max limit of digits reached';
    }
}

//operator click
function oppClick(numericCode) {
    operator = numericCode;
    var oppString = '';
    flag = 1;
    opFlag = 1;

    if (operator === 4) {
        display.innerHTML += '/';
        oppString = '/';
    } else if (operator === 3) {
        display.innerHTML += '*';
        oppString = '*';
    } else if (operator === 2) {
        display.innerHTML += '-';
        oppString = '-';
    } else {
        display.innerHTML += '+';
        oppString = '+';
    }

    //restrict the number of operator
    if (flag === 1) {
        display.innerHTML = num1 + oppString;
    }

    //must have a num1 before enter the operator
    if (flag === 1 && num1 === '') {
        clearButton();
    }

    //clear the result of the calculation
    if (equalTo === 1) {
        clearButton();
    }

}

//equal click

function equalClick() {
    equalTo = 1;

    num1 = parseFloat(num1);
    num2 = parseFloat(num2);

    var result = '';
    var roundedResult = '';

    switch (true) {
        case (operator === 1):
            result = num1 + num2;
            break;
        case (operator === 2):
            result = num1 - num2;
            break;
        case (operator === 3):
            result = num1 * num2;
            break;
        case (operator === 4):
            result = num1 / num2;
            break;
    }
    //si she wu ru
    roundedResult = result.toFixed(4);
    display.innerHTML = roundedResult;

    if (roundedResult === 'NaN') {
        display.innerHTML = "not a valid calculation"
    }
}


//clear button

function clearButton() {
    num1 = '';
    num2 = '';
    flag = 0;
    display.innerHTML = '';
    equalTo = 0;
}


//function backspace 

function backspace() {
    var temp1 = '';
    var temp2 = '';

    //clear the result of the calculation
    if (equalTo === 1) {
        clearButton();
    }

    //if operator not entered
    if (flag === 0) {
        temp1 = num1.substring(0, num1.length - 1);
        display.innerHTML = temp1;
        num1 = temp1;
    }

    //if the operator just entered?
    if (opFlag === 1) {
        display.innerHTML = num1;
        flag = 0;
        opFlag = 0;
    }

    if (num2 !== '') {
        temp2 = num2.substring(0, num2.length - 1);
        display.innerHTML = num1 + operator + num2;
        num2 = temp2;

        setOppString();
    }

}

// set decimal

function setDecimal() {
    if (flag === 0) {
        //little than 1
        if (num1 === "") {
            num1 = '0.';
            display.innerHTML = num1;
        }

        //greater than 1
        if (num1.indexOf('.') === -1) {
            num1 += '.';
            display.innerHTML = num1;
        }
    }

    if (flag === 1) {
        if (num2 === '') {
            num2 = '0.';
            display.innerHTML += num2;
        }

        if (num2.indexOf('.') === -1) {
            num2 += '.';

            setOppString();
        }

    }
}

// function setOppString

function setOppString() {
    if (operator === 4) {
        display.innerHTML = num1 + '/' + num2;
    } else if (operator === 3) {
        display.innerHTML = num1 + '*' + num2;
    } else if (operator === 2) {
        display.innerHTML = num1 + '-' + num2;
    } else {
        display.innerHTML = num1 + '+' + num2;
    }
}
