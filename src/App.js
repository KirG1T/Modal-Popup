import { useState } from 'react';
import './App.css';
import Modal from './components/Modal';

function App() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <button onClick={() => setIsOpen(true)}>Open modal</button>
            <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
                <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum minus reiciendis laborum eos, nobis
                    ratione sequi! Minus veniam ipsa, vitae perferendis cumque architecto hic modi itaque, quod ducimus
                    quae laborum.
                </p>
            </Modal>
        </>
    );
}

export default App;
