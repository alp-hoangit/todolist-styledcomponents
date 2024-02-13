/* eslint-disable default-case */
import React, { useReducer } from 'react'

export const context = React.createContext();

const initialCart = [];

const cartReducer = (state, action) => {
    switch (action.type) {
        case 'addToCart': {
            let cartUpdate = [...state];
            let index = cartUpdate.findIndex(itemCart => itemCart.id == action.product.id);
            if (index !== -1) {
                cartUpdate[index].quantity += 1;
            } else {
                const product = { ...action.product, quantity: 1 };
                cartUpdate = [...cartUpdate, product];
            }
            return cartUpdate;
        };
        case 'delProduct': {
            let cartUpdateDel = [...state.filter(product => product.id !== action.product.id)];
            return cartUpdateDel;
        }
    }

    return [...state];
};

let arrProduct = [
    { id: 1, name: 'IPhone 15 Promax', price: 2000, img: 'https://cdn.trangthienlong.com.vn/wp-content/uploads/2022/10/iphone-14-pro-max-mau-tim-deep-purple-128gb-256gb-512gb-1tb-trang-thien-long-mobile.jpg' },
    { id: 2, name: 'Samsung Fold Z', price: 1200, img: 'https://images.samsung.com/is/image/samsung/p6pim/vn/2307/gallery/vn-galaxy-z-fold5-f946-sm-f946bzehxxv-thumb-537230164?imwidth=480' },
    { id: 3, name: 'Huawei P20', price: 1100, img: 'https://www.duchuymobile.com/images/detailed/11/p20-pro-den.jpg' },
    { id: 4, name: 'OPPO A58', price: 1100, img: 'https://cdn11.dienmaycholon.vn/filewebdmclnew/DMCL21/Picture/Apro/Apro_product_33149/oppo-a58_main_172.png' },
];

export default function ContextProvider(props) {
    let [cart, dispatch] = useReducer(cartReducer, initialCart);

    const store = {
        cartReducer: [cart, dispatch],
        arrProduct: arrProduct,
    }

    //Dùng context bao bọc tất cả component bên trong
    return (
        <context.Provider value={store}>
            {props.children}
        </context.Provider>
    )
}
