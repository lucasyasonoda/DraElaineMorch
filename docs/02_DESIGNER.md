# Designer — Dra. Elaine Morch
> Documento de UI/UX e sistema visual. Paleta, tipografia, tokens, layout e componentes devem ser implementados exatamente conforme definido aqui.

---

## 1. Conceito visual

Identidade **editorial premium com acolhimento**:
- sensação de cuidado sem frieza clínica;
- seriedade médica sem perder proximidade;
- tratamento de saúde íntima/hormonal comunicado com delicadeza e respeito.

Referência estética:
- editoriais femininos de saúde e bem-estar;
- uso generoso de espaço em branco;
- paleta quente com base creme/blush;
- contraste controlado; sem cores vibrantes agressivas.

**Regra-guia:** `index.html` é a página piloto. Toda página interna deve herdatar sua identidade visual de header, tipografia, espaçamentos e containers.

---

## 2. Paleta de cores

Todas as cores devem ser implementadas como **variáveis CSS em `:root`** em `css/style.css`.

### 2.1 Cores primárias
```css
--gold: #a9814f;
--gold-dark: #8a6a3f;
--gold-light: #d4b483;
```

Uso:
- CTAs primários, detalhes, ícones de destaque;
- estados `:hover` e `border-bottom` do nav;
- numeração de cards e elementos de marca.

### 2.2 Cores de fundo
```css
--blush: #f7ece6;
--blush-dark: #efd9cd;
--bg: #fffaf6; /* fundo geral das páginas */
--white: #ffffff;
```

Uso:
- seções alternadas;
- fundo de modais/dropdowns;
- cards e detalhes.

### 2.3 Tons neutros
```css
--text: #3a332c;       /* texto principal */
--text-light: #6f6459; /* texto secundário */
--border: #e7dcd0;     /* divisores e bordas */
```

Uso:
- headings e corpo;
- metadados, breadcrumbs, copyright;
- pilares/bordas de cards.

### 2.4 Cores de superfície específica
```css
--navy: #373d53;
--ink: #24222f;
--cream-soft: #fffaf6;
```

Uso:
- header sticky e footer;
- numeração overlay dos treatment cards (`rgba(36,34,47,.72)`);
- labels escuros sobre imagens.

### 2.5 Cores funcionais
```css
--whatsapp: #25D366;
--whatsapp-hover: #1ebc59;
```

Uso:
- botão flutuante do WhatsApp;
- CTA secundário “Falar pelo WhatsApp”.

### 2.6 Gradientes
```css
/* Hero editorial de página */
background: linear-gradient(0deg, rgba(36,34,47,.38), transparent 36%);

/* CTA final full-width */
background: linear-gradient(120deg, var(--gold-dark), var(--gold));
```

Regra: nunca expor texto diretamente sobre imagem sem overlay de gradiente.

### 2.7 Regra de contraste
- Texto principal sobre fundo claro: mínimo **4.5:1**;
- Texto grande (>= 18px regular ou >= 14px bold): mínimo **3:1**;
- gold sobre branco NÃO é permitido como texto principal; usar `gold-dark` para melhor legibilidade.

---

## 3. Tipografia

### 3.1 Famílias
```css
--font-display: 'Playfair Display', Georgia, serif;
--font-body: 'Poppins', -apple-system, BlinkMacSystemFont, sans-serif;
```

Importação (Google Fonts):
```
https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,500;0,600;1,500&family=Poppins:wght@300;400;500;600&display=swap
```

Regras:
- `Playfair Display` é obrigatória em headings e marca;
- `Poppins` é obrigatória em corpo, labels, botões e nav;
- nunca usar fontes-decoration como `text-transform: uppercase` sem `letter-spacing`.

### 3.2 Escala tipográfica
| Elemento | Tamanho | Peso | Letter-spacing | Line-height |
|---|---|---|---|---|
| h1 | `clamp(2.1rem, 4vw, 3.4rem)` | 500 | normal | 1.25 |
| h2 | `clamp(1.7rem, 3vw, 2.4rem)` | 500 | normal | 1.25 |
| h3 | 1.3rem | 500 | normal | 1.25 |
| h4 | 1.05rem | 500 | normal | 1.25 |
| Eyebrow | 0.75rem | 600 | 3px / uppercase | 1.4 |
| body | 16px padrão | 300 | normal | 1.7 |
| .lead | 1.15rem | 300 | normal | 1.55 |
| botões | 0.85rem | 500 | 1.5px / uppercase | 1 |
| nav/dropdown | 0.82rem | 500 | 1px / uppercase | 1 |
| copyright | 0.78rem | normal | 0.4px | 1.5 |

