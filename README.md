# DH Violino Game

Game estilo Guitar Hero para aprender os hinos no violino.

- **Pista:** 4 colunas, uma por corda (Sol · Ré · Lá · Mi). Cada nota mostra o **dedo** (1 a 4; 0 = corda solta) e o nome da nota.
- **Braço do violino (embaixo):** as 4 cordas na tela. O círculo colorido mostra **onde pôr o dedo** (próxima nota forte, a seguinte fraca; o anel se fecha até a hora). Toque e segure. Pode deslizar de uma nota para outra.
- **Corda solta (0):** toque no círculo vazio acima da pestana.
- **Reconhecimento por posição:** na hora da nota, o dedo precisa estar na corda e na altura certas. Não precisa "bater".
- **Digitação:** mesma regra do app DigitaHinos Violino (1ª posição, um dedo para cada nota natural; sustenido/bemol mantém o dedo e muda só a altura). Respeita a armadura de cada hino.
- **Vozes:** soprano, contralto, tenor ou baixo (tenor e baixo sobem 1 oitava). As outras vozes tocam como acompanhamento.
- **Modos:** Normal (posição) e Fácil (basta tocar no tempo). Velocidade 40–120%, tolerância de tempo e de posição, queda das notas, nomes das notas, atraso do som.
- **Som:** gravações de violino em `samples/violin/` (tonejs-instruments, CC-BY 3.0); Tone.js local em `vendor/`.

## Publicar
GitHub Pages: suba tudo. A cada versão nova mude `CACHE_NAME` em `sw.js`. APK/AAB: Actions → "Gerar APK" (veja `PUBLICAR-PLAY.md`). Modo Pro em `pro-config.js` (app `violin-game`).
