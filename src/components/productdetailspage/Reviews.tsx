"use client";
import { useRef, useState } from 'react';
import styles from '@/components/productdetailspage/ProductDetails.module.css';
import Image from 'next/image';

interface ReviewsProps {
  reviewSelector: React.RefObject<HTMLDivElement>;
}

const Reviews: React.FC<ReviewsProps> = ({ reviewSelector }) => {
  const reviewSlider = useRef<HTMLDivElement>(null);
  const [scrollLeft, setScrollLeft] = useState(0);

  function rightClick() {
    if (reviewSlider.current) {
      const newScrollLeft = scrollLeft + 600;
      reviewSlider.current.scrollLeft = newScrollLeft;
      setScrollLeft(newScrollLeft);
    }
  }

  function leftClick() {
    if (reviewSlider.current) {
      const newScrollLeft = scrollLeft - 600;
      reviewSlider.current.scrollLeft = newScrollLeft;
      setScrollLeft(newScrollLeft);
    }
  }

  return (
    <div className={styles.reviewsSection} ref={reviewSelector}>
      <p>Product Reviews</p>
      <span>Customer Images</span>
      <div className={styles.customerImagesBox}>
        <Image src="/review1.webp" alt='review images' width={50} height={50} unoptimized />
        <Image src="/review2.webp" alt='review images' width={50} height={50} unoptimized />
        <Image src="/review3.webp" alt='review images' width={50} height={50} unoptimized />
        <Image src="/review4.webp" alt='review images' width={50} height={50} unoptimized />
        <Image src="/review5.webp" alt='review images' width={50} height={50} unoptimized />
      </div>
      <div className={styles.reviewSliderWrapper}>
        <Image src="/icons/chevron-left.svg" alt='chevron-left icon' height={30} width={30} unoptimized onClick={leftClick} />
        <div className={styles.reviewSlider} ref={reviewSlider}>
        <div className={styles.review}>
                <Image src="/avatar.webp" height={30} width={30} alt='user icon' unoptimized/>
                <div className={styles.reviewText}>
                <p className={styles.reviewuser}>Jaspreet Singh <Image src="/icons/verified.svg" width={20} height={20} alt='verified icon' /></p>
                <div className={styles.reviewstars}>
                    <Image src="/icons/reviewStar.svg" height={15} width={15} alt='star image' unoptimized />
                    <Image src="/icons/reviewStar.svg" height={15} width={15} alt='star image' unoptimized />
                    <Image src="/icons/reviewStar.svg" height={15} width={15} alt='star image' unoptimized />
                    <Image src="/icons/reviewStar.svg" height={15} width={15} alt='star image' unoptimized />
                    <Image src="/icons/reviewStar.svg" height={15} width={15} alt='star image' unoptimized />
                </div>
                <p className={styles.reviewDate}>25/12/2023</p>
                <p className={styles.reviewMessage}>Amazing Decoration really loved the decoration</p>
                </div>
              </div>
              <div className={styles.review}>
                <Image src="/avatar.webp" height={30} width={30} alt='user icon' unoptimized/>
                <div className={styles.reviewText}>
                <p className={styles.reviewuser}>Ashnoor Gill <Image src="/icons/verified.svg" width={20} height={20} alt='verified icon' /></p>
                <div className={styles.reviewstars}>
                    <Image src="/icons/reviewStar.svg" height={15} width={15} alt='star image' unoptimized />
                    <Image src="/icons/reviewStar.svg" height={15} width={15} alt='star image' unoptimized />
                    <Image src="/icons/reviewStar.svg" height={15} width={15} alt='star image' unoptimized />
                    <Image src="/icons/reviewStar.svg" height={15} width={15} alt='star image' unoptimized />
                    <Image src="/icons/reviewStarHalf.svg" height={15} width={15} alt='star image' unoptimized />
                </div>
                <p className={styles.reviewDate}>20/12/2023</p>
                <p className={styles.reviewMessage}>Best Decoration Company</p>
                </div>
              </div>
              <div className={styles.review}>
                <Image src="/avatar.webp" height={30} width={30} alt='user icon' unoptimized/>
                <div className={styles.reviewText}>
                <p className={styles.reviewuser}>Harry Tiwari <Image src="/icons/verified.svg" width={20} height={20} alt='verified icon' /></p>
                <div className={styles.reviewstars}>
                    <Image src="/icons/reviewStar.svg" height={15} width={15} alt='star image' unoptimized />
                    <Image src="/icons/reviewStar.svg" height={15} width={15} alt='star image' unoptimized />
                    <Image src="/icons/reviewStar.svg" height={15} width={15} alt='star image' unoptimized />
                    <Image src="/icons/reviewStar.svg" height={15} width={15} alt='star image' unoptimized />
                    <Image src="/icons/reviewStar.svg" height={15} width={15} alt='star image' unoptimized />
                </div>
                <p className={styles.reviewDate}>25/12/2023</p>
                <p className={styles.reviewMessage}>Amazing Decoration really loved the decoration</p>
                </div>
              </div>
              <div className={styles.review}>
                <Image src="/avatar.webp" height={30} width={30} alt='user icon' unoptimized/>
                <div className={styles.reviewText}>
                <p className={styles.reviewuser}>Jaspreet Singh <Image src="/icons/verified.svg" width={20} height={20} alt='verified icon' /></p>
                <div className={styles.reviewstars}>
                    <Image src="/icons/reviewStar.svg" height={15} width={15} alt='star image' unoptimized />
                    <Image src="/icons/reviewStar.svg" height={15} width={15} alt='star image' unoptimized />
                    <Image src="/icons/reviewStar.svg" height={15} width={15} alt='star image' unoptimized />
                    <Image src="/icons/reviewStar.svg" height={15} width={15} alt='star image' unoptimized />
                    <Image src="/icons/reviewStar.svg" height={15} width={15} alt='star image' unoptimized />
                </div>
                <p className={styles.reviewDate}>25/12/2023</p>
                <p className={styles.reviewMessage}>Amazing Decoration really loved the decoration</p>
                </div>
              </div>
              <div className={styles.review}>
                <Image src="/avatar.webp" height={30} width={30} alt='user icon' unoptimized/>
                <div className={styles.reviewText}>
                <p className={styles.reviewuser}>Jaspreet Singh <Image src="/icons/verified.svg" width={20} height={20} alt='verified icon' /></p>
                <div className={styles.reviewstars}>
                    <Image src="/icons/reviewStar.svg" height={15} width={15} alt='star image' unoptimized />
                    <Image src="/icons/reviewStar.svg" height={15} width={15} alt='star image' unoptimized />
                    <Image src="/icons/reviewStar.svg" height={15} width={15} alt='star image' unoptimized />
                    <Image src="/icons/reviewStar.svg" height={15} width={15} alt='star image' unoptimized />
                    <Image src="/icons/reviewStar.svg" height={15} width={15} alt='star image' unoptimized />
                </div>
                <p className={styles.reviewDate}>25/12/2023</p>
                <p className={styles.reviewMessage}>Amazing Decoration really loved the decoration</p>
                </div>
              </div>
              <div className={styles.review}>
                <Image src="/avatar.webp" height={30} width={30} alt='user icon' unoptimized/>
                <div className={styles.reviewText}>
                <p className={styles.reviewuser}>Jaspreet Singh <Image src="/icons/verified.svg" width={20} height={20} alt='verified icon' /></p>
                <div className={styles.reviewstars}>
                    <Image src="/icons/reviewStar.svg" height={15} width={15} alt='star image' unoptimized />
                    <Image src="/icons/reviewStar.svg" height={15} width={15} alt='star image' unoptimized />
                    <Image src="/icons/reviewStar.svg" height={15} width={15} alt='star image' unoptimized />
                    <Image src="/icons/reviewStar.svg" height={15} width={15} alt='star image' unoptimized />
                    <Image src="/icons/reviewStar.svg" height={15} width={15} alt='star image' unoptimized />
                </div>
                <p className={styles.reviewDate}>25/12/2023</p>
                <p className={styles.reviewMessage}>Amazing Decoration really loved the decoration</p>
                </div>
              </div>
        </div>
        <Image src="/icons/chevron-right.svg" alt='chevron-right icon' height={30} width={30} unoptimized onClick={rightClick} />
      </div>
    </div>
  );
};

export default Reviews;
