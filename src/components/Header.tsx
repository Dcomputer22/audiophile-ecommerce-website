'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { CgClose } from 'react-icons/cg';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  const navItems = [
    { name: 'HOME', link: '/' },
    { name: 'HEADPHONES', link: '/products/headphones' },
    { name: 'SPEAKERS', link: '/products/speakers' },
    { name: 'EARPHONES', link: '/products/earphones' },
  ];

  return (
    <header className="bg-black/90 text-white">
      <section className="flex items-center justify-between border-b-2 border-white/10 mx-10 py-6">
        <button
          onClick={() => setMobileMenuOpen((prev) => !prev)}
          className="text-white lg:hidden"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <CgClose width={16} height={16} />
          ) : (
            <Image
              src="/assets/hamburger.svg"
              width={16}
              height={16}
              alt="open menu"
              className="w-full h-full"
            />
          )}
        </button>

        <Link href="/">
          <Image
            className="w-full h-full"
            src="/assets/logo.svg"
            width={50}
            height={50}
            alt="logo"
          />
        </Link>

        <nav className="hidden md:hidden lg:block flex-1 mx-8">
          <ul className="flex items-center justify-center gap-12">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.link}
                  className="lg:text-white hover:text-[#D87D4A] text-[13px] font-bold tracking-[2px] transition-colors duration-200"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <Link
          href="/checkout"
          className="cursor-pointer"
          aria-label="Shopping cart"
        >
          <Image
            src="/assets/carts.svg"
            width={25}
            height={25}
            className="w-full h-full"
            alt="shopping cart"
          />
        </Link>
      </section>

      {mobileMenuOpen && (
        <section className="bg-black border-t border-gray-800 lg:hidden">
          <nav className="py-8">
            <ul className="flex flex-col gap-4">
              {navItems.map((item) => (
                <li key={item.name} className="text-center">
                  <Link
                    href={item.link}
                    className="text-white hover:text-[#D87D4A] active:text-[#D87D4A] transition-colors duration-200"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </section>
      )}
    </header>
  );
};

export default Header;
