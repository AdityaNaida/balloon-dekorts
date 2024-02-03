import styles from '@/components/navbar/Navbar.module.css';
import Image from 'next/image';

interface ModalBoxProps {
    offModal: () => void;
}

const ModalBox: React.FC<ModalBoxProps> = ({ offModal }) => {
    return (
        <>
            <div className={styles.ModalBox}>
                <Image src="/close.svg" height={30} width={30} alt='close delivery location' className={styles.closeLocation} onClick={offModal} />
                <div className={styles.location_heading}>
                    <h3>Enter Your City Name to Get Best Decoration</h3>
                    <Image src='/route.webp' width={50} height={55} alt='route image' />
                </div>
                <form action="" method="post">
                    <input type="text" placeholder='Enter City' />
                    <p>Delivered over 200+ cities</p>
                </form>
            </div>
        </>
    );
};

export default ModalBox;
