import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor(popupSelector, handleSubmitForm){
    super(popupSelector);
    this._handleSubmitForm = handleSubmitForm;
    this._popupForm = this._popup.querySelector("form");
    this._popupInput = Array.from(this._popupForm.querySelectorAll("input"));
  }

  _getInputValues() {
    this._formValue = {};
    this._popupInput.forEach(input => {
      this._formValue[input.name] = input.value;
    });
    return this._formValue;
  }

  setEventListeners() {
    super.setEventListeners();
    this._popupForm.addEventListener("submit", evt =>{
      evt.preventDefault();
      this._handleSubmitForm(this._getInputValues());
    })
  }

  close() {
    super.close();
    this._popupForm.reset();
  }
}
