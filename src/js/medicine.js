import { v4 as uuidv4 } from "uuid";

class Medicine {
  constructor(name, manufacturer, expiration, quantity) {
    this.name = name;
    this.id = uuidv4();
    this.manufacturer = manufacturer;
    this.expiration = expiration;
    this.quantity = quantity;
  }

  addMedicine() {
    console.log(
      `${this.quantity} ${this.name} (ID: ${this.id}), made by ${this.manufacturer}, has been added to the inventory list. It expires on ${this.expiration}.`
    );
  }
}

export default Medicine;
