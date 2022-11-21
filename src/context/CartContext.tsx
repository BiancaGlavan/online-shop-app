import * as React from 'react';
import { useState } from 'react';
import { IProduct } from '../components/ProductCard';

export type CartContextType = {
    products: IProduct[];
    addProduct: (product: IProduct) => void;
    removeProduct: (product: IProduct) => void;
}

export const CartContext = React.createContext<CartContextType> ({
    products: [],
    addProduct: () => {},
    removeProduct:() => {},
});

interface ICartProvider {
    children: React.ReactNode;
}

const CartProvider = ({ children }: ICartProvider) => {
    const [products, setProducts] = useState<IProduct[]>([]);

    const handleAddProduct = (product: IProduct) => {
        const newProducts = [...products, product];
        setProducts(newProducts);
    }

    const handleRemoveProduct = (product: IProduct) => {
        const newProducts = products.filter((prod, idx) => prod.id !== product.id);
        setProducts(newProducts);
    }

    return (
        <CartContext.Provider value={{products, addProduct: handleAddProduct, removeProduct: handleRemoveProduct}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider;