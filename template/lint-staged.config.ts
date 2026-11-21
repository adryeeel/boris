import type { Configuration } from 'lint-staged';

const config: Configuration = {
    '*.{ts,tsx,mjs}': ['pnpm exec oxlint --no-ignore', 'pnpm exec oxfmt'],
    '*.{css,md,yml,yaml,json}': ['pnpm exec oxfmt --no-error-on-unmatched-pattern'],
};

export default config;
