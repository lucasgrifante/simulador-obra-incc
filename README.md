# Simulador: Evolução de Obra x INCC

App web instalável (PWA) que compara **financiar na planta** (juros de evolução de obra) com **financiar nas chaves** (saldo corrigido pelo INCC). Tem uma aba "Para o cliente" que gera a imagem e o texto prontos para o WhatsApp.

## Como publicar no GitHub Pages (grátis)

1. Entre em github.com e crie um repositório novo. Ex.: `simulador-obra-incc`. Ele pode ser **Public**; no plano grátis, o GitHub Pages só funciona com repositório público.
2. Dentro do repositório, clique em **Add file → Upload files**.
3. Arraste **todo o conteúdo desta pasta** (`index.html`, `manifest.webmanifest`, `sw.js`, `README.md` e a pasta `icons`) e clique em **Commit changes**.
4. Vá em **Settings → Pages**. Em **Branch**, escolha `main` e a pasta `/ (root)`, e clique em **Save**.
5. Em 1 a 2 minutos o link fica pronto, no formato:
   `https://SEU-USUARIO.github.io/simulador-obra-incc/`

## Como instalar no celular

- **iPhone:** abra o link no **Safari** → botão **Compartilhar** → **Adicionar à Tela de Início**.
- **Android:** abra o link no **Chrome** → menu ⋮ → **Instalar app** (ou "Adicionar à tela inicial").
- **Computador (Chrome/Edge):** ícone de instalar na barra de endereço.

## Bom saber

- Os últimos dados digitados ficam salvos **no próprio aparelho** (não vão para nenhum servidor). Celular e computador guardam cada um os seus.
- Depois do primeiro acesso, o app abre mesmo sem internet.
- No celular, o botão **Enviar imagem** abre o menu de compartilhar: dá para mandar direto no WhatsApp ou salvar nas fotos.
- **Para atualizar o app:** suba o novo `index.html` no repositório e, no arquivo `sw.js`, troque `obra-incc-v1` por `obra-incc-v2` (v3, v4…). Assim os aparelhos baixam a versão nova.
- Como o repositório é público, qualquer pessoa com o link consegue abrir o simulador. Ele não contém dados de clientes.
