# Google Search Console Setup - ProductOS

## ✅ Current Status

| Item | Status | Details |
|------|--------|---------|
| GSC Verification File | ✅ Ready | `public/googlec3eb645befada4ef.html` |
| Meta Tag Verification | ✅ Ready | `EtWoauwhaTFvxCkiAAntsExFtgIZNETAGdzfHiO9p8s` in layout.tsx |
| sitemap.xml | ✅ Live | https://www.productos.dev/sitemap.xml |
| robots.txt | ✅ Live | https://www.productos.dev/robots.txt |
| GA4 Tracking | ✅ Fixed | `G-XEFK3N9Y95` (CSP updated to allow GA) |

## 🔧 Steps to Verify Ownership (If Not Already Done)

1. **Go to Google Search Console**
   - https://search.google.com/search-console
   - Sign in with the Google account that owns GA4

2. **Add Property**
   - Click "Add property" (+ button)
   - Choose "URL prefix" method
   - Enter: `https://www.productos.dev`

3. **Verify Ownership**
   Two methods are already configured:
   - **HTML file** (recommended): The file `googlec3eb645befada4ef.html` is deployed
   - **Meta tag**: Already in the site metadata

4. **Submit Sitemap**
   - After verification, go to "Sitemaps" in left menu
   - Add: `sitemap.xml`
   - Click Submit
   - Should show "Success" status

## 📊 Post-Setup Checklist

After GSC is verified, check these within a few days:

- [ ] **Coverage report** - Any indexing errors?
- [ ] **Mobile Usability** - Any mobile issues flagged?
- [ ] **Core Web Vitals** - Check performance metrics
- [ ] **Enhancement reports** - Structured data validation
- [ ] **Links report** - External/internal link analysis

## 🔍 What's in Your Sitemap

Current pages indexed:
- Homepage (`/`) - Priority 1.0
- Features (`/features`) - Priority 0.9
- Pricing (`/pricing`) - Priority 0.9
- Enterprise (`/enterprise`) - Priority 0.8
- Blog (`/blog`) - Priority 0.8
- About (`/about`) - Priority 0.7
- Changelog (`/changelog`) - Priority 0.6
- Contact (`/contact`) - Priority 0.5
- Privacy & Terms - Priority 0.3

## 🤖 AI Crawler Access (GEO)

Your robots.txt explicitly allows AI crawlers:
- GPTBot (OpenAI/ChatGPT)
- Google-Extended (Gemini)
- CCBot (Common Crawl)
- anthropic-ai (Claude)
- PerplexityBot (Perplexity AI)
- Bytespider (TikTok/ByteDance)

This helps with Generative Engine Optimization (GEO).

## 📈 Connect GA4 to GSC

For combined insights:
1. Go to Google Analytics (analytics.google.com)
2. Admin → Property Settings → Product Links
3. Click "Link" next to Search Console
4. Select your GSC property
5. This enables the "Search Console" reports in GA4

## 🛡️ Security Note

CSP (Content Security Policy) has been updated to allow Google Analytics:
- `www.googletagmanager.com` (script loading)
- `www.google-analytics.com` (data collection)
- `analytics.google.com` (data collection)
- `region1.google-analytics.com` (regional endpoint)

---

*Last updated: February 2026*
