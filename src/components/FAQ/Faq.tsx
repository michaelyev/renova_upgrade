'use client';
import Image from 'next/image';
import { FC, ReactElement, useState } from 'react';
import { faq } from '@/constants/faq';

export const Faq: FC = (): ReactElement => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="mt-[128px] h-[500px]">
      <div className="container">
        <h3 className="font-darkGrotesque font-bold text-4xl leading-tight mb-[40px]">FAQ</h3>

        <div>
          {faq.map(({ question, answer }, i) => {
            return (
              <div key={i} className=" mx-auto my-[29px] items-center   w-[650px]">
                <button
                  className={`text-xl ${
                    i === faq.length - 1 ? '' : 'border-b-2 border-additional1'
                  }   text-left items-center flex justify-between pb-[29px]  w-full`}
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                >
                  {question}{' '}
                  <Image alt="" className="mt-0" src="/images/icons/right_up_arrow.svg" width={24} height={24} />
                </button>
                {openIndex === i && <div className="p-4 text-center">{answer}</div>}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
