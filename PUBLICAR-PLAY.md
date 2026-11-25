# Publicar o DH Violino Game na Google Play

## Versões
| Canal | Grátis | Como libera o resto |
|---|---|---|
| **Google Play** (AAB) | hinos 1–10 completos; demais com 15 s de prévia | anúncio premiado (1 hino por 1 h) + Pro opcional pela Play (`playCompra`) |
| **APK** (site/APKPure) e **PWA** | hinos 1–50 completos; demais 15 s | Pix → código na planilha (1 código = 1 aparelho) |

Os números ficam em `pro-config.js` (`freeHinos`, `freeHinosPlay`, `previewSec`, `adHoras`).

## Antes do primeiro build da Play
1. **AdMob**: crie um app novo "DH Violino Game" (Android) e um bloco **Premiado**. Troque:
   - `adRewardedId` em `pro-config.js`;
   - `ADMOB_APP_ID` em `.github/workflows/build-apk.yml`.
   (Os valores que vêm no projeto são IDs de TESTE do Google. O build de produção é recusado com eles.)
2. **Play Console**: crie o app, depois **Monetizar → Produtos → Produtos no app** com ID `pro_desbloqueio` (preço sugerido R$ 19,90). Ou ponha `playCompra:false` para ter só anúncio.
3. **Secrets do GitHub** (iguais aos do Violino): `KEYSTORE_BASE64`, `KEYSTORE_PASSWORD`, `KEY_ALIAS`. O Play exige o `.aab` assinado.
4. Publique `app-ads.txt` na raiz do site do desenvolvedor (já usa seu pub-4518875317226768).
5. Planilha: siga `planilha-pro/COMO-CONFIGURAR.md` e cole a URL em `scriptUrl`.

## Gerar
Actions → **Gerar APK** → Run workflow:
- `canal = play` + `anuncios_teste` marcado → AAB de teste (faixa interna).
- `canal = play` + desmarcado → AAB de produção.
- `canal = apkpure` → APK com Pix.

## Formulários da Play
- **Anúncios**: sim. **Segurança dos dados**: ID de publicidade/dispositivo (anúncios); compras. Política de privacidade: `privacy.html` publicado no GitHub Pages.
- Classificação de conteúdo e público-alvo como no Violino.
