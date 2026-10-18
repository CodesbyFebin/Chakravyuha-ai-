'use client';

import { useEffect, useState } from 'react';

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? '';
const storageKey = 'chakravyuha-api-base';

export default function HudFrame() {
  const [apiBase, setApiBase] = useState('');
  const [draft, setDraft] = useState('');

  useEffect(() => {
    const saved = window.localStorage.getItem(storageKey) ?? '';
    setApiBase(saved);
    setDraft(saved);
  }, []);

  function saveEndpoint(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const normalized = draft.trim().replace(/\/$/, '');
    setApiBase(normalized);
    window.localStorage.setItem(storageKey, normalized);
  }

  const src = `${basePath}/chakravyuha_command_center.html${apiBase ? `?apiBase=${encodeURIComponent(apiBase)}` : ''}`;

  return <>
    <header className="toolbar">
      <a className="brand" href={basePath + '/'} aria-label="Chakravyuha home"><span className="mark">◉</span><span>CHAKRAVYUHA <small>AI COMMAND CENTER</small></span></a>
      <form className="endpoint" onSubmit={saveEndpoint}>
        <label htmlFor="api-base">Backend API</label>
        <input id="api-base" type="url" placeholder="Optional: https://your-api.example.com" value={draft} onChange={event => setDraft(event.target.value)} />
        <button type="submit">Save</button>
      </form>
      <a className="download" href="https://codesbyfebin.github.io/Chakravyuha-ai-/downloads/chakravyuha-command-center-v3.7.1.zip">↓ INSTALL PACKAGE</a>
      <span className="connection"><i />{apiBase ? 'API endpoint set' : 'Static demo mode'}</span>
    </header>
    <main className="hud-shell">
      <iframe title="Chakravyuha 37-widget mission control HUD" src={src} allow="clipboard-read; clipboard-write" />
    </main>
    <footer className="footnote">37-widget HUD · v3.7.1 · {apiBase ? 'Backend requests use your configured endpoint.' : 'Connect a separately hosted FastAPI backend to enable API-backed state.'}</footer>
  </>;
}
