/* Basic functions */
function add (n1,n2){
    return n1 + n2;
}

function substract(n1,n2){
    return n1 - n2;
}

function multiply(n1,n2){
    return n1 * n2;
}

function divide(n1,n2){
    return n1 / n2;
}

/*  Operative functions    */
function operate(operator,n1,n2){
    if (operator === "+"){
        return add(n1,n2)
    }else if(operator === "-"){
        return substract(n1,n2);
    }else if(operator === "*"){
        return multiply(n1,n2);
    }else if(operator === "/"){
        return divide(n1,n2);
    }
}
/*   DOM functions */

function allClean(){
    document.querySelector('.current-oper').textContent = "0";
    document.querySelector('.previous-oper').textContent = "";
}

function backspace(){
    if(current.textContent !== "0"){
   current.textContent = current.textContent.slice(0,-1)
        if(current.textContent.length < 1){
            current.textContent = "0"
        }
    }
}

function equal(){
    
    previous.textContent = current.textContent.replace(/[^-()\d/*+.]/g, '')
    current.textContent = eval(current.textContent.replace(/[^-()\d/*+.]/g, ''))
}


/* Selectors */


const $ac = document.querySelector('.all-clear')
const $delete = document.querySelector('.delete')
const $point = document.querySelector('.point')
const $numbers = document.querySelectorAll('.numbers')

const $equal = document.querySelector('.equal')


/*  DISPLAY    */
const current = document.querySelector('.current-oper')
const previous = document.querySelector('.previous-oper')


/*  OPERATORS   */

const $operators = document.querySelectorAll('.operation')

$operators.forEach(e => e.addEventListener('click', ()=>{
    if (!current.textContent.slice(-1).includes(e.textContent)){
    current.textContent += e.textContent
    }
}))

/* Action Buttons */

$point.addEventListener('click',()=>{
    if (!current.textContent.includes(".")){
        current.textContent += "."
    }
})

$ac.addEventListener('click',allClean)
$delete.addEventListener('click',backspace)
$equal.addEventListener('click', equal)

$numbers.forEach(e => e.addEventListener('click',() => {
    if (current.textContent == "0"){
        current.textContent = e.textContent
    }else{
        current.textContent += e.textContent
    }
}))













