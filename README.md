# Chakravyuha AI Command Center

Next.js static export for GitHub Pages with the v3.7.1 37-widget mission control HUD.

- HUD source: `public/chakravyuha_command_center.html`
- Next.js shell: `app/`
- GitHub Pages deploy workflow: `.github/workflows/deploy.yml`
- Optional FastAPI + SQLite service: `backend/`

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000/Chakravyuha-ai-/`.

## Deploy with GitHub Pages

Push to `main`; the workflow builds a static Next.js export and deploys it to Pages. In repository settings, set **Pages → Build and deployment → Source** to **GitHub Actions**. The expected project URL is `https://codesbyfebin.github.io/Chakravyuha-ai-/`.

GitHub Pages serves static files only. Widget UI interactions and local fallback behavior run in the browser. To use API-backed data, deploy `backend/server.py` separately and save its HTTPS base URL in the **Backend API** field. The SQLite database is initialized at runtime and must use persistent storage on that host.
