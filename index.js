let buttonEd = document.querySelector(".profile__button-edit");
let popupEd = document.querySelector(".popup");
let inputName = document.querySelector(".profile__name-edit");
let inputProfession = document.querySelector(".profile__profession");
let popupName = document.querySelector(".popup__input-name");
let popupJob = document.querySelector(".popup__input-job");
let buttonAdd = document.querySelector(".popup__form");
let buttonClose = document.querySelector(".popup__close")

function OpenPopup() {
    popupEd.style.visibility = "visible";
    popupName.value = inputName.textContent;
    popupJob.value = inputProfession.textContent;
};

buttonEd.addEventListener("click", OpenPopup);

function handleFormSubmit (evt) {
    evt.preventDefault(); 
    inputName.textContent = popupName.value;
    inputProfession.textContent = popupJob.value;
    popupEd.style.visibility = "hidden";
}
buttonAdd.addEventListener('submit', handleFormSubmit);

function ClosePopup() {
    popupEd.style.visibility = "hidden";
}
buttonClose.addEventListener('click', ClosePopup);