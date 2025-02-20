import { parse } from "uuid";
import Medicine from "./medicine.js";
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

  static storeMedicine(collection) {
    localStorage.setItem("medicine-collection", JSON.stringify(collection));
  }
}

export default MedicineManager;
