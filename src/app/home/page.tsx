'use client';

import React from 'react';
import Image from 'next/image';
import HeroGradient from '../../../public/assests/HeroGradient.png';
import HeroDoctors from '../../../public/assests/HeroDoctors.png';
import CustomButton from '../components/CustomButton';
import Ourmission from '../components/Ourmission';
import {motion} from 'framer-motion';

const page = () => {
  return (
    <>
      <section className="w-9/12 mx-auto ">
        <div className="lg:flex row lg:pt-[100px]">
          <div className="mb-12 lg:mb-0 lg:w-[50%]">
            <h1 className="text-xlg sm:text-xl md:text-xxl font-extrabold sm:leading-[4.6rem] text-darkHeading">
              <span className="highlight highlight-yellow highlight-spread-md highlight-variant-11">
                Researching{' '}
              </span>
              today for a better tomorrow{' '}
            </h1>
            <p className="mt-5 text-darkGray text-sm sm:text-md font-light w-8/12 mb-12">
              Helping Patients while advancing medical science. Participate in a
              Trial Today and help find a cure tomorrow.
            </p>
            <CustomButton
              outline={true}
              route={'#whoAreWe'}
              label={'Get Started'}
            />
          </div>
          <div className="md:mb-0 sm:mx-auto relative w-[100%] lg:w-[50%] ">
            <Image
              className="absolute left-[1%] lg:h-[700px] lg:w-[800px] -top-[16%] lg:bottom-0"
              src={HeroGradient}
              alt="HeroGradient"
            />
            <Image
              className="mb-12 sm:mb-0 z-20 w-full relative"
              src={HeroDoctors}
              alt="SecondDoctor"
            />
          </div>
        </div>
        <div
          className="block h-36 mt-36 invisible scroll-smooth"
          id="whoAreWe"
        ></div>
      </section>
      <section className="h-[65vh] w-full flex justify-center items-center">
        <motion.div
          initial={{opacity: 0, scale: 0.5}}
          animate={{opacity: 1, scale: 1}}
          transition={{
            duration: 0.8,
            delay: 0.5,
            ease: [0, 0.71, 0.2, 1.01],
          }}
          className="w-5/6 lg:w-2/6"
        >
          <h1 className="text-center text-xlg sm:text-xl md:text-xxl font-bold text-darkHeading mb-6 lg:mb-12">
            Who are we ?
          </h1>
          <p className="text-center text-sm sm:text-md text-darkGray font-light">
            <span className="text-darkGray font-extrabold">
              Atlantis Health Clinic{' '}
            </span>
            is a multi-specialty research facility in Miami, Florida. Our
            company has a passionate staff with more than 20 years in the
            medical field and more than 10 years on research.
            <br />
            <br />
            The key of ACR is to strictly follow approved protocols, taking care
            of every detail, focused on the patient's safety. and keeping the
            highest quality standard and GCP guidelines. We believe in the truth
            of research results and the growing necessity of continuing looking
            for the cure of diseases and better ways of screening. A better word
            is possible if the word has the healthiest people.
          </p>
        </motion.div>
      </section>
      <Ourmission />
    </>
  );
};

export default page;
