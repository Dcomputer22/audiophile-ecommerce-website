import Link from 'next/link';
import Image from 'next/image';

export const Category = () => {
  return (
    <section className="max-w-[1110px] mx-auto px-6 py-20 lg:py-40">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-10 lg:gap-8">
        {/* Headphones */}
        <div className="relative bg-[#F1F1F1] rounded-lg pt-20 pb-6 flex flex-col items-center text-center group cursor-pointer hover:opacity-90 transition-opacity">
          <div className="absolute -top-12 w-40 h-40">
            <Image
              src="/assets/image-removebg-preview(41).png"
              alt="Headphones"
              className="w-full h-full object-contain"
              width={160}
              height={160}
            />
          </div>
          <h6 className="text-[18px] font-bold tracking-[1.3px] uppercase mt-16 mb-4">
            HEADPHONES
          </h6>
          <Link
            href="/products/headphones"
            className="flex items-center gap-3 text-[13px] font-bold tracking-[1px] uppercase text-black/50 hover:text-[#D87D4A] transition-colors"
          >
            SHOP
            <Image
              className="w-1 h-2"
              src="/assets/shared/desktop/icon-arrow-right.svg"
              alt="arrow right"
              width={5}
              height={10}
            />
          </Link>
        </div>

        {/* Speakers */}
        <div className="relative bg-[#F1F1F1] rounded-lg pt-20 pb-6 flex flex-col items-center text-center group cursor-pointer hover:opacity-90 transition-opacity">
          <div className="absolute -top-12 w-40 h-40">
            <Image
              src="/assets/home/desktop/image-speaker-zx9.png"
              alt="Speakers"
              className="w-full h-full object-contain"
              width={160}
              height={160}
            />
          </div>
          <h6 className="text-[18px] font-bold tracking-[1.3px] uppercase mt-16 mb-4">
            SPEAKERS
          </h6>
          <Link
            href="/products/speakers"
            className="flex items-center gap-3 text-[13px] font-bold tracking-[1px] uppercase text-black/50 hover:text-[#D87D4A] transition-colors"
          >
            SHOP
            <Image
              className="w-1 h-2"
              src="/assets/shared/desktop/icon-arrow-right.svg"
              alt="arrow right"
              width={5}
              height={10}
            />
          </Link>
        </div>

        {/* Earphones */}
        <div className="relative bg-[#F1F1F1] rounded-lg pt-20 pb-6 flex flex-col items-center text-center group cursor-pointer hover:opacity-90 transition-opacity">
          <div className="absolute -top-12 w-40 h-40">
            <Image
              src="/assets/home/desktop/image-earphone.png"
              alt="Earphones"
              className="w-full h-full object-contain"
              width={160}
              height={160}
            />
          </div>
          <h6 className="text-[18px] font-bold tracking-[1.3px] uppercase mt-16 mb-4">
            EARPHONES
          </h6>
          <Link
            href="/products/earphones"
            className="flex items-center gap-3 text-[13px] font-bold tracking-[1px] uppercase text-black/50 hover:text-[#D87D4A] transition-colors"
          >
            SHOP
            <Image
              className="w-1 h-2"
              src="/assets/shared/desktop/icon-arrow-right.svg"
              alt="arrow right"
              width={5}
              height={10}
            />
          </Link>
        </div>
      </div>
    </section>
  );
};
