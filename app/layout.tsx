import type { Metadata } from 'next';
import './globals.css';
import { BookingProvider } from '../components/BookingContext';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import BookingModal from '../components/BookingModal';

export const metadata: Metadata = {
  title: 'AUTOCRAFT Garage & Detailing | Precision Care. Performance You Can Trust.',
  description: 'Concourse-grade detailing, multi-stage paint correction, Hunter 3D laser wheel alignment, and master diagnostic vehicle care for luxury and performance cars.',
  keywords: 'car repair garage, automotive detailing, ceramic coating, paint protection film, car service, engine diagnostics, wheel alignment, brake repair, AUTOCRAFT',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className="bg-dark-950 text-gray-100 min-h-screen flex flex-col font-sans selection:bg-electric-500 selection:text-dark-950">
        <BookingProvider>
          <Navbar />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
          <BookingModal />
        </BookingProvider>
      </body>
    </html>
  );
}
