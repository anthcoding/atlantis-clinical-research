'use client';

import {error} from 'console';
import React from 'react';
import {useForm} from 'react-hook-form';
import {sendContactForm} from '../../../lib/api';
import toast, {Toaster} from 'react-hot-toast';

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
    formState: {errors},
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
    <div className="flex flex-col md:flex-row mt-24 w-10/12 mx-auto">
      <Toaster position="top-center" reverseOrder={false} />
      <div className="w-full md:w-[50%]">
        <h1 className="text-center w-full lg:w-2/4 mx-auto lg:text-start text-xl font-bold text-darkHeading mb-6 lg:mb-12">
          Let's talk!
        </h1>
        <p className="w-full lg:w-2/4 mb-12 lg:mb-0 mx-auto text-center lg:text-start text-sm sm:text-sm md:text-md text-darkGray font-light">
          Have some big idea or brand to develop and need help? Then reach out
          we'd love to hear about your project and provide help
        </p>
      </div>
      <div className="w-full md:w-[50%]">
        <form
          className="flex flex-col justify-center items-center text-sm sm:text-sm md:text-md"
          onSubmit={handleSubmit(onSubmit)}
        >
          {/* register your input into the hook by invoking the "register" function */}
          <div className="w-3/4 flex justify-between mb-8">
            <div className="w-[45%]">
              <input
                className={`w-full mb-2 border-darkGray border-[.99px] placeholder-darkGray mt-5 p-5 rounded-lg outline-none text-darkGray font-light text-sm sm:text-md ${
                  errors.name ? 'border-red border-[2px]' : ''
                }`}
                type="text"
                placeholder="First Name"
                {...register('name', {
                  required: 'This field is required',
                })}
              />
              {errors.name?.type === 'required' && (
                <p className="text-sm font-light ml-2 text-red">
                  Name is required*
                </p>
              )}
            </div>
            <div className="w-[45%]">
              <input
                className={`w-full mb-2 border-darkGray border-[.99px] placeholder-darkGray mt-5 p-5 rounded-lg outline-none text-darkGray font-light text-sm sm:text-md ${
                  errors.lastName ? 'border-red border-[2px]' : ''
                }`}
                type="text"
                placeholder="Last Name"
                {...register('lastName', {required: true})}
              />
              {errors.lastName?.type === 'required' && (
                <p className="text-sm font-light ml-2 text-red">
                  Last name is required*
                </p>
              )}
            </div>
          </div>
          <div className="w-full mb-8 text-center">
            <input
              className={`border-darkGray placeholder-darkGray border-[.99px] mb-2 w-3/4 p-5 rounded-lg outline-none text-darkGray font-light text-sm sm:text-md ${
                errors.subject ? 'border-red border-[2px]' : ''
              }`}
              type="text"
              placeholder="Subject"
              {...register('subject', {required: true})}
            />
            {errors.subject?.type === 'required' && (
              <p className="text-sm font-light ml-2 text-red">
                Subject is required*
              </p>
            )}
          </div>
          <div className="w-full mb-8 text-center">
            <input
              className={`border-darkGray placeholder-darkGray border-[.99px] mb-2 w-3/4 p-5 rounded-lg outline-none text-darkGray font-light text-sm sm:text-md ${
                errors.email ? 'border-red border-[2px]' : ''
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
            {errors.email && (
              <p className="text-sm font-light ml-2 text-red">
                {errors.email.message}
              </p>
            )}
          </div>
          <div className="w-full mb-8 text-center">
            <textarea
              className={`border-darkGray placeholder-darkGray border-[.99px] mb-2 w-3/4 p-5 rounded-lg outline-none text-darkGray font-light text-sm sm:text-md ${
                errors.message ? 'border-red border-[2px]' : ''
              }`}
              {...register('message', {required: true})}
              placeholder="Message"
              rows={6}
            />
            {errors.message?.type === 'required' && (
              <p className="text-sm font-light ml-2 text-red">
                A message is required*
              </p>
            )}
          </div>

          <div className="w-3/4 flex justify-center items-center">
            <button
              type="submit"
              className="w-2/4 rounded-[100px] p-3 font-light text-darkGray border-extraLightGray border-[1px]"
            >
              Submit{' '}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactUS;
