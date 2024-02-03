"use client";
import Image from 'next/image';
import Link from 'next/link';
import styles from '@/components/productdetailspage/ProductDetails.module.css';

interface DynamicLink {
  img: string;
  productName: string;
  stars: string;
  price: string;
  reviewsNumber: number;
  deliveryTime: string;
  path: string;
  id: number;
}

const SimilarPackages: React.FC = () => {
  const dynamicLinks: DynamicLink[] = [
    {
      img: "/dynamic-3.webp",
      productName: "Marry me outdoor decoration",
      stars: "5.0",
      price: "₹ 20000",
      reviewsNumber: 11,
      deliveryTime: "Today",
      path: "/",
      id: 103
    },
    {
      img: "/dynamic-4.webp",
      productName: "Romantic Birthday Room Decoration",
      stars: "4.7",
      price: "₹ 2500",
      reviewsNumber: 95,
      deliveryTime: "Today",
      path: "/",
      id: 104
    },
    {
      img: "/dynamic-5.webp",
      productName: "60th Birthday Decor",
      stars: "4.8",
      price: "₹ 12000",
      reviewsNumber: 4,
      deliveryTime: "Today",
      path: "/",
      id: 105
    },
    {
      img: "/dynamic-6.webp",
      productName: "Marry Me Ring Decoration",
      stars: "4.7",
      price: "₹ 8000",
      reviewsNumber: 51,
      deliveryTime: "Today",
      path: "/",
      id: 106
    },
    {
      img: "/dynamic-7.webp",
      productName: "I Love You Room Decoration",
      stars: "4.8",
      price: "₹ 3500",
      reviewsNumber: 76,
      deliveryTime: "Today",
      path: "/",
      id: 107
    },
    {
      img: "/dynamic-8.webp",
      productName: "Baby Shower Green Backdrop",
      stars: "5.0",
      price: "₹ 9000",
      reviewsNumber: 1,
      deliveryTime: "Today",
      path: "/",
      id: 108
    },
    {
      img: "/dynamic-9.webp",
      productName: "Golden Premium Birthday Decoration",
      stars: "4.9",
      price: "₹ 16500",
      reviewsNumber: 97,
      deliveryTime: "Today",
      path: "/",
      id: 109
    },
    {
      img: "/dynamic-10.webp",
      productName: "Baby Shower Banquet Decor",
      stars: "5.0",
      price: "₹ 3600",
      reviewsNumber: 14,
      deliveryTime: "Today",
      path: "/",
      id: 110
    }
  ];

  return (
    <div className={styles.similarContainer}>
      <p>Similar Packages</p>
      <div className={styles.similarPackages}>
        {dynamicLinks.map((elem) => (
          <Link href={elem.path} key={elem.id}>
            <div className={styles.product_image_hldr}>
              <Image src={elem.img} alt={elem.productName + "Image"} height={100} width={100} priority={false} unoptimized loading="eager" />
            </div>
            <div className={styles.product_details}>
              <h4>{elem.productName}</h4>
              <p><span className={styles.current_price}>{elem.price}</span></p>
              <small>
                <span className={styles.stars}>
                  <Image src="/review-star.webp" height={10} width={10} alt="review star image" />
                  {elem.stars}
                </span>
                {elem.reviewsNumber} Reviews
              </small>
              <h5>Earliest Delivery : {elem.deliveryTime}</h5>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SimilarPackages;
