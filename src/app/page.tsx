import { About } from '@/components/About';
import { Category } from '@/components/Category';
import Image from 'next/image';
import Link from 'next/link';

const HomePage = () => {
  return (
    <>
      {/* Hero Section */}
      <section
        className="min-h-[600px] lg:min-h-[729px] bg-cover bg-center bg-no-repeat bg-[#191919] flex items-center"
        style={{
          backgroundImage: "url('/assets/home/desktop/image-hero.jpg')",
        }}
      >
        <div className="max-w-[1110px] w-full mx-auto px-6 lg:px-0">
          <div className="max-w-[400px] text-white text-center lg:text-left">
            <p className="text-[14px] tracking-[10px] uppercase text-white/50 mb-4">
              NEW PRODUCT
            </p>
            <h1 className="text-[36px] lg:text-[56px] leading-10 lg:leading-[58px] font-bold tracking-[1.3px] lg:tracking-[2px] mb-6 uppercase">
              XX99 MARK II
              <br />
              HEADPHONES
            </h1>
            <p className="text-[15px] leading-[25px] text-white/75 mb-10">
              Experience natural, lifelike audio and exceptional build quality
              made for the passionate music enthusiast.
            </p>
            <Link href="/products/headphones/xx99-mark-two-headphones">
              <button className="bg-[#D87D4A] hover:bg-[#FBAF85] px-8 py-4 text-[13px] font-normal tracking-[1px] uppercase transition-colors duration-200 cursor-pointer">
                SEE PRODUCT
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <Category />

      {/* Featured Product 1 - ZX9 Speaker */}
      <section className="max-w-[1110px] mx-auto px-6 mb-12">
        <div className="max-h-[560px] bg-[#D87D4A] rounded-lg overflow-hidden relative px-6 md:px-16 pt-14 md:pt-16 lg:pt-24 flex flex-col lg:flex-row items-center lg:items-end gap-8 lg:gap-20">
          {/* Pattern circles */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 lg:left-0 lg:translate-x-0 w-[558px] h-[558px] lg:w-[944px] lg:h-[944px] opacity-30">
            <svg width="100%" height="100%" viewBox="0 0 944 944">
              <g
                stroke="#FFF"
                strokeWidth="2"
                fill="none"
                fillRule="evenodd"
                opacity=".202"
              >
                <circle cx="472" cy="472" r="225.5" />
                <circle cx="472" cy="472" r="290.5" />
                <circle cx="472" cy="472" r="475.5" />
              </g>
            </svg>
          </div>

          {/* Speaker Image */}
          <div className="relative z-10 w-full lg:w-1/2 flex justify-center lg:justify-start lg:pl-24">
            <Image
              src="/assets/home/desktop/image-speaker-zx9.png"
              alt="ZX9 Speaker"
              className="w-[172px] md:w-[197px] lg:w-[410px] h-auto"
              width={410}
              height={493}
            />
          </div>

          {/* Content */}
          <div className="relative z-10 w-full lg:w-1/2 text-center lg:text-left lg:pr-10 pb-12">
            <h2 className="text-[36px] md:text-[56px] leading-10 md:leading-[58px] font-bold text-white mb-6 uppercase tracking-[2px]">
              ZX9
              <br />
              SPEAKER
            </h2>
            <p className="text-[15px] leading-[25px] text-white/75 mb-10 max-w-[350px] mx-auto lg:mx-0">
              Upgrade to premium speakers that are phenomenally built to deliver
              truly remarkable sound.
            </p>
            <Link href="/products/speakers/zx9-speaker">
              <button className="bg-[#191919] hover:bg-[#4C4C4C] text-white px-8 py-4 uppercase text-[13px] font-normal tracking-[1px] transition-colors duration-200 cursor-pointer">
                SEE PRODUCT
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Product 2 - ZX7 Speaker */}
      <section className="max-w-[1110px] mx-auto px-6 mb-12">
        <div
          className="rounded-lg overflow-hidden relative px-6 md:px-16 lg:px-24 py-24 md:py-28 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('/assets/home/desktop/image-speaker-zx7.jpg')",
          }}
        >
          <div className="relative z-10 max-w-[350px]">
            <h4 className="text-[28px] font-bold tracking-[2px] uppercase mb-8">
              ZX7 SPEAKER
            </h4>
            <Link href="/products/speakers/zx7-speaker">
              <button className="border-2 border-black hover:bg-black hover:text-white px-8 py-4 uppercase text-[13px] font-normal tracking-[1px] transition-colors duration-200 cursor-pointer">
                SEE PRODUCT
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Product 3 - YX1 Earphones */}
      <section className="max-w-[1110px] mx-auto px-6 mb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-3 lg:gap-8">
          {/* Image */}
          <div className="rounded-lg overflow-hidden bg-[#F1F1F1] h-[200px] md:h-80">
            <Image
              src="/assets/home/desktop/image-earphones-yx1.jpg"
              alt="YX1 Earphones"
              className="w-full h-full object-cover"
              width={540}
              height={320}
            />
          </div>

          {/* Content */}
          <div className="rounded-lg bg-[#F1F1F1] px-6 md:px-10 lg:px-24 py-10 md:py-24 flex flex-col justify-center">
            <h4 className="text-[28px] font-bold tracking-[2px] uppercase mb-8">
              YX1 EARPHONES
            </h4>
            <Link href="/products/earphones/yx1-earphones">
              <button className="border-2 border-black hover:bg-black hover:text-white px-8 py-4 uppercase text-[13px] font-normal tracking-[1px] transition-colors duration-200 cursor-pointer w-fit">
                SEE PRODUCT
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <About />
    </>
  );
};

export default HomePage;
