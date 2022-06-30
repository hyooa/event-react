// 🧡 ircc (자동완성)
import React, { Component } from 'react';

class Event_InputClass extends Component {
    state = { // 관리
        message : '',
        username : ''
    }

    handleChange = (e) => {
        this.setState ({ // input에 값이 입력될때 setState(값 변경)
            // message : e.target.value
            [e.target.name] : e.target.value // 🧡 input이 여러개 일 때 작성법
        })
    }

    handleClick = () => {
        console.log(`메세지는 ${this.state.message}이고 유저네임은 ${this.state.username}이다.`);
        this.setState({ // 클릭시 input에 값 비우기
            message : '',
            username : ''
        })
    }

    // 💚 key를 누르면 실행되는 함수
    handleKeyPress = (e) => { // 어떤 key누르는지 알아야되서 e 받아야됨
        console.log(e);
        if (e.key === "Enter") {
            this.handleClick();
        }
    }

    render() {
        return ( // JSX 구문들어감, if사용불가, 삼항연산자 사용
            <div>
                <h2>이벤트 연습 class 🐣</h2>
                                            {/* onChange) input 값이 변경 될 때 실행 // message에 접근 // key 이벤트 연결 */}
                <input type="text" name="message" onChange={this.handleChange} value={this.state.message} onKeyPress={this.handleKeyPress}></input>
                <input type="text" name="username" onChange={this.handleChange} value={this.state.username} onKeyPress={this.handleKeyPress}></input>
                <button onClick={this.handleClick}>확인</button>
            </div>
        );
    }
}

export default Event_InputClass;