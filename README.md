# Chakravyuha AI Command Center

Public GitHub Pages demo and downloadable local install package for the v3.7.1 37-widget mission control HUD.

- **Live public demo:** <https://codesbyfebin.github.io/Chakravyuha-ai-/>
- **Download and install:** use the **↓ INSTALL PACKAGE** button on the demo, or [download the ZIP](https://codesbyfebin.github.io/Chakravyuha-ai-/downloads/chakravyuha-command-center-v3.7.1.zip).
- **HUD source:** `public/chakravyuha_command_center.html`
- **FastAPI backend:** `backend/` (SQLite locally, Neon PostgreSQL on Vercel)
- **GitHub Pages deploy:** `.github/workflows/deploy.yml`

## Local install

Download and unzip the package. On Windows, run `install.ps1` from PowerShell. On macOS or Linux, run `chmod +x install.sh && ./install.sh`. The installer creates a Python virtual environment, installs dependencies, and starts the local HUD and backend at <http://127.0.0.1:8000/>. The SQLite database is created beside the package and persists locally.

## Hosting and privacy

GitHub Pages publishes the static demo and package publicly. The Vercel project remains SSO protected for private work, with FastAPI functions backed by persistent Neon PostgreSQL. The downloadable local package uses SQLite and persists on the local machine.

The API exposes an interactive terminal endpoint; keep Vercel deployment protection enabled. Trading, balances, telemetry, and agent status shown by the HUD are simulated example data.
