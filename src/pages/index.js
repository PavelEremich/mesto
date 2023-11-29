import Card from "../components/Card.js";
import { initialCards, setting } from "../utils/constants.js";
import FormValidator from "../components/FormValidator.js";
import Section from "../components/Section.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import UserInfo from "../components/UserInfo.js";
import "./index.css";

const buttonEd = document.querySelector(".profile__button-edit");
const popupName = document.querySelector(".popup__input_type_name");
const popupJob = document.querySelector(".popup__input_type_job");
const formEd = document.querySelector(".popup__form_type_profile");
const buttonAdd = document.querySelector(".profile__button-add");
const formAdd = document.querySelector(".popup__form_type_cards");


buttonAdd.addEventListener("click", () => {
  formCreateValidator.disableSubmitButtonAdd();
  addPopupWithForm.open();
});

const formCreateValidator = new FormValidator(setting, formAdd);
formCreateValidator.enableValidation();

const formEditValidator = new FormValidator(setting, formEd);
formEditValidator.enableValidation();

const imageOpen = new PopupWithImage(".popup_type_image");

const createCard = (data) => {
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
  formEditValidator.resetValidityForm();
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
  section.addItem(createCard(cardNameLink));
  addPopupWithForm.close();
});

addPopupWithForm.setEventListeners();

const section = new Section({
  items: initialCards,
  renderer: items => section.addItem(createCard(items))
  },

  ".elements__items"
  );

section.renderItems();

function handleCardClick(name, link) {
  imageOpen.open(name, link);
}


