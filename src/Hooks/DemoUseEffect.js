import React, { useState, useEffect } from 'react'
import ChildEffect from './ChildEffect';

export default function DemoUseEffect() {

    let [number, setNumber] = useState(1);
    let [like, setLike] = useState(0);

    useEffect(() => {
        console.log("Hàm được thực thi sau mỗi lần render | Cách viết này ứng với cả 2 life cycle didMount và didUpdate");
    });

    useEffect(() => {
        console.log("Hàm gọi sau lần render đầu tiên, thay thế cho didMount");
    }, []);

    useEffect(() => {
        console.log("Hàm gọi mỗi khi number (state) thay đổi sau khi render, thay didUpdate");
        return () => {
            console.log("willUnmount"); 
        }
    }, [number]); // nếu number thay đổi thì useEffect này sẽ chạy

    return (
        <div>
            Number: {number}
            <button className='btn btn-success' onClick={() => {
                setNumber(number + 1);
            }}>+</button>
            <hr />
            Like: {like}
            <button className='btn btn-success' onClick={() => {
                setLike(like + 1);
            }}>+</button>
            <hr />
            {like === 1 ? <ChildEffect /> : ""}
        </div>
    )
}
