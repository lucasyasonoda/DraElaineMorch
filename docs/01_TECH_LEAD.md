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

A **página `index.html` é a referência piloto do projeto**. Cabeçalho, tipografia, espaçamentos e containers devem ser padronizados com base nela e replicados em todas as páginas internas.

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
├── index.html               # Página piloto / referência visual
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
- **Menu dropdown de Especializações no cabeçalho fixo superior**
- Mobile menu toggle com animação suave
- Hero editorial com imagem de fundo + CTA
- Seções reutilizáveis: stats, cards, CTA final, FAQ (details/summary)
- Animações de entrada via Intersection Observer
- Botão "voltar ao topo"
- Player configurável de YouTube Short via atributo `data-short-url`
- **Botão flutuante de WhatsApp alinhado à marca, apontando para `https://wa.me/5517981354913`**
- **Rodapé minimalista, compacto e elegante**

### 3.4 Requisitos não-funcionais
- Performance: assets otimizados, lazy-load por contexto
- Acessibilidade: WCAG 2.1 AA mínimo; aria-labels, foco visível, navegação por teclado
- SEO: title/description por página, headings semânticos, estrutura h1-h2-h3 consistente
- Responsividade: breakpoints principais em 900px e ajustes com clamp()/vw
- Navegação: funcionar corretamente com JavaScript indisponível (HTML-first)
- Compatibilidade: evergreen browsers; sem suporte a IE11
- **Padronização visual:** todas as páginas devem herdar header/footer/containers/tipografia de `index.html`

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
- [ ] **Menu dropdown Especializações**
  - Estrutura `details/summary` alinhada ao header piloto
  - Estados aberto/fechado consistentes
- [ ] **Rodapé minimalista**
  - Layout compacto e elegante derivado de `index.html`
  - Padronização para todas as páginas
- [ ] **Botão WhatsApp flutuante refinado**
  - Design sofisticado alinhado à paleta oficial
  - Link canônico `https://wa.me/5517981354913`

### Dev (front-end)
Implementação, integração e manutenção técnica.

- [x] **Estrutura HTML semântica** baseline já entregue
- [x] **Navegação e acessibilidade** baseline já entregue
- [ ] **Padronização index.html como referência**
  - Replicar header, tipografia, espaçamentos e containers em `pages/*.html`
- [ ] **Menu dropdown Especializações**
  - Implementar no header fixo com `details/summary` nativo
- [ ] **WhatsApp flutuante com URL canônica**
  - Atualizar link e manter comportamento responsivo

### Tester
Validação manual e por checklist de qualidade.

- [ ] **Consistência cross-page**
  - Header/footer/containers idênticos em todas as páginas
- [ ] **Menu Especializações**
  - Abertura/fechamento por clique e teclado
- [ ] **WhatsApp CTA**
  - Link apontando para `https://wa.me/5517981354913`
- [ ] **Responsividade**
  - Validação em 375px, 768px e 1440px

---

## Regras de trabalho do squad
- Designer altera tokens em `docs/02_DESIGNER.md` documento vivo; alterações devem ser comunicadas ao Dev antes da implementação.
- Dev implementa seguindo `docs/03_DEV.md` e só altera estrutura após aprovação do Designer.
- Tester segue `docs/04_TESTER.md` e registra bugs em issues antes de reprovar.
- Commits devem ser pequenos e descritivos; feature branches recomendadas.
- Este arquivo (`01_TECH_LEAD.md`) é a única fonte de verdade hierárquica acima dos demais docs.
