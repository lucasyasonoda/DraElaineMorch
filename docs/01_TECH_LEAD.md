# Tech Lead — Dra. Elaine Morch
> Documento mestra do projeto. Define visão, público, requisitos técnicos e linha base de execução para Designer, Dev e Tester.

---

## 1. Visão geral do projeto

O produto é um site editorial para a marca pessoal **Dra. Elaine Morch**, ginecologista em Sorocaba — SP.

O objetivo principal do site é:
- transmitir cuidado especializado, acolhimento e credibilidade;
- explicar, de forma clara e humana, os dois eixos de atuação da médica: **Estética Íntima** e **Saúde Hormonal**;
- converter visitantes em agendamentos via CTA para e-mail/WhatsApp.

Trata-se de um site **estático, responsivo e acessível**, produzido em HTML + CSS + JS vanilla, sem backend e sem build tool, otimizado para entrega rápida e manutenção simples. A identidade visual segue estilo editorial premium, com paleta quente em tons de blush, gold e creme, tipografia serifada para títulos e sans-serif para corpo.

---

## 2. Público-alvo

| Perfil | Características principais | Necessidade |
|---|---|---|
| Mulheres de 35–65 anos | Passam por climatério, menopausa ou buscam procedimentos estéticos de saúde íntima. | Clareza, acolhimento e credibilidade médica. |
| Pacientes de estética íntima | Procuram procedimentos específicos: laser, ninfoplastia, radiofrequência, clareamento e preenchimento. | Informação técnica sem jargão + indicação de próximos passos. |
| Pacientes de saúde hormonal | Buscam reposição hormonal, bioidenticos, implantes e acompanhamento contínuo. | Evidência de resultado e abordagem personalizada. |
| Encaminhadores / colegas | Podem recomendar a profissional para os pacientes. | Site profissional, navegação clara e contato rápido. |
| Dispositivos móveis > desktop | Brasil: maioria do público acessa por celular. | Experiência mobile-first, sem travamentos. |

Observação: tono da comunicação é **acolhedor, técnico mas acessível, sem julgamentos**.

---

## 3. Requisitos técnicos

### 3.1 Stack atual
- HTML5 semântico
- CSS moderno com variáveis, clamp(), grid e flexbox
- JavaScript vanilla (ES5/ES6) modular por domínio
- Fontes: Playfair Display (display) + Poppins (body) via Google Fonts
- Sem framework, sem bundler, sem dependências externas além das fonts/ícones por CDN

### 3.2 Estrutura do projeto
```
DraElaineMorch/
├── index.html
├── css/
│   └── style.css
├── js/
│   └── script.js
├── imgs/
│   ├── logo.png
│   ├── hero-home.jpg
│   ├── hero-estetica.jpg
│   ├── hero-saude.jpg
│   └── /tratamentos/*
├── pages/
│   ├── estetica-intima.html
│   ├── saude-hormonal.html
│   ├── laser-intimo.html
│   ├── ninfoplastia.html
│   ├── radiofrequencia-intima.html
│   ├── clareamento-intimo.html
│   ├── preenchimento-intimo.html
│   ├── menopausa.html
│   ├── reposicao-hormonal.html
│   ├── hormonios-bioidenticos.html
│   ├── implantes-hormonais.html
│   └── incontinencia-urinaria.html
└── docs/
    ├── 01_TECH_LEAD.md
    ├── 02_DESIGNER.md
    ├── 03_DEV.md
    └── 04_TESTER.md
```

### 3.3 Requisitos funcionais atuais
- Navegação fixa com menu dropdown e CTA de agendamento
- Mobile menu toggle com animação suave
- Hero editorial com imagem de fundo + CTA
- Seções reutilizáveis: stats, cards, CTA final, FAQ (details/summary)
- Animações de entrada via Intersection Observer
- Botão "voltar ao topo"
- Player configurável de YouTube Short via atributo `data-short-url`
- Footer s itemizado por área de tratamento

### 3.4 Requisitos não-funcionais
- Performance: assets otimizados, lazy-load por contexto
- Acessibilidade: WCAG 2.1 AA mínimo; aria-labels, foco visível, navegação por teclado
- SEO: title/description por página, headings semânticos, estrutura h1-h2-h3 consistente
- Responsividade: breakpoints principais em 900px e ajustes com clamp()/vw
- Navegação: funcionar corretamente com JavaScript indisponível (HTML-first)
- Compatibilidade: evergreen browsers; sem suporte a IE11

### 3.5 Diretrizes de conteúdo
- TOM: profissional, humano, técnico, acolhedor
- Sem promessas médicas exageradas
- Sem jargão excessivo; sempre explicar termos técnicos quando necessário
- CTAs claros e repetidos: "Agendar consulta", "Falar pelo WhatsApp"
- Disclaimer médico em todas as páginas

