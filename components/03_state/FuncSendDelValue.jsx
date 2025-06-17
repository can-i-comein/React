import { useState } from 'react';

const FuncSendDelValue = () => {
    // 값 전달 버튼을 누르면 입력한 데이터가 결과로 출력
    // 값 삭제 버튼을 누르면 출력되어 있던 데이터를 삭제
    const [value, setValue] = useState();
    const [text, setText] = useState('값 입력 후 버튼을 눌러주세요');

    return (
        <div>
            <h1>(결과 나오는 부분)</h1>
            <input
                onChange={(e) => {
                    setValue(e.target.value);
                }}
            />
            <br />
            <br />
            <button
                onClick={() => {
                    setText(value);
                }}
            >
                값 전달
            </button>
            &nbsp;
            <button
                onClick={() => {
                    setText('');
                }}
            >
                값 삭제
            </button>
        </div>
    );
};

export default FuncSendDelValue;
