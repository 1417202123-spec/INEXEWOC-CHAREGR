'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
  const pathname = usePathname();
  const nav = [
    { name: 'Home', href: '/' },
    { name: 'Products', href: '/products' },
    { name: 'About Us', href: '/about' },
    { name: 'Contact Us', href: '/contact' },
  ];

  return (
    <header style={{ padding: '15px 8%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', boxShadow: '0 1px 5px #eee' }}>
      <Link href="/" style={{ fontSize: 20, fontWeight: 'bold', color: '#2563eb', textDecoration: 'none' }}>SLE-TECH</Link>
      <nav>
        {nav.map((item) => (
          <Link key={item.name} href={item.href} style={{ marginLeft: 25, textDecoration: 'none', color: pathname === item.href ? '#2563eb' : '#333' }}>{item.name}</Link>
        ))}
      </nav>
    </header>
  );
}
