<div align="center">
  <a href="https://waitlister.indietech.dev" target="_blank" rel="noopener noreferrer">
    <img src="https://waitlister.indietech.dev/logo.webp" alt="Waitlister" width="200" />
  </a>
  <br />
</div>

# Waitlister

A clean, ready-to-use Next.js template for capturing emails and building your waitlist fast. Effortless integration with Loops.so and Upstash Redis—perfect for launching your next project.

Check the live demo here 👉️ [Waitlister.indietech.dev](https://waitlister.indietech.dev/)

<div align="center">
  <table>
    <tr>
      <td align="center" width="50%">
        <img src="https://indietech.dev/products/waitlister.webp" alt="Waitlister Dark Mode" width="100%" />
        <br />
      </td>
      <td align="center" width="50%">
        <img src="https://indietech.dev/products/waitlister_light.webp" alt="Waitlister Light Mode" width="100%" />
        <br />
      </td>
    </tr>
  </table>
</div>

## ✨ Features

- Responsive, modern UI
- Seamless Loops.so integration
- Built-in rate limiting
- Simple config customization
- Supports dark & light mode
- Smooth, elegant animations

## 📦 Tech Stack

- Next.js 15
- Tailwind CSS
- Motion.dev
- Loops.so API
- Upstash Redis

## 🚀 Quick Start

```bash
bun install
bun dev
```

Open [http://localhost:3000](http://localhost:3000)

## 🔗 Setup

### [<img src="https://indietech.dev/stack/loops.svg" alt="Loops.so" height="20" style="vertical-align: middle; margin-right: 8px;" /> Loops.so](https://loops.so/?ref=indietech.dev)

1. Verify your domain.
2. Get your API key.
3. Add `LOOPS_API_KEY` to your environment variables.

### [<img src="https://indietech.dev/stack/upstash.svg" alt="Upstash" height="20" style="vertical-align: middle; margin-right: 8px;" /> Upstash Redis](https://upstash.com/?ref=indietech.dev)

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


<div align="center">
  <a href="https://indietech.dev" target="_blank">
    <img src="https://indietech.dev/logo.svg" alt="IndieTech Logo" width="32" height="32">
  </a>
  <p>
    Visit <strong><a href="https://indietech.dev">IndieTech.dev</a></strong> <br/> for more on our products and services.
  </p>
</div>