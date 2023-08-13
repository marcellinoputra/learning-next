import Link from 'next/link';

export default function Navbar() {
  return (
    <div>
      <Link href="/" className="mx-5">
        Home
      </Link>
      <Link href="/fetching-data/get" className="mx-5">
        Fetching Get
      </Link>
      <Link href="/about" className="mx-5">
        About
      </Link>
    </div>
  );
}
