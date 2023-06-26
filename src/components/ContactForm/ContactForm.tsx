import React, { FC, ReactElement } from 'react';

import { inputConfig } from '../common/input/inputconfig';
import Input from '../common/input/Input';

export const ContactForm: FC = (): ReactElement => {
  return (
    <section
      className="max-w-[874px] max-h-[518px] mt-[128px]
    flex flex-col justify-center text-center py-[48px] px-[50px]
    border-additional1 border-solid border-2 mx-auto mb-[128px]"
    >
      <div>
        <h3 className="mb-[40px] h5">Sign Up for a consultation</h3>
        <p className="mb-[24px]  p3">Leave your contacts</p>
      </div>
      <div className="flex gap-[20px] mx-auto mb-[40px]">
        <div className="flex flex-col">
          <Input id="contactForm" placeholder="Name" />
          <Input id="contactForm" placeholder="203023422" />
        </div>
        <div className="flex flex-col">
          <Input id="contactForm" placeholder="Name" />
          <Input id="contactForm" placeholder="203023422" />
        </div>
      </div>
      <div className="mb-[40px]">
        <h3 className="mb-[8px] text-accent underline">Attachment</h3>
        <p className="text-additional2">Share a photo or file to enhance our assistance to you!</p>
      </div>
      <button className=" mx-auto border-accent border-2 w-[242px] h-[72px] ">Consultation</button>
    </section>
  );
};
