import Link from 'next/link';
export default function Home() {
  return (
    <section style={{ background: '#121826', color: '#fff', padding: '80px 8%', textAlign: 'center' }}>
      <h1 style={{ fontSize: 30 }}>Reliable Laptop Chargers</h1>
      <p style={{ margin: '20px 0' }}>65W/90W/100W GaN Fast Charging</p>
      <Link href="/products" style={{ background: '#2563eb', color: '#fff', padding: '12px 30px', borderRadius: 30, textDecoration: 'none' }}>View All Products</Link>
    </section>
  );
}
