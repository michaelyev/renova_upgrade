
import ProductCard from '@/components/Pages/Products/components/ProductCard/ProductCard';
import { Reviews } from '@/components/Reviews/Reviews';
import { Button } from '@/components';
import Image from 'next/image';

import { getData } from '@/helpers/getData';
import { useSelector } from 'react-redux';
import { Product } from '@/pagesCollection/Product/Product';
//import { useSearchParams } from 'next/navigation'

 const ProductPage = ({params: {id}}:{params:{id:string}}) => {
  
 
  //const activeTab = useSelector(state => state.navtabcategory.activeTab);

  //console.log(activeTab)
  return (
    <section className="container pt-[108px] pb-[64px]">

      <Product id={id} /> 
      
      <p className='mt-[128px] mb-[40px] h3 '>You may also like</p>

      <Reviews card={<ProductCard />} />

      <p className='mt-[128px] mb-[40px] h3 '>You recently viewed</p>

      <Reviews card={<ProductCard />} />


    </section>

  )}

  

export default ProductPage