const cardNameInput = document.querySelector(".cardNameInput"),
cardNumInput = document.querySelector(".cardNumInput"),
cvcInput = document.querySelector(".cvcInput"),
MexpDateInput = document.querySelector(".MexpDateInput"),
YexpDateInput = document.querySelector(".YexpDateInput"),
formSubmit = document.querySelector("form"),
pseudoNum = document.querySelector(".pseudoNum"),
pseudoCardNum = Array.from(pseudoNum.children),
pseudoName = document.querySelector(".pseudoName"),
mm = document.querySelector(".mm"),
yy = document.querySelector(".yy"),
pseudoCvc = document.querySelector(".backMid"),
errMsgs = document.querySelectorAll(".errMsg"),
thanksPopup = document.querySelector(".thanksPopup"),
thanksPopupBtn = document.querySelector(".thanksPopup>button");



formSubmit.addEventListener("submit", (e)=>{
    e.preventDefault();

    if (
        cardNameInput.value.length < 2 ||
        cardNumInput.value.length < 19 ||
        MexpDateInput.value.length < 2 ||
        YexpDateInput.value.length < 2 ||
        cvcInput.value.length < 3
    ) {
        showErrEmpty(cardNameInput, MexpDateInput);
        showErrEmpty(cvcInput, MexpDateInput);
        cardNumErr(cardNumInput);
    } else {
        thanksPopup.style.display = "grid";
        formSubmit.style.display = "none";

        thanksPopupBtn.addEventListener("click", ()=>{
            window.location.reload();
        })

        //Pseudo Card name replacement
        replacement(pseudoName, cardNameInput.value);

        //Pseudo Card number replacement
        let fouralph = /\d{3}[0-9]/g,
        fff = cardNumInput.value,
        tested = fff.match(fouralph);

        replacement(pseudoCardNum[0], tested[0]);
        replacement(pseudoCardNum[1], tested[1]);
        replacement(pseudoCardNum[2], tested[2]);
        replacement(pseudoCardNum[3], tested[3]);

        //Pseudo Card month, year and cvc replacement
        replacement(mm, MexpDateInput.value);
        replacement(yy, YexpDateInput.value);
        replacement(pseudoCvc, cvcInput.value);
    }

});


// ErrMesages for Input fields
function showErrEmpty(input1, input2) {

    if (input1.value.length === 0) {
        input1.nextElementSibling.style.display = "unset";
    }else {
        input1.nextElementSibling.style.display = "none";
    }


    if (input2.value.length === 0 || input2.nextElementSibling.value.length === 0) {
        input2.parentElement.nextElementSibling.style.display = "unset";
    }else {
        input2.parentElement.nextElementSibling.style.display = "none";
    }
}

//CardNum Error
function cardNumErr(data1) {
    let alph = /[A-Za-z]/g;
    let testData = alph.test(data1.value);

    if (testData === true || data1.value.length < 19) {
        data1.nextElementSibling.style.display = "unset";
    }else {
        data1.nextElementSibling.style.display = "none";
    }
}

//Replacements
function replacement(data1, data2) {
    data1.innerText = data2;
}


// Give space as you type in card number
cardNumInput.addEventListener("keyup", ()=>{
    if (cardNumInput.value.length === 4) {
        cardNumInput.value += " ";
    }
    else if (cardNumInput.value.length === 9) {
        cardNumInput.value += " ";
    }
    else if (cardNumInput.value.length === 14) {
        cardNumInput.value += " ";
    }
})


