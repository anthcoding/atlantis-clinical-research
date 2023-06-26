'use client';

import React from 'react';
import Image from 'next/image';
import HeroGradient from '../../../public/assests/HeroGradient.png';
import HeroDoctors from '../../../public/assests/HeroDoctors.png';
import CustomButton from '../components/CustomButton';
import Ourmission from '../components/Ourmission';
import Reveal from '../components/Reveal';

const page = () => {
  return (
    <>
      <section className="w-9/12 mx-auto ">
        <div className="lg:flex row lg:pt-[100px]">
          <div className="mb-12 lg:mb-0 lg:w-[50%]">
            <Reveal delay={0.25} duration={0.5}>
              <h1 className="text-xlg sm:text-xl md:text-xxl font-extrabold sm:leading-[4.6rem] text-darkHeading">
                <p className="w-[80%] highlight highlight-yellow highlight-spread-md highlight-variant-11">
                  Researching
                </p>
                today for a better tomorrow{' '}
              </h1>
            </Reveal>
            <Reveal delay={1}>
              <p className="mt-5 text-darkGray text-sm sm:text-md font-light w-8/12 mb-12">
                Helping Patients while advancing medical science. Participate in
                a Trial Today and help find a cure tomorrow.
              </p>
            </Reveal>
            <Reveal delay={1}>
              <CustomButton
                outline={true}
                route={'#whoAreWe'}
                label={'Get Started'}
              />
            </Reveal>
          </div>

          <div className="md:mb-0 sm:mx-auto relative w-[100%] lg:w-[50%] ">
            <Image
              className="absolute left-[1%] lg:h-[700px] lg:w-[800px] -top-[16%] lg:bottom-0"
              src={HeroGradient}
              alt="HeroGradient"
            />

            <Reveal delay={0.7}>
              <Image
                className="mb-12 sm:mb-0 z-20 w-full relative"
                src={HeroDoctors}
                alt="SecondDoctor"
              />
            </Reveal>
          </div>
        </div>
        <div
          className="block h-36 mt-36 invisible scroll-smooth"
          id="whoAreWe"
        ></div>
      </section>
      <section className="h-[65vh] w-full flex justify-center items-center">
        <div className="w-5/6 lg:w-2/6">
          <Reveal delay={0.25}>
            <h1 className="w-full text-center text-xlg sm:text-xl md:text-xxl font-bold text-darkHeading mb-6 lg:mb-12">
              Who are we ?
            </h1>
          </Reveal>
          <Reveal delay={0.25}>
            <p className="text-center text-sm sm:text-md text-darkGray font-light">
              <span className="text-darkGray font-extrabold">
                Atlantis Health Clinic{' '}
              </span>
              is a multi-specialty research facility in Miami, Florida. Our
              company has a passionate staff with more than 20 years in the
              medical field and more than 10 years on research.
              <br />
              <br />
              The key of ACR is to strictly follow approved protocols, taking
              care of every detail, focused on the patient's safety. and keeping
              the highest quality standard and GCP guidelines. We believe in the
              truth of research results and the growing necessity of continuing
              looking for the cure of diseases and better ways of screening. A
              better word is possible if the word has the healthiest people.
            </p>
          </Reveal>
        </div>
      </section>
      <Ourmission />
    </>
  );
};

export default page;
