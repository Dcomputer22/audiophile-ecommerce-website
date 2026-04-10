import productData from '@/products/db.json';

export const generateStaticParams = async () => {
  return [
    { category: 'headphones' },
    { category: 'speakers' },
    { category: 'earphones' },
  ];
};

interface CategoryPageProps {
  params: {
    category: string;
  };
}

const CategoryPage = ({ params }: CategoryPageProps) => {
  const { category } = params;
  const products = productData.data.filter(
    (product) => product.category === category,
  );

  // Sort: New product first then by price
  const sortedProducts = products.sort((a, b) => {
    if (a.new && !b.new) return -1;
    if (!a.new && b.new) return 1;
    return b.price - a.price;
  });

  console.log({ category });

  return (
    <section className="my-24 text-black">
      {sortedProducts.map((product) => (
        <section key={product.id}>
          <h1>{product.name}</h1>
          <p>{product.category}</p>
        </section>
      ))}
    </section>
  );
};

export default CategoryPage;
