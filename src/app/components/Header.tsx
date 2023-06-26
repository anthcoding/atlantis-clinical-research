'use client';

import React, {useState} from 'react';
import Image from 'next/image';
import Logo from '../../../public/assests/logo.png';
import Link from 'next/link';
import CustomButton from './CustomButton';
import {CiBurger, CiMenuBurger} from 'react-icons/ci';
import {TfiClose} from 'react-icons/tfi';
import {usePathname} from 'next/navigation';
import Reveal from './Reveal';

interface NavItem {
  label: string;
  page: string;
  delay: number;
}

const NAV_ITEMS: Array<NavItem> = [
  {
    label: 'Sponsor',
    page: 'sponsor',
    delay: 0.5,
  },
  {
    label: 'Careers',
    page: 'careers',
    delay: 0.6,
  },
  {
    label: 'Learn',
    page: 'learn',
    delay: 0.7,
  },
];

const Header = () => {
  const [burgerOpen, setBurgerOpen] = useState(false);

  const burgerSwitch = () => {
    setBurgerOpen(!burgerOpen);
  };

  const currentRoute = usePathname();

  return (
    <header className="w-10/12 backdrop-filter backdrop-blur-lg bg-opacity-30 mx-auto py-10 mb-12 z-50 h-30 sticky top-0 bg-white px-4 lg:px-20 rounded-b-[40px] shadow-sm shadow-darkWhite  transition-all duration-350">
      <div className="justify-between lg:items-center lg:flex">
        <div className="w-full flex items-center justify-between">
          <Link href="/">
            <Reveal delay={0.8}>
              <Image
                onClick={() => setBurgerOpen(false)}
                src={Logo}
                alt="Logo"
                className="w-[50px] md:w-[80px]"
              />
            </Reveal>
          </Link>
          {burgerOpen ? (
            <TfiClose className="lg:hidden text-lg" onClick={burgerSwitch} />
          ) : (
            <CiMenuBurger
              onClick={burgerSwitch}
              className="lg:hidden text-lg"
            />
          )}
        </div>
        <div className={`lg:block ${burgerOpen ? 'block' : 'hidden'} `}>
          <div className="items-center w-full mt-[30px] flex-col flex lg:flex-row lg:space-x-14 lg:mt-0">
            {NAV_ITEMS.map((item) => {
              return (
                <Reveal duration={0.1} delay={item.delay}>
                  <Link
                    onClick={burgerSwitch}
                    className={`${
                      currentRoute === `/${item.page}`
                        ? 'text-darkBlue'
                        : 'non-active-class-name'
                    } my-5 block transition font-light text-md text-dark hover:text-darkBlue active:text-darkBlue duration-350`}
                    href={item.page}
                    key={item.label}
                  >
                    {item.label}
                  </Link>
                </Reveal>
              );
            })}
            <Reveal duration={0.1} delay={0.8}>
              <CustomButton
                burgerSwitch={burgerSwitch}
                label="Contact Us"
                route={'contact-us'}
                outline={false}
              />
            </Reveal>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
