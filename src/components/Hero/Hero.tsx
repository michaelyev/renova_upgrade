'use client';

import Image from 'next/image';
import { type FC, type ReactElement, useState } from 'react';

import { ContactForm } from '@/components/ContactFormBig';

export const Hero: FC = (): ReactElement => {
  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <section className="bg-heroImage bg-cover pt-[50px] h-screen">
      <div className="container relative ">
        <div
          className={`${
            isModalOpen ? '' : 'hidden'
          } absolute w-screen bg-white top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2`}
        >
          <ContactForm setModalOpen={setModalOpen} />
        </div>

        <div className="flex mt-[64px] mb-[16px] items-center">
          <Image className="" src="images/icons/mdi_location.svg" height={32} width={32} alt="city icon" />
          <span>Seattle</span>
        </div>

        <h1 className=" font-darkGrotesque font-bold text-4xl leading-tight mb-[32px]">Countertops</h1>
        <Image className="mb-[64px]" src="images/FOREVER_1.svg" width={929} height={154} alt="forever" />
        <h2 className="font-inter font-bold text-lg leading-snug mb-[64px]">RELIABLY. STYLISH. COSY.</h2>
        <p className="font-inter font-normal text-lg leading-tight mb-[45px] max-w-[652px]">
          Your imagination, our embodiment. Send us a photo of the room and your wishes, and we will advise you!
        </p>
        <button onClick={() => setModalOpen(true)} className="mb-[203px] border-2 px-[48px] py-[24px]  border-accent ">
          Consultation
        </button>
      </div>
    </section>
  );
};
