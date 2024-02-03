import styles from '@/components/homepage/home.module.css';
import Link from 'next/link';
import Image from 'next/image';

const Familymembers: React.FC = () => {
  return (
    <>
      <div className={styles.homeCategory1}>
        <h2>Family Member</h2>
        <p>Gift a beautiful memory</p>
        <div className={styles.familmemberWrapper}>
          <Link href="/category">
            <Image src="/husband.jpg" height={100} width={100} alt='husband image' unoptimized priority={false} />
            <p>Husband</p>
          </Link>
          <Link href="/category">
            <Image src="/wife.jpg" height={100} width={100} alt='wife image' unoptimized priority={false} />
            <p>Wife</p>
          </Link>
          <Link href="/category">
            <Image src="/kids.jpg" height={100} width={100} alt='kids image' unoptimized priority={false} />
            <p>Kids</p>
          </Link>
          <Link href="/category">
            <Image src="/parents.jpg" height={100} width={100} alt='parents image' unoptimized priority={false} />
            <p>Parents</p>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Familymembers;
