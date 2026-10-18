$ErrorActionPreference = 'Stop'
Set-Location $PSScriptRoot
python -m venv .venv
& .\.venv\Scripts\python.exe -m pip install --upgrade pip
& .\.venv\Scripts\python.exe -m pip install -r requirements.txt
Write-Host "Starting Chakravyuha at http://127.0.0.1:8000/ (Ctrl+C to stop)"
& .\.venv\Scripts\python.exe server.py
