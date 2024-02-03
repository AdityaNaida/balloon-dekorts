import { RefObject } from 'react';
import styles from '@/components/homepage/home.module.css';
import Image from 'next/image';
import AgesLinks from './AgeLinks';

interface AgeNumberProps {
  slider: RefObject<HTMLDivElement>;
  rightClick: () => void;
  leftClick: () => void;
}

const AgeNumber: React.FC<AgeNumberProps> = ({ slider, rightClick, leftClick }) => {
  return (
    <>
      <div className={styles.homeCategory1}>
        <h2>Age Is Just A Number </h2>
        <p>Gifts as awesome as their age</p>
        <div className={styles.ageSliderWrapper}>
          <Image src="/chevron-left.svg" height={30} width={30} alt='left age slide' unoptimized priority={false} onClick={leftClick} />
          <div className={styles.ageSlider} ref={slider}>
            <AgesLinks />
          </div>
          <Image src="/chevron-right.svg" height={30} width={30} alt='right age slide' unoptimized priority={false} onClick={rightClick} />
        </div>
      </div>
    </>
  );
}

export default AgeNumber;
