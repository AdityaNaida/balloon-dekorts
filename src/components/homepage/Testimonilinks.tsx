import Image from "next/image";
import styles from '@/components/homepage/home.module.css';

interface Testimonial {
  title: string;
  img: string;
  content: string;
}

const Testimonilinks: React.FC = () => {
  const testimonialsLinks: Testimonial[] = [
    {
      title: "Aman Gupta(12.12.2023)",
      img: "/test-1.jpg",
      content: "Thank you so much for everything....Fast Delivery and everything....",
    },
    {
      title: "Ashneer Grover (15.12.2023)",
      img: "/test-2.jpg",
      content: "The cake tasted good and looked good!....",
    },
    {
      title: "Ashneer Grover (15.12.2023)",
      img: "/test-3.webp",
      content: "Amazing timing.....received the package on time inspite of ordering it late... you made my daughter's day. Thanks for on time delivery.",
    },
    {
      title: "Aman Gupta(12.12.2023)",
      img: "/test-4.jpg",
      content: "Thank you so much for everything....Fast Delivery and everything....",
    },
    {
      title: "Ashneer Grover (15.12.2023)",
      img: "/test-5.jpg",
      content: "The cake tasted good and looked good!....",
    },
    {
      title: "Ashneer Grover (15.12.2023)",
      img: "/test-6.webp",
      content: "Amazing timing.....received the package on time inspite of ordering it late... you made my daughter's day. Thanks for on time delivery.",
    }
  ];

  return (
    <>
      {testimonialsLinks.map(elem => (
        <div className={styles.testimonial_slides} key={elem.title}>
          <Image src={elem.img} alt={elem.title + " reviews"} height={100} width={100} />
          <p><span>{elem.content}</span></p>
          <small>{elem.title}</small>
        </div>
      ))}
    </>
  );
}

export default Testimonilinks;
