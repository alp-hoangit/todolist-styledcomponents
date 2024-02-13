import React, { useState, memo, useCallback } from 'react';
import ChildUseCallback from './ChildUseCallback';



export default function DemoUseCallback(props) {
    let [like, setLike] = useState(0);


    const renderNotify = () => {
        return `Bạn đã thả ${like} ❤`;
    }

    let callbackRenderNotify = useCallback(renderNotify, [like]);

    return (
        <div>
            Like: {like} ❤
            <br />
            <span style={{ cursor: 'pointer', color: 'red', fontSize: 35 }} onClick={() => {
                setLike(like + 1); 
            }}>❤</span>

            <br />
            <br />
            <ChildUseCallback renderNotify={callbackRenderNotify} />
        </div>
    )
}
