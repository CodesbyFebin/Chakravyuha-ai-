# FastAPI backend

GitHub Pages hosts the Next.js static export and cannot run this Python service. Run the backend on a separate host or locally, then enter its base URL in the HUD header. The service enables CORS for browser clients.

```bash
cd backend
python3 -m venv .venv
. .venv/bin/activate
pip install -r requirements.txt
./start.sh
```

The SQLite database is created by `server.py` at startup; it is intentionally not checked into git. For a remote deployment, use persistent storage for the database and expose the service over HTTPS.
