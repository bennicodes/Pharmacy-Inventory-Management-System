class Validation {
  static validateForm(validationMessage) {
    const fieldsToValidate = [
      {
        name: "medicine-name",
        message: "Please enter medicine name",
      },
      {
        name: "medicine-manufacturer",
        message: "Please enter manufacture name",
      },
      {
        name: "medicine-expiration-date",
        message: "Please enter the expiration date",
      },
      {
        name: "medicine-quantity",
        message: "Please enter an amount of medicines",
      },
    ];

    for (let field of fieldsToValidate) {
      const inputField = document.querySelector(`[id=${field.name}]`);
      inputField.classList.remove("form__invalid-input");
      validationMessage.textContent = "";
      inputField.addEventListener("input", () => {
        inputField.classList.remove("form__invalid-input");
        validationMessage.textContent = "";
      });
      if (!inputField.value.trim()) {
        validationMessage.style.display = "block";
        validationMessage.textContent = field.message;
        inputField.classList.add("form__invalid-input");
        return false;
      }
    }
    return true;
  }
}

export default Validation;
