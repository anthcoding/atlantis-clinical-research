'use client';

import Link from 'next/link';
import './nav-bar.css';
import React, { useState, useContext } from 'react';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

import AtlantisLogo from '../../../../public/assests/atlantis-logo.png';

const NavLinks = [
	{ name: 'Home', url: '/home' },
	{ name: 'Sponsor', url: '/sponsor' },
	{ name: 'Careers', url: '/careers' },
	{ name: 'Learn', url: '/learn' },
	{ name: 'Contact', url: '/contact-us' },
];

const NavBar = () => {
	const [isChecked, setIsChecked] = useState(false);

	const handleCheckboxChange = () => {
		setIsChecked(!isChecked); // Toggle the checked state
	};

	const currentRoute = usePathname();

	return (
		<>
			<div className="fixed left-0 right-0 z-20 w-10/12 pt-5 mx-auto">
				<div className="flex justify-between w-full">
					<div className="text-[30px]  md:block">
						<Link href="/home">
							<Image className="w-12" alt="Company Logo" src={AtlantisLogo} />
						</Link>
					</div>
					<div className="items-center justify-center hidden pl-4 bg-gray-400 rounded-lg md:flex bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10">
						<ul className="flex gap-8">
							{NavLinks.slice(1, 4).map((link) => (
								<li key={link.name}>
									<Link
										className={`${
											currentRoute === `${link.url}`
												? 'text-secondaryDarkLighter'
												: 'text-dark'
										} hover:text-secondaryDarkLighter duration-150 text-sm tracking-wider`}
										href={link.url}
									>
										{link.name}
									</Link>
								</li>
							))}
						</ul>
						<div className="hidden ml-auto md:block md:ml-0">
							<Link href='/contact-us' className="bg-tertiaryDark rounded-[8px] shadow-lg tracking-wider text-white text-sm px-5 py-2 ml-6 hover:opacity-90 duration-200  hover:shadow-md">
								Contact Us
							</Link>
						</div>
					</div>
				</div>
			</div>
			<div className="relative z-30 md:hidden">
				<label className="hamburger-menu">
					<input
						type="checkbox"
						checked={isChecked}
						onChange={handleCheckboxChange}
					/>
				</label>
				<aside className="flex flex-col justify-between sidebar">
					<ul className="flex flex-col items-center w-3/4 mx-auto mt-4 text-xlMobile">
						{NavLinks.map((value) => (
							<Link
								className={`${
									currentRoute === `${value.url}`
										? 'text-dark'
										: 'text-secondaryDark'
								} nav-link text-left text-dark w-full tracking-tighter leading-normal `}
								key={value.name}
								href={value.url}
								onClick={handleCheckboxChange}
							>
								{value.name}
							</Link>
						))}
					</ul>
					<Link
						href="/home"
						onClick={handleCheckboxChange}
						className="w-full flex gap-7 justify-center align-center text-[20px] text-secondaryDark mb-20"
					>
						<Image
							className="w-12"
							src={AtlantisLogo}
							alt="Atlantic Clinical Research logo"
						/>
					</Link>
				</aside>
			</div>
		</>
	);
};

export default NavBar;
