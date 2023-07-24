import Image from 'next/image';
import Link from 'next/link';
import type { FC, ReactElement } from 'react';

import { Input } from '@/components/common';
import { socialIcons } from '@/constants/footer';

// icon

export const Footer: FC = (): ReactElement => (
  <footer className="pt-[112px] pb-[24px] bg-customGray">
    <div className="container px-5  text-main1">
      <div className="flex justify-between items-center">
        <div className="flex flex-col gap-[24px] w-1/3">
          <div>
            <h3 className="mb-[16px]">Request a call</h3>

            <Input id="footer" placeholder="206-232-4421" />
          </div>

          <div>
            <h3 className="mb-[8px]">Mon-Sun</h3>
            <h3>9:00 - 19.00</h3>
          </div>
          <h3>2141 15th Ave SE Seattle, WA </h3>
        </div>
        <div className="flex flex-col justify-between items-center w-1/3">
          <Link href="/">
            <Image src="images/logos/Subtract.svg" width={71} height={71} alt="logo" />
          </Link>
        </div>
        <div className="flex flex-col gap-[24px] w-1/3">
          <a className="text-right" href="mailto: abc@example.com">
            Send Email
          </a>
          <a className="text-right" href="tel:8882192787">
            34315234545
          </a>

          <div className="flex justify-end items-center gap-[16px]">
            {socialIcons.map(({ src, alt, size }, i) => (
              <Link key={i} href="/">
                <Image src={src} alt={alt} height={size} width={size} />
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className="text-center mt-[59px] font-normal font-inter text-additional1">
        <h3>Copyright © 2010-2023</h3>
      </div>
    </div>
  </footer>
);
