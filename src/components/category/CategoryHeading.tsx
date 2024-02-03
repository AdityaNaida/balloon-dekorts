import styles from '@/components/category/Category.module.css';
import Link from 'next/link';

const CategoryHeading: React.FC = () => {
  return (
    <>
      <div className={styles.categoryHeader}>
        <h1>Event Decoration</h1>
        <p className={styles.breadcrumbs}>
          <Link href="/">Home</Link> <span>Event Decoration</span>
        </p>
      </div>
    </>
  );
}

export default CategoryHeading;
