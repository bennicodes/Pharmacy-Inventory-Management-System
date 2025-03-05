import { v4 as uuidv4 } from "uuid";
class Medicine {
  constructor(name, manufacturer, expirationDate, quantity) {
    this.id = uuidv4();
    this.name = name;
    this.manufacturer = manufacturer;
    this.expirationDate = expirationDate;
    this.quantity = parseInt(quantity, 10);
  }
}

class PrescriptionMedicine extends Medicine {
  constructor(name, manufacturer, expirationDate, quantity, prescription) {
    super(name, manufacturer, expirationDate, quantity);
    this.isPrescription = true;
  }
}

class OverTheCounterMedicine extends Medicine {
  constructor(name, manufacturer, expirationDate, quantity) {
    super(name, manufacturer, expirationDate, quantity);
    this.isPrescription = false;
  }
}

export { Medicine, OverTheCounterMedicine, PrescriptionMedicine };
