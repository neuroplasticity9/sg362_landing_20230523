import Script from 'next/script';
import { FooterCp } from '../components/footer';
import { HeaderCp } from '../components/header';
import './globals.scss';

export const metadata = {
  title: 'Landing SG362',
  description: 'Build landing with tailwinCSS and NextJS.'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta name="robots" content="noindex,nofollow" />
      </head>
      <body>
        {children}
        <Script src="/js/landing202305.js" />
      </body>
    </html>
  );
}
