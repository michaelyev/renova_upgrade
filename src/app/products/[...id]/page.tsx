
import ProductCard from '@/components/Pages/Products/components/ProductCard/ProductCard';
import { Reviews } from '@/components/Reviews/Reviews';
import { Button } from '@/components';
import Image from 'next/image';

import { getData } from '@/helpers/getData';
import { useSelector } from 'react-redux';
//import { useSearchParams } from 'next/navigation'

 const ProductPage = ({params: {id}}:{params:{id:string}}) => {
  
  console.log(id)
  //const activeTab = useSelector(state => state.navtabcategory.activeTab);

  //console.log(activeTab)
  return (
    <section className="container pt-[108px] pb-[64px]">
      <h3 className='pb-[48px] p1 text-additional2'>Back to Products</h3>

      <div className='flex gap-[129px]'>
        <div className='max-w-[538px]'>
            <h1 className='pb-[16px] h2'>Alebaster White</h1>
            <p className='pb-[32px]'>ID#234259141</p>
            <div className='w-[538px] h-[480px] relative mb-[64px]'>
            <Image alt='' src='/images/products/alabaster-white-quartz.jpg' fill/>
            </div>
            <h3 className='mb-[32px] h5'>Characteristics</h3>
            <ul className='p1'>
              <li className='flex justify-between pb-[24px]'>
                <p>Manufacturer</p>
                <p>MSI</p>
              </li>
              <li className='flex justify-between pb-[24px]'>
                <p>Manufacturer</p>
                <p>MSI</p>
              </li>
              <li className='flex justify-between pb-[24px]'>
                <p>Manufacturer</p>
                <p>MSI</p>
              </li>
              <li className='flex justify-between pb-[24px]'>
                <p>Manufacturer</p>
                <p>MSI</p>
              </li>
              <li className='flex justify-between pb-[24px]'>
                <p>Manufacturer</p>
                <p>MSI</p>
              </li>
              <li className='flex justify-between pb-[24px]'>
                <p>Manufacturer</p>
                <p>MSI</p>
              </li>
              <li className='flex justify-between pb-[24px]'>
                <p>Manufacturer</p>
                <p>MSI</p>
              </li>

            </ul>
            
        </div>
        <div className='pt-[108px]'>
          <Image alt='' className='pb-[21px]' src='/images/icons/discounts_like.svg' height={33} width={33}/>
          <div className="flex items-center mb-[16px]">
          <p className=' mr-[8px] h5'>Status:</p>
          <p className='p1 '> In stock</p>
          </div>
          <p className='pb-[16px] h5'>Description</p>
          <p className='mb-[16px] p1 max-h-[87px]'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam tenetur voluptate ut perspiciatis fugiat autem commodi dolorum aperiam aliquid repellat! od. lorem50</p>
          <div className='flex items-center mb-[73px]'>
            <p className='mr-[16px] h5'>Reviews:</p>
            <Image alt='' src='/images/icons/star.svg' height={24} width={24}/>
          </div>
          <div className='flex items-center mb-[152px]'>
            <p className='mr-[32px] h5'>Price:</p>
            <p className='productPagePrice'>$20</p>
          </div>
          <p className='h5 pb-[32px]'>Delivery</p>
          <div className='mb-[24px]'>
            <p className='h6 mb-[16px]'>Pickup</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut adipisci optio dolorem hic dignissimos, lorem iure et nihil consequuntur temporibus perferendis!</p>
          </div>
          <div className='mb-[24px]'>
            <p className='h6 mb-[16px]'>Pickup</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut adipisci optio dolorem hic dignissimos, lorem iure et nihil consequuntur temporibus perferendis!</p>
          </div>
          <div className='mb-[24px]'>
            <p className='h6 mb-[16px]'>Pickup</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut adipisci optio dolorem hic dignissimos, lorem iure et nihil consequuntur temporibus perferendis!</p>
          </div>
          
        </div>
      </div>

      <p className='h5'>Reviews</p>

      <div className='mt-[40px] mb-[24px]'>
      <Button id='feedback'/>
      </div>
      
      <Reviews card={<div className="h-[240px] w-[427px] bg-gray-500"></div>}/>


      <p className='mt-[128px] mb-[40px] h3 '>You may also like</p>

      <Reviews card={<ProductCard />} />

      <p className='mt-[128px] mb-[40px] h3 '>You recently viewed</p>

      <Reviews card={<ProductCard />} />


    </section>

  )}

  

export default ProductPage