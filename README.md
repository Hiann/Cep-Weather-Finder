<div align="center">

# 📍 Cep Weather Finder
### Localizador de Endereços e Previsão do Tempo

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

<p align="center">
  <a href="#sobre">Sobre</a> •
  <a href="#features">Features</a> •
  <a href="#tecnologias">Tecnologias</a> •
  <a href="#como-usar">Como Usar</a> •
  <a href="#autor">Autor</a>
</p>

</div>

---

<div id="sobre"></div>

## 💡 Sobre o Projeto

O **Cep Weather Finder** é uma aplicação Frontend moderna que integra múltiplas APIs públicas para entregar informações ricas ao usuário a partir de um único dado de entrada.

Ao digitar um CEP brasileiro, a aplicação:
1.  **Identifica o endereço:** Busca Rua, Bairro e Cidade via API.
2.  **Adapta a Interface:** Se o CEP for genérico (cidades pequenas sem rua vinculada ao CEP), o sistema ajusta o layout automaticamente para não mostrar campos vazios.
3.  **Monitora o Clima:** Utiliza a cidade encontrada para buscar, em tempo real, a temperatura e condições climáticas daquela região.

Este projeto demonstra competência em **Manipulação do DOM**, **Consumo de APIs RESTful (Fetch API/Async Await)** e **UX Design**.

---

<div id="features"></div>

## 🚀 Features e Diferenciais

* **📍 Busca Inteligente (ViaCEP):** Integração robusta que trata erros de CEP inexistente.
* **🧠 Renderização Condicional:** O sistema detecta se o CEP possui logradouro específico. Se for um CEP único de cidade (ex: Pires do Rio - GO), ele oculta automaticamente as linhas de "Rua" e "Bairro", mantendo o visual limpo.
* **duplicação de API:** Encadeamento de chamadas assíncronas (o resultado da primeira API alimenta a busca da segunda).
* **🎨 UI/UX Moderna:** Design com gradientes, glassmorphism, tipografia *Poppins* e animações de entrada (`fadeIn`) e feedback de erro (`shake`).
* **📱 Interface Responsiva:** Layout 100% adaptável para mobile e desktop.

---

<div id="tecnologias"></div>

## 🛠️ Tecnologias Utilizadas

* **HTML5:** Estrutura semântica e acessível.
* **CSS3:** Flexbox, Variáveis CSS (`:root`), Keyframes Animation e Google Fonts.
* **JavaScript (ES6+):** Async/Await, Arrow Functions, DOM Manipulation e Tratamento de Exceções (`try/catch`).

---

<div id="como-usar"></div>

## 📦 Como Usar

### Pré-requisitos
Você precisará de uma **API Key** gratuita da OpenWeatherMap.

1.  **Clone o repositório:**
    ```bash
    git clone [https://github.com/SEU_USUARIO/Cep-Weather-Finder.git](https://github.com/SEU_USUARIO/Cep-Weather-Finder.git)
    ```
2.  **Configure a Chave de API:**
    * Abra o arquivo `script.js`.
    * Substitua o valor da variável `apiKey` pela sua chave:
    ```javascript
    const apiKey = 'ada4e13043f7f095b31d4794267c95d8';
    ```
3.  **Execute:**
    * Basta abrir o arquivo `index.html` em qualquer navegador. Não é necessário servidor backend.

---

<div id="autor"></div>

## 👨‍💻 Autor

<div align="center">

<img src="https://github.com/SEU_USUARIO.png" width="100px;" alt="Foto de Perfil"/><br>
**Hiann Alexander Mendes de Oliveira**

[![LinkedIn](https://img.shields.io/badge/LinkedIn-Conectar-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](www.linkedin.com/in/hiann-alexander)
[![GitHub](https://img.shields.io/badge/GitHub-Ver_Perfil-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/Hiann)

</div>