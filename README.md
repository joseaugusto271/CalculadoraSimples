# 🧮 Calculadora Simples em React

Uma aplicação web moderna desenvolvida em **React** para realizar operações aritméticas básicas (adição, subtração, multiplicação e divisão) com uma interface estilizada via CSS Modules.

---

## 🚀 Tecnologias Utilizadas

- **React.js** (com `useState`)
- **CSS Modules** (para estilização escopada via `form.module.css`)
- **JavaScript (ES6+)**
- **HTML5**

---

## 📌 Funcionalidades

- 🔢 **Entrada de Números:** Dois campos numéricos com placeholders intuitivos.
- ➕➖✖️➗ **Seleção de Operação:** Menu suspenso (`<select>`) com suporte às quatro operações fundamentais.
- 📊 **Cálculo em Tempo Real:** Exibição imediata do resultado após o envio do formulário.
- 🧹 **Reset de Estado:** Botão para redefinir os campos e limpar o resultado.
- 🎨 **Estilização Escopada:** Utilização de classes CSS isoladas via CSS Modules (`styles.entradas`, `styles.btn`, `styles.resultado`).

---

## 🔧 Como Funciona o Código (`FormCalculadora.jsx`)

- **Estados (`useState`):**
  - `numero1` e `numero2`: Armazenam os valores digitados.
  - `operacao`: Armazena a operação selecionada.
  - `resultado`: Armazena o valor final do cálculo.

- **Funções Principais:**
  - `calcular(e)`: Previne o recarregamento da página (`e.preventDefault()`), converte as entradas em números e realiza a operação matemática correspondente.
  - `limpar()`: Reseta os campos de entrada e a exibição do resultado.

---

## 🛠️ Como Executar o Projeto

1. **Clone o repositório:**
   ```bash
   git clone [https://github.com/seu-usuario/seu-repositorio.git](https://github.com/seu-usuario/seu-repositorio.git)