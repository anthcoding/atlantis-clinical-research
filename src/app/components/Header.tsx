'use client';

import React, {useState} from 'react';
import Image from 'next/image';
import Logo from '../../../public/assests/logo.jpg';
import Link from 'next/link';
import CustomButton from './CustomButton';
import {CiBurger, CiMenuBurger} from 'react-icons/ci';
import {TfiClose} from 'react-icons/tfi';
import {usePathname} from 'next/navigation';

interface NavItem {
  label: string;
  page: string;
}

const NAV_ITEMS: Array<NavItem> = [
  {
    label: 'Sponsor',
    page: 'sponsor',
  },
  {
    label: 'Careers',
    page: 'careers',
  },
  {
    label: 'Learn',
    page: 'learn',
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
          <Link href="home">
            <Image
              onClick={burgerSwitch}
              src={Logo}
              alt="Logo"
              className="w-[50px] md:w-[80px]"
            />
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
              );
            })}
            <CustomButton
              burgerSwitch={burgerSwitch}
              label="Contact Us"
              route={'contact-us'}
              outline={false}
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
