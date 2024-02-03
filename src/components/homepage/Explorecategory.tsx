import styles from '@/components/homepage/home.module.css';
import Explorelinks1 from './Explorelinks1';
import Explorelinks2 from './Explorelinks2';

const Explorecategory: React.FC = () => {
  return (
    <>
      <div className={styles.exploreCateory}>
        <h3>Explore More</h3>
        <div className={styles.categories_sub}>
          <div className={styles.category_slide_1}>
            <Explorelinks1 />
          </div>
          <div className={styles.category_slide_2}>
            <Explorelinks2 />
          </div>
        </div>
      </div>
    </>
  );
}

export default Explorecategory;
