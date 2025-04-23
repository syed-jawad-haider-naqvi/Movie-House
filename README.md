# 🎬 Movie House

Movie House is a movie management web application built using **Next.js**. The application demonstrates routing strategies, data fetching methods (SSG, SSR, CSR), and rendering techniques in Next.js. Users can browse, search, and view details about movies, genres, and directors—all sourced from a static `data.json` file from the public folder.

---


## 🗂️ Data Structure (public/data.json)

- **Movies**: `id`, `title`, `directorId`, `description`, `releaseYear`, `genreId`, `rating`
- **Genres**: `id`, `name`
- **Directors**: `id`, `name`, `biography`

---

## 🏠 Home Page (`/`)
- Displays trending movies
- "Browse Genres" button uses programmatic navigation (`router.push()`)

---

## 📽️ Movies Page (`/movies`)
- Displays all movies in card format
- Filter by genre
- Links to `/movies/[id]` for details

---

## 📄 Movie Details Page (`/movies/[id]`)
- Statically generated using `getStaticPaths()` + `getStaticProps()`
- Shows:
  - Title
  - Description
  - Director (link to nested `/movies/[id]/director`)
  - Release Year
  - Rating

---

## 🎬 Director Info (Nested Route)
- `/movies/[id]/director`
- Shows director name and biography

---

## 🧭 Genres Page (`/genres`)
- Server-side rendered using `getServerSideProps()`
- Shows list of genres and corresponding movies

---

## 👨‍🎤 Directors Page (`/directors`)
- Client-side rendered using `useSWR()`
- Lists:
  - Director name
  - Biography
  - Movies directed

---

## ❓ Help Pages (`/help/[...slug]`)
Catch-all route for:
- `/help`
- `/help/faqs`
- `/help/contact`
- `/help/privacy`

---

## ❌ Custom 404 Page
- Located at `/pages/404.js`
- Includes friendly message and "Go Home" button

---

## 🧪 Features Used
- ✅ Static Generation (SSG)
- ✅ Incremental Static Regeneration (ISR)
- ✅ Server-Side Rendering (SSR)
- ✅ Client-Side Rendering (CSR) with `useSWR`
- ✅ Dynamic Routes
- ✅ Nested Routes
- ✅ Catch-All Routes
- ✅ Custom 404 Page
- ✅ Programmatic Navigation

---

## Getting Started

```bash
npm install
npm run dev
```

Ensure `data.json` is in the root or `public` directory based on your data loading strategy.

---

## 📦 Dependencies

- [Next.js](https://nextjs.org/)
- [SWR](https://swr.vercel.app/)

---
