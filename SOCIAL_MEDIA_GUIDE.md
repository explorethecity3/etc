# Social Media Sharing Optimization Guide

## Overview
This guide explains how to optimize your ExploreTheCity.in content for maximum social media engagement and sharing.

---

## 📱 Social Media Image Specifications

### Facebook / LinkedIn
- **Recommended Size**: 1200 x 630 pixels
- **Aspect Ratio**: 1.91:1
- **File Format**: JPG or PNG
- **Max File Size**: 8 MB
- **Text Limit**: Keep text under 20% of image area

### Twitter
- **Recommended Size**: 1200 x 675 pixels (or 1200 x 628 for consistency)
- **Aspect Ratio**: 16:9 or 1.91:1
- **File Format**: JPG, PNG, or WEBP
- **Max File Size**: 5 MB

### Instagram (if shared from website)
- **Recommended Size**: 1080 x 1080 pixels (square)
- **Aspect Ratio**: 1:1
- **File Format**: JPG or PNG
- **Max File Size**: 30 MB

### WhatsApp
- Uses Open Graph tags (same as Facebook)
- **Recommended Size**: 1200 x 630 pixels

### Pinterest
- **Recommended Size**: 1000 x 1500 pixels
- **Aspect Ratio**: 2:3 (vertical)
- **File Format**: JPG or PNG
- **Max File Size**: 20 MB

---

## 🛠️ Implementation

### 1. Using the SocialMetaTags Component

**For City Pages:**
```javascript
import SocialMetaTags from '@/components/SocialMetaTags';

export default function CityPage({ city }) {
  return (
    <>
      <SocialMetaTags
        title={`${city.name} Travel Guide 2025 | Weekend Getaways & Solo Travel Tips`}
        description={`Complete ${city.name} travel guide: solo female safety tips, 2-day itineraries, budget under ₹3000, hidden gems & weekend breaks.`}
        image={city.image}
        url={`/cities/${city.slug}`}
        type="website"
        tags={[city.name, 'travel guide', 'india tourism']}
      />

      {/* Your page content */}
    </>
  );
}
```

**For Blog Posts:**
```javascript
import SocialMetaTags from '@/components/SocialMetaTags';

export default function BlogPost({ blog }) {
  return (
    <>
      <SocialMetaTags
        title={blog.title}
        description={blog.excerpt}
        image={blog.image}
        url={`/blog/${blog.slug}`}
        type="article"
        author={blog.author}
        publishedTime={blog.date}
        tags={blog.tags}
      />

      {/* Your blog content */}
    </>
  );
}
```

### 2. Using Next.js 14 Metadata API

**City Page Example:**
```javascript
// app/cities/[slug]/page.js
import { generateCityMetadata, generateCityStructuredData } from '@/lib/metadata';
import cities from '@/data/cities.json';

export async function generateMetadata({ params }) {
  const city = cities.find(c => c.slug === params.slug);
  return generateCityMetadata(city);
}

export default function CityPage({ params }) {
  const city = cities.find(c => c.slug === params.slug);
  const structuredData = generateCityStructuredData(city);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      {/* Your page content */}
    </>
  );
}
```

**Blog Post Example:**
```javascript
// app/blog/[slug]/page.js
import { generateBlogMetadata, generateBlogStructuredData } from '@/lib/metadata';
import blogs from '@/data/blogs.json';

export async function generateMetadata({ params }) {
  const blog = blogs.find(b => b.slug === params.slug);
  return generateBlogMetadata(blog);
}

export default function BlogPost({ params }) {
  const blog = blogs.find(b => b.slug === params.slug);
  const structuredData = generateBlogStructuredData(blog);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      {/* Your blog content */}
    </>
  );
}
```

---

## 🎨 Creating Social Media Images

### Design Guidelines

**1. City Images:**
- Use high-quality, authentic photos of the city
- Include iconic landmarks or unique aspects
- Add subtle overlay with city name and tagline
- Ensure images are bright and appealing

**Example Text Overlay:**
```
Mumbai Travel Guide 2025
Discover Hidden Gems & Weekend Escapes
ExploreTheCity.in
```

**2. Blog Post Images:**
- Use relevant, eye-catching images
- Include blog title in readable font
- Add subtle branding (logo or website URL)
- Use contrasting colors for text

**Example Text Overlay:**
```
10 Hidden Gems in Mumbai
Tourists Often Miss
ExploreTheCity.in
```

### Recommended Tools

