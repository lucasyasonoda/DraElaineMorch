# Dev — Dra. Elaine Morch
> Documento de implementação front-end. Registra alterações feitas, decisões tomadas e como reproduzir o ambiente.

---

## 1. Arquivos criados
Nenhum arquivo novo de código foi criado; atualizado apenas `docs/03_DEV.md`.

## 2. Arquivos alterados
- `index.html`
- `css/style.css`
- `js/script.js`
- `pages/clareamento-intimo.html`
- `pages/estetica-intima.html`
- `pages/hormonios-bioidenticos.html`
- `pages/implantes-hormonais.html`
- `pages/incontinencia-urinaria.html`
- `pages/laser-intimo.html`
- `pages/menopausa.html`
- `pages/ninfoplastia.html`
- `pages/preenchimento-intimo.html`
- `pages/radiofrequencia-intima.html`
- `pages/reposicao-hormonal.html`
- `pages/saude-hormonal.html`

## 3. Decisões de código

### 3.1 Padronização do header alinhado ao `index.html`
- Trocado o header antigo das páginas internas pelo modelo unificado usado em `index.html`.
- Adicionado item `Especializações` como dropdown `details/summary` com links diretos para todas as páginas de especializações.
- Garantido alinhamento superior pelo skip link imediatamente após `<body>` em todas as páginas.

### 3.2 Rodapé minimalista
- Reescrito o footer com layout compacto: linha de marca + links essenciais; linha inferior de copyright.
- Replicado em todas as páginas, mantendo proporções e espaçamentos idênticos.

### 3.3 WhatsApp flutuante
- Corrigidos links incorretos para o WhatsApp; agora usam `https://wa.me/5517981354913`.
- Botão flutuante fixo no canto inferior esquerdo com ícone SVG embutido e design alinhado à paleta.
- Removidas inconsistências entre botão secundário e flutuante.

### 3.4 JavaScript
- JS já estava alinhado; nenhuma alteração necessária nesta sprint além do suporte já existente.
- Mantido fechamento do menu mobile com `Escape` e retorno de foco no toggle.

## 4. Comandos executados
```bash
cd /c/temp/elaine-new/DraElaineMorch

# Inspeção e ajustes via script
python scripts/fix_headers_and_whatsapp.py

git status
git diff --stat
git checkout -b develop
git add .
git commit -m "feat: adiona documentacao dos agentes e ajustes de layout"
git push -u origin develop
```

## 5. Como rodar localmente
1. Abra `index.html` em um navegador evergreen.
2. Navegue pelas páginas em `pages/`.
3. Valide patches padronizados de header/footer e botão WhatsApp.

## 6. Observações / Próximos passos
- Toques finais de CSS de refinamento do footer podem ser feitos pelo Designer/Dev conforme validação visual.
- Próximo ciclo QA deve validar o dropdown Especializações em runtime.
- Manter docs sincronizados com alterações futuras.
