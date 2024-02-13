/* eslint-disable default-case */
import React, { useContext } from 'react';
import { context } from './Context/ContextProvider';


export default function DemoUseContext(props) {
    let { cartReducer, arrProduct } = useContext(context);

    let [cart, dispatch] = cartReducer;


    const addToCart = (product) => {
        let action = {
            type: 'addToCart',
            product
        };
        dispatch(action);
    }

    const delProduct = (product) => {
        const action = {
            type: 'delProduct',
            product
        };
        dispatch(action);
    }

    return (
        <div className='container mt-4'>
            <div className="row">
                {arrProduct.map((product, index) => {
                    return <div key={index} className="col-3">
                        <div className="card text-left">
                            <img className="card-img-top" src={product.img} alt={index} />
                            <div style={{ backgroundColor: '#D3D3D3' }} className="card-body">
                                <h4 className="card-title">{product.name}</h4>
                                <p className="card-text">{product.price}</p>
                                <button onClick={() => { addToCart(product) }} className="btn btn-warning ml-auto d-block"><i className="fa fa-cart-plus"></i></button>
                            </div>
                        </div>
                    </div>
                })}
            </div>

            <h3>Giỏ hàng</h3>
            <table className="table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Total</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {cart.map((product, index) => {
                        return <tr key={index}>
                            <td>{product.id}</td>
                            <td>{product.name}</td>
                            <td>{product.price}</td>
                            <td>{product.quantity}</td>
                            <td>{product.price * product.quantity}</td>
                            <td>
                                <button onClick={() => { delProduct(product) }} className='btn btn-danger'><i className="fa fa-trash-alt"></i></button>
                            </td>
                        </tr>
                    })}
                </tbody>
            </table>

        </div>
    )
}
