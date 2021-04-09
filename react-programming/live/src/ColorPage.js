import React, { useState } from 'react';
import Counter from './Counter';

let color ='red';
export default function ColorPage() {
    const [color, setColor] = useState('red');
    function onClick() {
        setColor('blue');
    }
    return (
        <div>
            <Counter />
            <button style = {{backgroundColor: color}} onClick={onClick}>
                좋아요
            </button>
        </div>
    );
}