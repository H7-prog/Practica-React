# Practica React Foundations 
# Chapter 10 – Polishing Next.js (Build & Server/Client Split)

## Qué se hizo
- Se verificaron los **scripts** de Next en `package.json` (`dev`, `build`, `start`).
- Se confirmó la **separación**:  
  - **Server Components**: `Header`, `NamesList`, `page.js`.  
  - **Client Component**: `LikeButton` (con `'use client'` y `useState`).
- Se ejecutó el **build de producción** para validar que la app compila y corre sin errores.

## Archivos clave
- `app/layout.js` – layout raíz con `<html>` y `<body>` (opcional: estilos mínimos inline).
- `app/page.js` – página principal (Server Component).
- `app/components/Header.js` – Server Component (render estático).
- `app/components/NamesList.js` – Server Component (lista).
- `app/like-button.js` – Client Component (interactividad con `useState`).

## Scripts
```bash
npm run dev    # desarrollo
npm run build  # compilar producción
npm start      # levantar producción en http://localhost:3000
