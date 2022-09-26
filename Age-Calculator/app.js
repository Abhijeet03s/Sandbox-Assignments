const months = [31, 28, 31, 30, 31, 30, 31, 30, 30, 31, 30, 31]

const container = document.querySelector(".container");
const error = document.querySelector(".error")
const showAge = document.querySelector(".desc")
const yourDOB = document.querySelector("#dob")
const year = document.querySelector("#years")
const month = document.querySelector("#months")
const day = document.querySelector("#days")


function getAge() {
    let today = new Date()
    let inputDate = new Date(document.getElementById("dob").value)
    let birthDate, birthMonth, birthYear;

    let birthDetails = {
        date: inputDate.getDate(),
        month: inputDate.getMonth(),
        year: inputDate.getFullYear()
    }

    let curr_year = today.getFullYear()
    let curr_month = today.getMonth() + 1
    let curr_date = today.getDate()

    if (
        birthDetails.year > curr_year ||
        (birthDetails.month > curr_month) &&
        birthDetails.year > curr_year ||
        (birthDetails.date > curr_date && birthDetails.month == curr_month && birthDetails.year == curr_year)
    ) {
        alert("Not born yet!")
        return;
    }

    birthYear = curr_year - birthDetails.year;

    if (curr_month >= birthDetails.month) {
        birthMonth = curr_month - birthDetails.month
    }
    else {
        birthYear--;
        birthMonth = 12 + curr_month - birthDetails.month;
    }
    if (curr_date >= birthDetails.date) {
        birthDate = curr_date - birthDetails.date;
    }
    else {
        birthMonth--;
        let days = months[curr_month - 2];
        birthDate = days + curr_date - birthDetails.date
        if (birthMonth < 0) {
            birthMonth = 11;
            birthYear--
        }
    }
    displayAge(birthDate, birthMonth, birthYear);
}

function displayAge(bDate, bMonth, bYear) {
    container.querySelector(".desc").innerText = `Your age is: ${bYear}`
    document.getElementById("years").textContent = bYear;
    document.getElementById("months").textContent = bMonth;
    document.getElementById("days").textContent = bDate;
    getAge();
}

document.querySelector("#dob").setAttribute("onchange", "displayAge()");




