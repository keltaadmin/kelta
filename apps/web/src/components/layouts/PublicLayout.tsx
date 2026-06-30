import Navbar from '@/components/navigation/Navbar';
import Footer from '@/components/navigation/Footer';

interface Props {
  children: React.ReactNode;
}

export default function PublicLayout({
  children,
}: Props) {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1">
        {children}
      </main>

      <Footer />
    </div>
  );
}