### 3.3 Uso editorial
- `<em>` sempre italic em títulos para destacar frases emocionais/chave;
- `eyebrow` sempre antes do heading da seção;
- evitar more than 1 h1 por página (SEO + acessibilidade).

---

## 4. Tokens de design (design tokens)

Implementar como variáveis CSS em `:root` e/ou classes utilitárias.

### 4.1 Espaçamento
```css
--space-xs: 8px;
--space-sm: 14px;
--space-md: 24px;
--space-lg: 40px;
--space-xl: 56px;
--space-2xl: 70px;
--section-padding: 100px 5%;
--section-tight: 60px 5%;
```

Regras:
- seções padrão usam `100px 5%`;
- seções compactas usam `60px 5%`;
- espaçamento interno de cards: `40px 32px`;

### 4.2 Layout
```css
--max-width: 1280px; /* header, footer */
--wrap-width: 1180px; /* conteúdo */
--grid-gap-lg: 40px;
--grid-gap-md: 30px;
--grid-gap-sm: 18px;
```

### 4.3 Componente: radius/shadow
```css
--radius: 4px;
--shadow: 0 10px 30px rgba(58, 51, 44, 0.08);
```

Regra: nunca usar `box-shadow` sem antes definir sua variável; manter sombras sutis, sem valores muito escuros.

### 4.4 Breakpoints
```css
/* mobile-first */
/* 0–900px: mobile/tablet */
/* 901px+: desktop */
```

Breakpoint único principal: `@media (max-width: 900px)`.

Justificativa: conteúdo colapsa para 1 coluna sem necessidade de breakpoints adicionais, reduzindo complexidade.

---

## 5. Layout das telas

### 5.1 Header / Navegação — padrão `index.html`
Todas as páginas devem usar esta estrutura como base:
- sticky, z-index 1000;
- altura flexível, com padding interno de 14px;
- fundo `rgba(255,250,246,.95)` + `backdrop-filter: blur(6px)`;
- divisórias inferiores em `1px solid var(--border)`;
- lado esquerdo: logo + texto “Dra. Elaine Morch”;
- lado direito: links + CTA “Agendar Consulta”;
- no mobile: botão hambúrguer `.menu-toggle` fixo, menu abre como painel full-width inline.

#### Menu dropdown de Especializações
- item `Especializações` no nav como `details/summary`
- desktop: painel absoluto, mínimo `240px`, com padding vertical de `10px 0`
- mobile: inline, sem shadow, sem position absolute
- estados visualmente consistentes com o header piloto

### 5.2 Hero editorial
Todas as páginas internas usam `.editorial-hero` com:
- `.editorial-hero__portrait`: background com imagem + gradiente;
- `.editorial-hero__content`: coluna com mark “e”, eyebrow, h1, parágrafo e/ou botões;
- ratio aproximado 55% imagem / 45% conteúdo no desktop;
- no mobile: pilha, imagem ocupa a viewport como background.

A página home usa `.editorial-hero` + `.editorial-hero__portrait` como coluna visual separada ao lado do conteúdo.

### 5.3 Página inicial
Blocos obrigatórios (ordem):
1. **Hero editorial** com 2 CTAs (primário + secundário);
2. **Home stats**: barra com 3 números (`+10 tratamentos`, `2 áreas`, `100% cuidado`);
3. **Áreas de atuação**: 2 cards lado a lado, cada um com indexador `01/02`;
4. **Short em destaque**: texto à esquerda, player à direita;
5. **A consulta**: lista numerada em 3 etapas;
6. **CTA final retangular**: `Seu bem-estar começa com uma conversa.` + botão primary.

### 5.4 Hub pages (estética íntima / saúde hormonal)
Estrutura padrão:
1. **Hero editorial** com CTA principal;
2. **Breadcrumb** customizado inline (max-width 1180px, margin 24px auto, padding 0 5%);
3. **Grid de tratamentos**: 5 cards com imagem, titulo, resumo e link “Saiba mais →”;
4. **Split “Por que escolher”** com imagem + blockquote + lead;
5. **FAQ** com `details/summary` nativo, no mínimo 3 perguntas;
6. **CTA final** full-width.

Layout split: no desktop imagem à esquerda e conteúdo à direita. No mobile, imagem acima do conteúdo.

### 5.5 Páginas de tratamento
Estrutura padrão:
1. Hero editorial;
2. Breadcrumb;
3. Tratamento em destaque: bloco `.split` com nome, descrição e bullets;
4. Indicações (`check-list` ou equivalente);
5. Resultados esperados (`steps` ou `results-list`);
6. FAQ (mínimo 3 perguntas);
7. CTA final.

