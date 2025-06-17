const FuncStateExample = () => {
    const [number1, setNumber1] = useState(0);
    const [number2, setNumber2] = useState(0);

    const number1SumOne = () => {
        setNumber1(number1 + 1);
    };

    return (
        <div>
            <h1>{number1}</h1>
            <button onClick={number1SumOne}>click!</button>

            <h1>{number2}</h1>
            <button
                onClick={() => {
                    setNumber2(number2 - 1);
                }}
            >
                click!
            </button>
        </div>
    );
};

export default FuncStateExample;
