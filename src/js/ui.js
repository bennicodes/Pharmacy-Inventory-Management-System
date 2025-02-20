class Ui {
  static displayAddMedicine(
    addMedicineButton,
    medicineModal,
    form,
    validationMessage,
    formSubmitButton
  ) {
    addMedicineButton.addEventListener("click", () => {
      form.reset();
      medicineModal.classList.add("display-add-medicine");
    });
    validationMessage.style.display = "none";
    formSubmitButton.textContent = "Add";
  }

  static closeAddMedicineModal(closeMedicineModalButton, medicineModal) {
    closeMedicineModalButton.addEventListener("click", () => {
      medicineModal.classList.remove("display-add-medicine");
    });
  }
}

export default Ui;
