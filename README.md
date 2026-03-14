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

## Testing

- Unit: `pnpm test:unit`
- E2E: `pnpm test:e2e` (auto-starts Vite preview server)
- Full suite: `pnpm doctor && pnpm test:unit && pnpm test:e2e`

## Template Branches & How to Use Them

This repo uses a **branch-based strategy** to keep the main branch minimal (just core infra: pnpm, Node version lock, Prettier/Husky, Netlify config, doctor scripts) while offering ready-to-go frontend stacks on separate branches.

- **main** → Bare template (no framework). Good for backend, CLI tools, or when you want to add your own stack from scratch.
- **vite-react-tailwind** → Vite + React + Tailwind CSS + Vitest unit tests + Playwright E2E tests (current default frontend starter).

### Cloning a Specific Branch

To start a new project from a branch:

```bash
# Create a new project directory
mkdir my-new-project && cd my-new-project

# Clone the desired branch directly into the current folder
git clone -b vite-react-tailwind https://github.com/callumgrayson/template-alfred-1.git .

# Or from main (bare template)
git clone https://github.com/callumgrayson/template-alfred-1.git .

# Activate Node version (reads .nvmrc automatically)
nvm use

# Install dependencies
pnpm install
```
