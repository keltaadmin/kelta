import Link from 'next/link';

export default function Navbar() {
  return (
    <header className="border-b bg-white">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <div className="font-bold">
          KELTA
        </div>

        <nav className="flex gap-6 text-sm">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/districts">Districts</Link>
          <Link href="/documents">Documents</Link>
          <Link href="/contact">Contact</Link>
        </nav>
      </div>
    </header>
  );
}