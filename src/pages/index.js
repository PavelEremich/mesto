import Card from "../components/Card.js";
import { initialCards, setting } from "../utils/constants.js";
import FormValidator from "../components/FormValidator.js";
import Section from "../components/Section.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import UserInfo from "../components/UserInfo.js";
import "./index.css";

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
const cardsElements = document.querySelector(".elements");


buttonAdd.addEventListener("click", () => {
  formCreate.disableSubmitButtonAdd();
  addPopupWithForm.open();
});

const formCreate = new FormValidator(setting, formAdd);
formCreate.enableValidation();

const formEdit = new FormValidator(setting, formEd);
formEdit.enableValidation();

const imageOpen = new PopupWithImage(".popup_type_image");

const addCard = (data) => {
  const newCard = new Card(data, "#card-template", handleCardClick);
  return newCard.generateCard();
};

imageOpen.setEventListeners();

const userInfo = new UserInfo ({
  name: ".profile__name-edit",
  info: ".profile__profession"
});

buttonEd.addEventListener("click", function() {
  const information = userInfo.getUserInfo();
  popupName.value = information.name;
  popupJob.value = information.info;
  editPopupWithForm.open();
  formEdit.resetValidityForm();
});

const editPopupWithForm = new PopupWithForm(".popup_type_profile", (element) => {
  userInfo.setUserInfo({
    name: element['profile-name'],
    info: element['profile-job']
});
  editPopupWithForm.close();
});

editPopupWithForm.setEventListeners();

const addPopupWithForm = new PopupWithForm(".popup_type_cards", (element) => {
  const cardNameLink = {
    name: element['cards'],
    link: element['cards-link']
  };
  section.addItem(addCard(cardNameLink));
  addPopupWithForm.close();
});

addPopupWithForm.setEventListeners();

const section = new Section({
  items: initialCards,
  renderer: items => section.addItem(addCard(items))
  },

  ".elements__items"
  );

section.renderItems();

function handleCardClick(name, link) {
  imageOpen.open(name, link);
}


