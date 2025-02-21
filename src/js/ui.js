import MedicineManager from "./medicineManager";

class Ui {
  static currentEditId = null;
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

  static displayDeleteModal(medicineId, medicineName) {
    const deleteModal = document.querySelector(".delete-modal-container");
    const deleteMessage = document.querySelector(".delete-modal__text");
    const confirmDeleteButton = document.querySelector(
      ".delete-modal__button--confirm"
    );

    deleteMessage.textContent = `Are you sure you want to delete ${medicineName}?`;
    deleteModal.classList.add("display-delete-modal");

    confirmDeleteButton.addEventListener("click", () => {
      MedicineManager.deleteMedicine(medicineId);
      deleteModal.classList.remove("display-delete-modal");
    });
  }

  static closeDeleteModal() {
    const deleteModal = document.querySelector(".delete-modal-container");
    const cancelDeleteButton = document.querySelector(
      ".delete-modal__button--cancel"
    );
    cancelDeleteButton.addEventListener("click", () => {
      deleteModal.classList.remove("display-delete-modal");
    });
  }

  static renderMedicines() {
    const medicineList = document.querySelector(".inventory__medicine-list");
    medicineList.innerHTML = "";

    const medicines =
      JSON.parse(localStorage.getItem("medicine-collection")) || [];

    medicines.forEach((medicine, index) => {
      const row = document.createElement("tr");
      row.classList.add("inventory__table-row");

      // Create table cells dynamically
      const nameCell = document.createElement("td");
      nameCell.textContent = medicine.name;

      const idCell = document.createElement("td");
      idCell.textContent = index + 1;

      const manufacturerCell = document.createElement("td");
      manufacturerCell.textContent = medicine.manufacturer;

      const expirationDateCell = document.createElement("td");
      expirationDateCell.textContent = medicine.expirationDate;

      const quantityCell = document.createElement("td");
      quantityCell.textContent = medicine.quantity;

      const actionButtonsContainer = document.createElement("div");
      actionButtonsContainer.classList.add("action-buttons__container");
      const actionsCell = document.createElement("td");

      // Create Edit Button
      const editButton = document.createElement("button");
      editButton.textContent = "✎";
      editButton.classList.add("edit-button");
      editButton.setAttribute("data-id", index);

      // Create Delete Button
      const deleteButton = document.createElement("button");
      deleteButton.textContent = "❌";
      deleteButton.classList.add("delete-button");
      deleteButton.setAttribute("data-id", index);

      // Append buttons to actions cell
      actionsCell.append(actionButtonsContainer);
      actionButtonsContainer.append(editButton, deleteButton);

      // Append all table cells to the row
      row.append(
        nameCell,
        idCell,
        manufacturerCell,
        expirationDateCell,
        quantityCell,
        actionsCell
      );

      // Append row to the table body
      medicineList.append(row);

      // Event listeners
      deleteButton.addEventListener("click", () => {
        Ui.displayDeleteModal(medicine.id, medicine.name);
      });
    });
  }
}
export default Ui;
