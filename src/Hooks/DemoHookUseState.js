/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from 'react'

export default function DemoHookUseState(props) {

    // tuple
    let [state, setState] = useState({ like: 0 });

    const handleLike = () => {
        setState({ like: state.like + 1 });
    }

    return (
        <div className='container'>
            <div className="card text-left" style={{ width: 202 }}>
                <img style={{ height: 200, width: 200 }} className="card-img-top" src="https://picsum.photos/200/200" alt="picture" />
                <div className="card-body">
                    <h4 className="card-title">Picture</h4>
                    <p style={{ color: 'red' }} className="card-text">{state.like} ❤</p>
                </div>
                <button onClick={handleLike} className='btn btn-danger'>Like</button>
            </div>

        </div>
    )
}
