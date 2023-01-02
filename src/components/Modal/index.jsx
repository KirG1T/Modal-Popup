import { useEffect } from 'react';
import styles from './Modal.module.scss';

const Modal = ({ isOpen, setIsOpen, children }) => {
    useEffect(() => {
        const closeModal = (e) => {
            if (e.keyCode === 27) {
                setIsOpen(false);
            }
        };

        window.addEventListener('keydown', closeModal);
        return () => window.removeEventListener('keydown', closeModal);
    }, []);

    return (
        <div className={isOpen ? `${styles.modal} ${styles.open}` : styles.modal} onClick={() => setIsOpen(false)}>
            <div
                className={isOpen ? `${styles.modal__content} ${styles.open}` : styles.modal__content}
                onClick={(e) => e.stopPropagation()}
            >
                {children}
            </div>
        </div>
    );
};

export default Modal;
