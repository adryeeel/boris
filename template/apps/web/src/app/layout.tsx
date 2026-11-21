import type { Metadata } from 'next';
import type { ReactNode } from 'react';

import '@project-template/ui/styles.css';

import { SITE } from '@/const/site';

export const metadata: Metadata = {
    title: SITE.title,
    description: SITE.description,
    metadataBase: new URL(SITE.url),
};

export default function RootLayout({ children }: { children: ReactNode }) {
    return (
        <html lang={SITE.language}>
            <body>{children}</body>
        </html>
    );
}
