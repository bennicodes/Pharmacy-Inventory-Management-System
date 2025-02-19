import Ui from "./ui.js";
// Selecting elements
const addMedicineModal = document.querySelector(".add-medicine");
const openAddMedicineModalButton = document.querySelector(
  ".add-medicine__button"
);
const closeAddMedicineModalButton = document.querySelector(
  ".add-medicine__close-button"
);

document.addEventListener("DOMContentLoaded", () => {
  Ui.displayAddMedicine(openAddMedicineModalButton, addMedicineModal);
  Ui.closeAddMedicineModal(closeAddMedicineModalButton, addMedicineModal);
});
