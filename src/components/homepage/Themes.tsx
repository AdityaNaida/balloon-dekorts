import Link from 'next/link';
import Image from 'next/image';
import styles from '@/components/homepage/home.module.css';

const Themes: React.FC = () => {
  return (
    <>
      <div className={styles.homeCategory1}>
        <h2>Birthday Themes</h2>
        <p>Wide range of decorations for your celebration</p>
        <div className={styles.brithdayThemesWrapper}>
          <div className={styles.brithdayThemesWrap1}>
            <Link href="/dynamic">
              <Image src="/themes1.jpg" alt='Birthday Theme Image' priority={false} unoptimized height={100} width={100} />
              <div className={styles.gradientOverlay}></div>
              <p>Romantic Room Decoration</p>
            </Link>
            <Link href="/dynamic">
              <Image src="/themes2.jpg" alt='Birthday Theme Image' priority={false} unoptimized height={100} width={100} />
              <div className={styles.gradientOverlay}></div>
              <p>Premium Birthday Decoration</p>
            </Link>
            <Link href="/dynamic">
              <Image src="/themes3.jpg" alt='Birthday Theme Image' priority={false} unoptimized height={100} width={100} />
              <div className={styles.gradientOverlay}></div>
              <p>Proposal Decoration</p>
            </Link>
            <Link href="/dynamic">
              <Image src="/themes4.jpg" alt='Birthday Theme Image' priority={false} unoptimized height={100} width={100} />
              <div className={styles.gradientOverlay}></div>
              <p>Kids Decoration</p>
            </Link>
          </div>
          <div className={styles.brithdayThemesWrap2}>
            <Image src="/themes5.jpg" width={100} height={100} alt='Theme big image' unoptimized priority={false}></Image>
            <div className={styles.gradientOverlay}></div>
            <p>Birthday Party Decoration</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Themes;
