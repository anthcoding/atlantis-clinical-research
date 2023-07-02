import React from 'react';
import Image from 'next/image';

import BussinesDoctor from '../../../public/assests/BussinesDoctor.png';
import MedicalAssistant from '../../../public/assests/MedicalAssistant.png';
import CustomButton from '../components/CustomButton';
import Reveal from '../components/Reveal';

const Careers = () => {
  return (
    <div className="w-9/12 mx-auto">
      <Reveal delay={0.25}>
        <h1 className="text-xlg sm:text-xl font-bold text-darkGray mb-6 lg:mb-12">
          Doctors
        </h1>
      </Reveal>
      <Reveal delay={0.25}>
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-2/4 mb-12 md:mb-0">
            <h1 className="text-start text-md md:text-lg font-bold text-darkGray  w-3/4 mb-2">
              If you are a Health Care Professional interested in Clinical
              Research,
            </h1>
            <p className="text-start text-sm sm:text-md text-darkGray font-light">
              we welcome you to explore opportunities with{' '}
              <span className="font-bold">
                Atlantis Clinical Research.By joining Atlantis Clinical Research
              </span>{' '}
              , you will become part of a dynamic and rapidly growing team. We
              offer flexible work arrangements, an informal, entrepreneurial
              environment, and attractive, performance-driven compensation.
            </p>
            <br />
            <br />
            <p className="text-start text-sm sm:text-md text-darkGray font-light mb-12">
              We recognize the tremendous value of our Investigators’ time and
              expertise.{' '}
              <span className="font-bol">
                We take special care to use our Investigators’ time most
                efficiently.
              </span>{' '}
              By minimizing administrative distractions and thoroughly preparing
              for every patient’s visit, we allow Investigators to focus on what
              they do best —{' '}
              <span className="font-bold "> Clinical Research.s.</span>
            </p>
            <CustomButton label="Join now" route="/contact-us" outline={true} />
          </div>
          <div className="w-full md:w-2/4">
            <Image
              placeholder="blur"
              src={BussinesDoctor}
              alt="Bussines Doctor"
              className="w-full"
            />
          </div>
        </div>
      </Reveal>
      <Reveal delay={0.55}>
        <h1 className="w-full md:w-2/4 text-xlg sm:text-xl font-bold text-darkGray mb-6 lg:mb-12 mt-52">
          Medical Assistant and study coordinator
        </h1>
      </Reveal>
      <Reveal delay={0.55}>
        <div className="flex flex-col md:flex-row">
          {' '}
          <div className="w-full md:w-2/4 mb-6 md:mb-0">
            <Image
              src={MedicalAssistant}
              alt="Bussines Doctors"
              className="w-3/4"
              placeholder="blur"
            />
          </div>
          <div className="w-full md:w-2/4">
            <h1 className="text-start text-md md:text-lg font-bold text-darkGray  w-3/4 mb-0 md:mb-2">
              Our Medical Assistants and Clinical Coordinators
            </h1>
            <br />
            <br />
            <p className="text-start text-sm sm:text-md text-darkGray font-light mb-12">
              Support our Investigators in various clinical and administrative
              tasks.
              <br />
              <br />
              We invite you to explore affiliation with{' '}
              <span className="font-bold">
                Atlantis Clinical Research.
              </span>{' '}
              Please join us! or fax us your CV and cover letter to{' '}
              <span className="font-bold">(786) 732-1081.</span> We will be in
              touch shortly!
            </p>
            <CustomButton label="Join now" route="/contact-us" outline={true} />
          </div>
        </div>
      </Reveal>
    </div>
  );
};

export default Careers;
