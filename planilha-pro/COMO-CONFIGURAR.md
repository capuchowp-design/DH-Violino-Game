# Planilha automática de liberação Pro (Violino e Violino)

Uma planilha + um script servem os dois apps ao mesmo tempo (o app manda o campo `app`: `trumpet` ou `violin`).
Um código do Violino **não** vale no Violino (a menos que você use `*` na coluna `app`).

## Passo a passo (10 min)
1. Crie uma planilha nova no Google Planilhas (ex.: "DigitaHinos Pro").
2. Menu **Extensões → Apps Script**. Apague o que estiver lá e cole todo o conteúdo de `Codigo.gs`.
3. Ícone de engrenagem (**Configurações do projeto**) → marque **"Mostrar arquivo de manifesto appsscript.json"** → abra-o e cole o conteúdo de `appsscript.json` desta pasta.
4. Salve (💾). Selecione a função `preparar` e clique **Executar** → autorize a conta Google (aviso "app não verificado": Avançado → Acessar). Isso cria as abas **Codigos** e **Aparelhos**.
5. **Implantar → Nova implantação → Tipo: App da Web** · Executar como: **Eu** · Quem tem acesso: **Qualquer pessoa** → Implantar. Copie a URL que termina em `/exec`.
6. Cole a URL em `pro-config.js` (campo `scriptUrl`) no Violino. Publique de novo (e mude o `CACHE_NAME` do `sw.js`).
7. Recarregue a planilha: aparece o menu **DigitaHinos Pro**.

> Se alterar o script depois: Implantar → **Gerenciar implantações → ✏ → Nova versão**. A URL continua a mesma.

## Uso no dia a dia
- **Gerar códigos novos…**: informe o app (`trumpet`) e a quantidade. Eles entram na aba **Codigos** com status `livre`.
- **Entregar próximo código livre…**: quando o cliente pagar o Pix e mandar o comprovante no WhatsApp, use esse item: ele pega o próximo código livre, anota o cliente e mostra a mensagem pronta + link do WhatsApp.
- O cliente digita o código em ⭐ Pro → **Ativar**. A linha vira `ativo` e grava o aparelho.
- **Bloquear / Reativar**: clique numa linha de código e use o menu (estorno, fraude).
- **Liberar aparelho (trocar de celular)**: limpa o aparelho da linha para o cliente ativar o mesmo código no celular novo.
- **Resumo**: total de códigos e aparelhos.

## Abas
- **Codigos**: `codigo · app · status (livre/ativo/bloqueado) · dispositivo · ativado_em · ultimo_acesso · verificacoes · tentativas_outro_aparelho · cliente · whatsapp · entregue_em · obs`. Você pode digitar códigos à mão também (status `livre`).
- **Aparelhos** (reconhecimento dos aparelhos conectados): uma linha por aparelho e app, com tipo (`App Android` = id começa com `n-`; `Navegador/PWA` = `w-`), primeiro/último acesso, nº de acessos e a última ação (`ativar`, `verificar`, `restaurar`, `recusado_outro_aparelho`).

## Como o app usa a planilha
- `ativar`: valida código + app + aparelho. 1 código = 1 aparelho.
- `verificar`: 1x por dia o app confere; se o código foi bloqueado, o Pro é encerrado (sem internet continua liberado).
- `restaurar`: app instalado que perdeu os dados recupera o Pro sozinho pelo Android ID.

## Usar a planilha que você já tem do Violino
Não vi o script atual do Violino. Se colar este `Codigo.gs` na planilha antiga, ele acrescenta as colunas que faltarem (procura por nome do cabeçalho), mas confira se os nomes batem com os de cima. O mais seguro é usar **uma planilha nova** só para o Violino (ou migrar os dois depois).
