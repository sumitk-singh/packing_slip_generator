const clientName = document.querySelector("#clientName");
const inputField = document.querySelector(".inputField");

const resetBtn = document.querySelector("#resetBtn");


function resetInputField() {
    clientName.value = "";
    inputField.value = "";
}

function generatePackingSlip() {

}

function downloadPdf() {

}

resetBtn.addEventListener('click', resetInputField);