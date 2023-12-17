// Import statements
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import HeroImage from '../../../public/assests/doctors-smiling 1-1.png';
import CustomButton from '../components/CustomButton';
import Ourmission from '../components/Ourmission';
import Gradient from '../../../public/assests/gradient.png';
import { BsArrowDownRight } from 'react-icons/bs';

const Page = () => {
	return (
		<>
			<div className="scroll-smooth w-11/12 xxl:w-9/12 md:w-10/12 pt-[80px] lg:pt-[120px] mx-auto">
				<div className="animate-[fadeIn_.4s_ease-in-out] flex flex-col md:flex-row">
					<div className="md:w-[50%]">
						<h1 className="h1 leading-[70px] md:leading-[80px] xl:leading-[117px] xxl:leading-[190px] tracking-tighter md:tracking-tight xxl:tracking-[-14.2px] text-darkBlue">
							Researching today for a better tomorrow
						</h1>
						<h5 className="w-3/4 mt-4 tracking-normal h5 lg:leading-tight text-secondaryDark">
							Helping Patients while advancing medical science.{' '}
							<a
								href="/contact-us"
								className="underline rounded-lg opacity-75 text-darkBlue decoration-2 hover:cursor-pointer"
							>
								Participate in a Trial Today and help find a cure tomorrow
							</a>
						</h5>
					</div>
					<div className="md:w-[50%] ml-auto xxl:w-[40%]">
						<Image
							alt="Research Clinic doctors smiling"
							src={HeroImage}
							className="w-full mt-6 md:w-10/12 lg:w-11/12 md:ml-auto xl:mt-4 xxl:mt-8"
						/>
					</div>
				</div>
				<div className="flex justify-center w-full lg:-mt-10">
					<Link
						className="flex items-center justify-center w-32 h-32 p-4 mx-auto mt-6 duration-300 border rounded-full hover:scale-125 hover:shadow-lg zh6 top-2/5 left-4 lg:left-1/2 border-dark md:w-40 md:h-40 md:mx-0"
						href="#Whoarewe"
					>
						<BsArrowDownRight className="rotate-45 text-md lg:text-xl font-extraLight" />
					</Link>
				</div>
				<div id='Whoarewe' className="w-full mt-32 mb-32 lg:mt-60">
					<div>
						<h2  className="text-center h2">Who are we ?</h2>
					</div>
					<div className="mt-6 leading-none h3 text-start lg:w-5/6 text-secondaryDark">
						<span className="text-darkBlue">Atlantis Clinical Research </span>{' '}
						<br /> is a multi-specialty research facility in Miami, Florida.{' '}
					</div>
					<br />
					<div className="leading-none h3 text-start lg:w-4/6 text-secondaryDark">
						Our company has a passionate staff{' '}
						<span className="text-darkBlue">
							with more than 20 years in the medical field
						</span>{' '}
						and more than 10 years on research.
					</div>
					<div className="w-3/4 mt-6 lg:w-1/3 lg:ml-auto">
						<h6 className="text-start h6 lg:text-right">
							“We believe in the truth of research results and the growing
							necessity of continuing looking for the cure of diseases and
							better ways of screening”
						</h6>
					</div>
				</div>
				<Ourmission />
				<h2 className="mb-10 text-center h2 mt-44 xl:mt-56 xl:mb-32">
					Additionally we work hard to
				</h2>
				<div className="w-full mx-auto lg:w-10/12">
					<div className="w-3/6 mb-4 md:mb-8 md:w-[45%] ">
						<h4 className="mb-4 text-right h4 text-darkBlue leading-0">
							Reduce administrative burden
						</h4>
						<h6 className="text-right h6 text-secondaryDark">
							Efficiency is key in clinical research. By reducing administrative
							burden, we can allocate more time and resources
						</h6>
					</div>
					<div className="w-3/6 mb-4 md:mb-8 md:w-[45%]  ml-auto">
						<h4 className="mb-4 h4 text-start text-darkBlue leading-0">
							Improve financial performance
						</h4>
						<h6 className="h6 text-start text-secondaryDark">
							By improving financial performance, we ensure that resources are
							utilized wisely, allowing us to further our core mission:
							advancing healthcare through groundbreaking research
						</h6>
					</div>
					<div className="w-3/6 mb-4 md:mb-8 md:w-[45%] ">
						<h4 className="mb-4 text-right h4 text-darkBlue leading-0">
							Minimize study <br /> start-up time
						</h4>
						<h6 className="text-right h6 text-secondaryDark">
							In the realm of clinical research, reducing study start-up time is
							of utmost importance. Our commitment to efficiency means we
							streamline processes to minimize delays and maximize impact
						</h6>
					</div>
					<div className="w-3/6 mb-4 md:mb-8 md:w-[45%]  ml-auto">
						<h4 className="mb-4 h4 text-start text-darkBlue leading-0">
							Mitigate research billing compliance risk
						</h4>
						<h6 className="h6 text-start text-secondaryDark">
							Within the research landscape, mitigating compliance risk in
							billing is a top priority. We are dedicated to effective
							management of regulations and standards to ensure the highest
							level of compliance
						</h6>
					</div>
				</div>
			</div>
			<div className="relative w-full mt-60 z-2-0">
				<Image
					src={Gradient}
					alt="Medical professionals conducting clinical research in Miami - Advancing healthcare through innovative studies and patient-focused trials."
					className="absolute w-full min-h-[550px] lg:min-h-[328px]"
				/>
				<div className="flex min-h-[550px] lg:min-h-[328px] xxl:min-h-[728px] items-center justify-center w-10/12  mx-auto flex-col lg:flex-row md:top-44 lg:justify-between">
					<div className="z-10 order-2 w-5/6 mt-12 lg:order-1 lg:w-4/12">
						<h3 className="text-white h3">Our Partners</h3>
						<h6 className="my-5 h6 text-secondaryWhite">
							Atlantis Clinical Research is invested in the success of our
							employees. When our colleagues are inspired and nurtured, they do
							their best work
						</h6>
						<Link href='/careers' className="bg-white rounded-[8px] tracking-wider text-dark text-sm px-5 py-2 shadow-md hover:opacity-90 duration-200 hover:shadow-md">
							Join The Team
						</Link>
					</div>
					<div className="z-10 w-5/6 lg:w-5/12 ">
						<h3 className="leading-none h3 lg:text-end text-secondaryWhite">
							We continue to remain in complete control of our{' '}
							<span className="text-white">sponsors’</span> projects
						</h3>
						<h6 className="mt-4 h6 text-secondaryWhite lg:text-end">
							& proactively work to mitigate any potential risks!
						</h6>
					</div>
				</div>
			</div>
		</>
	);
};

export default Page;
