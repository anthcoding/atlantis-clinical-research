import React from 'react';

const Learn = () => {
  return (
    <div className="w-10/12 mx-auto">
      <div className="w-full md:w-5/12 mx-auto">
        <h1 className="text-center text-xlg sm:text-xl font-bold text-darkGray mb-6 lg:mb-12">
          What is a Research Study?
        </h1>
        <p className="text-center text-sm sm:text-md text-darkGray font-light mb-36">
          A research study is a scientific way to improve or develop new methods
          of health care. Studies are designed to answer specific questions on
          how to prevent, diagnose, or treat diseases and disorders. Many types
          of research studies exist. For example, clinical trials test new
          medicines or devices. Other studies use interviews or surveys to
          understand health or behavior.
        </p>
      </div>
      <div className="w-9/12 mx-auto flex flex-col md:flex-row justify-between ">
        <div className="w-full md:w-[40%] mb-12 md:mb-0">
          <h1 className="text-center text-xmd sm:text-lg font-bold text-darkGray  mb-8">
            Why are Research Studies important?
          </h1>
          <p className="text-center text-sm sm:text-md text-darkGray font-light">
            Research studies are important because they contribute to knowledge
            and progress on diseases and disorders. Research is the fastest and
            safest way to find treatments that work.
          </p>
        </div>
        <div className="w-full md:w-[40%]">
          <h1 className="text-center text-xmd sm:text-lg font-bold text-darkGray  mb-8">
            Why should I join?
          </h1>
          <ul className="list-disc text-sm sm:text-md text-darkGray font-light mx-auto">
            <li> To learn about ways to improve your health possibly.</li>
            <br />
            <li>
              To help evaluate medications, tests, or programs that may not be
              available outside of research.
            </li>
            <br />
            <li>To potentially help others.</li>
            <br />
            <li>To potentially help others.</li>
            <br />
            <li>Internal Medicine</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Learn;
