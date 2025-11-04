import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  return (
    <section>
      <footer className="bg-black/90 text-white lg:px-12 px-6">
        <section className="container pb-16 md:pb-14">
          <section className="w-[101px] h-1 bg-[#D87D4A] mb-12"></section>

          <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-8 mb-12">
            <section className="md:col-span-2 lg:col-span-2">
              <Link
                href="/"
                className="text-white font-bold text-2xl tracking-wider inline-block mb-8"
              >
                audiophile
              </Link>
              <p className="text-[15px] leading-[25px] text-white/50 max-w-[540px]">
                Audiophile is an all in one stop to fulfill your audio needs.
                We're a small team of music lovers and sound specialists who are
                devoted to helping you get the most out of personal audio. Come
                and visit our demo facility - we're open 7 days a week.
              </p>
            </section>

            <nav className="md:col-span-2 lg:col-span-2 flex lg:justify-end">
              <ul className="flex flex-col md:flex-row gap-4 md:gap-8">
                <li>
                  <Link
                    href="/"
                    className="text-[#D87D4A] hover:text-[#D87D4A] transition-colors"
                  >
                    HOME
                  </Link>
                </li>
                <li>
                  <Link
                    href="/headphones"
                    className="text-subtitle hover:text-[#D87D4A] transition-colors"
                  >
                    HEADPHONES
                  </Link>
                </li>
                <li>
                  <Link
                    href="/speakers"
                    className="text-subtitle hover:text-[#D87D4A] transition-colors"
                  >
                    SPEAKERS
                  </Link>
                </li>
                <li>
                  <Link
                    href="/earphones"
                    className="text-subtitle hover:text-[#D87D4A] transition-colors"
                  >
                    EARPHONES
                  </Link>
                </li>
              </ul>
            </nav>
          </section>

          <section className="flex flex-col md:flex-row justify-between items-center gap-12 md:gap-0 pt-12">
            <p className="text-[15px] text-white/50">
              Copyright 2021. All Rights Reserved
            </p>

            <section className="flex gap-4">
              <Link
                href="#"
                className="text-white hover:text-[#D87D4A] transition-colors"
                aria-label="Facebook"
              >
                <Image
                  className="w-full h-full object-cover"
                  src="\assets\shared\desktop\icon-facebook.svg"
                  alt="facebook-icon"
                  width={16}
                  height={16}
                />
              </Link>

              <Link
                href="#"
                className="text-white hover:text-[#D87D4A] transition-colors"
                aria-label="Twitter"
              >
                <Image
                  className="w-full h-full object-cover"
                  src="\assets\shared\desktop\icon-twitter.svg"
                  alt="twitter-icon"
                  width={16}
                  height={16}
                />
              </Link>

              <Link
                href="#"
                className="text-white hover:text-[#D87D4A] transition-colors"
                aria-label="Instagram"
              >
                <Image
                  className="w-full h-full object-cover"
                  src="\assets\shared\desktop\icon-instagram.svg"
                  alt="twitter-icon"
                  width={16}
                  height={16}
                />
              </Link>
            </section>
          </section>
        </section>
      </footer>
    </section>
  );
};

export default Footer;
