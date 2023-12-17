import React from 'react';

const Learn = () => {
	return (
		<div className="animate-[fadeIn_.4s_ease-in-out] w-11/12 mx-auto xxl:w-9/12 md:w-10/12 pt-[80px] lg:pt-[120px]">
			<div className="mx-auto mt-6 leading-none text-center h3 lg:w-4/6 text-dark">
				What is a Research Study?
				<h6 className="mt-4 leading-normal text-center h6 text-secondaryDark">
					A research study is a scientific way to improve or develop new methods
					of health care. Studies are designed to answer specific questions on
					how to prevent, diagnose, or treat diseases and disorders. Many types
					of research studies exist. For example, clinical trials test new
					medicines or devices. Other studies use interviews or surveys to
					understand health or behavior.
				</h6>
			</div>
			<div className="mx-auto mt-6 leading-none text-center h3 lg:w-4/6 text-dark">
				Why are Research Studies important?
				<h6 className="mt-4 leading-normal text-center h6 text-secondaryDark">
					Research studies are important because they contribute to knowledge
					and progress on diseases and disorders. Research is the fastest and
					safest way to find treatments that work.
				</h6>
			</div>
			<div className="mx-auto mt-24 leading-none text-center lg:mt-52 h3 lg:w-4/6 text-dark">
				
				Why should I join?
			</div>
			<div className="flex flex-wrap justify-center w-full gap-2 mt-4 lg:flex-nowrap lg:gap-5">
				<div className="flex flex-col justify-center items-center w-2/3 px-4 py-8 border lg:justify-end lg:py-20 lg:w-1/3 border-borderDark xxl:h-[638px] rounded-xl h-fit bg-cardWhite">
					<h3 className="mx-auto leading-none text-center lg:text-start h3-2 lg:w-4/6 text-secondaryDark">
						To assess research exclusive treatments and tests
					</h3>
				</div>
				<div className="flex flex-col justify-center  w-2/3 px-4 py-8 border lg:justify-end lg:py-20 lg:w-1/3 border-borderDark xxl:h-[638px] rounded-xl h-fit bg-cardBlue">
					<h3 className="mx-auto leading-none text-center lg:text-start h3-2 lg:w-4/6 text-dark">
						To learn ways to improve your health
					</h3>
				</div>
				<div className="flex flex-col justify-center items-center  lg:justify-end w-2/3 lg:w-1/3 px-4 py-8 lg:py-20 border border-borderDark xxl:h-[638px] rounded-xl bg-cardWhite">
					<h3 className="mx-auto leading-none text-center lg:text-start h3-2 lg:w-4/6 text-secondaryDark">
						To potentially help others
					</h3>
				</div>
			</div>
		</div>
	);
};

export default Learn;
