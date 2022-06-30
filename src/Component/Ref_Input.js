import React, { Component } from 'react';

class Ref_Input extends Component {
    // ref 생성 ) 내가 원하는 DOM에 접근하기 위해
    input = React.createRef(); // 생성한 ref의 이름은 input
    handleFocus = () => {
        this.input.current.focus();
        console.log(this.input.current.value); // 🧡 값은 input의 current에 담겨있음
    }

    render() {
        return (
            <div>
                <h3>Ref_Input</h3>
                <input ref={this.input} // ref 연결시키기
                onChange={this.handleFocus}></input>
                <button>클릭</button>
            </div>
        );
    }
}

export default Ref_Input;