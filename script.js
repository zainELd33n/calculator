const screen = document.getElementById("screen");
const screenText = document.getSelection("screen");
const btns = document.getElementById("btns");

btns.addEventListener('click', (e) => {
    let target = e.target;
    let value = target.value;
    if(value != undefined && value != 'AC' && value != 'DE' && value != '='){
        screen.innerHTML += value;  
    };
    if(value === 'AC'){
        screen.innerHTML = ''
    };
    if(value === 'DE') {
        screen.innerHTML = screen.textContent.slice(0, -1);
    };
});


// function operate(operation) {
//     operation = operation.split(' ');

//     let operationResult;

//     while (operation.includes('/') || operation.includes('*')) {
//     for (let i = 0; i < operation.length; i++) {
//       if (operation[i] === '*') {
//         operation[i] = operation[i + 1];
//         operation[i] *= operation[i - 1];
//         operation.splice(i + 1, 1)
//         operation.splice(i - 1, 1)
//       }
//       if (operation[i] === '/') {
//         operation[i] = operation[i - 1] / operation[i + 1];
//         operation.splice(i + 1, 1)
//         operation.splice(i - 1, 1)
//       }
//     }
//   }
// }