'use client';

import React from 'react';
import TeamMembers from './TeamMembers';
import Image from 'next/image';

//IMAGES (ASSESTS)
import CoupleMaleDoctors from '../../../public/assests/CoupleMaleDoctor.png';
import GenericGradient from '../../../public/assests/GenericGradient.png';
import ThirdDoctor from '../../../public/assests/ThirdDoctor.png';
import Rei from '../../../public/assests/rei.jpg';
import Laritsa from '../../../public/assests/laritza.jpg';
import Tamara from '../../../public/assests/tamara.jpg';
import Marelis from '../../../public/assests/marelis.jpg';
import Laura from '../../../public/assests/laura.jpg';
import Orlando from '../../../public/assests/orlando.jpg';
import Staff from '../../../public/assests/TeamPhoto.png';
import Reveal from './Reveal';

const TEAM_INFO = [
  {
    id: 1,
    name: 'Orlando C. Moreno | MD',
    position: 'Internal Medicine specialist | Principal Investigator',
    img: Orlando,
    delay: 0.25,
  },
  {
    id: 2,
    name: 'Tamara Guerra Alfonso | MD',
    position: 'Psychiatric Board Certified | Principal Investigator',
    img: Tamara,
    delay: 0.35,
  },
  {
    id: 2,
    name: 'Marelys Torres Abreu | APRN',
    position: 'FNP board Certified | Sub-investigator',
    img: Marelis,
    delay: 0.45,
  },
  {
    id: 1,
    name: 'Laritza Lincheta Enriquez | APRN',
    img: Laritsa,
    position: 'FNP Board certified | Manager Director ',
    delay: 0.55,
  },
  {
    id: 1,
    name: 'Laura Misiara Lincheta | BSN in science',
    position: 'Study Coordinator',
    img: Laura,
    delay: 0.55,
  },
  {
    id: 2,
    name: 'Reinaldo Diaz | Bachelor in Psychology',
    img: Rei,
    position: 'Recruiter Department',
    delay: 0.65,
  },
];

