"use client";
import styles from '@/components/dynamic/dynamic.module.css';
import DynamicProducts from './DynamicProducts';
import Image from 'next/image';
import Link from 'next/link';

const Dynamiclower: React.FC = () => {
    return (
        <div className={styles.dynamic_lower}>
            <div className={styles.dynamic__products}>
                <div className={styles.dynamic__filters}>
                    <span className={styles.filter__text}>
                        <Image src="/filter-icon.svg" height={20} width={20} alt="filter icon"/>
                        Quick Filter
                    </span>
                    <Link href="/category">Birthday Home Decor</Link>
                    <Link href="/category">Anniversary Decor</Link>
                    <Link href="/category">Baby Shower</Link>
                    <Link href="/category">Welcome Baby</Link>
                    <Link href="/category">Car Decor</Link>
                    <Link href="/category">Bride To Be</Link>
                </div>
                <div className={styles.dynamic__product__container}>
                    <DynamicProducts />
                </div>
            </div>
        </div>
    );
}

export default Dynamiclower;
