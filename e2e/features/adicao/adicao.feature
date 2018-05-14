# language: pt
Funcionalidade: Adição
    A calculadora deve ser capaz de realizar operações de soma

    Cenário: Fazer uma operação de soma simples
        Dado que não há números anteriormente preenchidos
        Quando eu adicionar "1" + "1"
        E clicar no botão "="
        Então o resultado deve ser "2"

    # Cenário: Fazer uma operação de soma com números negativos
    #     Dado que não há números anteriormente preenchidos
    #     Quando eu adicionar "-2" + "1"
    #     E clicar no botão "="
    #     Então o resultado deve ser "-1"