'use client';

import Link from 'next/link';
import React from 'react';
import CustomButton from './CustomButton';

const Footer = () => {
	return (
		<footer className="relative w-11/12 pb-4 mx-auto mt-32 lg:pt-40 lg:pb-10 xxl:w-9/12 md:w-10/12">
			<div className="flex flex-col justify-between lg:flex-row">
				<h2 className="text-start h2">
					Two decades <br /> of experience
				</h2>
				<Link target='_blank' href='https://www.google.com/maps?sca_esv=402fceabb896019b&output=search&q=9380+Sw+72nd+St+Ste+B238+Miami+Florida%E2%80%8B&source=lnms&entry=mc' className="w-4/6 pt-4 leading-none underline h3 lg:text-end lg:w-2/6">
					9380 Sw 72nd St Ste B238 Miami Florida​
				</Link>
			</div>
			<div className="flex justify-end w-full mt-16">
				<Link
					className="absolute flex items-center justify-center w-32 h-32 p-4 mx-auto mt-6 duration-300 transform border rounded-full hover:scale-125 hover:shadow-lg lg:-translate-x-1/2 lg:-translate-y-3/5 h6 top-3/5 left-4 lg:left-1/2 border-dark md:w-40 md:h-40 md:mx-0"
					href="/contact-us"
				>
					Get in Touch
				</Link>
				<div className="flex items-center justify-center ">
					<ul>
						<li className="text-end">
							<Link
								className="mt-4 tracking-normal duration-150 hover:opacity-70 h5 lg:leading-tight xl:w-3/4 text-secondaryDark"
								href="/home"
							>
								Home
							</Link>
						</li>
						<li className="text-end">
							<Link
								className="mt-4 tracking-normal duration-150 hover:opacity-70 h5 lg:leading-tight xl:w-3/4 text-secondaryDark"
								href="/sponsor"
							>
								Sponsor
							</Link>
						</li>
						<li className="text-end">
							<Link
								className="mt-4 tracking-normal duration-150 hover:opacity-70 h5 lg:leading-tight xl:w-3/4 text-secondaryDark"
								href="/careers"
							>
								Careers
							</Link>
						</li>
						<li className="text-end">
							<Link
								className="mt-4 tracking-normal duration-150 hover:opacity-70 h5 lg:leading-tight xl:w-3/4 text-secondaryDark"
								href="/learn"
							>
								Learn
							</Link>
						</li>
					</ul>
				</div>
			</div>
			<p className="mt-16 lg:pr-4 lg:w-5/12 p text-end">
				Copyright ©2023 Atlantis Clinical Research. Website:{' '}
				<span className="underline">VEMORA</span>
			</p>
		</footer>
	);
};

export default Footer;
