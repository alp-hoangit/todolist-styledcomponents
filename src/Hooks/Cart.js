import React, { memo } from 'react'

function Cart(props) {

    return (
        <div>
            <table className='table'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        props.cart.map((item, index) => {
                            return <tr key={index}>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.price}</td>
                            </tr>
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default memo(Cart);