const btnsFrame = document.getElementById("cal");
const numsFrame = document.getElementById("nums");
const operationsFrame = document.getElementById("operations");

function makeNums() {
numsFrame.style.setProperty('grid-template-rows', `repeat(${3}, 1fr)`);
numsFrame.style.setProperty('grid-template-columns', `repeat(${3}, 1fr)`);
    for (c = 1; c <= 9; c++) {
        let cell = document.createElement("div");
        let grid = numsFrame.appendChild(cell);
        grid.className = `grid-item`;
        grid.setAttribute('id', `num${c}`);
        grid.innerHTML = `${c}`;
        let x = document.getElementById(`num${c}`);
        x.setAttribute('style', 'background-color: #f3fae1; border-radius: 25px;');
        
    };
};
makeNums();

function makeZeroBtn() {
    let btnDiv = document.createElement("div");
    let btn = btnsFrame.appendChild(btnDiv);
    btn.setAttribute('id', 'zeroBtn');
    btn.innerHTML = '0'
    btn.setAttribute('style', 'background-color: #f3fae1; border-radius: 25px;');

};
makeZeroBtn();

function makeOperations() {
    for(i = 1; i <= 5; i++) {
        let oper = document.createElement("div");
        let column = operationsFrame.appendChild(oper);
        column.className = `operColumn`;
        switch(i) {
            case 1:
            column.setAttribute('id', `multiply`)
            column.setAttribute('style', 'background-color: #f3fae1; border-radius: 25px; height: 84px;');
            column.innerHTML = "*"
            break
            case 2:
            column.setAttribute('id', `divide`)
            column.setAttribute('style', 'background-color: #f3fae1; border-radius: 25px; height: 84px;');
            column.innerHTML = "/"
            break
            case 3:
            column.setAttribute('id', `subtract`)
            column.setAttribute('style', 'background-color: #f3fae1; border-radius: 25px; height: 84px;');
            column.innerHTML = "-"
            break
            case 4:
            column.setAttribute('id', `addition`)
            column.setAttribute('style', 'background-color: #f3fae1; border-radius: 25px; height: 84px;');
            column.innerHTML = "+"
            break
            case 5:
            column.setAttribute('id', `equals`)
            column.setAttribute('style', 'background-color: #f3fae1; border-radius: 25px; height: 84px;');
            column.innerHTML = "="
            break
        
        };
    };
};
makeOperations();