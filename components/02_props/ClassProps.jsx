import { Component } from 'react';

class propsEx1 extends Component {
    render() {
        // console.log(this.props)
        // const { color } = this.props;
        // const { style } = this.props;

        // const { color, style } = this.props;
        // const dressCode = this.props.children;

        const { color, style, children } = this.props;
        return (
            <div>
                <div>오늘의 포인트 컬러는 {color} 입니다.</div>
                <div>내일의 코디는 {style}입니다.</div>
                <div>
                    언제일지 모를 회식 날 드레스 코드는 {/*dressCode*/}
                    {children}입니다.
                </div>
            </div>
        );
    }
}

propsEx1.defaultProps = { color: '초록', style: '청청' };
// propsEx1.defaultProps = { style: '청청' };
export default propsEx1;
