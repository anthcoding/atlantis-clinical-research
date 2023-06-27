import './globals.css';
import Header from './components/Header';
import Footer from './components/Footer';

export const metadata = {
  title: 'Atlantis Clinical Research',
  description: 'Create by Anthony Lorenzo',
  icons: {
    icon: ['/favicon.ico?-v4'],
    apple: ['/apple-touch-icon.png?-v4'],
    shortcut: ['/apple-touch-icon.png'],
  },
  manifest: ['/site.webmanifest'],
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body className="font-body max-w-[1600px] mx-auto">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
