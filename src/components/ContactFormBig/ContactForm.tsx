'use client';
import { FC } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { contactFormValidation } from '@/constants/contactFormValidation';

type Inputs = {
  name: string;
  email: string;
  phone: string;
  location: string;
};

interface ContactFormProps {
  setModalOpen?: (isOpen: boolean) => void;
}

export const ContactForm: FC<ContactFormProps> = ({ setModalOpen }) => {
  const {
    register,
    control,
    handleSubmit,
    reset,

    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    if (setModalOpen) {
      setModalOpen(false);
    }
    reset();
  };

  return (
    <form
      className="max-w-[874px] max-h-[518px] mt-[128px] flex flex-col justify-center text-center py-[48px] px-[50px] border-additional1 border-solid border-2 mx-auto mb-[128px]"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div>
        <h3 className="mb-[40px] h5">Sign Up for a consultation</h3>
        <p className="mb-[24px] p3">Leave your contacts</p>
      </div>
      <div className="flex gap-[20px] mx-auto mb-[40px]">
        <div className="flex flex-col">
          <input
            id="contactForm"
            className="h-[48px] w-[377px] mb-[16px] pl-[48px] py-[15px]  placeholder-additional2 text-additional2 bg-main1"
            placeholder="Name"
            {...register('name', contactFormValidation.name)}
          />
          {errors.name && <p>{errors.name.message}</p>}
          <input
            id="contactForm"
            className="h-[48px] w-[377px] mb-[16px] pl-[48px] py-[15px]  placeholder-additional2 text-additional2 bg-main1"
            placeholder="Phone"
            {...register('phone', contactFormValidation.phone)}
          />
          {errors.name && <p>{errors.name.message}</p>}
        </div>
        <div className="flex flex-col">
          <input
            id="contactForm"
            className="h-[48px] w-[377px] mb-[16px] pl-[48px] py-[15px]  placeholder-additional2 text-additional2 bg-main1"
            placeholder="E-mail"
            {...register('email', contactFormValidation.email)}
          />
          {errors.name && <p>{errors.name.message}</p>}
          {errors.email && <p>{errors.email.message}</p>}
          <input
            id="contactForm"
            className="h-[48px] w-[377px] mb-[16px] pl-[48px] py-[15px]  placeholder-additional2 text-additional2 bg-main1"
            placeholder="Location"
            {...register('name')}
          />
          {errors.name && <p>{errors.name.message}</p>}
        </div>
      </div>
      <div className="mb-[40px]">
        <h3 className="mb-[8px] text-accent underline">Attachment</h3>
        <p className="text-additional2">Share a photo or file to enhance our assistance to you!</p>
      </div>
      <input type="submit" className="mx-auto border-accent border-2 w-[242px] h-[72px]" />
    </form>
  );
};