### 5.6 Footer — minimalista e compacto
**Versão enxuta e elegante**, sem tabelas pesadas:
- 1 linha principal com marca à esquerda e links pequenos à direita;
- 1 linha inferior centralizada para copyright/disclaimer;
- espaçamentos reduzidos em relação ao footer anterior;
- paleta escura coerente com `--ink`/`--cream`;
- no mobile: 1 coluna central;

```
Footer desktop:
[Marca] --------------------- [Links essenciais]

© Copyright • Disclaimer

Footer mobile:
[Marca]
[Links essenciais]
© Copyright • Disclaimer
```

Regra: evitar aglomerados visuais; priorizar respiro e legibilidade discreta.

---

## 6. Estrutura visual dos componentes HTML/CSS

### 6.1 Botões
Classe base: `.btn-primary`, `.btn-secondary`, `.btn-whatsapp`

| Classe | Fundo | Texto | Borda | Raio | Padding | Tamanho | Tracking |
|---|---|---|---|---|---|---|---|
| `.btn-primary` | `--gold` | `--white` | transparent | `var(--radius)` | `16px 34px` | `0.85rem` | `1.5px` uppercase |
| `.btn-secondary` | transparent | `--gold-dark` | `1px solid var(--gold)` | `var(--radius)` | `16px 34px` | `0.85rem` | `1.5px` uppercase |
| `.btn-whatsapp` | `#25D366` | `--white` | transparent | `var(--radius)` | `16px 34px` | `0.85rem` | `1.5px` uppercase |

Interações:
- primary: `background: var(--gold-dark)` + `translateY(-2px)` no hover;
- secondary: hover vira “invertido” igual primary;
- transições: `transition: all 0.3s ease`;

Regra de grupo:
- usar `.hero-actions` para empilhar botões alinhados;
- no mobile, empilhar verticalmente quando necessário.

### 6.2 Cards de tratamento `.treatment-card`
Estrutura:
```
article.treatment-card > figure > img
                       > figcaption > h3
                                     > p
                                     > a.card-link
```

Regras visuais:
- background `--white`;
- border-radius `var(--radius)`;
- overflow hidden;
- box-shadow variável;
- índice numérico automático (`counter`): fundo `rgba(36,34,47,.72)`, texto branco, font display;
- hover efeito: `translateY(-6px)` suave;
- imagem altura fixa `220px`, object-fit cover;
- card-link sempre em `--gold-dark` com bottom border.

### 6.3 Cards genéricos `.card`
Usados em conteúdo interno genérico:
- background `--white`;
- padding `40px 32px`;
- border `1px solid var(--border)`;
- border-radius `var(--radius)`;
- hover: `translateY(-6px)`.

### 6.4 Split (bloco com imagem)
Classe: `.split` e `.split reverse`

Desktop:
- grid `0.9fr 1.1fr` ou inverso;
- gap `60px`;
- borda/shadow em figura, border-radius aplicado.

Mobile:
- 1 coluna;
- reverse não altera ordem no mobile (ordem padrão vertical).

Elementos internos comuns:
- eyebrow + h2 + lead;
- blockquote com borda left 3px `--gold`, font display italic.

### 6.5 Listas
#### Check-list
- `<ul class="check-list">`;
- item: `padding 10px 0 10px 34px`;
- separador: `border-bottom 1px solid var(--border)`;
- marcador: `::before` com `✓`, cor `--gold`;
- última fila sem border-bottom.

#### Steps
- `<ol class="steps">`;
- cada `<li>` com `counter-increment`, padding left `56px`;
- círculo numerado: `38px x 38px`, background `--gold`, texto branco, font display.

#### Results-list
- grid responsivo `repeat(auto-fit, minmax(240px, 1fr))`;
- cada `<li>` com card visual igual `.card`, porém sem hover obrigatório.

### 6.6 FAQ
- estrutura `<details class="faq-item">`;
- summary: display flex, space-between, font display `1.05rem`;
- indicador: `::after` com `+` / `–` na cor `--gold`;
- body: margin-top `14px`, cor `--text-light`;
- sem JavaScript obrigatório; fallback nativo funcionando.

### 6.7 Short Player
Estrutura:
```html
<div class="short-player" data-short-url="..." data-short-title="...">
  <button class="short-player__launch" type="button">
    <span class="short-player__play" aria-hidden="true"></span>
    <span>Assistir vídeo</span>
  </button>
  <p class="short-player__empty">Clique para assistir...</p>
</div>
```

