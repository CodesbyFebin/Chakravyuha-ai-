#!/usr/bin/env bash
set -e
cd "$(dirname "$0")"
echo "============================================================"
echo " ◆ CHAKRAVYUHA — AI AGENT HARNESS v3.7.1"
echo "============================================================"
echo "[1/2] Initializing SQLite3 ledger (chakravyuha.db) & probing /proc telemetry..."
python3 -c "import server; st = server.build_full_state(); print(f'  [OK] Database ready. Models: {len(st[\"models\"])} | Agents: {len(st[\"agents\"])} | Receipts: {st[\"system\"][\"receipts_total\"]}')"
echo "[2/2] Starting Chakravyuha Mission Control Backend on http://127.0.0.1:${PORT:-8000} ..."
exec python3 server.py
