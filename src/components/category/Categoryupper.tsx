import styles from '@/components/category/Category.module.css';
import Link from 'next/link';
import Image from 'next/image';

const CategoryUpper: React.FC = () => {
  return (
    <>
      <div className={styles.categoryBanner}>
        <Link href="/">
          <Image
            src="/categoryBanner.webp"
            alt='category banner'
            width={50}
            height={50}
            unoptimized
            className={styles.catBannerDsk}
            priority
          />
        </Link>
        <Link href="/">
          <Image
            src="/categoryBanner_mobile.webp"
            alt='category banner'
            width={50}
            height={50}
            unoptimized
            className={styles.catBannerMobile}
            priority
          />
        </Link>
      </div>
    </>
  );
}

export default CategoryUpper;
