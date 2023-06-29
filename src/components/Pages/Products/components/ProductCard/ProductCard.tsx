
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'


const ProductCard = (props) => {
  // const {title } = purpose;
  console.log(props)
  return (
    <li>
          <div>
            <div className=" h-[280px] w-[280px]  ">
              <Image alt='' src={props.imageUrl} width={280} height={280}/>
              <div className=" flex justify-center text-main1 text-5xl bg-accent h-[80px] w-[203px] items-center">
                -20 %
              </div>
            </div>
            <div className="h-[99px] w-[280px] bg-main1 px-[24px]">
              <h3 className="font-inter font-normal text-base leading-[1.21] text-left  pt-[8px]">
              <Link href={`/products/${encodeURIComponent(props.color?.title)}`}>{props.color?.title}</Link> 
{/*                 <Link href={`${}`}>Alebaster</Link>
 */}              </h3>

              <div className="flex justify-between items-center mt-[8px]">
                <h4 className="font-darkGrotesque text-4xl text-main ">
                  20$/m2
                </h4>
                <h4 className="text-additional2">25$/m2</h4>
                <Image
                  alt=''
                  src="/images/icons/discounts_like.svg"
                  width={26}
                  height={26}
                />
              </div>
            </div>
          </div>
        </li>
  )
}

export default ProductCard