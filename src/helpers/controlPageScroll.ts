import { IControlPageScroll } from '@/interfaces/pageScroll';

export const controllPageScroll = ({ setBackground, verticalOffset }: IControlPageScroll): void => {
  if (typeof window !== 'undefined') {
    window.addEventListener('scroll', (): void => setBackground(window.scrollY > verticalOffset));
  }
};
