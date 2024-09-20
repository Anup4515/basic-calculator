let expression = "";

function display(value) {
  expression += value;
  document.getElementById("result").value = expression;
}

function clearScreen() {
  expression = "";
  document.getElementById("result").value = expression;
}

function calculate(operator) {
  
    
      let result = eval(expression);
      expression = result;
      document.getElementById("result").value = expression;
    
  
}
