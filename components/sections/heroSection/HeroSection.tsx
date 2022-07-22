import Image from 'next/image';
import { FC } from 'react';

import { heroSectionData } from './heroSection.data';

const HeroSection: FC = () => (
  <div className='flex flex-3 flex-wrap mx-8 opacity-80 align-center justify-center dark:bg-black gap-8'>
    {heroSectionData.map((item) => (
      <div className='relative w-[19rem] h-[19rem] 2xl:w-[25rem] 2xl:h-[25rem]'>
        <Image src={item.url} layout='fill' objectFit='cover' />
      </div>
    ))}
  </div>
);

export default HeroSection;