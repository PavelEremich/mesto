let buttonEd = document.querySelector(".profile__button-edit");
let popupEd = document.querySelector(".popup_type_profile");
let popupElement = document.querySelector(".popup");
let popupAdd = document.querySelector(".popup_type_cards");
let inputName = document.querySelector(".profile__name-edit");
let inputProfession = document.querySelector(".profile__profession");
let popupName = document.querySelector(".popup__input_type_name");
let popupJob = document.querySelector(".popup__input_type_job");
let formEd = document.querySelector(".popup__form_type_profile");
let profileClose = document.querySelector(".popup__close-profile");
let cardsClose = document.querySelector(".popup__close-cards");
let imageClose = document.querySelector(".popup__close-image");
let buttonAdd = document.querySelector(".profile__button-add");
const cardTemplate = document.getElementById("card-template");
const tamplateContent = cardTemplate.content;
const cardsItem = tamplateContent.querySelector(".elements__item");
const cardsList = document.querySelector(".elements__items");
const formAdd = document.querySelector(".popup__form_type_cards");
const popupPlace = document.querySelector(".popup__input_type_place");
const popupLink = document.querySelector(".popup__input_type_link");
const popupPhoto = document.querySelector(".popup__card-image");
const popupTitle = document.querySelector(".popup__title-image");
const popupImage = document.querySelector(".popup_type_image");

function openPopup(popupOpen) {
  popupOpen.classList.add('popup_opened');
};

buttonEd.addEventListener("click", function() {
    popupName.value = inputName.textContent;
    popupJob.value = inputProfession.textContent;
    openPopup(popupEd);
});

function profileFormSubmit (evt) {
    evt.preventDefault();
    inputName.textContent = popupName.value;
    inputProfession.textContent = popupJob.value;
    closePopup(popupEd);
}
formEd.addEventListener('submit', profileFormSubmit);

function closePopup(popupClose) {
    popupClose.classList.remove('popup_opened');
}
profileClose.addEventListener('click', function(){
  closePopup(popupEd)
});

buttonAdd.addEventListener("click", function() {
  openPopup(popupAdd);
});
cardsClose.addEventListener('click', function(){
  closePopup(popupAdd)
});

const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];


initialCards.forEach(function(item){
  const newCard = createCards(item.name,item.link);
  cardsList.prepend(newCard);
}) ;

function createCards(name,link){
  const newCard = cardsItem.cloneNode(true);
  const cardsText = newCard.querySelector(".elements__name");
  const cardsPhoto = newCard.querySelector(".elements__photo");
  cardsText.textContent = name;
  cardsPhoto.src = link;
  cardsPhoto.alt = name;
  const deleteButton = newCard.querySelector(".elements__button-delete");
  deleteButton.addEventListener("click", function(){
    cardsList.removeChild(newCard);
  });

  const likeButton = newCard.querySelector(".elements__button-like");
  likeButton.addEventListener("click", function(){
    likeButton.classList.toggle('elements__button-like-active');
  });

  cardsPhoto.addEventListener("click", function(){
    popupImage.classList.add('popup_opened');
    popupPhoto.src = link;
    popupPhoto.alt = name;
    popupTitle.textContent = name;
  });

  imageClose.addEventListener('click', function(){
    closePopup(popupImage);
  });

  return newCard;
};
function createFormSubmit (evt) {
  evt.preventDefault();
  const cardPlace = popupPlace.value;
  const cardLink = popupLink.value;
  const newCard = createCards(cardPlace,cardLink);
  cardsList.prepend(newCard);
  closePopup(popupAdd);
  formAdd.reset();
}
formAdd.addEventListener('submit', createFormSubmit);

