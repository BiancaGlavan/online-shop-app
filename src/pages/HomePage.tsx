import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { IProduct } from "../components/ProductCard";
import Products from "../components/Products";
import Slider from "../components/Slider";
import { AuthContext } from "../context/AuthContext";


const HomePage = () => {
    const [products, setProducts] = useState<IProduct[]>([]);
    const context = useContext(AuthContext);
    console.log('context from homepage: ', context);

    useEffect(() => {
        const productsUrl = 'https://api.escuelajs.co/api/v1/products';
        axios.get(productsUrl).then((response) => {
            console.log('response: ', response);
            setProducts(response.data)
        });
    }, []);

    return (
        <div>
            <Slider />
            <Products products={products} />
        </div>
    )
}

export default HomePage;