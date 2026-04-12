import Image from 'next/image';
export const About = () => {
  return (
    <section className="max-w-[1110px] mx-auto px-6 mb-32">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-32 items-center">
        {/* Image - Order changes on desktop */}
        <div className="order-1 lg:order-2 rounded-lg overflow-hidden">
          <Image
            src="/assets/man.png"
            alt="Person wearing headphones"
            className="w-full h-full object-cover rounded-lg"
            width={540}
            height={588}
          />
        </div>

        {/* Content */}
        <div className="order-2 lg:order-1 text-center lg:text-left">
          <h2 className="text-[28px] md:text-[40px] leading-[38px] md:leading-[44px] font-bold mb-8 uppercase tracking-[1px] md:tracking-[1.5px]">
            Bringing you the <span className="text-[#D87D4A]">best</span> audio
            gear
          </h2>
          <p className="text-[15px] leading-[25px] text-black/50">
            Located at the heart of New York City, Audiophile is the premier
            store for high end headphones, earphones, speakers, and audio
            accessories. We have a large showroom and luxury demonstration rooms
            available for you to browse and experience a wide range of our
            products. Stop by our store to meet some of the fantastic people who
            make Audiophile the best place to buy your portable audio equipment.
          </p>
        </div>
      </div>
    </section>
  );
};
