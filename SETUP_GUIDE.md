# Complete Setup Guide for ExploreTheCity.in

This guide will walk you through setting up and deploying your website step by step.

## Table of Contents
1. [Initial Setup](#initial-setup)
2. [Content Management](#content-management)
3. [Google AdSense Setup](#google-adsense-setup)
4. [Deployment](#deployment)
5. [Post-Launch Tasks](#post-launch-tasks)

---

## Initial Setup

### Step 1: Install Node.js
1. Download Node.js from [nodejs.org](https://nodejs.org/) (LTS version)
2. Install and verify:
   ```bash
   node --version
   npm --version
   ```

### Step 2: Install Dependencies
```bash
cd d:\personal\ETC
npm install
```

### Step 3: Run Development Server
```bash
npm run dev
```
Visit http://localhost:3000 to see your website.

---

## Content Management

### Adding Cities

**File:** `data/cities.json`

1. Open the file
2. Add a new city object at the end of the array
3. Required fields:
   - `slug`: URL-friendly name (e.g., "mumbai")
   - `name`: Display name (e.g., "Mumbai")
   - `state`: State name
   - `image`: Image URL
   - `shortDescription`: Brief description
   - `attractions`: Number of attractions
   - `description`: Full description
   - `bestTimeToVisit`: Best months
   - `topAttractions`: Array of attractions
   - `localFood`: Array of food items
   - `travelTips`: Array of tips
   - `budgetEstimate`: Budget range

**Example:**
```json
{
  "slug": "chennai",
  "name": "Chennai",
  "state": "Tamil Nadu",
  "image": "https://images.unsplash.com/photo-xyz",
  "shortDescription": "The cultural capital of South India",
  "attractions": 35,
  "description": "Full description here...",
  "bestTimeToVisit": "November to February",
  "topAttractions": [
    {
      "name": "Marina Beach",
      "description": "Second longest urban beach in the world"
    }
  ],
  "localFood": [
    "Idli Sambar - Traditional breakfast",
    "Filter Coffee - South Indian coffee"
  ],
  "travelTips": [
    "Use local buses and metro for cheap transport",
    "Visit temples during morning hours"
  ],
  "budgetEstimate": "₹1,500 - ₹3,500 per day"
}
```

### Adding Blog Posts

**File:** `data/blogs.json`

1. Open the file
2. Add a new blog object
3. Required fields:
   - `slug`: URL-friendly title
   - `title`: Blog title
   - `excerpt`: Short description
   - `category`: Category name
   - `date`: YYYY-MM-DD format
   - `readTime`: "X min read"
   - `author`: Author name
   - `image`: Image URL
   - `content`: Array of content blocks
   - `tags`: Array of tags

**Content Block Types:**
- `"type": "paragraph"` - Regular text
- `"type": "heading"` - Section heading

**Example:**
```json
{
  "slug": "street-food-guide-delhi",
  "title": "Ultimate Street Food Guide for Delhi",
  "excerpt": "Discover the best street food in Delhi",
  "category": "Food & Culture",
  "date": "2024-01-20",
  "readTime": "7 min read",
  "author": "Amit Kumar",
  "image": "https://images.unsplash.com/photo-xyz",
  "content": [
    {
      "type": "paragraph",
      "text": "Delhi is a paradise for street food lovers..."
    },
    {
      "type": "heading",
      "text": "Best Street Food Areas"
    },
    {
      "type": "paragraph",
      "text": "Chandni Chowk is the heart of Delhi's street food..."
    }
  ],
  "tags": ["Delhi", "Street Food", "Food Guide"]
}
```

### Finding Free Images

**Recommended Sources:**
1. [Unsplash](https://unsplash.com/) - Free high-quality images
2. [Pexels](https://www.pexels.com/) - Free stock photos
3. [Pixabay](https://pixabay.com/) - Free images

**How to use:**
1. Search for city/topic
2. Right-click on image
3. Copy image URL
4. Paste in JSON file

---

## Google AdSense Setup

### Before Applying

**Requirements Checklist:**
- [ ] 15-20 unique, quality articles
- [ ] Domain is 6+ months old (recommended)
- [ ] Regular content updates
- [ ] Privacy Policy page (✅ Already created)
- [ ] About page (✅ Already created)
- [ ] Contact page (✅ Already created)
- [ ] Clean, professional design (✅ Done)
- [ ] Mobile-responsive (✅ Done)

### Applying for AdSense

1. Go to [Google AdSense](https://www.google.com/adsense/)
2. Sign up with your Google account
3. Add your website URL: www.explorethecity.in
4. Wait for approval (usually 1-2 weeks)

### After AdSense Approval

**Step 1: Add AdSense Code to Layout**

Open `app/layout.js` and add in the `<head>` section:

```jsx
<head>
  <link rel="icon" href="/favicon.ico" />
  <script
    async
    src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXXXXXXXXXXX"
    crossOrigin="anonymous">
  </script>
</head>
```

Replace `XXXXXXXXXXXXXXXX` with your AdSense publisher ID.

**Step 2: Update AdSense Component**

Open `components/AdSense.js` and replace with:

```jsx
'use client'
import { useEffect } from 'react'

export default function AdSense({ slot, format = 'auto', responsive = true }) {
  useEffect(() => {
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({})
    } catch (err) {
      console.error('AdSense error:', err)
    }
  }, [])

  return (
    <div className="my-8">
      <ins
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client="ca-pub-XXXXXXXXXXXXXXXX"
        data-ad-slot={slot}
        data-ad-format={format}
        data-full-width-responsive={responsive.toString()}
      />
    </div>
  )
}
```

**Step 3: Create Ad Units**

1. Go to AdSense dashboard
2. Click "Ads" → "By ad unit"
3. Create display ads for each slot
4. Copy the ad slot IDs
5. Replace slot numbers in your pages:
   - Homepage: slots "1234567890", "0987654321"
   - City pages: slots "1111111111", "2222222222", "3333333333"
   - Blog pages: slots "4444444444", "5555555555", "6666666666"
   - Listing pages: slots "7777777777", "8888888888"

---

## Deployment

### Option 1: Vercel (Recommended - FREE)

**Steps:**
1. Create account at [Vercel](https://vercel.com)
2. Install Vercel CLI:
   ```bash
   npm install -g vercel
   ```
3. Deploy:
   ```bash
   vercel
   ```
4. Follow prompts
5. Your site will be live at `your-project.vercel.app`

**Custom Domain:**
1. Go to Vercel dashboard
2. Project Settings → Domains
3. Add "www.explorethecity.in"
4. Update your domain's DNS settings as shown

### Option 2: Netlify (FREE)

1. Create account at [Netlify](https://www.netlify.com)
2. Connect to Git repository (if using Git)
3. Or drag and drop the `.next` folder after running:
   ```bash
   npm run build
   ```
4. Configure custom domain in settings

### Option 3: Shared Hosting

**For traditional hosting (Hostinger, GoDaddy, etc.):**

1. Build the project:
   ```bash
   npm run build
   ```

2. You'll need Node.js support on your hosting

3. Upload files via FTP

4. Run on server:
   ```bash
   npm start
   ```

**Note:** Most shared hosting doesn't support Next.js well. Use Vercel or Netlify instead.

---

## Post-Launch Tasks

### Week 1

- [ ] Submit sitemap to Google Search Console
- [ ] Set up Google Analytics
- [ ] Test all pages on mobile devices
- [ ] Check AdSense ad display
- [ ] Share on social media

### Week 2-4

- [ ] Publish 2-3 new blog posts per week
- [ ] Add more cities to the database
- [ ] Monitor analytics
- [ ] Respond to user feedback

### Monthly Tasks

- [ ] Update existing content
- [ ] Add new cities (target: 2-3 per month)
- [ ] Publish blog posts (target: 8-10 per month)
- [ ] Check AdSense earnings
- [ ] Analyze traffic sources
- [ ] Improve SEO based on analytics

---

## SEO Optimization

### Google Search Console

1. Go to [Google Search Console](https://search.google.com/search-console)
2. Add your property: www.explorethecity.in
3. Verify ownership (use DNS verification)
4. Submit sitemap (create sitemap.xml first)

### Creating Sitemap

Create `public/sitemap.xml`:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://www.explorethecity.in/</loc>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://www.explorethecity.in/cities</loc>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  <!-- Add more URLs -->
</urlset>
```

### Google Analytics

1. Create account at [Google Analytics](https://analytics.google.com)
2. Get tracking ID (G-XXXXXXXXXX)
3. Add to `app/layout.js`:

```jsx
<Script
  src={`https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX`}
  strategy="afterInteractive"
/>
<Script id="google-analytics" strategy="afterInteractive">
  {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-XXXXXXXXXX');
  `}
</Script>
```

---

## Troubleshooting

### Build Errors

**Error: Cannot find module '@/...'**
- Solution: Check `jsconfig.json` exists

**Error: Image optimization**
- Solution: Add image domains to `next.config.js`

### Content Issues

**Images not loading**
- Check image URLs are valid
- Add domains to `next.config.js`

**City/Blog not showing**
- Check JSON syntax (use a JSON validator)
- Restart development server

### AdSense Issues

**Ads not showing**
- Check AdSense code is correctly added
- Wait 24-48 hours after adding code
- Check browser console for errors

---

## Getting Help

- **Documentation:** [Next.js Docs](https://nextjs.org/docs)
- **Community:** [Next.js Discord](https://nextjs.org/discord)
- **AdSense Help:** [AdSense Help Center](https://support.google.com/adsense)

---

## Quick Commands Reference

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Check for errors
npm run lint
```

---

**Good luck with your website! 🚀**

For updates and more guides, check the README.md file.
