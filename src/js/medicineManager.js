import { parse } from "uuid";
import Medicine from "./medicine.js";
import Ui from "./ui.js";
class MedicineManager {
  static medicineCollection =
    JSON.parse(localStorage.getItem("medicine-collection")) || [];

  static addMedicine(name, manufacturer, expirationDate, quantity) {
    const latestCollection =
      JSON.parse(localStorage.getItem("medicine-collection")) || [];

    let medicine;
    // Check if medicine with the same name and manufacturer exists
    const existingMedicine = latestCollection.find(
      (medicine) =>
        medicine.name === name && medicine.manufacturer === manufacturer
    );

    if (existingMedicine) {
      // If medicine exists, increase quantity by 1
      existingMedicine.quantity += parseInt(quantity, 10);
    } else {
      medicine = new Medicine(name, manufacturer, expirationDate, quantity);

      latestCollection.push(medicine);
    }
    this.storeMedicine(latestCollection);
    MedicineManager.medicineCollection = latestCollection;

    console.log(this.medicineCollection);
  }

  // Store medicine
  static storeMedicine(collection) {
    localStorage.setItem("medicine-collection", JSON.stringify(collection));
  }

  // Delete medicine
  static deleteMedicine(id) {
    const latestCollection = JSON.parse(
      localStorage.getItem("medicine-collection")
    );
    MedicineManager.medicineCollection = latestCollection.filter((medicine) => {
      return medicine.id !== id;
    });
    MedicineManager.storeMedicine(MedicineManager.medicineCollection);
    Ui.renderMedicines();
  }

  static editMedicine(id, name, manufacturer, expirationDate, quantity) {
    const latestCollection = JSON.parse(
      localStorage.getItem("medicine-collection")
    );
    const medicineIndex = latestCollection.findIndex(
      (medicine) => medicine.id === id
    );
    if (medicineIndex !== -1) {
      latestCollection[medicineIndex] = {
        id,
        name,
        manufacturer,
        expirationDate,
        quantity,
      };
    }
    MedicineManager.storeMedicine(latestCollection);
    MedicineManager.medicineCollection = latestCollection;
  }
}

export default MedicineManager;
