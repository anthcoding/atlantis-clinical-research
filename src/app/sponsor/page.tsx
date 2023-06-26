import Image from 'next/image';
import React from 'react';

import GroupDoctors from '../../../public/assests/GroupDoctors.png';
import Micro from '../../../public/assests/Micro.png';
import Reveal from '../components/Reveal';

const page = () => {
  return (
    <div className="w-9/12 mx-auto">
      <div className="w-9/12 md:w-5/12 mx-auto">
        {' '}
        <Reveal delay={0.25}>
          <h1 className="text-center text-xlg sm:text-xl font-bold text-darkHeading mb-6 lg:mb-12">
            <span className="text-darkGray">Our</span> priorities
          </h1>
        </Reveal>
        <Reveal delay={0.35}>
          <p className="text-center text-sm sm:text-md text-darkGray font-light">
            At Atlantis Clinical Research, we understand how important clinical
            trials are to our sponsors. That’s why we are committed to providing
            the fastest and acure quality data following the strict Good
            Clinical Practice Guideline.
            <br />
            <br />
            Our dedication begins with our staff. Atlantis Clinical Research
            Principal Investigators are active medical practitioners in
            specialized solo practices or as partners in well-established group
            practices. All Atlantis Clinical Research PIs are Board-certified
            and are engaged in delivering a high standard of care.
          </p>
        </Reveal>
      </div>
      <Reveal delay={0.35}>
        <Image
          src={GroupDoctors}
          alt="Group of doctors"
          width={800}
          className="mx-auto mt-20"
        />
      </Reveal>
      <div className="w-full justify-between mt-52 ">
        <Reveal delay={0.25}>
          <h1 className="w-full lg:w-2/4 mx-auto text-center text-md md:text-lg  font-bold text-darkHeading mb-6 lg:mb-16">
            <span className="text-darkGray">
              Atlantis Clinical Research Clinical
            </span>{' '}
            Staff are highly trained professionals and fully trained in GCP and
            HIPPA.
          </h1>
        </Reveal>
        <Reveal delay={0.35}>
          <div className="flex flex-col md:flex-row justify-between ">
            <div className="w-full md:w-[35%]">
              <p className="mb-12 md:mb-0 text-center md:text-start text-sm sm:text-md text-darkGray font-light">
                As a rule, our Clinical Coordinators work on no more than two
                trials at a time — this ensures thorough preparation, rapid
                patient recruitment, availability to participants and monitors,
                and timely document submission.
              </p>
            </div>
            <div className="w-full md:w-[35%]">
              <p className="text-center md:text-start text-sm sm:text-md text-darkGray font-light">
                We recruit study participants through an outstanding
                collaboration with primary care provider offices, community
                health facilities, and local media advertising. In all studies
                we have participated in, we have met and, in most, have far
                exceeded the enrollment targets.
              </p>
            </div>
          </div>
        </Reveal>
        <div className="items-center lg:flex justify-between mt-52">
          <div className="w-[9/12] md:w-[100%]">
            <Reveal delay={0.25}>
              <h1 className="text-darkHeading text-md md:text-lg font-bold mb-8">
                We are interest{' '}
                <span className="text-darkGray">
                  to conduct studies in the following therapeutic areas
                </span>
                , but open to be involved in any other speciality as per request
              </h1>
            </Reveal>
            <Reveal delay={0.35}>
              <ul className="text-sm sm:text-md list-disc w-5/12 text-darkGray lg:ml-[50%] font-light mx-auto">
                <li>Cosmetic Medicine</li>
                <br />
                <li>Dermatology</li>
                <br />
                <li>Gastroenterology</li>
                <br />
                <li>Geriatrics</li>
                <br />
                <li>Internal Medicine</li>
                <br />
                <li>Neuropsychology</li>
                <br />
                <li>Pain Management</li>
                <br />
                <li>Psychiatry</li>
                <li>Obesity</li>
              </ul>
            </Reveal>
          </div>
          <Reveal delay={0.45}>
            <div className="max-w-full ">
              <Image
                className="max-w-full"
                src={Micro}
                alt="Couple Male Doctors"
              />
            </div>
          </Reveal>
        </div>
        <div className="mt-52">
          <Reveal delay={0.25}>
            <h1 className="text-xlg sm:text-xl font-bold text-darkHeading  mb-6 lg:mb-12">
              <span className="text-darkGray">Our</span> Facility
            </h1>
          </Reveal>
          {/* <div className="ml-auto w-[80%]"></div> */}
          <Reveal delay={0.3}>
            <h3 className="text-end mb-2 text-md md:text-lg text-darkGray font-light">
              <span className="font-bold">1900 sq. ft.</span> exclusively for
              clinical research
            </h3>
          </Reveal>
          <Reveal delay={0.35}>
            <h3 className="text-end mb-2 text-md md:text-lg text-darkGray font-light">
              Dedicated rooms for <span className="font-bold">monitors</span>
            </h3>
          </Reveal>
          <Reveal delay={0.4}>
            <h3 className="text-end mb-2 text-md md:text-lg text-darkGray font-light">
              <span className="font-bold">Secure</span> drug storage room
            </h3>
          </Reveal>
          <Reveal delay={0.45}>
            <h3 className="text-end mb-2 text-md md:text-lg text-darkGray font-light">
              <span className="font-bold">Secure</span> refrigerating storage
              unit
            </h3>
          </Reveal>
          <Reveal delay={0.5}>
            <h3 className="text-end mb-2 text-md md:text-lg text-darkGray font-light">
              <span className="font-bold">Pharmacokinetic</span> sampling unit
            </h3>
          </Reveal>
          <Reveal delay={0.55}>
            <h3 className="text-end mb-2 text-md md:text-lg text-darkGray font-light">
              <span className="font-bold"> ECG</span> equipment
            </h3>
          </Reveal>
        </div>
        <Reveal delay={0.6}>
          <h3 className="text-end mb-2 text-md md:text-lg text-darkGray font-light">
            Access to{' '}
            <span className="font-bold">
              X-ray/radiology, CT-scan, endoscopy
            </span>
            , and facilities
          </h3>
        </Reveal>
        <Reveal delay={0.65}>
          <h3 className="text-end mb-2 text-md md:text-lg text-darkGray font-light">
            <span className="font-bold"> Broadband Internet</span> access and
            secure computer network
          </h3>
        </Reveal>
        <br />
        <br />
        <br />
        <Reveal delay={0.7}>
          <h3 className="text-end mb-2 text-md md:text-lg text-darkGray font-light">
            Less than 30 min from{' '}
            <span className="font-bold">Miami International Airport</span>
          </h3>
        </Reveal>
        <Reveal delay={0.75}>
          <h3 className="text-end mb-2 text-md md:text-lg text-darkGray font-light">
            Close to a large number of medical offices covering multiple
            specialties.
          </h3>
        </Reveal>
        <Reveal delay={0.8}>
          <h3 className="text-end mb-2 text-md md:text-lg text-darkGray font-light">
            Just minutes from{' '}
            <span className="font-bold">Baptist and Kendall Hospitals</span>
          </h3>
        </Reveal>
        <Reveal delay={0.85}>
          <h3 className="text-end mb-2 text-md md:text-lg text-darkGray font-light">
            Abundance of{' '}
            <span className="font-bold">public transportation</span>
          </h3>
        </Reveal>
        <Reveal delay={0.9}>
          <h3 className="text-end mb-2 text-md md:text-lg text-darkGray font-light">
            <span className="font-bold">Free parking</span> for participants and
            monitors
          </h3>
        </Reveal>
        <Reveal delay={0.95}>
          <h3 className="text-end mb-2 text-md md:text-lg text-darkGray font-light">
            {' '}
            <span className="font-bold">Atlantis Clinical Research</span> is
            located in the center of the popular Westchester neighborhood of
            Miami
          </h3>
        </Reveal>
      </div>
    </div>
  );
};

export default page;
