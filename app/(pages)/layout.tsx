import '@pages/_globals/styles/colors.scss';
import '@pages/_globals/styles/spacers.scss';
import '@pages/_globals/styles/variables.scss';
import '@pages/_globals/styles/borders.scss';
import '@pages/_globals/styles/globals.scss';

import fonts from '@pages/_globals/fonts';
import metadata from '@pages/_globals/metadata.json';
import { Suspense } from 'react';

export { metadata };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={fonts}>
        <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
      </body>
    </html>
  );
}
