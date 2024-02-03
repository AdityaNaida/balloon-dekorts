import styles from '@/components/homepage/home.module.css';
import Image from 'next/image';

const Heromobile: React.FC = () => {
  return (
    <div className={styles.hero_mobile}>
      <Image src="/home-mobile.webp" height={300} width={150} alt='hero mobile image' priority={true} unoptimized />
    </div>
  );
}

export default Heromobile;
