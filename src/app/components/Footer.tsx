'use client';

import Link from 'next/link';
import React from 'react';
import CustomButton from './CustomButton';

import Image from 'next/image';
import Logo from '../../../public/assests/logo.png';

const Footer = () => {
  return (
    <footer className="w-9/12 mx-auto">
      <div className="w-full rounded-3xl md:flex mt-52 mb-16">
        <div className="mx-auto mb-6 md:mb-0 w-full md:w-1/3 flex justify-center items-center flex-col">
          <div>
            <h3 className="text-center md:text-start text-lg text-darkHeading pb-5">
              Let's stay conected
            </h3>
            <p className="font-light text-sm md:text-md text-darkBlue pb-2">
              9380 Sw 72nd St Ste B238 Miami Florida​
            </p>
            <p className="font-light text-sm md:text-md text-lightGray">
              786-875-9769{' '}
            </p>
            <p className="font-light text-sm md:text-md text-lightGray pb-2">
              786-732-1081
            </p>
            <p className="font-light text-sm md:text-md text-lightGray">
              atlantisclinicalresearch@gmail.com
            </p>
          </div>
        </div>

        <div className="mx-auto mb-6 md:mb-0 w-full md:w-1/3 flex flex-col items-center">
          <h3 className="text-lg text-darkHeading pb-2">Navigate</h3>
          <Link
            className="hover:text-dark transition duration-350 font-light text-sm md:text-md text-lightGray"
            href="/sponsor"
          >
            Sponsor
          </Link>
          <Link
            className="hover:text-dark transition duration-350 font-light text-sm sm:text-md text-lightGray"
            href="/careers"
          >
            Careers
          </Link>
          <Link
            className="pb-6 md:pb-3 hover:text-dark transition duration-350 font-light text-sm sm:text-md text-lightGray"
            href="learn"
          >
            Learn
          </Link>
          <CustomButton label="Contact us" outline={true} route="contact-us" />
        </div>

        <div className="w-full md:w-1/3 flex flex-row sm:flex-col items-center justify-center">
          <div className="flex justify-center items-center mx-auto md:mx-0 md:block ">
            <Link href="home">
              <Image src={Logo} alt="Logo" className="w-[50px] md:w-[80px]" />
            </Link>
            {/* <AiOutlineInstagram className="text-lg mx-auto text-lightGray" /> */}
            {/* <AiOutlineFacebook className="text-lg mx-auto text-lightGray" /> */}
          </div>
        </div>
      </div>

      <hr className="text-extraLightGray boredr-0 mb-2" />

      <p className="text-center text-lightGray text-xsm sm:text- mb-5 font-light">
        Copyright ©{new Date().getFullYear()} Atlantis Health Care All rights
        reserved{' '}
      </p>
    </footer>
  );
};

export default Footer;
