let canva = document.querySelector("#canvas")
let btn = document.querySelector("#button")

btn.addEventListener("click", changeRandomColor)

function changeRandomColor() {
    let hex = '0123456789ABCDEF'
    let conct = '#'
    for (let i = 0; i < 6; i++) {
        conct = conct + hex[Math.floor(Math.random() * 16)]
    }
    return canva.style.backgroundColor = conct
}


