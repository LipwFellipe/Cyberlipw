# 🛡️ SentinelaHub — Portal de Cibersegurança

Single Page Application desenvolvida em React para a disciplina **Linguagem de Programação para Internet** (UNIUBE), como trabalho final.

## 👤 Integrantes do grupo

| Nome | RA |
| --- | --- |
| Luiz Fellipe Nunes | 5165449 |

## 📌 Título do projeto

**SentinelaHub** — Portal educacional de cibersegurança.

## 📝 Descrição do projeto

O SentinelaHub é uma aplicação frontend (SPA) que reúne, em um só lugar, um catálogo de ameaças digitais, um arsenal de ferramentas de defesa e trilhas de aprendizado de segurança da informação. A navegação acontece sem recarregar a página, com conteúdo renderizado dinamicamente a partir de dados mockados localmente. O foco é apresentar o conteúdo de forma visual, organizada e interativa, com identidade própria (tema escuro "cyber" com detalhes em neon).

Não há backend, banco de dados ou API: todos os dados são definidos no próprio frontend, na pasta `src/data`.

## 🎯 Tema escolhido

**Cibersegurança** — um hub temático sobre ameaças, ferramentas e educação em segurança digital.

## 🧰 Tecnologias utilizadas

- **React** (com JavaScript)
- **Vite** (bundler e servidor de desenvolvimento)
- **React Router DOM** (roteamento da SPA)
- **CSS Modules** (estilização isolada por componente/página)

## ✨ Principais funcionalidades

- SPA com **6 rotas** e navegação por uma barra fixa usando `NavLink`;
- **Catálogo de ameaças** com busca por texto e filtro por severidade (Lift State Up);
- **Página de detalhe** de cada ameaça, acessada por rota dinâmica (`/ameacas/:id`);
- **Radar de Ameaças** interativo (componente criativo autoral);
- **Ferramentas de segurança** com alternância para exibir apenas as gratuitas;
- **Trilhas de aprendizado** com dica de segurança sorteada por clique;
- Renderização condicional (estado vazio de busca, ameaça não encontrada, selo grátis/pago, etc.);
- Navegação programática com o hook `useNavigate` (cards e botões);
- Layout responsivo para desktop e mobile.

## 📁 Estrutura de pastas

```
src/
├── assets/            # imagens (SVG) do projeto
├── components/        # componentes reutilizáveis (cada um com seu CSS Module)
│   ├── Navbar/
│   ├── Footer/
│   ├── Hero/
│   ├── StatStrip/
│   ├── SearchBar/
│   ├── SeverityBadge/
│   ├── ThreatCard/
│   ├── ToolCard/
│   └── ThreatRadar/   # componente criativo
├── data/              # dados mockados (threats, tools, learning)
├── pages/             # páginas/telas da SPA
│   ├── Home/
│   ├── Threats/
│   ├── ThreatDetail/
│   ├── Tools/
│   ├── Learn/
│   └── About/
├── App.jsx            # definição das rotas
└── main.jsx           # ponto de entrada + BrowserRouter
```

## ⚙️ Passos para instalação

Pré-requisito: ter o **Node.js** instalado (versão 18 ou superior).

```bash
# 1. Instale as dependências do projeto
npm install
```

## ▶️ Passos para execução

```bash
# Ambiente de desenvolvimento
npm run dev
```

Depois, abra no navegador o endereço exibido no terminal (por padrão `http://localhost:5173`).

Para gerar a versão de produção:

```bash
npm run build      # gera a pasta dist/
npm run preview    # serve a build localmente para conferência
```

## 🔗 Repositório no GitHub

> https://github.com/luiznunesMitra/sentinelahub
>
> *(substitua pelo link real após criar o repositório)*

## 🌟 Componente criativo: Radar de Ameaças

O componente criativo autoral do projeto é o **`ThreatRadar`** (`src/components/ThreatRadar/`).

Trata-se de um **radar estilo "scope" militar** onde cada ameaça do catálogo vira um *blip* (ponto luminoso) posicionado de acordo com a sua severidade: quanto mais crítica, mais próxima do centro. Uma **linha de varredura gira continuamente** sobre o radar, reforçando a ideia de monitoramento em tempo real.

A interação acontece por **eventos de mouse e clique**, causando mudanças visuais perceptíveis:

- **Passar o mouse** sobre um ponto faz ele crescer, emitir um pulso animado e revelar um rótulo flutuante com o nome da ameaça;
- **Clicar** em um ponto seleciona a ameaça e abre, ao lado, um painel com ícone, severidade, categoria e resumo, além de um botão que leva ao dossiê completo (`useNavigate`);
- Um **botão de varredura** permite pausar e retomar a animação do radar.

O componente foi construído com **SVG**, gradientes cônicos e estado em React (`useState` / `useMemo`), totalmente integrado ao tema de cibersegurança do projeto.
