import styles from '@/components/homepage/home.module.css';
import Link from 'next/link';
import Image from 'next/image';

interface AgeLink {
  title: string;
  img: string;
  path: string;
}

const AgesLinks: React.FC = () => {
  const agelinks: AgeLink[] = [
    {
      title: "0 - 5 Years",
      img: "age1.jpg",
      path: "/dynamic"
    },
    {
      title: "6 - 17 Years",
      img: "age2.jpg",
      path: "/dynamic"
    },
    {
      title: "18 - 25 Years",
      img: "age3.jpg",
      path: "/dynamic"
    },
    {
      title: "25 - 35 Years",
      img: "age4.jpg",
      path: "/dynamic"
    },
    {
      title: "36 - 55 Years",
      img: "age5.jpg",
      path: "/dynamic"
    },
    {
      title: "56 - 70 Years",
      img: "age6.jpg",
      path: "/dynamic"
    }
  ];

  return (
    <>
      {agelinks.map(elem => (
        <Link href={elem.path} className={styles.ageSlides} key={elem.title}>
          <Image src={elem.img} alt='age wise images' height={100} width={100} unoptimized priority={false} />
          <p>{elem.title}</p>
        </Link>
      ))}
    </>
  );
}

export default AgesLinks;
