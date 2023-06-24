'use client';
import { useState, useEffect, ReactElement, FC } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { controllPageScroll } from '@/helpers/controlPageScroll';
import { links } from '@/constants/header';

export const Header: FC = (): ReactElement => {
  const [background, setBackground] = useState<boolean>(false);
  useEffect((): void => {
    controllPageScroll({ setBackground, verticalOffset: 1 });
  }, []);

  return (
    <header className={`header ${background ? 'bg-white' : ''} w-full z-10 fixed`}>
      <div className="container ">
        <nav className="flex justify-between items-center  w-full">
          <Link href="/">
            <Image src="images/logos/Subtract.svg" width={71} height={71} alt="logo" />
          </Link>
          <ul className="flex gap-10 items-center">
            {links.map(({ id, link, title }) => (
              <li key={id}>
                <Link href={link}>{title}</Link>
              </li>
            ))}
            <Link href="/selected">
              <Image src="images/logos/mdi_heart.svg" height={50} width={50} alt="selected" />
            </Link>
          </ul>
        </nav>
      </div>
    </header>
  );
};
