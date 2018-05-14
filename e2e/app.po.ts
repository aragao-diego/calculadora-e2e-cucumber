import { browser, by, element } from 'protractor';


export class AppPage {
  navigateTo() {
    return browser.get('/');
  }
  public pressionarBotao(nome: string) {
    return element(by.css('button[name="btn_' + nome + '"]'))
      .click();
  }
  public valorDaTela() {
    return element(by.id('screen'))
      .getText();
  }
}
