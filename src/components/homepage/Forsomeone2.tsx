import styles from '@/components/homepage/home.module.css';
import Link from 'next/link';
import Image from 'next/image';

const Forsomeone2: React.FC = () => {
  return (
    <>
      <div className={styles.forSomeone}>
        <div className={styles.forSomeoneHeading}>
          <h4>For Her</h4>
          <Link href="/category">View All</Link>
        </div>
        <div className={styles.forSomeoneWrapper}>
          <div className={styles.forSomeoneWrapperLeft}>
            <Link href="/category" className={styles.leftwrapper1}>
              <Image src="/forher1.webp" height={100} width={100} alt="for her image" priority={false} unoptimized />
              <div className={styles.gradientOverlay}></div>
              <p>Gifts</p>
            </Link>
            <Link href="/category">
              <Image src="/forher2.webp" height={200} width={250} alt='for her image' priority={false} unoptimized />
              <div className={styles.gradientOverlay}></div>
              <p>For Her</p>
            </Link>
          </div>
          <div className={styles.forSomeoneWrapperRight}>
            <Link href="/category">
              <Image src="/forher3.jpg" height={100} width={100} alt="for her image" priority={false} unoptimized />
              <div className={styles.gradientOverlay}></div>
              <p>Flowers </p>
            </Link>
            <Link href="/category">
              <Image src="/forher4.webp" height={100} width={100} alt="for her image" priority={false} unoptimized />
              <div className={styles.gradientOverlay}></div>
              <p>Personalized </p>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Forsomeone2;
