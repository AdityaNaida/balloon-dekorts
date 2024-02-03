import styles from '@/components/homepage/home.module.css';
import Image from 'next/image';

const Hero: React.FC = () => {
  return (
    <>
      <div className={styles.hero}>
        <Image src="/hero-image.webp" alt='Home Hero Banner' priority={false} width={1500} height={400} />
      </div>
    </>
  );
}

export default Hero;
