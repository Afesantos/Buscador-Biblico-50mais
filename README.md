# Buscador Bíblico - Ministério 50+ 📖

Uma aplicação web leve, rápida e com foco em acessibilidade para busca, leitura e escuta de textos bíblicos. Desenvolvida com uma interface limpa e amigável, ideal para o público do **Ministério 50+** e otimizada para ser utilizada de forma independente ou incorporada em apresentações (como no Canva).

## 🚀 Funcionalidades

* **Busca Intuitiva:** Digite referências de forma natural (ex: `Apocalipse 19` ou `João 3:16`) e o texto é estruturado instantaneamente na tela.
* **Múltiplas Versões (Português do Brasil):** 
  * Almeida Corrigida Fiel (ACF)
  * Nova Versão Internacional (NVI)
  * Almeida Revisada Imprensa Bíblica (AA)
* **Acessibilidade Visual (Zoom):** Controles dinâmicos (`A-` e `A+`) para ajustar o tamanho da fonte em tempo real, garantindo uma leitura confortável em qualquer tela.
* **Leitura em Áudio (Text-to-Speech):** Botão "Ouvir" integrado que utiliza a síntese de voz nativa do navegador para narrar os capítulos e versículos de forma fluida e ritmada.
* **Troca Ágil de Versões:** O texto pesquisado é atualizado automaticamente ao selecionar uma nova versão no menu, sem necessidade de clicar no botão de busca novamente.
* **Design Confortável:** Tipografia *Merriweather* (clássica para leitura longa) aliada a um fundo em degradê suave para descanso dos olhos.

## 🛠️ Tecnologias Utilizadas

* **Front-end:** HTML5, CSS3 e JavaScript puro (Vanilla JS).
* **Tipografia:** Google Fonts (Merriweather e Segoe UI).
* **Áudio:** Web Speech API nativa do navegador.
* **Fonte de Dados (API):** Consumo estático de arquivos JSON hospedados no repositório aberto [thiagobodruk/bible](https://github.com/thiagobodruk/bible). A aplicação possui cache inteligente em memória, o que significa que o banco de dados é baixado apenas uma vez por versão durante a sessão, garantindo alta velocidade e evitando falhas de conexão (CORS).

## 🌐 Como Acessar

Acesse a aplicação diretamente pelo navegador através do link do GitHub Pages:

👉 **[LINK DA APLICAÇÃO]** *https://afesantos.github.io/Buscador-Biblico-50mais/*

> **Dica para Apresentações:** Esse link pode ser utilizado no aplicativo "Incorporar" (Embed) do Canva, permitindo consultar e exibir textos bíblicos ao vivo, sem sair do seu slide.

## 💻 Como Rodar Localmente

Por não possuir back-end ou banco de dados local, a execução no seu computador é extremamente simples:

1. Faça o clone deste repositório na sua máquina:
   ```bash
   git clone [https://github.com/SEU-USUARIO/SEU-REPOSITORIO.git](https://github.com/SEU-USUARIO/SEU-REPOSITORIO.git)
