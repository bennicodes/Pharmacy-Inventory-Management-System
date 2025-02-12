import MedicineManager from "./medicineManager.js";
import Medicine from "./medicine.js";

const addMedicineForm = document.querySelector(".add-medicine__form");

addMedicineForm.addEventListener("submit", (e) => {
  e.preventDefault();

  createMedicine();
});
