import { Component } from 'react';

class ClassOneNumTwoBtn extends Component {
    constructor(props) {
        super(props);
        this.state = { num: 0 };
    }
    render() {
        const { num } = this.state;
        return (
            <div>
                <button onClick={() => { // 내부
                    this.setState({ num: num - 1 }); 
                }}>-</button>&nbsp;&nbsp;
                <h2 style={{ display: 'inline' }}>{num}</h2>&nbsp;&nbsp;
                <button onClick={this.sumOne}>+</button>
            </div>
        );
    }
    sumOne = () => { // 외부
        this.setState({ num: this.state.num + 1 });
    };
}
export default ClassOneNumTwoBtn;
