const clientDetails = document.querySelectorAll(".clientDetails");
const coilInputField = document.querySelectorAll(".coilInputField");

const resetBtn = document.querySelector("#resetBtn");


function resetInputField() {
    // for (let i = 0; i <= clientDetails.length; i++) {
    //     clientDetails[i].value = "";
    // }
    // for (let i = 0; i <= coilInputField.length; i++) {
    //     coilInputField[i].value = "";
    // }s

    for (let i = 0, j = 0; i <= clientDetails.length && j <= coilInputField.length; i++, j++) {
        clientDetails[i].value = "";
        coilInputField[j].value = "";

    }

}

function generatePackingSlip() {

}

function downloadPdf() {

}

resetBtn.addEventListener("click", resetInputField);