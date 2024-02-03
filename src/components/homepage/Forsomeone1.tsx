import styles from '@/components/homepage/home.module.css';
import Link from 'next/link';
import Image from 'next/image';

const Forsomeone1: React.FC = () => {
  return (
    <>
      <div className={styles.forSomeone}>
        <div className={styles.forSomeoneHeading}>
          <h4>For Him</h4>
          <Link href="/category">View All</Link>
        </div>
        <div className={styles.forSomeoneWrapper}>
          <div className={styles.forSomeoneWrapperLeft}>
            <Link href="/category" className={styles.leftwrapper1}>
              <Image src="/forhim1.webp" height={100} width={100} alt="for him image" priority={false} unoptimized />
              <div className={styles.gradientOverlay}></div>
              <p>Gifts</p>
            </Link>
            <Link href="/category">
              <Image src="/forhim2.jpg" height={200} width={250} alt='for him image' priority={false} unoptimized />
              <div className={styles.gradientOverlay}></div>
              <p>For Him</p>
            </Link>
          </div>
          <div className={styles.forSomeoneWrapperRight}>
            <Link href="/category">
              <Image src="/forhim3.webp" height={100} width={100} alt="for him image" priority={false} unoptimized />
              <div className={styles.gradientOverlay}></div>
              <p>Cakes </p>
            </Link>
            <Link href="/category">
              <Image src="/forhim4.webp" height={100} width={100} alt="for him image" priority={false} unoptimized />
              <div className={styles.gradientOverlay}></div>
              <p>Personalized </p>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Forsomeone1;
