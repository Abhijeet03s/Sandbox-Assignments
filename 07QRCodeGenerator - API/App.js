let input = document.querySelector("#input")
let btn = document.querySelector("#submit")
let qrImg = document.querySelector("#img")


btn.addEventListener("click", function () {
    let data = input.value;
    fetch(`http://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${data}`)
        .then((response) => {
            qrImg.setAttribute("src", response.url);
            qrImg.style.display = "block"
        })
        .catch(err => console.error(err));
})
