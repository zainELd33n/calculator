const input = document.getElementById("input");
const output = document.getElementById("output");
const btns = document.getElementById("btns");

let operationResult;

btns.addEventListener('click', (e) => {
    let target = e.target;
    let value = target.value;
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
    }
});


function operate(operation) {
    operation = operation.split(' ');
    
    while(operation.includes(' * ') || operation.includes(' / ')) {
        for(let i = 0; i < operation.length; i++){
            if(operation[i] === ' * ') {
                Number(operation[i - 1]) *= Number(operation[i + 1]);
                operation.splice(i + 1, 1);
                operation.splice(i - 1, 1);
            }
        }
    }
}