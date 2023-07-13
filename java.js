const btnElement = document.getElementById("btn")
const birthdayElement = document.getElementById("birthday")
const ResultElement = document.getElementById("result")

function calculateAge () {
    const birthdayValue = birthdayElement.value; 
    if(birthdayValue === "") {
        alert("Please enter your birthday")
    } else {
        const age = getAge(birthdayValue)
        ResultElement.innerText = `You are ${age} ${age > 1 ? "years" : "year"} old`; 
    } 
}

function getAge (birthdayValue) {
    const currentDate = new Date();
    const birthdayDate = new Date(birthdayValue);
/*  console.log(birthdayDate.getFullYear()); */
    let age = currentDate.getFullYear() - birthdayDate.getFullYear();
    const month = currentDate.getMonth() - birthdayDate.getMonth();

    if(month < 0 || (month === 0  && currentDate.getDate() < birthdayDate.getDate())) {
        age--
    }

    return age;
}

btnElement.addEventListener("click", calculateAge)