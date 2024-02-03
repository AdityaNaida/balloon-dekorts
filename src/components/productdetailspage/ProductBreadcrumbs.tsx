import styles from '@/components/productdetailspage/ProductDetails.module.css';
import Link from 'next/link';

const ProductBreadcrumbs: React.FC = () => {
  return (
    <div className={styles.breadcrumbs}>
      <p>
        <Link href="/">Home</Link>
        <Link href="/dynamic">Flowers</Link>
        <span>Forever 12 Red Rose Bunch</span>
      </p>
    </div>
  );
};

export default ProductBreadcrumbs;
