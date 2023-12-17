'use client';

import { error } from 'console';
import React from 'react';
import { useForm } from 'react-hook-form';
import { sendContactForm } from '../../../lib/api';
import toast, { Toaster } from 'react-hot-toast';
import Link from 'next/link'

type FormData = {
	name: string;
	lastName: string;
	subject: string;
	email: string;
	message: string;
};

const ContactUS = () => {
	const notify = () => toast('Email sent');

	const {
		register,
		handleSubmit,
		watch,
		reset,
		formState: { errors },
	} = useForm<FormData>({
		defaultValues: {
			name: '',
			lastName: '',
			subject: '',
			email: '',
			message: '',
		},
		mode: 'all',
	});

	const onSubmit = async (data: FormData) => {
		sendContactForm(data);
		notify();

		reset({
			name: '',
			lastName: '',
			subject: '',
			email: '',
			message: '',
		});
	};

	return (
		
    <div className="animate-[fadeIn_.4s_ease-in-out] w-11/12 mx-auto xxl:w-5/12 md:w-10/12 pt-[80px] lg:pt-[120px]">
			<div className="mx-auto mt-6 leading-none text-start h3 lg:w-4/6 text-dark">
				Let's talk!
				<h6 className="mt-4 leading-normal text-start h6 text-secondaryDark">
        Thank you for visiting Atlantis Clinical Research . We value your interest and would love to hear from you. Whether you have a question, need assistance, or simply want to share your thoughts, our team is here to help.
				</h6>
      <div className="w-full ">
        <form
          className="flex flex-col items-center justify-center text-sm sm:text-sm md:text-md"
          onSubmit={handleSubmit(onSubmit)}
        > 
          <h3 className="w-full mt-10 h6 text-ext-dark">
						Enter your contact information
					</h3>
          <div className="flex justify-between w-full mb-4">
            <div className="w-[48%]">
              <input
                className={`w-full mb-2 border-darkGray bg-cardWhite mt-5 p-5 rounded-lg outline-none text-darkGray font-light h6 ${
                  errors.name ? 'border-red border-[1px]' : ''
                }`}
                type="text"
                placeholder="First Name"
                {...register('name', {
                  required: 'This field is required',
                })}
              />
             
            </div>
            <div className="w-[48%]">
              <input
                className={`w-full mb-2 border-darkGray bg-cardWhite mt-5 p-5 rounded-lg outline-none text-darkGray font-light h6 ${
                  errors.lastName ? 'border-red border-[1px]' : ''
                }`}
                type="text"
                placeholder="Last Name"
                {...register('lastName', {required: true})}
              />
            
            </div>
          </div>
          <div className="w-full text-center">
            <input
              className={`border-darkGray bg-cardWhite mb-6 w-full p-5 rounded-lg outline-none text-darkGray font-light h6 ${
                errors.subject ? 'border-red border-[1px]' : ''
              }`}
              type="text"
              placeholder="Subject"
              {...register('subject', {required: true})}
            />
           
          </div>
          <div className="w-full mb-2 text-center">
          
            <input
              className={`border-darkGray bg-cardWhite mb-2 w-full p-5 rounded-lg outline-none text-darkGray font-light h6 ${
                errors.email ? 'border-red border-[1px]' : ''
              }`}
              type="email"
              placeholder="Email"
              {...register('email', {
                required: 'The email is required*',
                validate: {
                  matchPattern: (v) =>
                    /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) ||
                    'Email address must be a valid address',
                },
              })}
            />
          </div>
          <div className="w-full mb-2 text-center">
            <h3 className="w-full mt-4 mb-2 text-start h6 text-dark">
              How can we assist you?
            </h3>
            <textarea
              className={`border-darkGray bg-cardWhite mb-2 w-full p-5 rounded-lg outline-none text-darkGray font-light h6 ${
                errors.message ? 'border-red border-[1px]' : ''
              }`}
              {...register('message', {required: true})}
              placeholder="Message"
              rows={8}
            />
           
          </div>

          <div className="w-full ">
            <button
              type="submit"
              className="w-1/4 p-5 font-light duration-300 shadow-sm hover:shadow-md bg-cardBlue rounded-xl text-darkGray h6"
            >
              Submit{' '}
            </button>
          </div>
        </form>
        <h5 className="mt-20 font-light text-center h5 ">
          Give us a call at <Link className='text-linkBlue' href='tel:7868759769'>(+1 786-875-9769)</Link>  or 
          <Link className='text-linkBlue' href='tel:7867321081'>(+1 786-732-1081)</Link>.  Available from 7:00am to 5:00pm every business day.
				</h5>
      </div>
			</div>
			<Toaster position="top-center" reverseOrder={false} />
		</div>
	);
};

export default ContactUS;
