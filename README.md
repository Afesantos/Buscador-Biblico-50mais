# Buscador Bíblico - Ministério 50+ 📖

Uma aplicação web moderna, acessível, rápida e intuitiva para busca, leitura e compartilhamento de textos bíblicos. Desenvolvida com uma interface limpa, elegante e pensada especialmente no conforto visual e facilidade de uso para o público do **Ministério 50+**, além de ser otimizada para uso em qualquer dispositivo ou incorporação em apresentações (como Canva).

---

## 🚀 Principais Funcionalidades

* **🎙️ Busca por Comando de Voz (Web Speech API):** Toque no botão de microfone dentro do campo de busca e fale a passagem bíblica desejada (ex: *"Salmo 23"*, *"João 3:16"*). O sistema reconhece a fala e busca imediatamente.
* **✨ Menu Flutuante ao Tocar no Versículo:** Leitura 100% limpa, sem poluição visual. Ao clicar ou tocar sobre qualquer versículo, abre-se um menu suspenso de contexto com as opções:
  * **Copiar Versículo:** Copia o texto formatado com referência e versão para a área de transferência.
  * **Enviar no WhatsApp:** Abre o WhatsApp com o versículo e referência formatados prontos para envio.
* **📖 Índice Visual e Navegador de Capítulos:** Clique em qualquer livro no índice para abrir uma janela visual e navegar rapidamente para qualquer capítulo.
* **↕️ Controle de Recolher / Expandir:** Botão dedicado para alternar a exibição da leitura bíblica conforme a necessidade.
* **🔤 Acessibilidade Visual e Zoom:** Controles dinâmicos (`A-` e `A+`) para ampliar ou diminuir a fonte em tempo real.
* **🎨 Temas de Conforto de Leitura:**
  * **☀️ Claro:** Alto contraste para ambientes iluminados.
  * **📜 Sépia:** Redução de fadiga ocular com tons suaves de pergaminho.
  * **🌙 Escuro:** Modo noturno para leitura em ambientes escuros.
* **📚 Versões Bíblicas em Português:**
  * Almeida Corrigida Fiel (ACF)
  * Nova Versão Internacional (NVI)
  * Almeida Revisada (AA)
* **⚡ Alta Performance e Modo Offline (IndexedDB):** Os textos são salvos localmente em IndexedDB no navegador, carregando instantaneamente nas próximas consultas.
* **⬆️ Navegação Facilitada:** Botões de capítulo anterior/próximo e atalho flutuante para voltar ao topo.

---

## 🛠️ Tecnologias Utilizadas

* **Front-end:** HTML5, CSS3 moderno com variáveis CSS e JavaScript puro (Vanilla JS).
* **Tipografia:** Google Fonts (*Merriweather* para leitura bíblica e *Plus Jakarta Sans* para interface).
* **Voz e Reconhecimento:** Web Speech API nativa do navegador.
* **Armazenamento e Cache:** IndexedDB e LocalStorage para persistência de preferências de tema e tamanho de fonte.
* **Fonte de Dados:** Repositório aberto JSON de versões bíblicas em língua portuguesa.

---

## 💻 Como Rodar Localmente

1. Clone o repositório ou baixe os arquivos:
   ```bash
   git clone https://github.com/SEU-USUARIO/Buscador-Biblico-50mais.git
   ```
2. Abra o arquivo `index.html` em qualquer navegador web moderno ou sirva através de um servidor local:
   ```bash
   npm start
   ```

---

## 👤 Autor & Desenvolvimento

* **Desenvolvido por:** Agnaldo Fernandes
* **Projeto:** Buscador Bíblico - Ministério 50+

