# Practica React Foundations 
# Chapter 8 – Migración a Next.js (App Router)

## Qué se hizo
- Se instaló `next`, `react`, `react-dom` y se configuraron scripts (`dev`, `build`, `start`).
- Se creó la estructura `app/` con `layout.js` y `page.js`.
- Se movió la UI a Server Components por defecto y se aisló la interactividad en un Client Component.

## Archivos clave
- `app/layout.js`: layout raíz con `<html>` y `<body>`.
- `app/page.js`: renderiza título y lista de nombres (Server Component).
- `app/like-button.js`: `'use client'` + `useState` para el botón Like (Client Component).

## Cómo correr
```bash
npm run dev
# http://localhost:3000