export default class Card {
  constructor(data, templateSelector, openPopupImage) {
    this._name = data.name;
    this._link = data.link;
    this._templateSelector = templateSelector;
    this._openPopupImage = openPopupImage;
  }

  _getTemplate() {
    const cardTemplate = document.querySelector(this._templateSelector).content.querySelector('.elements__item').cloneNode(true);
    return cardTemplate;
  }

  generateCard() {
    this._element = this._getTemplate();
    this._cardsPhoto = this._element.querySelector(".elements__photo");
    this._cardsPhoto.src = this._link;
    this._cardsPhoto.alt = this._name;
    this._element.querySelector(".elements__name").textContent = this._name;
    this._element.querySelector(".elements__button-delete").addEventListener("click", () => {
      this._deleteCardButton()
    });
    this._element.querySelector(".elements__button-like").addEventListener("click",() => {
      this._toggleLike()
    });
    this._cardsPhoto.addEventListener("click",  () => {
      this._openPopupImage({
        link: this._link,
        alt: this._name,
        name: this._name,
      })
    });
    return this._element;
  };

  _deleteCardButton() {
    this._element.remove();
  };

  _toggleLike() {
    this._element.querySelector(".elements__button-like").classList.toggle('elements__button-like-active');
  };

}

