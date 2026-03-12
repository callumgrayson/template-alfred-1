## Template Notes

- **build script**: Placeholder only – replace with real command in cloned projects (see netlify.toml comments).
- **Local Netlify build test**: `pnpm build:local` simulates production build offline.
- **Doctor check**: `pnpm doctor` → format + local build (fails until real build script added).

## Environment Variables

- **Non-sensitive / defaults**: Put in `netlify.toml` under [context.*.environment]
- **Secrets / production values**: Set in Netlify dashboard (Site settings > Environment variables)
  - Never commit .env files (gitignore'd)
- Local dev: Use `.env` file + load with your framework (e.g. Vite loads .env automatically)
- Always test with `netlify build` locally after adding vars
