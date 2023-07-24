import Image from 'next/image';
import type { FC, ReactElement } from 'react';

export const Video: FC = (): ReactElement => (
  <section className="mt-[128px]  ">
    <div className="container">
      <h2 className="font-darkGrotesque font-bold text-4xl leading-tight mb-[40px]">Why Us?</h2>
    </div>

    <div className="bg-main1">
      <div className="container">
        <div className="mx-auto flex justify-between items-center gap-6">
          <Image alt="" src="/images/Video.png" width={762} height={424} />
          <div>
            <ol className="flex flex-col gap-4 list-disc ">
              <li className="mb-[48px]">Huge selection</li>
              <li className="mb-[48px]"> Lorem ipsum dolor sit amet. </li>
              <li className="mb-[48px]">Lorem ipsum dolor sit amet consectetur.</li>
              <li>Lorem, ipsum.</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  </section>
);
