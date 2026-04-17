import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, fontFamily: 'Arial, sans-serif' }}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
