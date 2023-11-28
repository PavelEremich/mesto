export default class Popup {
  constructor(popupSelector) {
    this._popup = document.querySelector(popupSelector);
    this._poppupCloseCards = this._popup.querySelector(".popup__close-cards");
  }

  open() {
    this._popup.classList.add("popup_opened");
    document.addEventListener("keydown", this._handleEscClose);
  }

  close() {
    this._popup.classList.remove("popup_opened");
    document.removeEventListener("keydown", this._handleEscClose);
  }

  _handleEscClose = (evt) => {
    if (evt.key === "Escape") {
      this.close();
    }
  }

  setEventListeners() {
    this._popup.addEventListener("mouseup", evt => {
      if (evt.target.classList.contains("popup_opened") || evt.target.classList.contains("popup__close-cards"))  {
        this.close();
    };
  });

  }
}
