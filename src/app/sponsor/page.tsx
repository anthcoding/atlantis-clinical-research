import Image from 'next/image';
import React from 'react';
import Link from 'next/link';
import DoctorFemale from '../../../public/assests/clinical reasea 1.png';

const page = () => {
	return (
		<>
			<div className="animate-[fadeIn_.4s_ease-in-out] w-11/12 xxl:w-9/12 md:w-10/12 mx-auto pt-[120px]">
				<div className="w-full mb-16">
					<div>
						<h2 className="text-center h2">Our Priorities</h2>
					</div>
					<div className="mt-6 leading-none h3 text-start lg:w-4/6 text-secondaryDark">
						At
						<span className="text-darkBlue"> Atlantis Clinical Research </span>
						we understand how important clinical trials are to our sponsors.
						That’s why we are committed to providing the fastest and accurate
						quality data following the strict
						<span className="text-darkBlue">
							Good Clinical Practice Guideline.
						</span>{' '}
					</div>
					<br />
					<div className="w-3/4 mt-6 lg:w-1/3 ">
						<h6 className="text-start h6 text-secondaryDark">
							All Atlantis Clinical Research PIs are Board-certified and are
							engaged in delivering a high standard of care.
						</h6>
					</div>
				</div>
				<div className="mx-auto mt-40 leading-none text-center lg:mt-72 h3 lg:w-5/6 text-secondaryDark">
					<span className="text-darkBlue">Atlantis Clinical Research</span>{' '}
					clinical staff are highly trained professionals and fully trained in
					GCP and HIPAA
				</div>
				<div className=" mt-20 animate-[fadeIn_.4s_ease-in-out]  flex flex-col gap-10 xl:gap-20 md:flex-row">
					<div className="md:w-[50%]">
						<Image
							alt="Research Clinic doctors smiling"
							src={DoctorFemale}
							className="w-full rounded-xl md:w-9/12 lg:w-11/12 lg:ml-auto"
						/>
					</div>
					<div className="md:w-[50%] flex flex-col justify-center items-center lg:items-start">
						<div className="md:w-2/4 pb-4 lg:pb-10 border-b-[.8px] border-dark">
							<h6 className="text-start h6 text-secondaryDark">
								As a rule, our Clinical Coordinators work on no more than two
								trials at a time HIPAA
							</h6>
						</div>
						<div className="pt-4 lg:pt-10 md:w-2/4 ">
							<h6 className="h6 ext-start text-secondaryDark">
								this ensures thorough preparation, rapid patient recruitment,
								availability to participants and monitors, and timely document
								submission.
							</h6>
							<button className="bg-tertiaryDark rounded-[8px] shadow-lg tracking-wider text-white text-sm px-5 py-2 w-[150px] hover:opacity-90 duration-200  hover:shadow-md mt-4">
								Join The Team
							</button>
						</div>
					</div>
				</div>
			</div>
			<div className="grid w-full grid-flow-col grid-rows-3 gap-4 pt-10 pb-10 mt-20 lg:mt-40 bg-lightBlue gap-y-6 lg:pt-52 lg:gap-y-32 lg:pb-52">
				<div className="">
					{' '}
					<h3 className="text-center h4-2 text-secondaryDark">
						Cosmetic medicine
					</h3>
				</div>
				<div className="">
					<h3 className="text-center h4-2 text-secondaryDark">Dermatology</h3>
				</div>
				<div>
					<h3 className="text-center h4-2 text-secondaryDark">
						Gastroenterology
					</h3>
				</div>
				<div className="">
					<h3 className="text-center h4-2 text-secondaryDark">Geriatrics</h3>
				</div>
				<div className="">
					<h3 className="text-center uppercase h4-2 text-dark">
						therapeutic areas
					</h3>
				</div>
				<div className="">
					<h3 className="text-center h4-2 text-secondaryDark">
						Internal Medicine
					</h3>
				</div>
				<div className="">
					<h3 className="text-center h4-2 text-secondaryDark">
						Neuropsychology
					</h3>
				</div>
				<div className="">
					<h3 className="text-center h4-2 text-secondaryDark">
						Pain Management
					</h3>
				</div>
				<div className="">
					<h3 className="text-center h4-2 text-secondaryDark">Psychiatry</h3>
				</div>
			</div>
			<div className="w-11/12 mx-auto mt-20 xxl:w-9/12 md:w-10/12 lg:mt-40">
				<h3 className="h3">Our facilities</h3>
				<h5 className="h5 text-end text-secondaryDark">
					1900 sq. ft. exclusively for clinical research
				</h5>
				<h5 className="h5 text-end text-secondaryDark">
					Dedicated rooms for monitors
				</h5>
				<h5 className="h5 text-end text-secondaryDark">
					Secure drug storage room
				</h5>
				<h5 className="h5 text-end text-secondaryDark">
					Secure refrigerating storage unit
				</h5>
				<h5 className="h5 text-end text-secondaryDark">
					Pharmacokinetic sampling unit
				</h5>
				<h5 className="h5 text-end text-secondaryDark">ECG equipment</h5>
				<h5 className="h5 text-end text-secondaryDark">
					Access to X-ray/radiology, CT-scan, endoscopy and facilities
				</h5>
				<h5 className="h5 text-end text-secondaryDark">
					Broadband Internet access and secure computer network
				</h5>
				<br />
				<br />
				<h5 className="h5 text-end text-secondaryDark">
					Less than 30 min from Miami International Airport
				</h5>
				<h5 className="h5 text-end text-secondaryDark">
					Close to a large number of medical offices covering multiple
					specialties.
				</h5>
				<h5 className="h5 text-end text-secondaryDark">
					Just minutes from Baptist and Kendall Hospitals
				</h5>
				<h5 className="h5 text-end text-secondaryDark">
					Abundance of public transportation
				</h5>
				<h5 className="h5 text-end text-secondaryDark">
					Free parking for participants and monitors
				</h5>
				<h5 className="h5 text-end text-secondaryDark">
					Atlantis Clinical Research is located in the center of the popular
					Westchester neighborhood of Miami
				</h5>
			</div>
		</>
	);
};

export default page;
