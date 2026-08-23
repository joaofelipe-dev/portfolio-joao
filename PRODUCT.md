# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Primary: recruiters and hiring managers at Brazilian companies evaluating João Felipe for full-time frontend (CLT) roles. They arrive from LinkedIn/GitHub links or search, skim on desktop or mobile in a few minutes, and need fast evidence of competence.

Secondary: small businesses needing a frontend developer for real delivery work (several showcased projects are paid client deliveries).

## Product Purpose

A single-page personal portfolio (jfelipe.dev) that presents João's shipped projects, technical skills, and trajectory to win a full-time frontend engineering position. Success = a recruiter finishes the scroll convinced enough to start a hiring conversation (contact CTA).

## Positioning

Early-career frontend engineer who owns his trajectory: started programming in 2024, studying Análise e Desenvolvimento de Sistemas, with consistent, verifiable momentum ever since (+N contributions, public repos). The differentiator a neighboring candidate cannot copy: every claim on the page is provable in real time — live GitHub statistics fetched via API, six real delivered client projects with working links, and the site itself as a performance/accessibility work sample ("Front-end na tela, engenharia por baixo dos panos").

## Operating Context

- Language: Brazilian Portuguese (pt-BR); an English version is planned but does not exist yet.
- Evaluation scene: quick recruiter pass-through; sections are Banner → Stack → Projetos → Skills → Sobre → Contato on one scrolling page.
- Live data: GitHub stats (commits, repos, contributions) come from `/api/stats`, which proxies the public GitHub API; the UI degrades honestly ("—") when the API fails.
- Contact: form submitted server-side through Resend (`/api/send-email`), delivering to joaoufelipe@hotmail.com; the publicly displayed email is joaofelipedev@gmail.com (confirmed split by João). GitHub stats are served exclusively through `/api/stats`; no token may reach the browser bundle.
- Deployment: Vercel, with Speed Insights and Analytics enabled in production.

## Capabilities and Constraints

- Stack (existing codebase): Next.js 16 App Router, React 19, TypeScript, Tailwind CSS 4, Radix/shadcn-style components, Motion (reduced-motion aware), GSAP, Lenis smooth scroll, react-hook-form + zod.
- Six real projects with screenshot assets in `/public` (*.webp), categories: Plataforma, Sistema Corporativo, Website. Some project cards link to "#" (no live URL yet) — do not invent URLs.
- SEO infrastructure is mature: JSON-LD Person/WebSite/BreadcrumbList, OpenGraph/Twitter cards, sitemap, robots.
- Dark theme only (`html.dark`); light mode exists in README claims but is not implemented.
- Explicitly undecided product facts: scope and timing of the English version (i18n strategy not chosen).

## Brand Commitments

- Name: João Felipe; identity as "Engenheiro Frontend".
- Domain jfelipe.dev; GitHub github.com/joaofelipe-dev; LinkedIn linkedin.com/in/joao-felipedev; email joaofelipedev@gmail.com.
- Voice: direct, concrete, technically literate pt-BR copy — states what was done without inflating seniority; avoids unverifiable self-praise ("não promete o que não dá pra provar").
- Honest-data rule: metrics shown must come from real APIs; never fabricate numbers, testimonials, or clients.

## Evidence on Hand

- Six delivered client projects with screenshots: PromoMaker, Design System (github.io), Centralizador de Pedidos (GitHub repo), Painel de Vendas, Travelgram (github.io), Sistema de Papelaria.
- Live GitHub statistics pipeline (`/api/stats`) used by both Banner and Sobre sections.
- Production deployment at https://jfelipe.dev with analytics.
- No testimonials, press, certifications, or employment history are on hand — none may be invented.

## Product Principles

1. Proof over claims — anything asserted must be verifiable by the visitor within seconds.
2. Trajectory as momentum — early-career status is stated plainly and framed as velocity, never hidden or apologized for.
3. The site is the strongest work sample — performance, accessibility, and motion quality demonstrate the craft being sold.
4. Recruiter-time respect — hierarchy and copy must survive a 60-second skim; depth rewards those who keep scrolling.

## Accessibility & Inclusion

WCAG 2.2 AA is a confirmed hard requirement (contrast, keyboard operability, focus visibility, screen-reader semantics). Reduced-motion preference must stay respected throughout (MotionConfig reducedMotion="user", Lenis included).
