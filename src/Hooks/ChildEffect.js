
import React, { useState, useEffect } from 'react'

export default function ChildEffect() {
    let [number, setNumber] = useState(1);
    console.log('render childEffect');

    useEffect(() => {
        // Viết cho didUpdate
        console.log("child didupdate")
        return () => {
            //cleanup
            console.log("willUnmount");
        }
    }, [number])


    return (
        <div>
            <textarea></textarea> <br />
            <button className='btn btn-success'>Send</button>
        </div>
    )
}
