# 🚀 Deploy Your Portfolio to GitHub Pages

## Step 1 — Create a GitHub repo

1. Go to https://github.com/new
2. Name it `portfolio` (must match the `base` in `vite.config.js`)
3. Keep it Public, click **Create repository**

## Step 2 — Push your code

In your terminal, inside this project folder:

```bash
git init
git add .
git commit -m "Initial portfolio commit"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/portfolio.git
git push -u origin main
```

## Step 3 — Update your username

Edit `package.json` and replace `YOUR-GITHUB-USERNAME`:
```json
"homepage": "https://YOUR-GITHUB-USERNAME.github.io/portfolio"
```

## Step 4 — Deploy!

```bash
npm run deploy
```

This automatically builds and pushes to the `gh-pages` branch.

## Step 5 — Enable GitHub Pages

1. Go to your repo → **Settings** → **Pages**
2. Source: **Deploy from a branch**
3. Branch: `gh-pages` → `/ (root)`
4. Click **Save**

## ✅ Your site will be live at:
`https://YOUR-USERNAME.github.io/portfolio`

---

## 🔁 Updating your portfolio later

Just edit the files, then run:
```bash
git add .
git commit -m "Update portfolio"
git push
npm run deploy
```

---

## 📝 Where to edit your info

All content is in `src/App.jsx`:

| Section | What to change |
|---------|---------------|
| **Hero** | Your name, roles (the typing animation), tagline, stats |
| **Skills** | The `SKILLS` object — add/remove tech per category |
| **Projects** | The `PROJECTS` array — title, desc, tags, links |
| **Experience** | The `EXPERIENCE` array — role, company, period, desc |
| **Contact** | Email, GitHub, LinkedIn, Twitter links |
| **Nav** | Your name in `<YourName/>` tag |
| **Footer** | Your name and year |

## 🎨 Changing colors

Edit CSS variables at the top of `src/index.css`:
```css
--accent: #7c3aed;   /* purple — main accent */
--accent2: #06d6a0;  /* teal — secondary */
--accent3: #f72585;  /* pink — tertiary */
```
