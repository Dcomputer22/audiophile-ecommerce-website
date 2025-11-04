import Image from 'next/image';
import Link from 'next/link';

const HomePage = () => {
  return (
    <section className="">
      {/* Hero section */}
      <section
        className="min-h-screen mx-auto bg-cover pl-5 bg-center bg-no-repeat bg-black rounded-b-lg lg:px-12 px-6"
        style={{
          backgroundImage: "url('/assets/home/desktop/image-hero.jpg')",
        }}
      >
        <section className="min-h-screen flex flex-col items-start justify-center font-sans text-white ml-10 gap-4">
          <p className="text-xl text-white/20">NEW PRODUCT</p>
          <h1 className="text-7xl">
            XX99 MARK II <br /> HEADPHONES
          </h1>
          <p className="text-lg mb-5 text-white/30">
            Experience natural, lifelike audio and exceptional <br /> build
            quality made for the passionate music <br />
            enthusiast.
          </p>
          <Link href="/">
            <button className="bg-[#D87D4A] hover:bg-[#E79363] px-3 py-2 text-lg">
              SEE PRODUCT
            </button>
          </Link>
        </section>
      </section>

      {/* Categories section */}
      <section className="mt-20 lg:px-12 px-6">
        <section className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-16 md-gap-10 lg:gap-8 ">
          <section className="relative bg-[#F1F1F1] rounded-lg pt-20 pb-6 flex flex-col items-center text-center cursor-pointer">
            <section className="absolute -top-12 w-40 h-40">
              <Image
                src="/assets/image-removebg-preview(41).png"
                alt="headphones"
                className="w-full h-full object-contain"
                width={160}
                height={160}
              />
            </section>
            <h6 className="mt-16 mb-4">HEADPHONES</h6>
            <Link href="/headphones" className="flex items-center gap-3">
              <span className="text-[#D87D4A]">SHOP</span>
              <Image
                className="w-4 h-4"
                src="/assets/shared/desktop/icon-arrow-right.svg"
                alt="arrow right"
                width={16}
                height={16}
              />
            </Link>
          </section>

          <section className="relative bg-[#F1F1F1] rounded-lg pt-20 pb-6 flex flex-col items-center text-center cursor-pointer">
            <section className="absolute -top-12 w-40 h-40">
              <Image
                src="/assets/home/desktop/image-speaker-zx9.png"
                alt="headphones"
                className="w-full h-full object-contain"
                width={160}
                height={160}
              />
            </section>
            <h6 className="mt-16 mb-4">SPEAKERS</h6>
            <Link href="/speakers" className="flex items-center gap-3">
              <span className="text-[#D87D4A]">SHOP</span>
              <Image
                className="w-4 h-4"
                src="/assets/shared/desktop/icon-arrow-right.svg"
                alt="arrow right"
                width={16}
                height={16}
              />
            </Link>
          </section>

          <section className="relative bg-[#F1F1F1] rounded-lg pt-20 pb-6 flex flex-col items-center text-center cursor-pointer">
            <section className="absolute -top-12 w-40 h-40">
              <Image
                src="/assets/home/desktop/image-earphone.png"
                alt="headphones"
                className="w-full h-full object-contain"
                width={160}
                height={160}
              />
            </section>
            <h6 className="mt-16 mb-4">EARPHONES</h6>
            <Link href="/earphones" className="flex items-center gap-3">
              <span className="text-[#D87D4A]">SHOP</span>
              <Image
                className="w-4 h-4"
                src="/assets/shared/desktop/icon-arrow-right.svg"
                alt="arrow right"
                width={16}
                height={16}
              />
            </Link>
          </section>
        </section>
      </section>

      <section className="mb-12 md:mb-8 lg:mb-12 py-20 lg:px-12 px-6">
        <section className="bg-[#D87D4A] rounded-lg overflow-hidden relative px-6 md:px-16 py-14 md:py-16 lg:py-24 flex flex-col lg:flex-row items-center lg:items-end gap-8 lg:gap-0">
          <section className="absolute top-0 left-1/2 -translate-x-1/2 lg:left-0 lg:translate-x-0 w-[558px] h-[558px] lg:w-[944px] lg:h-[944px] opacity-30">
            <svg width="100%" height="100%" viewBox="0 0 944 944">
              <g
                stroke="#FFF"
                strokeWidth="2"
                fill="none"
                fillRule="evenodd"
                opacity=".202"
              >
                <circle cx="472" cy="472" r="235.5" />
                <circle cx="472" cy="472" r="270.5" />
                <circle cx="472" cy="472" r="471.5" />
                <circle cx="472" cy="472" r="387.5" />
                <circle cx="472" cy="472" r="335.5" />
              </g>
            </svg>
          </section>

          <section className="relative z-10 w-full lg:w-1/2 flex justify-center lg:justify-start lg:pl-24">
            <img
              src="/assets/home/desktop/image-speaker-zx9.png"
              alt="ZX9 Speaker"
              className="w-[172px] md:w-[197px] lg:w-[410px] h-auto"
            />
          </section>

          <section className="relative z-10 w-full lg:w-1/2 text-center lg:text-left lg:pr-24">
            <h2 className="text-[36px] md:text-h2 lg:text-h1 leading-[40px] md:leading-[44px] lg:leading-[58px] font-bold text-white mb-6 uppercase">
              ZX9
              <br />
              Speaker
            </h2>
            <p className="text-[15px] leading-[25px] text-white/75 mb-10 max-w-[350px] mx-auto lg:mx-0">
              Upgrade to premium speakers that are phenomenally built to deliver
              truly remarkable sound.
            </p>
            <Link href="/zx9-speaker">
              <button className="bg-gray-800 text-white px-8 py-4 uppercase text-subtitle tracking-wider hover:bg-dark-gray transition-colors duration-200">
                SEE PRODUCT
              </button>
            </Link>
          </section>
        </section>
      </section>

      <section className="mb-12 md:mb-8 lg:mb-12 py-20 lg:px-12 px-6">
        <section
          className="rounded-lg overflow-hidden relative px-6 md:px-16 lg:px-24 py-24 md:py-28 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('/assets/home/desktop/image-speaker-zx7.jpg')",
          }}
        >
          <section className="relative z-10 max-w-[350px]">
            <h4 className=" mb-8">ZX7 SPEAKER</h4>
            <Link href="/zx7-speaker">
              <button className="border border-black hover:bg-black hover:text-white py-2 px-3">
                SEE PRODUCT
              </button>
            </Link>
          </section>
        </section>
      </section>

      <section className="mb-32 md:mb-24 lg:px-12 px-6">
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-3 lg:gap-8">
          <section className="rounded-lg overflow-hidden bg-light-gray h-[200px] md:h-[320px]">
            <img
              src="/assets/home/desktop/image-earphones-yx1.jpg"
              alt="YX1 Earphones"
              className="w-full h-full object-cover"
            />
          </section>

          <section className="rounded-lg bg-[#F1F1F1] px-6 md:px-10 lg:px-24 py-10 md:py-24 flex flex-col justify-center">
            <h3 className="mb-8">YX1 EARPHONES</h3>
            <Link href="/yx1-earphones">
              <button className="border border-black hover:bg-black hover:text-white py-2 px-3">
                SEE PRODUCT
              </button>
            </Link>
          </section>
        </section>
      </section>

      <section className="mb-32 md:mb-24 lg:px-12 px-6">
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-32 items-center">
          <section className="order-1 lg:order-2 rounded-lg overflow-hidden">
            <img
              src="/assets/man.png"
              alt="Person wearing headphones"
              className="w-full h-full object-cover rounded-lg"
            />
          </section>

          <section className="order-2 lg:order-1 text-center lg:text-left">
            <h2 className="text-[28px] md:text-h2 leading-[38px] md:leading-[44px] font-bold mb-8 uppercase">
              Bringing you the <span className="text-[#D87D4A]">best</span>{' '}
              audio gear
            </h2>
            <p className="text-[15px] leading-[25px] text-black/50">
              Located at the heart of New York City, Audiophile is the premier
              store for high end headphones, earphones, speakers, and audio
              accessories. We have a large showroom and luxury demonstration
              rooms available for you to browse and experience a wide range of
              our products. Stop by our store to meet some of the fantastic
              people who make Audiophile the best place to buy your portable
              audio equipment.
            </p>
          </section>
        </section>
      </section>
    </section>
  );
};

export default HomePage;
