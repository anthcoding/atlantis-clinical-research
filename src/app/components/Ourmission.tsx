'use client';

import React from 'react';
import Image from 'next/image';
import DoctorInLab from '../../../public/assests/lab-doctor.png';
import SponsorGradient from '../../../public/assests/our-mission-gradient.jpeg';

const Ourmission = () => {
	return (
		<div className="animate-[fadeIn_.4s_ease-in-out] flex flex-col lg:flex-row gap-10 xl:gap-5 lg:mt-72">
			<div className="xl:w-[50%] flex flex-col justify-center shrink">
				<h2 className="p-6 text-center h2 lg:text-start">Our mission</h2>
				<div className="flex flex-wrap justify-center gap-4 lg:justify-start xl:gap-5">
					<div className="w-[45%]  p-4 py-6 ">
						<h5 className="mb-2 tracking-normal h5 lg:leading-tight xl:w-3/4 text-darkBlue">
							Culture
						</h5>
						<h6 className="text-start h6 text-secondaryDark">
							Partner with the research community to create a culture of high
							achievement
						</h6>
					</div>
					<div className="w-[45%]  p-4 py-6 ">
						<h5 className="mb-2 tracking-normal h5 lg:leading-tight xl:w-3/4 text-darkBlue">
							Guidelines
						</h5>
						<h6 className="text-start h6 text-secondaryDark">
							Promote shared responsibility, the ethical conduct of research,
							and compliance with protocol and GCP guidelines.
						</h6>
					</div>
					<div className="w-[45%]  p-4 py-6 ">
						<h5 className="mb-2 tracking-normal h5 lg:leading-tight xl:w-3/4 text-darkBlue">
							Infrastructure
						</h5>
						<h6 className="text-start h6 text-secondaryDark">
							Create integrated services, transparent research administration,
							infrastructure, and streamlined processes
						</h6>
					</div>
					<div className="w-[45%]  p-4 py-6  relative rounded-xl overflow-hidden">
						<Image
							src={SponsorGradient}
							alt="Gradient"
							className="absolute top-0 left-0 h-full -z-10"
						/>
						<h5 className="mb-2 tracking-normal text-white h5 lg:leading-tight xl:w-3/4">
							Sponsors
						</h5>
						<h6 className="rounded-md text-start h6 text-secondaryWhite">
							Develop strong relationships with sponsors and broadens awareness
							of the value of ACR research
						</h6>
					</div>
				</div>
			</div>
			<div className="md:w-[70%] xl:w-[50%] mt-10 mx-auto">
				<Image
					src={DoctorInLab}
					alt="A doctor doing research"
					className="rounded-md w-[100%]"
				/>
			</div>
		</div>
	);
};

export default Ourmission;
