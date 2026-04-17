import Link from 'next/link';
export default function Footer() {
  return (
    <footer style={{ background: '#0F172A', color: '#fff', padding: '40px 8%', marginTop: 50 }}>
      <div style={{ display: 'flex', gap: 30, flexWrap: 'wrap' }}>
        <div><h3 style={{ color: '#2563eb' }}>SLE-TECH</h3><p>Professional Laptop Chargers</p></div>
        <div><Link href="/products" style={{ color: '#ccc', textDecoration: 'none' }}>Products</Link></div>
        <div><Link href="/contact" style={{ color: '#ccc', textDecoration: 'none' }}>Inquiry</Link></div>
      </div>
      <p style={{ marginTop: 20, fontSize: 12, color: '#666' }}>© 2025 SLE-TECH</p>
    </footer>
  );
}
