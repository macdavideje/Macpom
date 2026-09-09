import loginElement from '../fixtures/login.json'

export class loginpage {
  constructor(page) {
    this.page = page;
  }

  async login(username, password) {
    await this.page.locator(loginElement.userNameinp).fill(username);
    await this.page.locator(loginElement.passWordinp).fill(password);
    await this.page.locator(loginElement.loginButton).click();
  }
}

