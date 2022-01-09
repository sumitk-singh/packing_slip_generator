const clientDetails = document.querySelectorAll(".clientDetails");
const coilInputField = document.querySelectorAll(".coilInputField");

const clientName = document.querySelectorAll("#clientName");
const station = document.querySelector("#station");
const totalQty = document.querySelector("#totalQty");
const totalWeight = document.querySelector("#totalWeight");
const qrCode = document.querySelector("#qrCode");

const myForm = document.querySelector("#myForm");

const resetBtn = document.querySelector("#resetBtn");
const generateBtn = document.querySelector("#generateBtn");


function resetInputField() {
    myForm.reset();
}

function generatePackingSlip() {
    clientName.innerHTML = "abc";

}

function downloadPdf() {

}

resetBtn.addEventListener("click", resetInputField);
generateBtn.addEventListener("click", generatePackingSlip)