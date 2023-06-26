import Image from 'next/image';
import { FC, ReactElement } from 'react';

export const Hero: FC = (): ReactElement => {
  return (
    <section className="bg-heroImage bg-cover pt-[50px] h-screen">
      <div className="container  ">
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
        <button className="mb-[203px] border-2 px-[48px] py-[24px]  border-accent ">Consultation</button>
      </div>
    </section>
  );
};
