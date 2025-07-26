import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-white shadow p-4 flex gap-4">
      <Link href="/" className="text-blue-600 hover:underline">Home</Link>
      <Link href="/form" className="text-blue-600 hover:underline">Form</Link>
      <Link href="/about" className="text-blue-600 hover:underline">About</Link>
      <Link href="/contacts" className="text-blue-600 hover:underline">Contacts</Link>
    </nav>
  );
}
