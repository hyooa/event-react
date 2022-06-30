// 💚 rcc
// import React, { Component } from 'react';

// class Event_Input extends Component {
//     render() {
//         return (
//             <div>
                
//             </div>
//         );
//     }
// }

// export default Event_Input;

// 💚 rsc
import React, {useState, useRef} from 'react';

const Event_Input = () => {
    const input = useRef(); //  ** 추가) 실행
    const [from, setFrom] = useState({ // 객체 넣기, from에 담김, 수정)setFrom
        username : '',
        message : ''
    });
    const {username, message} = from; // 값을 따로 관리
    const onChange = e => { // () 생략 가능 // nextFrom을 만듦
        // (1)
        // const nextFrom = {
        //     ...from, // 스프레드구문으로 원래 (username, message)from가지고오고, 기존의 from 내용을 여기에 복사
        //     [e.target.name] : e.target.value // 원하는 값은 덮어 씌우기
        // }
        // setFrom(nextFrom);

        // (2)
        // setFrom({
        //     ...from,
        //     [e.target.name] : e.target.value 
        // });

        // (3)
        const {name, value} = e.target
        setFrom({
            ...from,
            [name] : value
        });
    }
    // 버튼 클릭시 실행 할 함수
    const onClick = () => {
        console.log(`메세지는 ${message}이고 유저네임은 ${username}이다.`);
        setFrom({
            username : "", // 초기화
            message : ""
        });
        input.current.focus(); // ** 추가
    }

    const onKeyPress = (e) => {
        if (e.key === "Enter") {
            onClick(); // 호출
        }
    }

    return (
        <div>
            <h2>이벤트 연습 🐥</h2>
            <input ref={input} type="text" name="username" value={username} onChange={onChange} onKeyPress={onKeyPress}></input>
            <input type="text" name="message" value={message} onChange={onChange} onKeyPress={onKeyPress}></input>
            <button onClick={onClick}>확인</button>
        </div>
    );
};

export default Event_Input;