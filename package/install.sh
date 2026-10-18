#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")"
python3 -m venv .venv
. .venv/bin/activate
python -m pip install --upgrade pip
python -m pip install -r requirements.txt
printf '\nStarting Chakravyuha at http://127.0.0.1:8000/ (Ctrl+C to stop)\n'
python server.py
