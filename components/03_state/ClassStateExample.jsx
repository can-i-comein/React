import { Component } from 'react';

class ClassStateExample extends Component {
    constructor(props) {
        super(props);
        this.state = { number1: 0, number2: 0 }; // 선언 및 초기화
    }

    render() {
        const { msg } = this.props;
        const { number1, number2 } = this.state;

        return (
            <div>
                <h1>{number1}</h1>
                <button onClick={this.number1SumOne}>{msg}</button>

                <h1>{number2}</h1>
                <button onClick={() => {
                    this.setState({ number2: number2 - 1 });
                }}>{msg}</button>
            </div>
        );
    }

    number1SumOne = () => {
        this.setState({ number1: this.state.number1 + 1 });
    };
}

export default ClassStateExample;
