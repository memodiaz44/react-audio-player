import { createContext } from "react";
const Cart = createContext();

const Context = ({ children }) => {


    const products = [...Array(20)].map()

    return( 
        <Cart.Provider>
            {children}


        </Cart.Provider>

    )

}

export default Context