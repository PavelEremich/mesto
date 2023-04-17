let buttonEd = document.querySelector(".profile__button-edit");
let popupEd = document.querySelector(".popup");
let inputName = document.querySelector(".profile__name-edit");
let inputProfession = document.querySelector(".profile__profession");
let popupName = document.querySelector(".popup__input_type_name");
let popupJob = document.querySelector(".popup__input_type_job");
let formAdd = document.querySelector(".popup__form");
let buttonClose = document.querySelector(".popup__close")

function openPopup() {
    popupEd.classList.add('popup_opened');
};

buttonEd.addEventListener("click", function() {
    popupName.value = inputName.textContent;
    popupJob.value = inputProfession.textContent;
    openPopup();
});

function handleFormSubmit (evt) {
    evt.preventDefault();
    inputName.textContent = popupName.value;
    inputProfession.textContent = popupJob.value;
    closePopup();
}
formAdd.addEventListener('submit', handleFormSubmit);

function closePopup() {
    popupEd.classList.remove('popup_opened');
}
buttonClose.addEventListener('click', closePopup);
