'use client';

import React, {useEffect} from 'react';
import Image, {StaticImageData} from 'next/image';

interface TeamMembersProps {
  right: Boolean;
  name: String;
  position: String;
  img: StaticImageData;
  id: number;
}

const TeamMembers = ({right, name, position, img, id}: TeamMembersProps) => {
  useEffect(() => {
    console.log(id);
  }, []);

  return (
    <div className="w-full flex mx-auto mb-6 lg:mb-0">
      <div
        className={`${
          id !== 1 ? 'order-2' : 'items-start'
        } flex flex-col justify-center p-3`}
      >
        <Image
          height={120}
          width={120}
          src={img}
          className="rounded-full"
          alt="Staff profile photo"
          placeholder="blur"
        />
      </div>
      <div
        className={`${
          id !== 1 ? 'items-end' : 'items-start'
        } flex flex-col justify-center w-full`}
      >
        <h6
          className={`${
            id !== 1 ? 'text-end' : 'text-start'
          } flex flex-col justify-center p-3 text-darkGray text-sm sm:text-md`}
        >
          {name}
        </h6>
        <p
          className={`${
            id !== 1 ? 'text-end' : 'text-start'
          } flex flex-col justify-start lg:justify-center p-3 text-lightGray text-sm sm:text-md`}
        >
          {position}
        </p>
      </div>
    </div>
  );
};

export default TeamMembers;
