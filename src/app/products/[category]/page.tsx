import { About } from '@/components/About';
import { Category } from '@/components/Category';
import productData from '@/products/db.json';
import Image from 'next/image';
import Link from 'next/link';

export const generateStaticParams = async () => {
  return [
    { category: 'headphones' },
    { category: 'speakers' },
    { category: 'earphones' },
  ];
};

interface CategoryPageProps {
  params: Promise<{
    category: string;
  }>;
}

const CategoryPage = async ({ params }: CategoryPageProps) => {
  const resolvedParams = await Promise.resolve(params);
  const { category } = resolvedParams;
  const products = productData.data.filter(
    (product) => product.category === category,
  );

  // Sort: New product first then by price
  const sortedProducts = products.sort((a, b) => {
    if (a.new && !b.new) return -1;
    if (!a.new && b.new) return 1;
    return b.price - a.price;
  });

  return (
    <>
      <section className="bg-black text-white text-center py-24 md:py-20">
        <h2 className="font-bold text-[40px]">{category.toUpperCase()}</h2>
      </section>

      <section className="max-w-[1110px] mx-auto px-6 pt-16 md:pt-32">
        <div className="flex flex-col gap-32 md:gap-40">
          {sortedProducts.map((product, index) => (
            <article
              key={product.id}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-32 items-center ${
                index % 2 === 1 ? '' : ''
              }`}
            >
              <div
                className={`rounded-lg overflow-hidden bg-[#F1F1F1] ${
                  index % 2 === 1 ? 'lg:order-2' : 'lg:order-1'
                }`}
              >
                <Image
                  src={product.categoryImage.desktop.replace('./', '/')}
                  alt={product.name}
                  className="w-full h-auto object-cover"
                  width={349.24}
                  height={386}
                />
              </div>

              <div
                className={`flex flex-col justify-center items-center lg:items-start gap-3.5 ${index % 2 === 1 ? 'lg:order-1' : 'lg:order-2'}`}
              >
                {product.new && (
                  <p className="font-normal text-sm tracking-[10px] uppercase text-[#D87D4A] mb-4 md:mb-6">
                    NEW PRODUCT
                  </p>
                )}
                <h3 className="font-bold text-[40px]">
                  {product.name.toUpperCase()}
                </h3>
                <p className="font-normal text-[15px] opacity-50">
                  {product.description}
                </p>
                <Link
                  href={`/products/${category}/${product.slug}`}
                  className="inline-block bg-[#D87D4A] text-white font-normal px-8 py-[15px] hover:bg-[#FBAF85] transition-colors duration-300 cursor-pointer"
                >
                  SEE PRODUCT
                </Link>
              </div>
            </article>
          ))}
        </div>
        {/* Category Section */}
        <Category />

        {/* About Section */}
        <About />
      </section>
    </>
  );
};

export default CategoryPage;
