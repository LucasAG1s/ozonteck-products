import Layout from '@/components/Layout';
import ProductList from '@/components/ProductList';

export default function CategoryPage({ params }: { params: { category: string } }) {
  const decodedCategory = decodeURIComponent(params.category);
  
  return (
    <Layout>
      <ProductList category={decodedCategory} />
    </Layout>
  );
}