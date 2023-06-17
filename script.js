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
        console.log(input.textContent);
        output.innerHTML = operate(input.textContent);
    };
});


function operate(operation) {}