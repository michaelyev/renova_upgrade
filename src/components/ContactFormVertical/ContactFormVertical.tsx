import React from 'react';
import { contactFormValidation } from '@/constants/contactFormValidation';
import { SubmitHandler, useForm } from 'react-hook-form';

type Inputs = {
  name: string;
  email: string;
  phone: string;
  location: string;
};

export const ContactFormVertical = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
  };
  return (
    <div>
      <form
        className="flex flex-col items-center border-2 border-solid px-[80px] py-[48px] border-additional1"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h3 className="font-inter font-bold text-xl leading-[1.2104] pb-[40px]">Sign Up for a consultation</h3>
        <p className="mb-[24px] p3">Leave your contacts</p>
        <input
          id="contactForm"
          className="h-[48px] w-[377px] mb-[16px] pl-[48px] py-[15px] placeholder-additional2 text-additional2 bg-main1"
          placeholder="Name"
          {...register('name', contactFormValidation.name)}
        />
        {errors.name && <p>{errors.name.message}</p>}
        <input
          id="contactForm"
          className="h-[48px] w-[377px] mb-[16px] pl-[48px] py-[15px] placeholder-additional2 text-additional2 bg-main1"
          placeholder="Phone"
          {...register('phone', contactFormValidation.phone)}
        />
        {errors.phone && <p>{errors.phone.message}</p>}
        <input
          id="contactForm"
          className="h-[48px] w-[377px] mb-[16px] pl-[48px] py-[15px] placeholder-additional2 text-additional2 bg-main1"
          placeholder="E-mail"
          {...register('email', contactFormValidation.email)}
        />
        {errors.email && <p>{errors.email.message}</p>}
        <input
          id="contactForm"
          className="h-[48px] w-[377px] mb-[16px] pl-[48px] py-[15px] placeholder-additional2 text-additional2 bg-main1"
          placeholder="Location"
          {...register('location', contactFormValidation.location)}
        />
        {errors.location && <p>{errors.location.message}</p>}
        <div className="mb-[40px]">
          <h3 className="mb-[8px] text-accent underline">Attachment</h3>
          <p className="text-additional2">Share a photo or file to enhance our assistance to you!</p>
        </div>
        <input type="submit" className="mx-auto border-accent border-2 w-[242px] h-[72px]" />
      </form>
    </div>
  );
};
