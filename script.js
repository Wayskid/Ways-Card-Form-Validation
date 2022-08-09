const cardNameInput = document.querySelector(".cardNameInput"),
cardNumInput = document.querySelector(".cardNumInput"),
cvcInput = document.querySelector(".cvcInput"),
MexpDateInput = document.querySelector(".MexpDateInput"),
YexpDateInput = document.querySelector(".YexpDateInput"),
formSubmit = document.querySelector("form");

formSubmit.addEventListener("submit", (e)=>{
    e.preventDefault();
    showErrEmpty(cardNameInput, cardNumInput, MexpDateInput);
    showErrEmpty(cvcInput, cardNumInput, MexpDateInput);
});


function showErrEmpty(input1, input2, input3) {
    if (input1.value.length === 0) {
        input1.nextElementSibling.style.display = "unset";
    }else {
        input1.nextElementSibling.style.display = "none";
    }

    let alph = /[A-Za-z]/g;
    let testData = alph.test(input2.value);

    if (testData === true) {
        input2.nextElementSibling.style.display = "unset";
    }else {
        input2.nextElementSibling.style.display = "none";
    }
    
    if (input3.value.length === 0 || input3.nextElementSibling.value.length === 0) {
        input3.parentElement.nextElementSibling.style.display = "unset";
    }else {
        input3.parentElement.nextElementSibling.style.display = "none";
    }

}
