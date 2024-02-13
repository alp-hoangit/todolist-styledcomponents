import React, { useState, useRef } from 'react'

export default function DemoUseRef(props) {

    let inputUserName = useRef(null);
    let inputPassword = useRef(null);

    let userName = useRef('');

    let [userLogin, setUserLogin] = useState({ userName: '' });

    const handleLogin = () => {

        console.log(userName.current);

        userName.current = 'abc';
        setUserLogin({
            userName: userName,
        })
    }

    return (
        <div className='container'>
            <h3 className='text-center'>Login</h3>
            <div className="form-group">
                <h3>User Name</h3>
                <input ref={inputUserName} type="text" name="userName" className='form-control' />
            </div>
            <div className="form-group">
                <h3>Password</h3>
                <input ref={inputPassword} type="password" name="password" className='form-control' />
            </div>
            <button className='btn btn-success' onClick={handleLogin}>Login</button>
        </div>
    )
}
