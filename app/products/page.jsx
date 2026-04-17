import ProductCard from '@/components/ProductCard';
const products = [
  { id: 'charger1', name: '65W USB-C Charger', price: '20.99', img: 'https://p11-flow-imagex-sign.byteimg.com/tos-cn-i-a9rns2rl98/754c4c76e7aa486ab732280a300035c8.png' },
  { id: 'charger2', name: '90W GaN Charger', price: '24.99', img: 'https://p11-flow-imagex-sign.byteimg.com/tos-cn-i-a9rns2rl98/4a8ca180c76641e1b3c7810350a9b4c6.png' },
];
export default function Products() {
  return (
    <div style={{ padding: '40px 8%' }}>
      <h2 style={{ textAlign: 'center', marginBottom: 30 }}>All Products</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: 30 }}>
        {products.map((p) => <ProductCard key={p.id} p={p} />)}
      </div>
    </div>
  );
}
