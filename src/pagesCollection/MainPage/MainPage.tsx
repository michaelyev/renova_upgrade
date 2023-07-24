import { Blog } from '@/components/Blog/Blog';
import { ContactsMain } from '@/components/ContactsMain/ContactsMain';
import { Discounts } from '@/components/Discounts/Discounts';
import { Faq } from '@/components/FAQ/Faq';
import { Hero } from '@/components/Hero/Hero';
import { Manufacturers } from '@/components/Manufacturers/Manufacturers';
import { Portfolio } from '@/components/Portfolio/Portfolio';
import { Products } from '@/components/ProductsMain/ProductsMain';
import { Ratings } from '@/components/Ratings/Ratings';
import { Reviews } from '@/components/Reviews/Reviews';
import { Video } from '@/components/VideoMain/VideoMain';
import { ProductsCard } from '@/components/common/cards/products/products';

export const MainPage = () => (
  <main>
    <Hero />
    <Products />
    <Discounts />
    <Video />
    <Manufacturers />
    <Portfolio />
    <Reviews card={<ProductsCard />} />
    <Ratings />
    <Blog />
    <Faq />
    <ContactsMain />
  </main>
);
