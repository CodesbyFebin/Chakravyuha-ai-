# FastAPI backend

GitHub Pages hosts only static files. For an easy local setup, download the install package from the Pages demo and run its `install.ps1` (Windows) or `install.sh` (macOS/Linux). It bundles the matching HUD HTML with this service, creates a local virtual environment, installs requirements, and starts the combined HUD/API at <http://127.0.0.1:8000/>.

For manual development:

```bash
cd backend
python3 -m venv .venv
. .venv/bin/activate
pip install -r requirements.txt
python server.py
```

The SQLite database is initialized at runtime, ignored by git, and persists on a local machine. When `POSTGRES_URL` or `DATABASE_URL` is set, the service uses PostgreSQL instead; the Vercel project receives encrypted connection variables from its connected Neon database. SQLite remains the default for the downloadable local package.

The root `api/index.py` exports this FastAPI app as a Vercel Python Function. Next.js rewrites `/api/*` to that function on Vercel and to the local FastAPI server during `next dev`. GitHub Pages builds use static export and do not include API credentials.

The API includes a simulated terminal command endpoint. Keep Vercel deployment protection enabled; the project's SSO protection is required for private use.