---

## 4. Checklist de tarefas

### Designer
Entregas visuais e de sistema de design.

- [x] **Paleta e tipografia aprovada**
  - Variáveis CSS organizadas em `style.css`
  - Confirmação da marca nas versões light e dark
- [x] **Tokens de design documentados**
  - Espaçamentos, raios de borda, sombras, breakpoints
- [x] **Grid/layout mobile-first validado**
  - Teste em 375px, 768px, 1440px
- [x] **Hero e imagens de página**
  - Backgrounds, crop e fallback textual para cada página
  - Retrato/sobre consistente em `/imgs`
- [x] **Componentes visuais**
  - Botões `.btn-primary`, `.btn-secondary`, `.btn-whatsapp`
  - Cards `.treatment-card`, `.card`, `.split`
  - FAQ, steps, depoimentos, stats
- [x] **Variações de hero por página**
  - Visto em hero-estetica.jpg, hero-saude.jpg
- [x] **Guide de acessibilidade visual**
  - Contrastes verificados: texto sobre blush/gold
  - Estados de hover/focus desenhados
- [x] **Microcopy revisada**
  - Eyebrows, titulares, legendas e breadcrumbs
- [x] **Assets finais**
  - Logo PNG otimizado
  - Imagens WebP + fallback JPEG (se aplicável)

### Dev (front-end)
Implementação, integração e manutenção técnica.

- [x] **Estrutura HTML semântica**
  - header/nav/main/footer em todas as páginas
  - headings h1-h3 coerentes por página
- [x] **Navegação e acessibilidade**
  - Menu mobile funcional
  - Active state visível
  - Skip link + focus-visible aplicados
- [x] **Performance**
  - Tokens centralizados; CSS revisado sem regras mortas aparentes
  - Font display swap mantido pelo Google Fonts
- [x] **SEO on-page**
  - Title, description, canonical, h1 único por página
  - Breadcrumbs estruturados
- [x] **JavaScript**
  - Intersection Observer para `[data-reveal]`
  - Back-to-top e short player funcionando
  - Melhorias de acessibilidade no menu e active link
- [x] **Consistência de GET aliases**
  - URL canônica em `index.html`
  - Links internos usando caminhos relativos corretos
- [x] **Tratamento de erros**
  - Fallback para imagens disponível
  - URL de Short com fallback `.is-unconfigured`
- [x] **Integração com docs**
  - `docs/*.md` criados e sincronizados com a realidade do código
- [x] **Checklist final antes de deploy**
  - Estrutura validada; QA executado; `03_DEV.md` documentado

### Tester
Validação manual e por checklist de qualidade.

- [x] **Navegação cross-page**
  - Todos os links internos validados estaticamente
  - Navegação DOM funciona entre `/pages/*.html` e `index.html`
- [x] **Responsividade**
  - Breakpoints declarados em `900px`
  - Objetos de layout aplicados conforme `02_DESIGNER.md`
- [x] **CTAs**
  - Botão "Agendar consulta" com `mailto:contato@draelaine.com.br`
  - Links de agendamento presentes nas páginas
- [x] **SEO / Meta**
  - Title e description presentes nas páginas
  - Favicon presente
- [x] **Acessibilidade**
  - Skip link + `main id="main"` aplicados
  - Navegação por teclado via `details/summary` nativo
  - Imagens com alt/texto alternativo
- [x] **FAQ**
  - `details/summary` nativo
  - Acessível por teclado
- [x] **Short player**
  - `data-short-url` + fallback `.is-unconfigured`
  - Atributos de embed aplicados no JS
- [x] **Console e erros**
  - Sem erros de sintaxe aparentes
  - Sem referências quebradas em análise estática
- [x] **Cross-browser / dispositivos**
  - HTML-first sem dependência obrigatória de JS
- [x] **Fluxo final**
  - Voltar ao topo via botão com classe `.show`
  - Menu mobile persistente e fechamento lógico aplicado

---

## Regras de trabalho do squad
- Designer altera tokens em `docs/02_DESIGNER.md` documento vivo; alterações devem ser comunicadas ao Dev antes da implementação.
- Dev implementa seguindo `docs/03_DEV.md` e só altera estrutura após aprovação do Designer.
- Tester segue `docs/04_TESTER.md` e registra bugs em issues antes de reprovar.
- Commits devem ser pequenos e descritivos; feature branches recomendadas.
- Este arquivo (`01_TECH_LEAD.md`) é a única fonte de verdade hierárquica acima dos demais docs.
