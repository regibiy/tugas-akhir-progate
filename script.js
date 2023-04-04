// awal mengambil nilai dari button
const numbers = document.querySelectorAll(".number");
numbers.forEach((number) => {
  number.addEventListener("click", (event) => {
    inputNumber(event.target.value);
    updateScreen(currentNumber);
  });
});
// akhir mengambil nilai dari button

// awal menampilkan nilai ke screen
const calculatorScreen = document.querySelector(".calculator-screen");
const updateScreen = (number) => {
  calculatorScreen.value = number;
};
// akhir menampilkan nilai ke screen

let prevNumber = "";
let calcOperator = "";
let currentNumber = "0";

// membuat function inputNumber
const inputNumber = (number) => {
  if (currentNumber === "0") {
    currentNumber = number;
  } else {
    currentNumber += number;
  }
};

//mengambil nilai operator
const operators = document.querySelectorAll(".operator");
operators.forEach((operator) => {
  operator.addEventListener("click", (event) => {
    inputOperator(event.target.value);
  });
});

//function operator
const inputOperator = (operator) => {
  if (calcOperator === "") {
    prevNumber = currentNumber;
  }
  calcOperator = operator;
  currentNumber = "0";
};

// function memanggil tombol sama dengan
const equalSign = document.querySelector(".equal-sign");
equalSign.addEventListener("click", (event) => {
  calculate();
  updateScreen(currentNumber);
});

// fucntion menghitung
const calculate = () => {
  let result = "";
  switch (calcOperator) {
    case "+":
      result = parseFloat(prevNumber) + parseFloat(currentNumber);
      break;
    case "-":
      result = parseFloat(prevNumber) - parseFloat(currentNumber);
      break;
    case "/":
      result = parseFloat(prevNumber) / parseFloat(currentNumber);
      break;
    case "*":
      result = parseFloat(prevNumber) * parseFloat(currentNumber);
      break;
    default:
      return;
  }
  currentNumber = result;
  calcOperator = "";
};

//function tombol all clear
const allClear = document.querySelector(".all-clear");
allClear.addEventListener("click", (event) => {
  clearAll();
  updateScreen(currentNumber);
});

// function AC
const clearAll = () => {
  prevNumber = "";
  calcOperator = "";
  currentNumber = "0";
};

const decimal = document.querySelector(".decimal");
decimal.addEventListener("click", (event) => {
  inputDecimal(event.target.value);
  updateScreen(currentNumber);
});

//function decimal
const inputDecimal = (dot) => {
  if (currentNumber.includes(".")) {
    return;
  }
  currentNumber += dot;
};

//button percentage
const percentage = document.querySelector(".percentage");
percentage.addEventListener("click", (event) => {
  percent(currentNumber);
  updateScreen(currentNumber);
});

//function percentage
const percent = (number) => {
  currentNumber = parseFloat(number) / 100;
};
