"use client";
import styles from '@/components/cartpage/Cart.module.css';

interface InstructionModalProps {
  children: React.ReactNode;
  closeModal: () => void;
}

const InstructionModal: React.FC<InstructionModalProps> = ({ children, closeModal }) => {
  return (
    <>
      <div className={styles.backdrop} onClick={closeModal} />
      {children}
    </>
  );
};

export default InstructionModal;
