# Chakravyuha AI Command Center v3.7.1

A local install bundle containing the 37-widget HUD and its optional FastAPI + SQLite backend.

## Requirements

- Python 3.10 or newer
- Windows PowerShell, macOS Terminal, or Linux shell
- Internet access on first run to install Python packages

## Install and launch

**Windows PowerShell**

```powershell
Set-ExecutionPolicy -Scope Process Bypass
.\install.ps1
```

**macOS / Linux**

```sh
chmod +x install.sh
./install.sh
```

The installer creates a local Python virtual environment, installs the backend requirements, and launches the service. Open <http://127.0.0.1:8000/> if it does not open automatically. The HUD is served by the backend and its API uses the local SQLite database at `chakravyuha.db`.

To stop the server, press Ctrl+C. The SQLite database remains in this folder between runs. Back it up if you want to preserve local state.

## GitHub Pages demo

The public static demo is at <https://codesbyfebin.github.io/Chakravyuha-ai-/>. GitHub Pages serves the browser UI only; the downloaded local package is needed for a local API and SQLite state.

## Security

The API is intended for local use. It has no authentication and includes an interactive terminal command endpoint. Do not expose it to the public internet or forward port 8000. The dashboard's simulated trading and telemetry are demonstration data, not live brokerage or production infrastructure.
