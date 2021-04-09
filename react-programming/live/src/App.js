import React from 'react';
import ReactDOM from 'react-dom';
import Counter from './Counter';

export default function App() {
    return (
    <>
        <p>안녕</p>
        <Counter />
        {ReactDOM.createPortal(
            <div>
                <p>안녕하세요</p>
            </div>,
            document.getElementById('something'),
        )}
    </>
    );
}