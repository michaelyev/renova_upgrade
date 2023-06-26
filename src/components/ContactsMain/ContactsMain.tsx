import React, { FC, ReactElement } from 'react';
import { quoteForm } from '@/mockData/mainPageContacts';
import Input from '../common/input/Input';
import { contactInfo } from '@/mockData/ourContacts';

export const ContactsMain: FC = (): ReactElement => {
  return (
    <section>
      <div className="container my-[128px]">
        <div className="">
          <h3 className="font-darkGrotesque font-bold text-4xl leading-tight mb-[40px]">Manufacturers</h3>
          <p className="pb-[24px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla distinctio consequuntur obcaecati deleniti
            alias vero ab deserunt dolores impedit mollitia. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.
          </p>
        </div>

        <div className="flex mb-[128px] justify-between">
          <div className="flex flex-col items-center border-2 border-solid px-[80px] py-[48px] border-additional1">
            <h3 className="font-inter font-bold text-xl leading-[1.2104] pb-[40px]">{quoteForm.title}</h3>
            <p className="mb-[24px]">{quoteForm.description}</p>
            {quoteForm.fields.map((field, index) => (
              <Input key={index} id="contactForm" type="text" placeholder={field.placeholder} />
            ))}
            <div className="my-[40px] text-center mx-auto">
              <h3 className="mb-[8px] text-accent underline">Attachment</h3>
              <p className="text-additional2">Upload file or photo</p>
            </div>
            <button className="border-accent border-2 w-[242px] h-[72px]">{quoteForm.buttonText}</button>
          </div>
          <div>
            <h3 className="font-inter font-bold text-xl leading-[1.2104] pb-[24px]">{contactInfo.title}</h3>
            <h3 className="mb-[40px]">{contactInfo.phoneNumber}</h3>
            <div>
              <h3 className="mb-[8px]">{contactInfo.hours}</h3>
              <h3>{contactInfo.address}</h3>
            </div>
            <h3 className="pb-[40px]">{contactInfo.location}</h3>

            <div className="contacts_map">
              <iframe
                src="https://www.google.com/maps/embed/v1/search?q=11121+Valley+Ave+E,+Puyallup,+WA+98372&key=YOUR_API_KEY"
                width="600"
                height="450"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
