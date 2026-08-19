import loginElement from '../fixtures/login.json'

export class loginpage {

    constructor (page) {
        this.page=page;
    }
    async login(username, password) {
    await this.page.getByLocator(loginElement.userNameinp).fill(username);
    await this.page.getByLocatorf(loginElement.passWordinp).fill(password);
    await this.page.getByLocator(loginElement.loginButton).click()
  }
}

