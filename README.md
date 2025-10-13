# Practica React Foundations 
# Chapter 9 – From React to Next.js (Server vs Client)

## Qué se hizo
- Se reorganizó la UI en **Server Components** (`Header`, `NamesList`) y **Client Component** (`LikeButton` con `'use client'`).
- Se dejó la lógica interactiva sólo del lado cliente para evitar errores de RSC.

## Archivos clave
- `app/components/Header.js` (Server)
- `app/components/NamesList.js` (Server)
- `app/like-button.js` (Client)
- `app/page.js` compone todo

## Correr
```bash
npm run dev
# http://localhost:3000
