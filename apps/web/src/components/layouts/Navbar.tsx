import Link from 'next/link';

export default function Navbar() {
  return (
    <header className="border-b bg-white">
      <div className="mx-auto max-w-7xl px-6 h-16 flex items-center justify-between">
        <Link
          href="/"
          className="font-bold text-xl text-teal-700"
        >
          KELTA
        </Link>

        <nav className="hidden md:flex gap-6">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/districts">Districts</Link>
          <Link href="/documents">Documents</Link>
          <Link href="/gallery">Gallery</Link>
          <Link href="/login">Login</Link>
        </nav>
      </div>
    </header>
  );
}