**Free:**
- Canva (canva.com)
- Figma (figma.com)
- Adobe Express (adobe.com/express)

**Paid:**
- Adobe Photoshop
- Sketch

### Templates

Create templates for consistency:
1. **City Guide Template** (1200x630)
2. **Blog Post Template** (1200x630)
3. **Pinterest Pin Template** (1000x1500)
4. **Instagram Story Template** (1080x1920)

---

## 🧪 Testing Your Social Meta Tags

### 1. Facebook Debugger
**URL:** https://developers.facebook.com/tools/debug/

**Steps:**
1. Enter your page URL
2. Click "Debug"
3. Check preview
4. Click "Scrape Again" if you made changes

### 2. Twitter Card Validator
**URL:** https://cards-dev.twitter.com/validator

**Steps:**
1. Enter your page URL
2. Click "Preview card"
3. Check how it appears

### 3. LinkedIn Post Inspector
**URL:** https://www.linkedin.com/post-inspector/

**Steps:**
1. Enter your page URL
2. Click "Inspect"
3. View preview

### 4. Open Graph Preview Tool
**URL:** https://www.opengraph.xyz/

**Steps:**
1. Enter your page URL
2. See previews for multiple platforms
3. Check all metadata

---

## ✅ Social Media Checklist

### Before Publishing Any Page:

- [ ] Title is compelling and under 60 characters
- [ ] Description is engaging and under 155 characters
- [ ] High-quality image (1200x630) is set
- [ ] Image includes text overlay (optional but recommended)
- [ ] URL is clean and readable
- [ ] Tested with Facebook Debugger
- [ ] Tested with Twitter Card Validator
- [ ] All meta tags are properly set
- [ ] Structured data (JSON-LD) is included
- [ ] Canonical URL is correct

### After Publishing:

- [ ] Share on Facebook and check preview
- [ ] Share on Twitter and check preview
- [ ] Share on LinkedIn and check preview
- [ ] Share in WhatsApp group and check preview
- [ ] Test on mobile devices
- [ ] Monitor engagement metrics

---

## 📊 Best Practices

### Title Optimization
- Keep titles between 50-60 characters
- Include primary keyword
- Make it compelling and click-worthy
- Use numbers when applicable (e.g., "Top 10...")
- Include year for freshness (e.g., "2025")

**Examples:**
- ✅ "Mumbai Travel Guide 2025 | Weekend Getaways & Solo Travel Tips"
- ✅ "10 Hidden Gems in Mumbai Tourists Often Miss"
- ❌ "Mumbai" (too short, not descriptive)
- ❌ "The Ultimate Complete Comprehensive Guide to Everything You Need to Know About Traveling to Mumbai" (too long)

### Description Optimization
- Keep descriptions between 150-155 characters
- Include call-to-action
- Mention key benefits
- Use emotional triggers

**Examples:**
- ✅ "Complete Mumbai travel guide: solo female safety tips, 2-day itineraries, budget under ₹3000. Start planning your perfect trip today!"
- ✅ "Discover 10 hidden gems in Mumbai that most tourists miss. Secret beaches, heritage cafes, and local experiences await!"
- ❌ "This is a guide about Mumbai." (too vague)

### Image Optimization
- Use high-resolution images (at least 1200px width)
- Compress images without losing quality (use TinyPNG)
- Include alt text for accessibility
- Add subtle branding (logo or URL)
- Test images on different devices

### URL Structure
- Keep URLs short and readable
- Use hyphens (not underscores)
- Include primary keyword
- Avoid special characters

**Examples:**
- ✅ `/cities/mumbai`
- ✅ `/blog/10-hidden-gems-mumbai`
- ❌ `/cities/mumbai?id=123&ref=abc`
- ❌ `/blog/post_1234567890`

---

## 🎯 SEO Keywords Integration

### Homepage
```javascript
keywords: [
  'india city travel guide',
  'explore india cities',
  'weekend getaways india',
  'solo travel india',
  'budget travel india',
  'indian cities tourism'
]
```

### City Pages
```javascript
keywords: [
  '{city} travel guide',
  '{city} tourism',
  'places to visit {city}',
  '{city} weekend getaway',
  'solo travel {city}',
  '{city} budget travel'
]
```

### Blog Posts
```javascript
keywords: blog.tags // Use existing blog tags
```

---

## 📈 Tracking Social Sharing

### Add Social Share Buttons

