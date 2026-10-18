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

The SQLite database is initialized at runtime. It is ignored by git and persists on a local machine. For remote hosting, use persistent storage and HTTPS, configure an explicit database path with `CHAKRAVYUHA_DB`, and add authentication before exposing this API. The API includes an interactive terminal command endpoint and should remain local unless secured.
