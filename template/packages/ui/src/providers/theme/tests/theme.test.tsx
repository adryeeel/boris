import { render } from 'vitest-browser-react';
import { test, expect, onTestFinished } from 'vitest';

import { useTheme, ThemeProvider } from '@project-template/ui/providers/theme';

function ThemeControl() {
    const { setTheme } = useTheme();

    return <button onClick={() => setTheme('dark')}>Use dark theme</button>;
}

test('applies and saves a selected theme', async () => {
    const storageKey = 'theme-provider-test';

    localStorage.removeItem(storageKey);
    onTestFinished(() => {
        localStorage.removeItem(storageKey);
        document.documentElement.classList.remove('dark', 'light');
        document.documentElement.style.removeProperty('color-scheme');
    });

    const screen = await render(
        <ThemeProvider storageKey={storageKey} defaultTheme='light' enableSystem={false}>
            <ThemeControl />
        </ThemeProvider>,
    );

    await screen.getByRole('button', { name: 'Use dark theme' }).click();
    await expect.poll(() => document.documentElement.classList.contains('dark')).toBe(true);
    expect(localStorage.getItem(storageKey)).toBe('dark');
});
