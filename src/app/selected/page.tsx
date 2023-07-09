'use client'
import { Button } from '@/components';
import React from 'react';
import { ContactForm } from '@/components';
import { Reviews } from '@/components/Reviews/Reviews';
import Image from 'next/image';
import { selectedCardLocalStorage } from '@/helpers/selectedCardLocalStorage';
import { useSelector } from 'react-redux';
import { fetchData, productData } from '../redux/features/productDataSlice';

const page = () => {
  
  const selectedCards = selectedCardLocalStorage()
  //const selectedCards = useSelector(state => state.selectedCard)
  
  console.log(selectedCards)
  return (
    <section className="container pt-[100px]">
      <div>
        <div className="flex h4 justify-between">
          <p>Selected Products (0)</p>
        </div>
      </div>
      <div className="flex text-center items-center justify-between mt-[24px] mb-[64px] ">

        <div className="max-w-[762px] h6">
          <div>
          <p>
            You havent liked any product yet. We have a huge selection. Please go to the catalog to select something
          </p>
          <div className="flex justify-center mt-[16px]">
            <Button id="browse" />
          </div>
          </div>
          

          <div className={`${selectedCards.length ? 'border-additional1 border-2 border-solid' : ''}`}>
          {selectedCards.map((selectedCard) => (
            <div className="flex gap-[24px] p-[48px]  items-center">
              
              <div>
                <svg width="40" height="41" viewBox="0 0 40 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M26.6668 15.5V32.1667H13.3335V15.5H26.6668ZM24.1668 5.5H15.8335L14.1668 7.16667H8.3335V10.5H31.6668V7.16667H25.8335L24.1668 5.5ZM30.0002 12.1667H10.0002V32.1667C10.0002 34 11.5002 35.5 13.3335 35.5H26.6668C28.5002 35.5 30.0002 34 30.0002 32.1667V12.1667Z"
                    fill="#B28A87"
                  />
                </svg>
              </div>
              <div>
                <Image src={selectedCard.image} width={203} height={203} />
              </div>
              <div>
                <p className="p3 pb-[16px]">{selectedCard.productName}</p>
                <div className="flex gap-[24px] items-center">
                  <p className="h6">20$</p>

                  <p className="p3 text-additional1">25$</p>
                </div>
              </div>
            </div>
          ))}

          </div>
          
        </div>
        <div>
          <div className="flex flex-col items-center border-2 border-solid px-[80px] py-[48px] border-additional1">
            <h3 className="font-inter font-bold text-xl leading-[1.2104] pb-[40px]">Request a quote</h3>
            <p className="mb-[24px]">Leave your contacts</p>
            <input
              className="h-[48px] w-[377px] bg-main1 placeholder-additional2  mb-[16px]"
              type="text"
              placeholder="Name"
            />
            <input
              className="h-[48px] w-[377px] bg-main1 placeholder-additional2 mb-[16px]"
              type="text"
              placeholder="000-000-0000"
            />
            <input
              className="h-[48px] w-[377px] bg-main1 placeholder-additional2 mb-[16px]"
              type="text"
              placeholder="Your@email.com"
            />
            <input
              className="h-[48px] w-[377px] bg-main1 placeholder-additional2 mb-[16px]"
              type="text"
              placeholder="Your address"
            />
            <input
              className="h-[48px] w-[377px] bg-main1 placeholder-additional2 mb-[24px]"
              type="text"
              placeholder="Description"
            />

            <button className="border-accent border-2 w-[242px] h-[72px]">Consultation</button>
          </div>
        </div>
      </div>

      <div className="mb-[128px]">
        <p className="h5">How is the order paid?</p>
        <p className="p1">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.
        </p>
      </div>

      <p className="h3 mb-[40px]">You may also like</p>

      <div className="mb-[128px]">
        <Reviews card={<div className="h-[240px] w-[427px] bg-gray-500"></div>} />
      </div>
    </section>
  );
};

export default page;
