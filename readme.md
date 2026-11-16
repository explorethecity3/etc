# Explore The City

**Live travel tools and city guides:** [ExploreTheCity.in](https://www.explorethecity.in/)

Explore The City helps travellers test realistic India itineraries, estimate trip costs and plan practical routes across popular destinations.

A modern, SEO-optimized Next.js website for exploring cities across India. Built with dynamic JSON-based content management and designed for Google AdSense monetization.

## Features

- **Dynamic Content Management**: All content stored in JSON files for easy updates
- **SEO Optimized**: Full metadata, Open Graph tags, and semantic HTML
- **Responsive Design**: Mobile-first design using Tailwind CSS
- **AdSense Ready**: Pre-configured ad placement zones
- **Fast Performance**: Built with Next.js 14 and static generation
- **Blog System**: Dynamic blog with categories and tags
- **City Guides**: Comprehensive city pages with attractions, food, and tips

## Project Structure

```
explorethecity/
├── app/
│   ├── layout.js              # Root layout with navigation
│   ├── page.js                # Homepage
│   ├── cities/
│   │   ├── page.js            # Cities listing
│   │   └── [slug]/page.js     # Dynamic city pages
│   ├── blog/
│   │   ├── page.js            # Blog listing
│   │   └── [slug]/page.js     # Dynamic blog posts
│   ├── about/page.js          # About page
│   ├── contact/page.js        # Contact page
│   └── privacy-policy/page.js # Privacy Policy (required for AdSense)
├── components/
│   ├── Navbar.js              # Navigation component
│   ├── Footer.js              # Footer component
│   ├── CityCard.js            # City card component
│   └── AdSense.js             # AdSense placeholder component
├── data/
│   ├── cities.json            # City content database
│   └── blogs.json             # Blog posts database
└── public/
    └── (images)               # Add your images here
```

## Getting Started

### 1. Install Dependencies

```bash
npm install
```

### 2. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Build for Production

```bash
npm run build
npm start
```

## Content Management

### Adding a New City

Edit `data/cities.json` and add a new city object:

```json
{
  "slug": "city-name",
  "name": "City Name",
  "state": "State Name",
  "image": "image-url",
  "shortDescription": "Brief description",
  "attractions": 30,
  "description": "Full description",
  "bestTimeToVisit": "Month range",
  "topAttractions": [...],
  "localFood": [...],
  "travelTips": [...],
  "budgetEstimate": "₹X,XXX - ₹X,XXX per day"
}
```

### Adding a New Blog Post

Edit `data/blogs.json` and add a new blog object:

```json
{
  "slug": "blog-post-url",
  "title": "Blog Post Title",
  "excerpt": "Short description",
  "category": "Category Name",
  "date": "YYYY-MM-DD",
  "readTime": "X min read",
  "author": "Author Name",
  "image": "image-url",
  "content": [
    {
      "type": "paragraph",
      "text": "Content text"
    },
    {
      "type": "heading",
      "text": "Section Heading"
    }
  ],
  "tags": ["tag1", "tag2"]
}
```

## Google AdSense Integration

### Before Approval

The website uses AdSense placeholder components. These show where ads will appear.

### After Approval

1. Open `app/layout.js` and add your AdSense script in the `<head>`:

```jsx
<head>
  <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXXXXXXXXXXX"
    crossOrigin="anonymous"></script>
</head>
```

2. Update `components/AdSense.js` with the code provided in the file comments

3. Replace `ca-pub-XXXXXXXXXXXXXXXX` with your actual AdSense publisher ID

4. Update each ad slot ID throughout the site

## AdSense Requirements Checklist

- ✅ Unique, high-quality content (15+ articles)
- ✅ Privacy Policy page
- ✅ About Us page
- ✅ Contact page
- ✅ Responsive design
- ✅ Clean navigation
- ✅ SEO optimization
- ⏳ Domain age (6+ months recommended)
- ⏳ Regular content updates

## Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Import project to [Vercel](https://vercel.com)
3. Deploy automatically

### Deploy to Other Platforms

- **Netlify**: Connect GitHub repo and deploy
- **Custom Server**: Run `npm run build` and `npm start`

## Customization

### Colors

Edit `tailwind.config.js`:

```js
colors: {
  primary: '#2563eb',    // Your primary color
  secondary: '#7c3aed',  // Your secondary color
}
```

### Content

- City data: `data/cities.json`
- Blog posts: `data/blogs.json`
- Images: Add to `public/` folder

### Images

Place images in the `public/` folder and reference them:

```js
image: "/images/city-name.jpg"
```

Or use external URLs (Unsplash, etc.)

## Performance Tips

1. **Optimize Images**: Use WebP format and Next.js Image component
2. **Content Updates**: Rebuild site after JSON changes
3. **Caching**: Enable caching on your hosting platform
4. **Analytics**: Add Google Analytics for tracking

## SEO Best Practices

- ✅ Unique meta titles and descriptions for each page
- ✅ Semantic HTML structure
- ✅ Alt text for all images
- ✅ Internal linking between pages
- ✅ Mobile-responsive design
- ✅ Fast loading times
- ✅ Sitemap generation (add later)

## Support

For questions or issues:
- Email: contact@explorethecity.in
- Create an issue on GitHub

## License

This project is open source and available for personal and commercial use.

## Contributing

Content contributions are welcome! Submit pull requests with new cities or blog posts.

---

**Built with Next.js, React, and Tailwind CSS**

Happy Exploring! 🗺️
