/**
 * Central config for the wedding invitation site.
 * To change the OG thumbnail:
 *   1. Drop your image into  public/images/og-thumbnail.jpg
 *   2. Update `ogImage` below (or leave it — it already points there)
 * To change the site URL for production:
 *   Set NEXT_PUBLIC_SITE_URL in your .env.local / hosting env vars.
 */

export const siteConfig = {
  // ── Deployment URL ────────────────────────────────────────────────────────
  // Must be an absolute URL (no trailing slash).
  // Set NEXT_PUBLIC_SITE_URL in your environment for production.
  url: (process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000').replace(/\/$/, ''),

  // ── Couple ────────────────────────────────────────────────────────────────
  groom: 'Shiva Kumar',
  bride: 'Soujanya',

  // ── Event details ─────────────────────────────────────────────────────────
  weddingDate: '5th July 2026',
  venue: 'Warangal, Telangana',

  // ── Social / OG metadata ──────────────────────────────────────────────────
  ogTitle: 'Shiva Kumar & Soujanya — Wedding Invitation',
  ogDescription:
    'Two hearts, one promise. Join us on 5th July 2026 as we celebrate our union at Warangal, Telangana. Your blessings mean the world to us.',

  // Place your custom thumbnail at public/images/og-thumbnail.jpg
  // Recommended size: 1200 × 630 px, < 8 MB, JPG or PNG.
  ogImage: '/images/og-thumbnail.png',

  // Fallback used when og-thumbnail.jpg doesn't exist yet.
  ogImageFallback: '/images/temple-bg.png',
} as const

export type SiteConfig = typeof siteConfig
