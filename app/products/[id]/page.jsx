import Link from 'next/link';
const data = {
  charger1: { name: '65W USB-C Charger', price: '20.99', img: 'https://p11-flow-imagex-sign.byteimg.com/tos-cn-i-a9rns2rl98/754c4c76e7aa486ab732280a300035c8.png', desc: 'Compatible with Lenovo/HP/Dell/MacBook' },
  charger2: { name: '90W GaN Charger', price: '24.99', img: 'https://p11-flow-imagex-sign.byteimg.com/tos-cn-i-a9rns2rl98/4a8ca180c76641e1b3c7810350a9b4c6.png', desc: 'Fast Charging for Laptops' },
};
export default function Detail({ params }) {
  const p = data[params.id];
  return (
    <div style={{ padding: '40px 8%', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 40 }}>
      <img src={p.img} style={{ width: '100%' }} />
      <div>
        <h1>{p.name}</h1>
        <p style={{ fontSize: 22, color: '#2563eb', margin: '20px 0' }}>${p.price}</p>
        <p>{p.desc}</p>
        <Link href="/contact" style={{ background: '#2563eb', color: '#fff', padding: '15px 30px', borderRadius: 8, textDecoration: 'none', display: 'inline-block', marginTop: 30 }}>INQUIRE FOR QUOTE</Link>
      </div>
    </div>
  );
}
