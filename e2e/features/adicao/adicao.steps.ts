import { expect } from 'chai';
import { defineSupportCode } from 'cucumber';
import { AppPage } from '../../app.po';


defineSupportCode(({ Given, When, Then, Before }) => {
    let app: AppPage;
    Before(() => {
        app = new AppPage();
    });

    Given('que não há números anteriormente preenchidos', () => {
        return app.navigateTo();
    });
    When('eu adicionar {string} + {string}', (num1, num2) => {
        const acoes = [];
        acoes.push(app.pressionarBotao(num1));
        acoes.push(app.pressionarBotao('+'));
        acoes.push(app.pressionarBotao(num2));
        return Promise.all(acoes);
    });
    When('clicar no botão {string}', (botao) => {
        return app.pressionarBotao(botao);
    });

    Then('o resultado deve ser {string}', (valorEsperado) => {
        return app.valorDaTela()
            .then((valor) => {
                expect(valor).to.equal(valorEsperado);
            });
    });


});
