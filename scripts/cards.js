import {popupImage, popupPhoto, popupTitle} from "./index.js";

export default class Card {
  constructor(data, templateSelector) {
    this._name = data.name;
    this._link = data.link;
    this._templateSelector = templateSelector;
  }

  _getTemplate() {
    const cardTemplate = document.querySelector(this._templateSelector).content.querySelector('.elements__item').cloneNode(true);
    return cardTemplate;
  }

  generateCard() {
    this._element = this._getTemplate();
    this._element.querySelector(".elements__photo").src = this._link;
    this._element.querySelector(".elements__photo").alt = this._name;
    this._element.querySelector(".elements__name").textContent = this._name;
    this._element.querySelector(".elements__button-delete").addEventListener("click", () => {
      this._deleteCardButton()
    });
    this._element.querySelector(".elements__button-like").addEventListener("click",() => {
      this._toggleLike()
    });
    this._element.querySelector(".elements__photo").addEventListener("click",  () => {
      this._openPopupImage()
    });
    return this._element;
  };

  _deleteCardButton() {
    this._element.remove();
  };

  _toggleLike() {
    this._element.querySelector(".elements__button-like").classList.toggle('elements__button-like-active');
  };

  _openPopupImage() {
    openPopup(popupImage);
    popupPhoto.src =  this._link;
    popupPhoto.alt =  this._name;
    popupTitle.textContent =  this._name;
  };
}