**Component: ShareButtons.js**
```javascript
export default function ShareButtons({ url, title }) {
  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);

  return (
    <div className="share-buttons">
      {/* Facebook */}
      <a href={`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`}
         target="_blank" rel="noopener noreferrer">
        Share on Facebook
      </a>

      {/* Twitter */}
      <a href={`https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`}
         target="_blank" rel="noopener noreferrer">
        Share on Twitter
      </a>

      {/* LinkedIn */}
      <a href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`}
         target="_blank" rel="noopener noreferrer">
        Share on LinkedIn
      </a>

      {/* WhatsApp */}
      <a href={`https://wa.me/?text=${encodedTitle}%20${encodedUrl}`}
         target="_blank" rel="noopener noreferrer">
        Share on WhatsApp
      </a>

      {/* Pinterest */}
      <a href={`https://pinterest.com/pin/create/button/?url=${encodedUrl}&description=${encodedTitle}`}
         target="_blank" rel="noopener noreferrer">
        Pin on Pinterest
      </a>
    </div>
  );
}
```

### Track Shares with Google Analytics

**Add to your analytics:**
```javascript
function trackSocialShare(platform) {
  if (window.gtag) {
    window.gtag('event', 'share', {
      method: platform,
      content_type: 'article',
    });
  }
}
```

---

## 🚀 Quick Implementation Guide

### Step 1: Copy Files
1. Copy `SocialMetaTags.js` to `components/`
2. Copy `metadata.js` to `lib/`

### Step 2: Update City Pages
```javascript
// app/cities/[slug]/page.js
import { generateCityMetadata } from '@/lib/metadata';

export async function generateMetadata({ params }) {
  const city = cities.find(c => c.slug === params.slug);
  return generateCityMetadata(city);
}
```

### Step 3: Update Blog Pages
```javascript
// app/blog/[slug]/page.js
import { generateBlogMetadata } from '@/lib/metadata';

export async function generateMetadata({ params }) {
  const blog = blogs.find(b => b.slug === params.slug);
  return generateBlogMetadata(blog);
}
```

### Step 4: Test
1. Build: `npm run build`
2. Test locally: `npm run start`
3. Test with Facebook Debugger
4. Test with Twitter Card Validator

### Step 5: Deploy
1. Commit changes
2. Deploy to production
3. Re-test with validators
4. Share test post on each platform

---

## 📝 Example Meta Tags Output

When properly implemented, your pages will generate meta tags like:

```html
<!-- Basic Meta Tags -->
<title>Mumbai Travel Guide 2025 | Weekend Getaways & Solo Travel Tips</title>
<meta name="description" content="Complete Mumbai travel guide: solo female safety tips, 2-day itineraries, budget under ₹3000, hidden gems & weekend breaks. Updated 2025." />

<!-- Open Graph / Facebook -->
<meta property="og:type" content="website" />
<meta property="og:url" content="https://explorethecity.in/cities/mumbai" />
<meta property="og:title" content="Mumbai Travel Guide 2025 | Weekend Getaways & Solo Travel Tips" />
<meta property="og:description" content="Complete Mumbai travel guide: solo female safety tips, 2-day itineraries, budget under ₹3000, hidden gems & weekend breaks. Updated 2025." />
<meta property="og:image" content="https://explorethecity.in/images/mumbai.jpg" />
<meta property="og:image:width" content="1200" />
<meta property="og:image:height" content="630" />

<!-- Twitter Card -->
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:url" content="https://explorethecity.in/cities/mumbai" />
<meta name="twitter:title" content="Mumbai Travel Guide 2025 | Weekend Getaways & Solo Travel Tips" />
<meta name="twitter:description" content="Complete Mumbai travel guide: solo female safety tips, 2-day itineraries, budget under ₹3000, hidden gems & weekend breaks. Updated 2025." />
<meta name="twitter:image" content="https://explorethecity.in/images/mumbai.jpg" />
```

---

## 🎁 Bonus: Social Share Preview

Create a preview component to show how your page will look when shared:

```javascript
// components/SharePreview.js
export default function SharePreview({ title, description, image, url }) {
  return (
    <div className="share-preview">
      <h3>Share Preview</h3>
      <div className="facebook-preview">
        <img src={image} alt={title} />
        <div className="content">
          <div className="domain">explorethecity.in</div>
          <h4>{title}</h4>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
}
```

---

**Document Version:** 1.0
**Last Updated:** November 15, 2025
**Maintained by:** ExploreTheCity Development Team
