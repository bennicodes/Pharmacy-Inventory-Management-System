import {
  Medicine,
  OverTheCounterMedicine,
  PrescriptionMedicine,
} from "./medicine.js";
import Ui from "./ui.js";
class MedicineManager {
  static medicineCollection =
    JSON.parse(localStorage.getItem("medicine-collection"))?.map((medicine) => {
      return medicine.isPrescription
        ? new PrescriptionMedicine(
            medicine.name,
            medicine.manufacturer,
            medicine.expirationDate,
            medicine.quantity
          )
        : new OverTheCounterMedicine(
            medicine.name,
            medicine.manufacturer,
            medicine.expirationDate,
            medicine.quantity
          );
    }) || [];

  static addMedicine(
    name,
    manufacturer,
    expirationDate,
    quantity,
    isPrescription
  ) {
    const latestCollection =
      JSON.parse(localStorage.getItem("medicine-collection")) || [];

    let medicine;
    // Use boolean value directly
    if (isPrescription) {
      medicine = new PrescriptionMedicine(
        name,
        manufacturer,
        expirationDate,
        quantity
      );
    } else {
      medicine = new OverTheCounterMedicine(
        name,
        manufacturer,
        expirationDate,
        quantity
      );
    }

    // Check if medicine with the same name, manufacturer, and expiration date exists
    const existingMedicine = latestCollection.find(
      (medicine) =>
        medicine.name === name &&
        medicine.manufacturer === manufacturer &&
        medicine.expirationDate === expirationDate
    );

    // If medicine exists, increase quantity
    if (existingMedicine) {
      existingMedicine.quantity += parseInt(quantity, 10);
    } else {
      latestCollection.push(medicine);
    }

    this.storeMedicine(latestCollection);
    MedicineManager.medicineCollection = latestCollection;
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
