import Medicine from "./medicine.js";
import MedicineManager from "./medicineManager.js";
import Ui from "./ui.js";

// Selecting dom elements
const medicineModal = document.querySelector(".add-medicine");
const addMedicineButton = document.querySelector(".add-medicine__button");

const formSubmitButton = document.querySelector(
  ".add-medicine__confirm-button"
);
const closeMedicineModalButton = document.querySelector(
  ".add-medicine__close-button"
);

// Selecting form inputs
const form = document.querySelector(".add-medicine__form");
const name = document.querySelector(".add-medicine__name-input");
const manufacturer = document.querySelector(
  ".add-medicine__manufacturer-input"
);
const expirationDate = document.querySelector(".add-medicine__date-input");
const quantity = document.querySelector(".add-medicine__quantity-input");

const validationMessage = document.querySelector(".validation-message");

document.addEventListener("DOMContentLoaded", () => {
  Ui.displayAddMedicine(
    addMedicineButton,
    medicineModal,
    form,
    validationMessage,
    formSubmitButton
  );

  Ui.closeAddMedicineModal(closeMedicineModalButton, medicineModal);

  // Handle add medicine event
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    if (!Ui.currentEditId) {
      MedicineManager.addMedicine(
        name.value.trim(),
        manufacturer.value.trim(),
        expirationDate.value,
        quantity.value
      );
    } else {
      MedicineManager.editMedicine(
        Ui.currentEditId,
        name.value.trim(),
        manufacturer.value.trim(),
        expirationDate.value,
        quantity.value
      );
      Ui.currentEditId = null;
      medicineModal.classList.remove("display-add-medicine");
    }
  });
});
