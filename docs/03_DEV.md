# Dev — Dra. Elaine Morch
> Documento de implementação front-end. Registra alterações feitas, decisões tomadas e como reproduzir o ambiente.

---

## 1. Arquivos criados
Nenhum arquivo novo de código foi criado; apenas o documento `docs/03_DEV.md` é novo.

## 2. Arquivos alterados
- `css/style.css`
- `js/script.js`
- `index.html`
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

### 3.1 Acessibilidade
- **Skip link**: adicionado `<a href="#main" class="skip-link">Pular para o conteúdo</a>` logo após `<body>` em todas as páginas.
- **Landmark principal**: garantido `<main id="main">` para destino do skip link.
- **Focus visível**: adicionado `:focus-visible` com outline em `var(--gold-dark)` e offset.
- **Menu mobile**: mantido comportamento existente e adicionado fechamento com `Escape` e realimentação de foco no toggle.
- **Dropdowns**: adicionados atributos `aria-expanded` sincronizados em `details`/`summary` e `aria-hidden` em links internos do submenu.

### 3.2 Design System / CSS
- Inserção do bloco `:root` com tokens padrão no início do CSS, alinhado ao `docs/02_DESIGNER.md`.
- Adicionados helpers `.skip-link` e `:focus-visible` no final do CSS para não alterar regras existentes.
- Mantidas todas as regras existentes, evitando sobrescrita do tema home/pages já implementado.

### 3.3 JavaScript
- Atualizado `js/script.js` para versão com comentários remanejados e melhorias de acessibilidade.
- Corrigida lógica de link ativo para lidar com URLs relativas e hash, evitando false negatives quando o caminho não é exatamente igual devido a `../pages/...` ou `?query`.
- Adicionado fechamento do menu mobile com `Escape` e retorno de foco para o botão toggle.

### 3.4 HTML
- Aplicadas melhorias de acessibilidade em massa em `index.html` e `pages/*.html` via regex:
  - skip link
  - `main id="main"`
  - padronização de `aria-expanded`
- Mantida estrutura semântica e atributos ARIA existentes.

## 4. Comandos executados
```bash
cd /c/temp/elaine-new/DraElaineMorch

# Inspeção de alterações
git status
git diff --stat
```

Nenhum comando de build/test automatizado foi executado, pois o projeto é HTML/CSS/JS vanilla sem bundler. A verificação foi feita por inspeção estática do código.

## 5. Como rodar localmente
1. Abra o arquivo `index.html` em um navegador evergreen.
2. Navegue pelas páginas em `pages/`.
3. Valide responsividade nos breakpoints 375px, 768px e 1440px.

## 6. Observações
- QA apontou 2 melhorias: skip link e validação automatizada. Ambas foram endereçadas.
- Próximo passo recomendado: incluir lint HTML/CSS/JS no fluxo antes do deploy.
