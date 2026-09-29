# AC Hair & Makeup — Sitio web

> SPA de presentación para un negocio de **hair & makeup** (bodas, eventos y formación).  
> Vue 3 · Vue Router · Vue CLI · Cloudinary

[![Vue](https://img.shields.io/badge/Vue-3-42b883?logo=vuedotjs&logoColor=white)](https://vuejs.org/)
[![Vue Router](https://img.shields.io/badge/Vue_Router-4-42b883?logo=vuedotjs&logoColor=white)](https://router.vuejs.org/)

---

## Descripción

Sitio web multipágina para presentar los servicios de una profesional de belleza: perfil, packs (boda, invitados, clases), galería por categorías y contacto.

Proyecto temprano de frontend (2024) centrado en **Vue 3 Composition/Options API**, enrutado cliente y media alojada en **Cloudinary**. Sirve como muestra de una landing/comercial SPA sin backend propio.

---

## Stack

| Capa | Tecnología |
|------|------------|
| Frontend | **Vue 3** |
| Routing | **Vue Router 4** |
| Build | **Vue CLI 5** (Webpack) |
| Media | **Cloudinary** (imágenes remotas) |
| Gestor de paquetes | **pnpm** |

Sin API propia: contenido y precios viven en los componentes; el formulario de contacto es UI (sin endpoint conectado).

---

## Páginas

| Ruta | Vista | Contenido |
|------|-------|-----------|
| `/` | Home | Hero a pantalla completa + acceso a secciones |
| `/about` | About | Trayectoria (bodas, cine/TV, enfoque natural) |
| `/services` | Services | Packs y tarifas (novia, invitados, clases) |
| `/gallery` | Gallery | Categorías: Brides, Maids of Honour, Guests, Grooms |
| `/gallery/:id` | Category | Grid de trabajos (categoría Brides con imágenes) |
| `/contact` | Contact | Formulario desplegable + CTA de llamada |

Navegación global por menú modal en `App.vue`.

---

## Estructura

```
src/
├── App.vue                 # Shell + menú modal
├── main.js
├── components/
│   └── HeaderWeb.vue       # Hero home (fondo Cloudinary)
├── router/index.js         # Rutas SPA
└── views/
    ├── HomeView.vue
    ├── AboutView.vue
    ├── ServicesView.vue
    ├── GalleryView.vue
    ├── CategoryView.vue    # Galería por categoría
    └── ContactView.vue
```

---

## Arrancar

Requisito: [pnpm](https://pnpm.io/).

```bash
pnpm install
pnpm run serve    # desarrollo (hot reload)
pnpm run build    # build de producción
pnpm run lint
```

Abre la URL que muestra Vue CLI (normalmente `http://localhost:8080`).

---

## Notas de alcance

- **Estado:** prototipo funcional / portfolio early-stage (feb 2024).
- Galería: categoría **Brides** con imágenes; el resto de categorías están preparadas en rutas pero sin set de fotos aún.
- Formulario de contacto: interfaz lista; el `action` no apunta a un backend desplegado.
- Dependencia `cloudinary-core` en `package.json`; las URLs de imagen se usan de forma directa en las vistas.

---

## Tags

`vue` · `vue-router` · `vue-cli` · `spa` · `cloudinary` · `landing-page` · `frontend`
