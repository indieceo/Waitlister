# Waitlister

A modern Next.js waitlist template integrated with Loops.so. Build excitement and grow your email list ahead of launch.

## ✨ Features

- Modern, responsive design
- Loops.so email integration
- Rate limiting with Upstash Redis
- Easy customization via config files
- Dark/light mode support
- Smooth animations

## 📦 Tech Stack

- Next.js 15
- Tailwind CSS 
- Motion.dev
- Loops.so API
- Upstash Redis (Rate limiting)

## 🚀 Quick Start

```bash
bun install
bun dev
```

Open [http://localhost:3000](http://localhost:3000)

## 🔗 Setup

### [Loops.so](https://loops.so)

1. Verify your domain.
2. Use "Welcome to the waitlist" template in the Loops dashboard.
3. Get your API key.
4. Add `LOOPS_API_KEY` to your environment variables.

### [Upstash Redis](https://upstash.com)

1. Create an account on [Upstash](https://upstash.com).
2. Create a new Redis database.
3. Get your REST URL and REST token from the database dashboard.
4. Add the following environment variables:
   - `UPSTASH_REDIS_REST_URL`
   - `UPSTASH_REDIS_REST_TOKEN`

**Note:** Rate limiting is set to 2 requests per minute per IP address to prevent abuse.

## 🛠️ Customization

All content is configured in `src/config/`. Modify these files to customize your waitlist:

### `site.ts`
Core site settings:
- `siteName`: Your product/brand name
- `siteUrl`: Your site URL
- `metadata`: SEO title and description
- `logos`: Light/dark mode logo paths

### `hero.tsx`
Hero section:
- `heroBadge`: Badge icon and text above headline
- `title`: Main headline
- `subtitle`: Description below headline
- `socialProof`: Avatar images and count text

### `about.tsx`
About section:
- `description`: About text
- `features`: Array of feature icons and labels
- `videoSrc`: Video URL or path

### `faq.ts`
FAQ section:
- `faqs`: Array of question/answer objects
- Uses `site.siteName` for dynamic naming

### `footer.tsx`
Footer:
- `socialLinks`: Social media icons and URLs
- `copyrightNotice`: Copyright text

---

> **Waitlister** – A modern waitlist template for your next launch
