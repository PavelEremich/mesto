import Card from "./Card.js";
import FormValidator from "./FormValidator.js";
import { initialCards, setting } from "./constants.js";

const buttonEd = document.querySelector(".profile__button-edit");
const popupEd = document.querySelector(".popup_type_profile");
const popupAdd = document.querySelector(".popup_type_cards");
const inputName = document.querySelector(".profile__name-edit");
const inputProfession = document.querySelector(".profile__profession");
const popupName = document.querySelector(".popup__input_type_name");
const popupJob = document.querySelector(".popup__input_type_job");
const formEd = document.querySelector(".popup__form_type_profile");
const profileClose = document.querySelector(".popup__close-profile");
const cardsClose = document.querySelector(".popup__close-cards");
const imageClose = document.querySelector(".popup__close-image");
const buttonAdd = document.querySelector(".profile__button-add");
const cardTemplate = document.querySelector("#card-template");
const tamplateContent = cardTemplate.content;
const cardsItem = tamplateContent.querySelector(".elements__item");
const cardsList = document.querySelector(".elements__items");
const formAdd = document.querySelector(".popup__form_type_cards");
const popupPlace = document.querySelector(".popup__input_type_place");
const popupLink = document.querySelector(".popup__input_type_link");
const popupPhoto = document.querySelector(".popup__card-image");
const popupTitle = document.querySelector(".popup__title-image");
const popupImage = document.querySelector(".popup_type_image");
const popupSaveAdd = document.querySelector('.popup__save_add');

function openPopup(popupOpen) {
  popupOpen.classList.add('popup_opened');
  document.addEventListener('keydown', closeByEscape);
  document.addEventListener("mousedown", closeByOverlay);
};

buttonEd.addEventListener("click", function() {
  popupName.value = inputName.textContent;
  popupJob.value = inputProfession.textContent;
  openPopup(popupEd);
  formEdit.resetValidityForm();
});

function editFormSubmit (evt) {
    evt.preventDefault();
    inputName.textContent = popupName.value;
    inputProfession.textContent = popupJob.value;
    closePopup(popupEd);
};

formEd.addEventListener('submit', editFormSubmit);

function closePopup(popupClose) {
    popupClose.classList.remove('popup_opened');
    document.removeEventListener('keydown', closeByEscape);
    document.removeEventListener("mousedown", closeByOverlay);
};
profileClose.addEventListener('click', function(){
  closePopup(popupEd)
});

buttonAdd.addEventListener("click", function() {
  formCreate.disableSubmitButtonAdd();
  openPopup(popupAdd);
  formCreate.resetValidityForm();
  formAdd.reset();
});

cardsClose.addEventListener('click', function(){
  closePopup(popupAdd);
});

imageClose.addEventListener('click', function(){
  closePopup(popupImage)
});

const openPopupImage = (item) => {
  openPopup(popupImage);
  popupPhoto.src = item.link;
  popupPhoto.alt = item.name;
  popupTitle.textContent = item.name;
};

const addCard = (item) => {
  const newCard = new Card(item, "#card-template", openPopupImage);
  return newCard.generateCard();
}

initialCards.forEach((item) => {
  addCard(item, "#card-template", openPopupImage);
  cardsList.append(addCard(item));
  });

function createFormSubmit (evt) {
  evt.preventDefault();
  const itemCreate = {};
  itemCreate.name = popupPlace.value;
  itemCreate.link = popupLink.value;
  addCard( itemCreate, "#card-template", openPopupImage);
  cardsList.prepend(addCard(itemCreate));
  closePopup(popupAdd);
  formAdd.reset();
};

const formCreate = new FormValidator(setting, formAdd);
formCreate.enableValidation();

const formEdit = new FormValidator(setting, formEd);
formEdit.enableValidation();

formAdd.addEventListener('submit', createFormSubmit);

 function closeByEscape (evt) {
  if (evt.key === "Escape") {
    const popupOpened = document.querySelector(".popup_opened");
    closePopup(popupOpened);
  }
};

function closeByOverlay (evt) {
  const popupOpened = document.querySelector(".popup_opened");
  if (evt.target === popupOpened) {
    closePopup(popupOpened);
  }
};

