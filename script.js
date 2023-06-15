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