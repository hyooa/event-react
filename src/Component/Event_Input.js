// ๐ rcc
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

// ๐ rsc
import React, {useState, useRef} from 'react';

const Event_Input = () => {
    const input = useRef(); //  ** ์ถ๊ฐ) ์คํ
    const [from, setFrom] = useState({ // ๊ฐ์ฒด ๋ฃ๊ธฐ, from์ ๋ด๊น, ์์ )setFrom
        username : '',
        message : ''
    });
    const {username, message} = from; // ๊ฐ์ ๋ฐ๋ก ๊ด๋ฆฌ
    const onChange = e => { // () ์๋ต ๊ฐ๋ฅ // nextFrom์ ๋ง๋ฆ
        // (1)
        // const nextFrom = {
        //     ...from, // ์คํ๋ ๋๊ตฌ๋ฌธ์ผ๋ก ์๋ (username, message)from๊ฐ์ง๊ณ ์ค๊ณ , ๊ธฐ์กด์ from ๋ด์ฉ์ ์ฌ๊ธฐ์ ๋ณต์ฌ
        //     [e.target.name] : e.target.value // ์ํ๋ ๊ฐ์ ๋ฎ์ด ์์ฐ๊ธฐ
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
    // ๋ฒํผ ํด๋ฆญ์ ์คํ ํ  ํจ์
    const onClick = () => {
        console.log(`๋ฉ์ธ์ง๋ ${message}์ด๊ณ  ์ ์ ๋ค์์ ${username}์ด๋ค.`);
        setFrom({
            username : "", // ์ด๊ธฐํ
            message : ""
        });
        input.current.focus(); // ** ์ถ๊ฐ
    }

    const onKeyPress = (e) => {
        if (e.key === "Enter") {
            onClick(); // ํธ์ถ
        }
    }

    return (
        <div>
            <h2>์ด๋ฒคํธ ์ฐ์ต ๐ฅ</h2>
            <input ref={input} type="text" name="username" value={username} onChange={onChange} onKeyPress={onKeyPress}></input>
            <input type="text" name="message" value={message} onChange={onChange} onKeyPress={onKeyPress}></input>
            <button onClick={onClick}>ํ์ธ</button>
        </div>
    );
};

export default Event_Input;