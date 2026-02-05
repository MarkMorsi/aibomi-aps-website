# Deploying to GitHub Pages

This Aibomi ApS website is ready to be deployed to GitHub Pages.

## Quick Setup

1. **Build the application:**
   ```bash
   npm run build
   ```

2. **The built files will be in the `dist/` directory**

3. **Configure your repository for GitHub Pages:**
   - Go to your repository Settings
   - Navigate to Pages (in the sidebar)
   - Under "Source", select "GitHub Actions"

4. **Create a GitHub Actions workflow:**
   Create `.github/workflows/deploy.yml` with the content below

5. **Push your code and the site will automatically deploy**

## GitHub Actions Workflow

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: ['main']
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: 'pages'
  cancel-in-progress: true

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4
      
      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'npm'
      
      - name: Install dependencies
        run: npm ci
      
      - name: Build
        run: npm run build
      
      - name: Setup Pages
        uses: actions/configure-pages@v4
      
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: './dist'

  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    needs: build
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

## Alternative: Manual Deployment

If you prefer to deploy manually:

1. Build: `npm run build`
2. Install gh-pages: `npm install -D gh-pages`
3. Add to package.json scripts: `"deploy": "gh-pages -d dist"`
4. Run: `npm run deploy`

## Base Path Configuration

If your site is not at the root of your domain (e.g., `username.github.io/repo-name`), 
you may need to update `vite.config.ts` to include a base path:

```typescript
base: '/repo-name/'
```

For a custom domain or `username.github.io`, the default configuration works as-is.

## Custom Domain (Optional)

1. Add a `CNAME` file to the `public/` directory with your domain
2. Configure DNS settings with your domain provider
3. Enable "Enforce HTTPS" in GitHub Pages settings

Your site will be live at: `https://yourusername.github.io/your-repo-name/`
