import Image from 'next/image'
import React from 'react'
import { Button } from '../common'
import { Reviews } from '../Reviews/Reviews'

export const ProductPageCard = ({props}) => {
    if (!props){
        return <>Loading</>
    }
  return (
    <div>
    <section className="container pt-[108px] pb-[64px]">
      <button className="pb-[48px] p1 text-additional2">Back to Products</button>

      <div className="flex gap-[129px]">
        <div className="max-w-[538px]">
          <h1 className="pb-[16px] h2">{props.productName}</h1>
          <p className="pb-[32px]">{props.productCode}</p>
          <div className="w-[538px] h-[480px] relative mb-[64px]">
            <Image alt="" src="/images/products/alabaster-white-quartz.jpg" fill />
          </div>
          <h3 className="mb-[32px] h5">Characteristics</h3>
          <ul className="p1">
            <li className="flex justify-between pb-[24px]">
              <p>Manufacturer</p>
              <p>MSI</p>
            </li>
            <li className="flex justify-between pb-[24px]">
              <p>Manufacturer</p>
              <p>MSI</p>
            </li>
            <li className="flex justify-between pb-[24px]">
              <p>Manufacturer</p>
              <p>MSI</p>
            </li>
            <li className="flex justify-between pb-[24px]">
              <p>Manufacturer</p>
              <p>MSI</p>
            </li>
            <li className="flex justify-between pb-[24px]">
              <p>Manufacturer</p>
              <p>MSI</p>
            </li>
            <li className="flex justify-between pb-[24px]">
              <p>Manufacturer</p>
              <p>MSI</p>
            </li>
            <li className="flex justify-between pb-[24px]">
              <p>Manufacturer</p>
              <p>MSI</p>
            </li>
          </ul>
        </div>
        <div className="pt-[108px]">
          <Image alt="" className="pb-[21px]" src="/images/icons/discounts_like.svg" height={33} width={33} />
          <div className="flex items-center mb-[16px]">
            <p className=" mr-[8px] h5">Status:</p>
            <p className="p1 "> In stock</p>
          </div>
          <p className="pb-[16px] h5">Description</p>
          <p className="mb-[16px] p1 max-h-[87px]">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam tenetur voluptate ut perspiciatis fugiat
            autem commodi dolorum aperiam aliquid repellat! od. lorem50
          </p>
          <div className="flex items-center mb-[73px]">
            <p className="mr-[16px] h5">Reviews:</p>
            <Image alt="" src="/images/icons/star.svg" height={24} width={24} />
          </div>
          <div className="flex items-center mb-[152px]">
            <p className="mr-[32px] h5">Price:</p>
            <p className="productPagePrice">$20</p>
          </div>
          <p className="h5 pb-[32px]">Delivery</p>
          <div className="mb-[24px]">
            <p className="h6 mb-[16px]">Pickup</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut adipisci optio dolorem hic dignissimos,
              lorem iure et nihil consequuntur temporibus perferendis!
            </p>
          </div>
          <div className="mb-[24px]">
            <p className="h6 mb-[16px]">Pickup</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut adipisci optio dolorem hic dignissimos,
              lorem iure et nihil consequuntur temporibus perferendis!
            </p>
          </div>
          <div className="mb-[24px]">
            <p className="h6 mb-[16px]">Pickup</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut adipisci optio dolorem hic dignissimos,
              lorem iure et nihil consequuntur temporibus perferendis!
            </p>
          </div>
        </div>
      </div>

      <p className="h5">Reviews</p>

      <div className="mt-[40px] mb-[24px]">
        <Button id="feedback" />
      </div>

      <Reviews card={<div className="h-[240px] w-[427px] bg-gray-500"></div>} />

    </section>
  </div>)}