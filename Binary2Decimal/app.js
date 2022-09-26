let btn = document.querySelector(".btn")
let res = document.querySelector(".result")


btn.addEventListener("click", (e) => {
    e.preventDefault()
    let binary = document.querySelector("#binary").value
    let digit = parseInt(binary, 2);
    res.textContent = digit;
})