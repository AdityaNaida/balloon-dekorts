import styles from '@/components/navbar/Navbar.module.css';

interface ModalProps {
    children: React.ReactNode;
    offModel: () => void;
}

const Modal: React.FC<ModalProps> = ({ children, offModel }) => {
    return (
        <>
            <div className={styles.Modal} onClick={offModel} />
            <dialog open className={styles.dialougeModal}>
                {children}
            </dialog>
        </>
    );
};

export default Modal;
