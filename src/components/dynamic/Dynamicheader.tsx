import Link from 'next/link';
import styles from '@/components/dynamic/dynamic.module.css';

const Dynamicheader: React.FC = () => {
    return (
        <>
        <div className={styles.dynamic_upper}>
            <h1>Balloon Decoration at Home</h1>
            <p className={styles.breadcrumb}><Link href="/">Home</Link> Balloon Decorations</p>
        </div>
        </>
    );
}

export default Dynamicheader;
