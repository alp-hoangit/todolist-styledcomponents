import React, { useMemo, useState } from 'react'
import Cart from './Cart'

export default function DemoUseMemo(props) {
    let [like, setLike] = useState(0);

    let cart = [
        { id: 1, name: 'IPhone', price: 1000 },
        { id: 2, name: 'HTC Phone', price: 2000 },
        { id: 3, name: 'LG Phone', price: 3000 }
    ];

    const cartMemo = useMemo(() => cart, []);

    return (
        <div>
            Like: {like} ❤
            <br />
            <span style={{ cursor: 'pointer', color: 'red', fontSize: 35 }} onClick={() => {
                setLike(like + 1);
            }}>❤</span>

            <br />
            <br />

            <Cart cart={cartMemo} />
        </div>
    )
}
