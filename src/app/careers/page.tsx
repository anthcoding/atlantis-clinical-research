import React from 'react';
import { CiShare1 } from 'react-icons/ci';

import CustomButton from '../components/CustomButton';

const Careers = () => {
	return (
		<div className="animate-[fadeIn_.4s_ease-in-out] w-11/12 mx-auto xxl:w-9/12 md:w-10/12 pt-[120px]">
			<div className="mx-auto mt-6 leading-none text-center h3 lg:w-4/6 text-secondaryDark">
				If you are a Health Care Professional interested in Clinical Research we
				welcome you to explore opportunities with
				<span className="text-darkBlue"> Atlantis Clinical Research</span>{' '}
				<h6 className="mt-16 leading-normal text-center h6 text-secondaryDark">
					By joining us, you will become part of a dynamic and rapidly growing
					team. We offer flexible work arrangements, an informal,
					entrepreneurial environment, and attractive, performance-driven
					compensation.
					<br />
					<br />
					We recognize the tremendous value of our Investigators’ time and
					expertise. We take special care to use our Investigators’ time most
					efficiently. By minimizing administrative distractions and thoroughly
					preparing for every patient’s visit, we allow Investigators to focus
					on what they do best
					<br />
					<br /> — Clinical Research
				</h6>
				<h6 className="mt-16 leading-normal text-center h6 text-secondaryDark">
					Our dedicated team of medical assistants and clinical coordinators
					plays a pivotal role in providing comprehensive support to our
					investigators, contributing to a seamless execution of both clinical
					and administrative tasks. We invite you to explore affiliation with
					us. Please send us your resume and cover letter. We will be in touch
					shortly!
				</h6>
				<a href="mailto:atlantisclinicalresearch@gmail.com" className="relative flex mx-auto mt-20 h5 lg:h3 w-fit lg:mt-32 text-darkBlue">
					{' '}
					Share Your Background <CiShare1 className="" />
				</a>{' '}
			</div>
		</div>
	);
};

export default Careers;
