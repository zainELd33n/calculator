const input = document.getElementById("input");
const output = document.getElementById("output");
const btns = document.getElementById("btns");

let operationResult;



btns.addEventListener('click', (e) => {
    let target = e.target;
    let value = target.value;
    if(input.textContent.length > 15) {
        input.style.fontSize = "20px";
    }
    if(value != undefined && value != 'AC' && value != 'DE' && value != '='){
        input.innerHTML += value;  
    };
    if(value === 'AC'){
        input.innerHTML = '';
        output.innerHTML = '';
    };
    if(value === 'DE') {
        input.innerHTML = input.textContent.slice(0, -1);
    };
    if(value === '=' && input.textContent === ''){
        output.innerHTML = '';
    }
    if(value === '=') {
        output.innerHTML = operate(input.textContent);
    };
});


    function operate(operation) {
        // turning operation into an array
        operation = operation.split(' ')
      
        // stores the result of operation
        let operationResult;
        // this loop will go through every element of the array and operates every * or / operation and shrinks the string down until there is no more * or / left
        while (operation.includes('/') || operation.includes('*')) {
          for (let i = 0; i < operation.length; i++) {
            if (operation[i] === '*') {
              operation[i] = operation[i + 1];
              operation[i] *= operation[i - 1];
              operation.splice(i + 1, 1)
              operation.splice(i - 1, 1)
            }
            if (operation[i] === '/') {
              operation[i] = operation[i - 1] / operation[i + 1];
              operation.splice(i + 1, 1)
              operation.splice(i - 1, 1)
            }
          }
        }
        // this loop will go through every element of the array and operates every - or + operation and shrinks the string down until there is no more - or + left
        while (operation.includes('+') || operation.includes('-')) {
          for (let i = 0; i < operation.length; i++) {
            if (operation[i] === '+') {
              operation[i + 1] = Number(operation[i + 1]);
              operation[i - 1] = Number(operation[i - 1]);
              operation[i] = operation[i + 1];
              operation[i] += operation[i - 1];
              operation.splice(i + 1, 1)
              operation.splice(i - 1, 1)
            }
            if (operation[i] === '-') {
              operation[i] = operation[i - 1];
              operation[i] -= operation[i + 1];
              operation.splice(i + 1, 1)
              operation.splice(i - 1, 1)
            }
          }
        }
        /* Checking to see if the result have a decimal point if so round it up to two decimal points for better readability else just set operation result to it's original value*/
        if (operation[0] % 1 !== 0) {
          operationResult = Math.round(operation[0] * 100) / 100;
        } else {
          operationResult = operation[0];
        }
        return operationResult;
      }
