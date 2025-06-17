import { useState } from 'react';

const FuncOneNumTwoBtn = () => {
    const [num, setNum] = useState(0);

    return (
        <div>
            <button
                onClick={() => {
                    setNum(num - 1);
                }}
            >
                -
            </button>
            &nbsp;&nbsp;
            <h2 style={{ display: 'inline' }}>{num}</h2>&nbsp;&nbsp;
            <button
                onClick={() => {
                    setNum(num + 1);
                }}
            >
                +
            </button>
        </div>
    );
};
export default FuncOneNumTwoBtn;
