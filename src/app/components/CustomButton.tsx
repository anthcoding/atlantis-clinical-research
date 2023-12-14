'use client';

import React from 'react';
import Link from 'next/link';
import { BsArrowDownRight } from 'react-icons/bs';

interface ButtonProps {
	route: string;
	label: string;
}

const CustomButton = ({ route, label }: ButtonProps) => {
	return (
		<Link
			className={`${
				label === 'arrow' ? 'my-10' : ''
			} mx-auto p-4 border border-dark rounded-full w-20 h-20 md:w-32 md:h-32 flex justify-center items-center md:mx-0 mt-6	`}
			href={route}
		>
			{label === 'arrow' ? (
				<BsArrowDownRight className="rotate-45 md:rotate-0 text-[25px] md-text-[40px] font-extraLight" />
			) : (
				label
			)}
		</Link>
	);
};

export default CustomButton;
