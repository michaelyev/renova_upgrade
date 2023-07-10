'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '@/app/redux/hooks';
import { setSelectedCards } from '@/app/redux/features/selectedCardSlice';

const ProductCard = (props) => {

  const dispatch = useAppDispatch();

  if (!props) {
    return <>Loading...</>; // Render a loading state or placeholder
  }

  const {
    id,
    productName,
    title,
    productCode,
    image,
    status,
    description,
    rating,
    price,
    discountedPrice,
    characteristics,
    selectedCards
  } = props;

  const[isLiked, setIsLiked] = useState(false)


  const handleSelectionClick = () => {
    console.log(selectedCards)
    const foundCardId = selectedCards.find(card => card.id === id)
    console.log(foundCardId)
    if (foundCardId) {
      const newSelectedCards = selectedCards.filter(card => card.id !== id )
      console.log(newSelectedCards)
      dispatch(setSelectedCards(newSelectedCards))
      localStorage.setItem('selectedCard', JSON.stringify(newSelectedCards));
      setIsLiked(false)
      return
    }
    const newSelectedCards = [...selectedCards, {id, productName, image, price, discountedPrice}]
    dispatch(setSelectedCards(newSelectedCards));
    localStorage.setItem('selectedCard', JSON.stringify(newSelectedCards));
     setIsLiked(true)
  }

  return (
    <li>
      <div>
        <div className=" h-[280px] w-[280px]  ">
          <Image alt="" src={props.image} width={280} height={280} />
          <div className=" flex justify-center text-main1 text-5xl bg-accent h-[80px] w-[203px] items-center">
            {/* {selected ? ( */}
            <strong>-20 %</strong>
            {/* ) : null} */}
          </div>
        </div>
        <div className="h-[99px] w-[280px] bg-main1 px-[24px]">
          <h3 className="font-inter font-normal text-base leading-[1.21] text-left  pt-[8px]">
            <Link href={`/products/${encodeURIComponent(props.id)}`}>{props.title}</Link>
          </h3>

          <div className="flex justify-between items-center mt-[8px]">
            <h4 className="font-darkGrotesque text-4xl text-main ">20$/m2</h4>
            <h4 className="text-additional2">25$/m2</h4>
              
              <Image
                onClick={handleSelectionClick}
                alt=""
                src= {isLiked ? '/images/icons/discounts_like.svg' : '/images/icons/right_arrow.svg'}
                width={26}
                height={26}
              />
            
          </div>
        </div>
      </div>
    </li>
  );
};

export default ProductCard;
