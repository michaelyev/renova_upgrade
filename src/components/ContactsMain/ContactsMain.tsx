'use client';

import type { FC, ReactElement } from 'react';

import { ContactFormVertical } from '@/components/ContactFormVertical/ContactFormVertical';
import { contactInfo } from '@/mockData/ourContacts';

export const ContactsMain: FC = (): ReactElement => (
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
        <ContactFormVertical />

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
              title="contactsMain"
              src="https://www.google.com/maps/embed/v1/search?q=11121+Valley+Ave+E,+Puyallup,+WA+98372&key=YOUR_API_KEY"
              width="600"
              height="450"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
);