const Ourmission = () => {
  return (
    <section className="w-9/12  mx-auto mt-20 sm:mt-40">
      <div className="items-center flex flex-col lg:flex-row justify-between">
        <div className="order-last lg:order-none sm:mb-24 lg:max-w-[50%]">
          <Reveal delay={0.25} duration={0.3}>
            <Image
              className="max-w-full mt-16 md:mt-0"
              src={CoupleMaleDoctors}
              alt="Couple Male Doctors"
              placeholder="blur"
            />
          </Reveal>
        </div>
        <div className="lg:w-[50%] mb-24 lg:mb-0">
          <Reveal delay={0.25}>
            <h1 className="mt-16 lg:mt-0 text-darkHeading text-xlg sm:text-xl md:text-xl font-bold text-center mb-8">
              Our mission
            </h1>
          </Reveal>
          <Reveal delay={0.25}>
            <ul className="list-disc w-9/12 text-darkGray text-sm sm:text-md font-light mx-auto">
              <li>
                Partners with the research community to create a culture of high
                achievement
              </li>
              <br />
              <li>
                Promotes shared responsibility, the ethical conduct of research,
                and compliance with protocol and GCP guidelines.
              </li>
              <br />
              <li>
                Creates integrated services, transparent research
                administration, infrastructure, and streamlined processes
              </li>
              <br />
              <li>Advocates for the needs of the ACR community</li>
              <br />
              <li>Broadens awareness of the value of ACR research</li>
              <br />
              <li>Develops strong relationships with sponsors</li>
              <br />
              <li>
                Enhances the ability to perform research in the global community
              </li>
              <br />
              <li>
                Supports strong infrastructure for interdisciplinary research.
              </li>
            </ul>
          </Reveal>
        </div>
      </div>
      <div className="p-6 px-12 w-full xl:flex lg:justify-between  rounded-3xl relative overflow-hidden mt-40">
        <div className="flex flex-col justify-center items-center xl:items-start w-full xl:max-w-[55%] lg:pl-20 ">
          <Reveal delay={0.25}>
            <h1 className="pt-12 lg:pt-0 font-bold text-xlg sm:text-xl text-darkGray mb-12 text-start md:text-center xl:text-start">
              Additionally we{' '}
              <span className="text-darkHeading">work hard</span> to:
            </h1>
          </Reveal>
          <Reveal delay={0.25}>
            <h3 className="text-xmd lg:text-lg mb-3 text-darkGray font-light">
              <span className="font-semibold text-dark">Minimize </span>study
              start-up time
            </h3>
          </Reveal>
          <Reveal delay={0.35}>
            <h3 className="text-xmd lg:text-lg mb-3 text-darkGray font-light">
              <span className="font-semibold text-dark">Reduce </span>
              administrative burden{' '}
            </h3>
          </Reveal>
          <Reveal delay={0.45}>
            <h3 className="text-xmd lg:text-lg mb-3 text-darkGray font-light">
              <span className="font-semibold text-dark">Improve </span>
              financial performance
            </h3>
          </Reveal>
          <Reveal delay={0.55}>
            <h3 className="text-xmd lg:text-lg mb-3 text-darkGray font-light">
              <span className="font-semibold text-dark">Mitigate </span>
              research billing compliance risk
            </h3>
          </Reveal>
        </div>
        <Reveal delay={0.25}>
          <div className="pt-12 md:pt-0 flex justify-center w-full xl:justify-end xl:w-[350px]">
            <Image
              placeholder="blur"
              width={350}
              src={ThirdDoctor}
              alt="Doctor Smiling"
            />
          </div>
        </Reveal>
        <Image
          placeholder="blur"
          src={GenericGradient}
          alt="gradient"
          className="absolute top-0 left-0 max-w-[500px] z-0"
        />
      </div>
      <div className="w-full xl:flex flex-col  rounded-3xl relative overflow-hidden mt-40 p-6 lg:p-12 md:p-20 ">
        <div className="w-full block lg:flex justify-between">
          <div className="w-full lg:w-[35%]">
            <Reveal delay={0.25}>
              <h1 className="text-center text-xlg sm:text-xl md:text-xl font-bold text-darkHeading mb-6 lg:mb-12">
                Efficiency
              </h1>
            </Reveal>
            <Reveal delay={0.45}>
              <p className="text-center md:-text-start text-sm sm:text-md text-darkGray font-light">
                Atlantis Clinical Research staff is committed to our ongoing
                site outreach and incident monitoring we are considering backup
                plans to review data.
                <br />
                <br />
                We continue to remain in complete control of our sponsors’
                projects and proactively work to mitigate any potential risks.
              </p>
            </Reveal>
          </div>
          <div className="w-full lg:w-[35%]">
            <Reveal delay={0.25}>
              <h1 className="mt-16 md:mt-0 text-center text-xlg sm:text-xl md:text-xl font-bold text-darkHeading mb-6 lg:mb-12">
                Our partners
              </h1>
            </Reveal>
            <Reveal delay={0.45}>
              <p className="text-center md:-text-start text-sm sm:text-md text-darkGray font-light">
                Atlantis Clinical Research is invested in the success of our
                employees. When our colleagues are inspired and nurtured, they
                do their best work.
                <br />
                <br />
                We also believe that the best work gets done when a diverse team
                searches for solutions that address the needs of a varied
                populace, and we are committed to increasing diversity within
                our ranks.
              </p>
            </Reveal>
          </div>
        </div>
        <Image
          src={GenericGradient}
          alt="gradient"
          className="absolute top-0 left-0 h-[1700px] w-[1700px] z-0"
          placeholder="blur"
        />
        <div className="w-full ">
          <Reveal delay={0.25}>
            <h1 className="text-center text-xlg md:text-xl font-bold text-darkHeading mb-6 lg:mb-4 mt-20">
              Meet our staff
            </h1>
          </Reveal>
          <div className="lg:grid lg:grid-cols-2 mt-12 w-full">
            {TEAM_INFO.map((member, idx) => (
              <Reveal delay={member.delay}>
                <TeamMembers
                  key={member.delay}
                  img={member.img}
                  name={member.name}
                  position={member.position}
                  right={true}
                  id={member.id}
                />
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Ourmission;
