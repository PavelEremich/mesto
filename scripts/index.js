const buttonEd = document.querySelector(".profile__button-edit");
const popupEd = document.querySelector(".popup_type_profile");
const popupElement = document.querySelector(".popup");
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

function editFormSubmit (evt) {
    evt.preventDefault();
    inputName.textContent = popupName.value;
    inputProfession.textContent = popupJob.value;
    closePopup(popupEd);
}
formEd.addEventListener('submit', editFormSubmit);

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
imageClose.addEventListener('click', function(){
  closePopup(popupImage)
});

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
  const likeButton = newCard.querySelector(".elements__button-like");

  deleteButton.addEventListener("click", () => deleteCardButton(newCard));

  likeButton.addEventListener("click",() => addLikeActive(likeButton));

  cardsPhoto.addEventListener("click",  () => openPopupImage(name, link));

  return newCard;
};

function openPopupImage(name,link){
  openPopup(popupImage);
  popupPhoto.src = link;
  popupPhoto.alt = name;
  popupTitle.textContent = name;
};

function deleteCardButton(newCard){
  newCard.remove();
};

function addLikeActive(likeButton){
  likeButton.classList.toggle('elements__button-like-active');
};

function createFormSubmit (evt) {
  evt.preventDefault();
  const cardPlace = popupPlace.value;
  const cardLink = popupLink.value;
  const newCard = createCards(cardPlace,cardLink);
  cardsList.prepend(newCard);
  closePopup(popupAdd);
  formAdd.reset();
};

formAdd.addEventListener('submit', createFormSubmit);

