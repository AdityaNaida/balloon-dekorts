import styles from '@/components/footer/Footer.module.css';
import Link from 'next/link';
import Image from 'next/image';
import Downfooter from './Downfooter';

interface QuickLink {
  title: string;
  path: string;
}

const Footer: React.FC = () => {
  const quicklinks: QuickLink[] = [
    {
        title: "Birthday Cake |",
        path: "/dynamic"
    },
    {
        title: "  1st Birthday Cake |",
        path: "/dynamic"
    },
    {
        title: " Anniversary Cake |",
        path: "/dynamic"
    },
    {
        title: " Anniversary Cake for Parents |",
        path: "/dynamic"
    },
    {
        title: " Baby Shower Cake |",
        path: "/dynamic"
    },
    {
        title: " Engagement Cake |",
        path: "/dynamic"
    },
    {
        title: " Wedding Cake |",
        path: "/dynamic"
    },
    {
        title: " Annaprashan Cake |",
        path: "/dynamic"
    },
    {
        title: " 25th Anniversary Cake |",
        path: "/dynamic"
    },
    {
        title: " New Baby Welcome Cake |",
        path: "/dynamic"
    },
    {
        title: " Cake for Mom |",
        path: "/dynamic"
    },
    {
        title: " Cake for Dad |",
        path: "/dynamic"
    },
    {
        title: " Red Velvet Cake |",
        path: "/dynamic"
    },
    {
        title: " Chocolate Cake |",
        path: "/dynamic"
    },
    {
        title: " Butterscotch Cake |",
        path: "/dynamic"
    },
    {
        title: " Rasmalai Cake ",
        path: "/dynamic"
    },
    {
        title: " Fruit Cake |",
        path: "/dynamic"
    },
    {
        title: " Vanilla Cake|",
        path: "/dynamic"
    },
    {
        title: " Multi Tier Cake |",
        path: "/dynamic"
    },
    {
        title: " Black Forest Cake |",
        path: "/dynamic"
    },
    {
        title: " Sugar-Free Cake |",
        path: "/dynamic"
    },
    {
        title: " Eggless Cake ",
        path: "/dynamic"
    },
    {
        title: " Bento Cake |",
        path: "/dynamic"
    },
    {
        title: " Spiderman Cake |",
        path: "/dynamic"
    },
    {
        title: " Chartered Accountant Cakes ",
        path: "/dynamic"
    },
    {
        title: "  Half Cakes |",
        path: "/dynamic"
    },
    {
        title: " Jungle Theme Cakes |",
        path: "/dynamic"
    },
    {
        title: " Unicorn Theme Cake |",
        path: "/dynamic"
    },
    {
        title: " Minion Theme Cake |",
        path: "/dynamic"
    },
    {
        title: " Peppa Pig Theme Cake |",
        path: "/dynamic"
    },
    {
        title: " Princess Theme Cake |",
        path: "/dynamic"
    },
    {
        title: " Barbie Theme Cake ",
        path: "/dynamic"
    },
    {
        title: " Car Theme Cake |",
        path: "/dynamic"
    },
    {
        title: " Cocomelon Theme Cake",
        path: "/dynamic"
    }
  ];

  return (
    <>
      <div className={styles.footerwrapper}>
        <footer className={styles.footer}>
          <div className={styles.footerContent}>
            <div>
              <p>Quick Links</p>
              <Link href="/about">About</Link>
              <Link href="/">Contact Us</Link>
              <Link href="/">Gifts</Link>
              <Link href="/">Decoration</Link>
              <Link href="/">Plants</Link>
              <Link href="/">Cakes</Link>
            </div>
            <div>
              <p>Policy Info</p>
              <Link href="/">Terms & Conditions</Link>
              <Link href="/">Privacy Policy</Link>
              <Link href="/">Terms of Use</Link>
              <Link href="/">Disclaimer</Link>
            </div>
            <div>
              <p>Franchise</p>
              <Link href="/">Seller</Link>
              <Link href="/">Vendor</Link>
              <Link href="/">Franchise</Link>
              <Link href="/">FAQ</Link>
            </div>
            <div>
              <p>Socials</p>
              <span>Follow Us</span>
              <div>
                <Link href="/">
                  <Image src="/facebook_logo.webp" unoptimized height={25} width={25} alt="facebook logo image" />
                </Link>
                <Link href="/"><Image src="/twitter_logo.webp" unoptimized height={25} width={25} alt="twitter logo image"/></Link>
                    <Link href="/"><Image src="/instagram_logo.webp" unoptimized height={30} width={30} alt="instagram logo image"/></Link>
                    <Link href="/"><Image src="/youtube_logo.webp" unoptimized height={30} width={30} alt="youtube logo image"/></Link>
                    <Link href="/"><Image src="/linkdin_logo.webp" unoptimized height={30} width={30} alt="linkdin logo image"/></Link>
                    <Link href="/"><Image src="/pinterest_logo.webp" unoptimized height={30} width={30} alt="pinterest logo image"/></Link>
              </div>
              <span>Payment Methods</span>
              <div>
                <Image src="/visacard.webp" alt="visa card image" height={30} width={30} unoptimized />
                <Image src="/mastercard.webp" alt='master card image' height={30} width={30} unoptimized/>
                    <Image src="/americanexpress.webp" alt='American Express image' height={30} width={30} unoptimized/>
                    <Image src="/upi_logo.webp" alt='upi image' height={30} width={30} unoptimized/>
              </div>
            </div>
          </div>
          <div className={styles.QuicklinksContainer}>
            <h6>Popular Categories</h6>
            <div>
              {quicklinks.map((elem) => (
                <Link href={elem.path} key={elem.title}>
                  {elem.title}
                </Link>
              ))}
            </div>
          </div>
          <div className={styles.QuicklinksContainer}>
            <h6>Decorations</h6>
            <div>
              {quicklinks.map((elem) => (
                <Link href={elem.path} key={elem.title}>
                  {elem.title}
                </Link>
              ))}
            </div>
          </div>
          <div className={styles.QuicklinksContainer}>
            <h6>Cake Categories</h6>
            <div>
              {quicklinks.map((elem) => (
                <Link href={elem.path} key={elem.title}>
                  {elem.title}
                </Link>
              ))}
            </div>
          </div>
        </footer>
        <Downfooter />
      </div>
    </>
  );
};

export default Footer;
