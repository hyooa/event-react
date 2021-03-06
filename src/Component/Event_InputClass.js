// ๐งก ircc (์๋์์ฑ)
import React, { Component } from 'react';

class Event_InputClass extends Component {
    state = { // ๊ด๋ฆฌ
        message : '',
        username : ''
    }

    handleChange = (e) => {
        this.setState ({ // input์ ๊ฐ์ด ์๋ ฅ๋ ๋ setState(๊ฐ ๋ณ๊ฒฝ)
            // message : e.target.value
            [e.target.name] : e.target.value // ๐งก input์ด ์ฌ๋ฌ๊ฐ ์ผ ๋ ์์ฑ๋ฒ
        })
    }

    handleClick = () => {
        console.log(`๋ฉ์ธ์ง๋ ${this.state.message}์ด๊ณ  ์ ์ ๋ค์์ ${this.state.username}์ด๋ค.`);
        this.setState({ // ํด๋ฆญ์ input์ ๊ฐ ๋น์ฐ๊ธฐ
            message : '',
            username : ''
        })
    }

    // ๐ key๋ฅผ ๋๋ฅด๋ฉด ์คํ๋๋ ํจ์
    handleKeyPress = (e) => { // ์ด๋ค key๋๋ฅด๋์ง ์์์ผ๋์ e ๋ฐ์์ผ๋จ
        console.log(e);
        if (e.key === "Enter") {
            this.handleClick();
        }
    }

    render() {
        return ( // JSX ๊ตฌ๋ฌธ๋ค์ด๊ฐ, if์ฌ์ฉ๋ถ๊ฐ, ์ผํญ์ฐ์ฐ์ ์ฌ์ฉ
            <div>
                <h2>์ด๋ฒคํธ ์ฐ์ต class ๐ฃ</h2>
                                            {/* onChange) input ๊ฐ์ด ๋ณ๊ฒฝ ๋  ๋ ์คํ // message์ ์ ๊ทผ // key ์ด๋ฒคํธ ์ฐ๊ฒฐ */}
                <input type="text" name="message" onChange={this.handleChange} value={this.state.message} onKeyPress={this.handleKeyPress}></input>
                <input type="text" name="username" onChange={this.handleChange} value={this.state.username} onKeyPress={this.handleKeyPress}></input>
                <button onClick={this.handleClick}>ํ์ธ</button>
            </div>
        );
    }
}

export default Event_InputClass;