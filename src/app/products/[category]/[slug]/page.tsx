import { About } from '@/components/About';
import { Category } from '@/components/Category';
import productData from '@/products/db.json';
import Link from 'next/link';
import { notFound } from 'next/navigation';

export const generateStaticParams = async () => {
  return productData.data.map((product) => ({
    category: product.category,
    slug: product.slug,
  }));
};

interface ProductDetailPageProps {
  params: Promise<{
    category: string;
    slug: string;
  }>;
}

const ProductDetailPage = async ({ params }: ProductDetailPageProps) => {
  const { category, slug } = await Promise.resolve(params);
  const product = productData.data.find((p) => p.slug === slug);

  if (!product) {
    notFound();
  }

  return (
    <>
      <section className='max-w-[1110px] mx-auto px-6 py-8'>
        <Link
          href={`/products/${category}`}
          className='font-normal text-[15px] text-black/50 hover:[#D87D4A] transition-colors'
        >
          Go Back
        </Link>
      </section>
      {/* Product details */}
      {product && (
        <>
          <section className='max-w-[1110px] mx-auto px-6 mb-20 md:mb-32'>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-32 items-center'>
              <div className='rounded-lg overflow-hidden bg-[#F1F1F1]'>
                <picture>
                  <source
                    media='(min-width: 1024px)'
                    srcSet={product.image.desktop.replace('./', '/')}
                  />
                  <source
                    media='(min-width: 768px)'
                    srcSet={product.image.tablet.replace('./', '/')}
                  />
                  <img
                    src={product.image.mobile.replace('./', '/')}
                    alt={product.name}
                    className='w-full h-auto object-cover'
                  />
                </picture>
              </div>
              {/* Product info */}
              <div>
                {product.new && (
                  <p className='ont-normal text-sm tracking-[10px] uppercase text-[#D87D4A] mb-4 md:mb-6'>
                    New Product
                  </p>
                )}
                <h1 className='text-[28px] md:text-[40px] font-bold mb-6 md:mb-8 uppercase tracking-[1px] md:tracking-[1.5px] leading-tight'>
                  {product.name}
                </h1>
                <p className='text-[15px] leading-[25px] text-black/50 mb-6 md:mb-8'>
                  {product.description}
                </p>
                <p className='text-[18px] font-bold mb-8 tracking-[1.3px]'>
                  {product.price.toLocaleString('en-US', {
                    style: 'currency',
                    currency: 'USD',
                  })}
                </p>

                <div className='flex gap-4'>
                  <div className='flex items-center bg-[#F1F1F1]'>
                    <button className='px-4 py-2 text-black/25 hover:text-[#D87D4A] font-bold transition-colors cursor-pointer'>
                      -
                    </button>
                    <span className='px-6 py-4 font-bold text-[13px] tracking-[1px]'>
                      1
                    </span>
                    <button className='px-5 py-4 text-black/25 hover:text-[#D87D4A] font-bold transition-colors cursor-pointer'>
                      +
                    </button>
                  </div>

                  <button className='bg-[#D87D4A] text-white uppercase font-normal py-3 px-6 hover:bg-[#FBAF85] cursor-pointer'>
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          </section>

          {/* Features Section */}
          <section className='max-w-[1110px] mx-auto px-6 mb-20 md:mb-32'>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-16 lg:gap-32'>
              <div className='lg:col-span-2'>
                <h2 className='text-[24px] md:text-[32px] font-bold mb-6 md:mb-8 uppercase tracking-[1px] md:tracking-[1.15px]'>
                  FEATURES
                </h2>
                <p className='text-[15px] leading-[25px] text-black/50 whitespace-pre-line'>
                  {product.features}
                </p>
              </div>

              <div>
                <h2 className='text-[24px] md:text-[32px] font-bold mb-6 md:mb-8 uppercase tracking-[1px] md:tracking-[1.15px]'>
                  IN THE BOX
                </h2>
                <ul className='space-y-2'>
                  {product.includes.map((item, index) => (
                    <li
                      key={index}
                      className='flex gap-6 text-[15px] leading-[25px]'
                    >
                      <span className='text-[#D87D4A] font-bold min-w-5'>
                        {item.quantity}x
                      </span>
                      <span className='text-black/50'>{item.item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* Gallery Section */}
          <section className='max-w-[1110px] mx-auto px-6 mb-20 md:mb-32'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8'>
              {/* Left Column */}
              <div className='flex flex-col gap-5 md:gap-8'>
                <div className='rounded-lg overflow-hidden'>
                  <picture>
                    <source
                      media='(min-width: 1024px)'
                      srcSet={product.gallery.first.desktop.replace('./', '/')}
                    />
                    <source
                      media='(min-width: 768px)'
                      srcSet={product.gallery.first.tablet.replace('./', '/')}
                    />
                    <img
                      src={product.gallery.first.mobile.replace('./', '/')}
                      alt='Man wearing headphones'
                      className='w-full h-auto object-cover rounded-lg'
                    />
                  </picture>
                </div>

                <div className='rounded-lg overflow-hidden'>
                  <picture>
                    <source
                      media='(min-width: 1024px)'
                      srcSet={product.gallery.second.desktop.replace('./', '/')}
                    />
                    <source
                      media='(min-width: 768px)'
                      srcSet={product.gallery.second.tablet.replace('./', '/')}
                    />
                    <img
                      src={product.gallery.second.mobile.replace('./', '/')}
                      alt='Headphones on a table'
                      className='w-full h-auto object-cover rounded-lg'
                    />
                  </picture>
                </div>
              </div>

              {/* Right Column */}
              <div className='rounded-lg overflow-hidden'>
                <picture>
                  <source
                    media='(min-width: 1024px)'
                    srcSet={product.gallery.third.desktop.replace('./', '/')}
                  />
                  <source
                    media='(min-width: 768px)'
                    srcSet={product.gallery.third.tablet.replace('./', '/')}
                  />
                  <img
                    src={product.gallery.third.mobile.replace('./', '/')}
                    alt='Headphone'
                    className='w-full h-full object-cover rounded-lg'
                  />
                </picture>
              </div>
            </div>
          </section>

          {/* You May Also Like Section */}
          <section className='max-w-[1110px] mx-auto px-6 mb-20 md:mb-32'>
            <h2 className='text-[24px] md:text-[32px] font-bold text-center mb-10 md:mb-16 uppercase tracking-[1px] md:tracking-[1.15px]'>
              YOU MAY ALSO LIKE
            </h2>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-14 md:gap-3 lg:gap-8'>
              {product.others.map((otherProduct) => {
                const relatedProduct = productData.data.find((p) => p.slug === otherProduct.slug);
                const relatedCategory = relatedProduct?.category || category;
                return (
                  <div key={otherProduct.slug} className='text-center'>
                    <div className='bg-[#F1F1F1] rounded-lg mb-8 overflow-hidden'>
                      <picture>
                        <source
                          media='(min-width: 1024px)'
                          srcSet={otherProduct.image.desktop.replace('./', '/')}
                        />
                        <source
                          media='(min-width: 768px)'
                          srcSet={otherProduct.image.tablet.replace('./', '/')}
                        />
                        <img
                          src={otherProduct.image.mobile.replace('./', '/')}
                          alt={otherProduct.name}
                          className='w-full h-auto object-cover'
                        />
                      </picture>
                    </div>
                    <h3 className='text-[24px] font-bold mb-8 uppercase tracking-[1.7px]'>
                      {otherProduct.name}
                    </h3>
                    <Link href={`/products/${relatedCategory}/${otherProduct.slug}`} className='bg-[#D87D4A] hover:bg-[#FBAF85] text-white px-8 py-4 uppercase text-[13px] font-bold tracking-[1px] transition-colors duration-200'>
                      See Product
                    </Link>
                  </div>
                )
              })}
            </div>
          </section>

          {/* Category Section */}
          <Category />

          {/* About Section */}
          <About />
        </>
      )}
    </>
  );
};

export default ProductDetailPage;
