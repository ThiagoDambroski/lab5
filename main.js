

let frist = document.getElementById("above")
const frist_phase = frist.innerHTML
frist.onmousemove = () => frist.innerHTML = "Obrigado por passares"
frist.onmouseleave = () => frist.innerHTML = frist_phase

let second = document.getElementById("paint")
const listButton  = document.getElementsByClassName("paint-btn")
for(let b of listButton){
    b.onclick = () => second.style.color = b.textContent
}



let bckInput = document.getElementById("bckg-input")


const returnRandomColor = () => {
    
    return Math.floor(Math.random() * 256)
}

bckInput.oninput = () => bckInput.style.backgroundColor = `rgb(${returnRandomColor()},${returnRandomColor()},${returnRandomColor()})`

//let forth = document.getElementById("main")
//let select = document.getElementById("select-color")

document.querySelector('select').addEventListener('change', () => {
    document.querySelector('body').style.backgroundColor = this.value;
})

//select.onchange = () => forth.style.backgroundColor = this.value 


 
let fifth = document.getElementById("count")
let count = Number(localStorage.getItem("count") ?? 0)
const buttonCount = document.getElementById("count-btn")

fifth.textContent = count

buttonCount.onclick = () => {
    fifth.textContent = ++count
    localStorage.setItem("count",count)
}

let sixth = document.getElementById("name")
let inputName = document.getElementById("name-input")
let inputAge = document.getElementById("age-input")
const submitButton = document.getElementById("submit")

submitButton.onclick = () => sixth.textContent = `eu sou ${inputName.value} tenho ${inputAge.value} anos`

let seconds = document.getElementById("seconds")
let secondsPassed = 0 
setInterval(() => {
    seconds.textContent = ++secondsPassed
}, 1000)