Regras visuais:
- área demarcada com padding e border sutil;
- ícone de play `.short-player__play` como circle ou triangle em `--gold`;
- estados: `.is-playing` esconde prompt e mostra iframe;
- `.is-unconfigured` deve exibir fallback textual visível.

### 6.8 Botões flutuantes e utilitários
#### WhatsApp float — sofisticado
- `#whatsapp-float` fixo bottom-left;
- **URL obrigatória:** `https://wa.me/5517981354913`;
- ícone discreto centralizado (letra/ícone limpo);
- tamanho modesto e equilibrado;
- **sofisticação:** sombra sutil, fundo `#25D366`, sem ruído extra;
- z-index coerente com `.back-to-top`;
- no mobile, manter afastamento seguro das bordas e dos CTAs do rodapé;

#### Back-to-top
- `#back-to-top` fixo bottom-right, `46px x 46px`;
- invisível por padrão (`opacity: 0; visibility: hidden`);
- classe `.show` torna visível;
- animação suave de transição.

### 6.9 Animações de entrada
- atributo `[data-reveal]` marca alvos;
- `--reveal-delay` opcional para stagger manual;
- classe `.is-visible` acionada via Intersection Observer;
- fallback com JS desativado: elementos já iniciam visíveis via `.is-visible` injetado.

### 6.10 Estados de acessibilidade visual
Obrigatórios:
- `:focus-visible` com outline de `2px solid var(--gold-dark)` e offset;
- `:hover` sobre links da navegação com underline/border-bottom em `--gold`;
- dropdown topic: `summary:focus-visible` visível;
- botões mantêm legibilidade em versão mobile sem zoom.

---

## 7. Assets e imagens

### 7.1 Formatos aceitos
Trabalho de design deve entregrar:
- `.jpg` de origem otimizado para web;
- `.webp` derivado para produção;
- fallback `.jpg` caso navegador antigo não suporte WebP.

### 7.2 Nomenclatura
Sempre kebab-case, minúsculas, sem acentos:
```
sobre-dra-elaine.jpg
clareamento.jpg
hero-estetica.jpg
```

### 7.3 Diretrizes de imagem
- retratos: composição centrada, luz natural;
- close em procedimentos: evitar gore, respeitar Tom;
- cenas clínicas: manter espaço negativo para overlay de texto;
- hero-images: comportamento de gradiente igual em todas as páginas.

### 7.4 OCR/Alt text padrão
- marca/logo: nome completo;
- doctor portrait: “Dra. Elaine Morch”;
- hero: nome do eixo (“Estética Íntima”, “Saúde Hormonal”);
- tratamento: nome do procedimento.

---

## 8. Responsividade por objeto

Os objetos abaixo devem ser validados nos breakpoints `375px`, `768px` e `1440px`.

| Objeto | 375px | 1440px |
|---|---|---|
| Header | hambúrguer + brand inline | nav horizontal completa |
| Hero editorial | coluna única, h1 reduzido | h1 ampliado, 2 colunas |
| Stats | 1 col empilhada | 3 colunas inline |
| Practice grid | 1 coluna | 2 colunas lado a lado |
| Short player | pilha vertical | texto + player lado a lado |
| Split | imagem acima do conteúdo | imagem à esquerda |
| Cards grid | 1 coluna | até 3 colunas quando necessário |
| Footer | 1 coluna minimalista | 1 linha elegante + copyright |

---

## 9. Tokens para Dev
Copiar conforme abaixo no início do arquivo `css/style.css`:

```css
:root {
  --gold: #a9814f;
  --gold-dark: #8a6a3f;
  --gold-light: #d4b483;
  --blush: #f7ece6;
  --blush-dark: #efd9cd;
  --bg: #fffaf6;
  --white: #ffffff;
  --text: #3a332c;
  --text-light: #6f6459;
  --border: #e7dcd0;
  --shadow: 0 10px 30px rgba(58, 51, 44, 0.08);
  --radius: 4px;
  --font-display: 'Playfair Display', Georgia, serif;
  --font-body: 'Poppins', -apple-system, BlinkMacSystemFont, sans-serif;
}
```

Proibido:
- adicionar paleta complementar não aprovada;
- trocar famílias tipográficas sem solicitação;
- usar cores saturadas além dos tons definidos.

---

## 10. Critérios de aprovação do Designer
Este documento é encerrado quando:
- todas as seções tiverem entradas preenchidas;
- paleta aprovada pelo Tech Lead;
- `index.html` for replicada visualmente nas páginas internas;
- menu Especializações e footer minimalista aprovados em 2 páginas internas;
- botão WhatsApp no padrão definido.

Alterações posteriores devem ser registradas como patch neste arquivo antes da implementação no código.
