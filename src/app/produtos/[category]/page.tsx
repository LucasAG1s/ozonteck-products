import Layout from '@/components/Layout';
import ProductList from '@/components/ProductList';

interface PageProps {
  params: Promise<{ category: string }>,
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}

export default async function CategoryPage({ params }: PageProps) {
  const resolvedParams = await params;
  const decodedCategory = decodeURIComponent(resolvedParams.category);
  
  return (
    <Layout>
      <ProductList category={decodedCategory} />
    </Layout>
  );
}

export async function generateMetadata({ params }: PageProps) {
  const resolvedParams = await params;
  return {
    title: `${resolvedParams.category} | Ozonteck Products`,
  }
}