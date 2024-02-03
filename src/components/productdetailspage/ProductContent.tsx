"use client";
import { useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from '@/components/productdetailspage/ProductDetails.module.css';
import SimilarPackages from './SimilarPackages';
import Reviews from './Reviews';

const ProductContent: React.FC = () => {
  const offersContent = useRef<HTMLParagraphElement>(null);
  const packageContent = useRef<HTMLParagraphElement>(null);
  const reviewsContent = useRef<HTMLDivElement>(null);
  const [includes, setIncludes] = useState(true);
  const [faq, setFaq] = useState(false);
  const [terms, setTerms] = useState(false);

  function offsetHandler() {
    window.scrollTo({
      top: offersContent.current?.offsetTop || 0,
      behavior: "smooth",
    });
  }

  function PackageHandler() {
    window.scrollTo({
      top: packageContent.current?.offsetTop || 0,
      behavior: "smooth",
    });
  }

  function reviewsHandler() {
    window.scrollTo({
      top: reviewsContent.current?.offsetTop || 0,
      behavior: "smooth",
    });
  }

  function includesHandler() {
    setIncludes(!includes);
  }

  function faqHandler() {
    setFaq(!faq);
  }

  function termsHandler() {
    setTerms(!terms);
  }

  return (
    <>
      <div className={styles.productContainer}>
        <div className={styles.productContent}>
          <div className={styles.productContentImgs}>
            <div className={styles.imgWrapper}>
              <div className={styles.sideImages}>
                <div className={styles.sideImgHldr}>
                  <Image src="/detailsImg1.webp" width={50} height={50} unoptimized priority alt='similar images' />
                </div>
                <div className={styles.sideImgHldr}>
                  <Image src="/detailsImg2.webp" width={50} height={50} unoptimized priority alt='similar images' />
                </div>
                <div className={styles.sideImgHldr}>
                  <Image src="/detailsImg3.webp" width={50} height={50} unoptimized priority alt='similar images' />
                </div>
                <div className={styles.sideImgHldr}>
                  <Image src="/detailsImg4.webp" width={50} height={50} unoptimized priority alt='similar images' />
                </div>
              </div>
              <div className={styles.mainImages}>
                <div className={styles.mainImageHldr}>
                  <Image src="/detailsImgMain1.webp" width={50} height={50} unoptimized priority alt='main images' />
                </div>
                <div className={styles.mainImageHldr}>
                  <Image src="/detailsImgMain2.webp" width={50} height={50} unoptimized priority alt='main images' />
                </div>
                <div className={styles.mainImageHldr}>
                  <Image src="/detailsImgMain3.webp" width={50} height={50} unoptimized priority alt='main images' />
                </div>
                <div className={styles.mainImageHldr}>
                  <Image src="/detailsImgMain4.webp" width={50} height={50} unoptimized priority alt='main images' />
                </div>
              </div>
            </div>
            <div className={styles.assurance}>
              <div>
                <Image src="/happy.webp" width={50} height={50} alt='smile image' unoptimized />
                <p>Over 5 million+ smiles Deivered</p>
              </div>
              <div>
                <Image src="/badge.webp" width={50} height={50} alt='smile image' unoptimized />
                <p>Delivery over 200+ cities </p>
              </div>
              <div>
                <Image src="/trust.webp" width={50} height={50} alt='smile image' unoptimized />
                <p>Trusted by 5 million+ customers</p>
              </div>
            </div>
          </div>
          <div className={styles.productContentDetails}>
            <h1>Forever 12 Red Rose Bunch</h1>
            <div className={styles.starReviews}>
              <span className={styles.ratings}>
                <Image src="/icons/golden-star.svg" alt='star image' height={10} width={10} unoptimized />
                4.8
              </span>{" "}
              <span className={styles.reviews} onClick={reviewsHandler}>
                458 Reviews
              </span>
              <p onClick={PackageHandler}>
                Check Package Details <Image src="/icons/chevron-down.svg" alt='chevron down image' height={30} width={30} unoptimized />
              </p>
            </div>
            <h2>
              ₹ 695{" "}
              <p onClick={offsetHandler}>
                Offers Availabel <Image src="/icons/offers-icon.svg" alt='offers icon' height={20} width={20} unoptimized />
              </p>
            </h2>
            <span className={styles.including}>Including All Charges</span>

            <span className={styles.moreProducts}>Make this gift extra special</span>
            <div className={styles.moreProductContainer}>
              <span>
                <div className={styles.moreImgHldr}>
                  <Image src="/detailsImg1.webp" alt='more products Image' height={100} width={100} unoptimized priority />
                </div>
                <p>Basic</p>
                <span>₹ 695</span>
              </span>
              <span>
                <div className={styles.moreImgHldr}>
                  <Image src="/detailsOthers.webp" alt='more products Image' height={100} width={100} unoptimized priority />
                </div>
                <p>With Butters</p>
                <span>₹ 1145</span>
              </span>
            </div>
            <div className={styles.assurance2}>
              <div>
                <Image src="/happy.webp" width={50} height={50} alt='smile image' unoptimized />
                <p>Over 5 million+ smiles Deivered</p>
              </div>
              <div>
                <Image src="/badge.webp" width={50} height={50} alt='smile image' unoptimized />
                <p>Delivery over 200+ cities </p>
              </div>
              <div>
                <Image src="/trust.webp" width={50} height={50} alt='smile image' unoptimized />
                <p>Trusted by 5 million+ customers</p>
              </div>
            </div>
            <div className={styles.locationTiming}>
              <div>
                <Image src="/icons/map-pin.svg" height={25} width={25} alt='location icon' unoptimized /> <span className={styles.cityName}>Select City</span>
              </div>
              <div>
                <Image src="/icons/calendar.svg" height={25} width={25} alt='calender icon' unoptimized /><span className={styles.cityName}>Delivery Date & Time</span>
              </div>
            </div>
            <div className={styles.buyNowBox}>
              <div>
              <p>₹ 695</p>
              <span>Inclusive of all</span>
              </div>
 
              <button>Book Now</button>
            </div>
            <p ref={offersContent}>Offers <Image src="/icons/offers-icon.svg" alt='offers icon' height={20} width={20} unoptimized /></p>
            <article>Upto Rs. 600 (Min Rs. 30) Cashback | Order Above Rs. 900*</article>
            <div className={styles.includesBox}>
              <div className={styles.questions} ref={packageContent} onClick={includesHandler}>
                <span>
                  Package Includes <Image src="/icons/info-circle.svg" alt='info circle icon' width={20} height={20} unoptimized />
                </span>
                <Image src={includes ? "/icons/minus.svg" : "/icons/plus.svg"} alt='minus icon' width={20} height={20} />
              </div>
              {includes && (
                <div className={styles.answers}>
                  <ul>
                    <li>Happy Birthday Foil</li>
                    <li>2 Heart Foil</li>
                    <li>Frill Ribbons</li>
                    <li>50 Balloons On Ceiling</li>
                    <li>50 Balloons On Floor And Wall</li>
                    <li>Travelling Expenses</li>
                  </ul>
                </div>
              )}
              <div className={styles.questions} onClick={faqHandler}>
                <span>FAQ</span>
                <Image src={faq ? "/icons/minus.svg" : "/icons/plus.svg"} alt='plus icon' width={20} height={20} />
              </div>
              {faq && (
                <div className={styles.answers}>
                  <ul>
                    <li>We use metallic balloons. Helium balloons are not advisable for ballon decoration at home.</li>
                    <li>We use removable tapes for decorations.</li>
                    <li>The pictures we displayed here are of the original setup and the similar(depends on your location also) would be done at your place.</li>
                    <li>Some additional items might not be available for instant booking. Please do call us for confirmation.</li>
                    <li>The time you confirm is the completion Time of your decoration jobs.</li>
                    <li>Decoration person mobile number will be shared with you, if required.</li>
                    <li>Our service are available in Delhi, Noida, Gurgaon, Ghaziabad, Faridabad and Bangalore. We are expanding our reach to more metro cities.</li>
                    <li>You are requested to provide stool or ladder for decorations on ceiling.</li>
                    <li>The Decoration will be best in condition upto 24 hours.</li>
                  </ul>
                </div>
              )}
              <div className={styles.questions} onClick={termsHandler}>
                <span>Cancellation & Refund Policy</span>
                <Image src={terms ? "/icons/minus.svg" : "/icons/plus.svg"} alt='plus icon' width={20} height={20} />
              </div>
              {terms && (
                <div className={styles.answers}>
                  <ul>
                    <li>If cancellations are made 1 day or more days before the start date of the booking, you will not be charged and the booking payment will be refunded within 2 days.</li>
                    <li>If cancellations are made on same day of the start date of the booking, 100% of the advance payment will be charged as cancellation fees.</li>
                    <li>In case of unforeseen weather conditions or government restrictions, certain activities may be cancelled and in such case we will refund the advance money.</li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
        <Reviews reviewSelector={reviewsContent} />
        <SimilarPackages />
      </div>
    </>
  );
};

export default ProductContent;
