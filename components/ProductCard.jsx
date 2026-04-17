import Link from 'next/link';
export default function ProductCard({ p }) {
  return (
    <div style={{ border: '1px solid #eee', borderRadius: 12, overflow: 'hidden' }}>
      <img src={p.img} style={{ width: '100%', height: 200, objectFit: 'cover' }} />
      <div style={{ padding: 20 }}>
        <h4>{p.name}</h4>
        <p style={{ color: '#2563eb', fontWeight: 'bold', margin: '10px 0' }}>${p.price}</p>
        <Link href={`/products/${p.id}`} style={{ background: '#2563eb', color: '#fff', padding: '8px 12px', borderRadius: 6, textDecoration: 'none', display: 'inline-block' }}>VIEW DETAILS</Link>
      </div>
    </div>
  );
}
