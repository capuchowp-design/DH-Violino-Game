# DH Violino Game

Game estilo Guitar Hero para aprender os hinos no violino.

- **Tela = braço do violino:** 4 cordas na vertical (Sol · Ré · Lá · Mi), pestana em cima. O círculo colorido com o número do dedo (0 a 4) mostra **onde pôr o dedo**; o anel se fecha até a hora e a nota seguinte aparece mais fraca.
- **Notas pela lateral:** cada nota entra pela direita, na altura exata do dedo, e desliza até a corda; a cauda mostra a duração. Pode deslizar o dedo de uma nota para outra.
- **Corda solta (0):** toque no círculo vazio acima da pestana.
- **Reconhecimento por posição:** na hora da nota, o dedo precisa estar na corda e na altura certas. Não precisa "bater".
- **Digitação:** mesma regra do app DigitaHinos Violino (1ª posição, um dedo para cada nota natural; sustenido/bemol mantém o dedo e muda só a altura). Respeita a armadura de cada hino.
- **Vozes:** soprano, contralto, tenor ou baixo (tenor e baixo sobem 1 oitava). As outras vozes tocam como acompanhamento.
- **Modos:** Normal (posição) e Fácil (basta tocar no tempo). Velocidade 40–120%, tolerância de tempo e de posição, queda das notas, nomes das notas, atraso do som.
- **Som:** gravações de violino em `samples/violin/` (tonejs-instruments, CC-BY 3.0); Tone.js local em `vendor/`.

## Publicar
GitHub Pages: suba tudo. A cada versão nova mude `CACHE_NAME` em `sw.js`. APK/AAB: Actions → "Gerar APK" (veja `PUBLICAR-PLAY.md`). Modo Pro em `pro-config.js` (app `violin-game`).
