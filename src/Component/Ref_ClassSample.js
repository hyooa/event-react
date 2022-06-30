import React, { Component } from 'react';
import './Ref_Sample.css';

class Ref_ClassSample extends Component {
    // ref 생성
    input = React.createRef(); // ** 추가
    state = {
        password : '',
        clicked : false,
        validated : false
    }
    // 값이 입력 되면
    handleChange = (e) => {
        this.setState({
            // password : e.target.value
            password : this.input.current.value // ** 추가
        })
    }
    // 버튼 클릭시
    handleButtonClick = () => {
        this.setState ({
            clicked : true,
            validated : this.state.password === '0000'
        })
        // DOM요소 접근은 ref.current 로
        this.input.current.focus(); // ** 추가
        console.log(this.input);
    }
    render() {
        return (
            <div>
                <h3>Ref_Class</h3>
                {/* 선택하려는 DOM 요소의 ref 속성으로 지정 */}
                <input type="password"
                ref = {this.input} // ** 추가
                value={this.state.password}
                onChange={this.handleChange} // 값이 바뀌면 호출
                className={this.state.clicked ? (this.state.validated ? 'success' : 'failure') : ''}
                placeholder='안뇽'></input>

                <button onClick={this.handleButtonClick}>클릭</button>
            </div>
        );
    }
}

export default Ref_ClassSample;