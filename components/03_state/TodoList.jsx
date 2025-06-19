import { useState } from 'react';

const TodoList = () => {
    const [todo, setTodo] = useState([
        { no: 1, content: 'React 시험준비', checked: false },
        { no: 2, content: '조 발표하기', checked: false },
        { no: 3, content: '점심 샐러드 먹기', checked: true }
    ]); // 객체 배열

    const [no, setNo] = useState(4);
    const insertTodo = () => {
        setTodo([...todo, { no: no, content: inputText, checked: false }]);
        setNo(no + 1);
        setInputText('');
    };

    const [inputText, setInputText] = useState();
    const inputContent = (e) => {
        setInputText(e.target.value);
    };

    // const changeCheck = (no) => {
    //     setTodo(todo.map((element) => {
    //         return element.no === no ? {...element, checked:!element.checked} : element
    //     }));
    // }

    const changeCheckIndex = no => {
        setTodo(todo.map((element, index) => {
            return index === no ? {...element, checked:!element.checked} : element
        }))
    }

    const deleteTodo = index => {
        //Array.filter() : 배열의 각 요소를 돌면서 함수 실행, 조건에 맞는 요소만을 갖는 배열 반환환
        setTodo(todo.filter((item, i) => {
            return index !== i;
        }));
    }

    return (
        <div className="todo">
            <table>
                <thead>
                    <tr>
                        <th>번호</th>
                        <th>할 일 내용</th>
                        <th>완료 여부</th>
                    </tr>
                </thead>
                <tbody>
                    {/* map : 배열을 검사하는 메소드, forin문과 비슷 */}
                    {todo.map((element, index) => {
                            return(
                                <tr style={element.checked ? {textDecoration:'line-through'}:{}}>  {/* 취소줄 */}
                                    <td>{element.no}</td>
                                    <td>{element.content}</td>
                                    <td onClick={() => {changeCheckIndex(index)}}>{element.checked ? '완료' : '미완료'}</td>
                                    {/* <td onClick={() => {changeCheck(element.no)}}>{element.checked ? '완료' : '미완료'}</td> */}
                                    <td><button onClick={()=> {deleteTodo(index)}}>삭제</button></td>
                                </tr>
                            )
                    })}
                </tbody>
            </table>
            <br />
            <input type="text" onChange={inputContent} value={inputText}/>&nbsp;
            <button onClick={insertTodo}>할 일 등록</button>
        </div>
    );
};

export default TodoList;
