import styles from '@/components/homepage/home.module.css';
import Image from 'next/image';
import Testimonilinks from './Testimonilinks';

interface TestimonialsProps {
  testSlider: React.RefObject<HTMLDivElement>;
  rightTestClick: () => void;
  leftTestClick: () => void;
}

const Testimonials: React.FC<TestimonialsProps> = ({ testSlider, rightTestClick, leftTestClick }) => {
  return (
    <>
      <div className={styles.reviews}>
        <h2>Customer Reviews</h2>
        <p>(Rated 4.8/5 based on 734511 ratings)</p>
        <div className={styles.testimonials_slider_wrapper}>
          <Image src="/chevron-left.svg" alt='testimonials left slide' height={30} width={30} unoptimized priority={false} onClick={leftTestClick} />
          <div className={styles.testimonials_slider} ref={testSlider}>
            <Testimonilinks />
          </div>
          <Image src="/chevron-right.svg" alt='testimonials right slide' height={30} width={30} unoptimized priority={false} onClick={rightTestClick} />
        </div>
      </div>
    </>
  );
}

export default Testimonials;
