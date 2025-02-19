class Ui {
  static displayAddMedicine(openAddMedicineModalButton, addMedicineModal) {
    openAddMedicineModalButton.addEventListener("click", () => {
      addMedicineModal.classList.add("display-add-medicine");
    });
  }

  static closeAddMedicineModal(closeAddMedicineModalButton, addMedicineModal) {
    closeAddMedicineModalButton.addEventListener("click", () => {
      addMedicineModal.classList.remove("display-add-medicine");
    });
  }
}

export default Ui;
