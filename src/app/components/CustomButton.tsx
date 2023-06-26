'use client';

import React from 'react';
import Link from 'next/link';
import {BsArrowRightShort} from 'react-icons/bs';

interface ButtonProps {
  route: string;
  outline: boolean;
  label: string;
  burgerSwitch?: () => void;
}

const CustomButton = ({route, outline, label, burgerSwitch}: ButtonProps) => {
  return (
    <div>
      <Link
        onClick={burgerSwitch}
        className={`${
          outline
            ? 'bg-transparent border-darkBlue border-[.3px] shadow-none text-darkBlue transition duration-350 hover:shadow-lightBlue200 hover:shadow-lg'
            : 'bg-gradient-to-r from-lightBlue from-10% via-lightBlueMedium via-45% to-darkBlue to-90% text-white hover:shadow-lightBlue200 hover:shadow-lg transition duration-350'
        } text-sm  sm:text-md rounded-[70px]  py-2 font-light shadow-lg flex items-center justify-center w-[160px]  sm:w-[172px]`}
        href={route}
      >
        {label}
        <BsArrowRightShort className="ml-2 text-md font-medium" />
      </Link>
    </div>
  );
};

export default CustomButton;
