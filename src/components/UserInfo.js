export  default class UserInfo {
  constructor({name, info}) {
    this._nameElment = document.querySelector(name);
    this._infoElement = document.querySelector(info);
  }
  getUserInfo() {
    return {
      name: this._nameElment.textContent,
      info: this._infoElement.textContent
    }
  }
  setUserInfo(element) {
     this._nameElment.textContent = element.name;
     this._infoElement.textContent = element.info;
  }
}
