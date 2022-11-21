import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { IProduct } from "../components/ProductCard";
import Products from "../components/Products";

const StyledCategoryPage = styled.div`
    
`;

const CategoryPage = () => {
    const [products, setProducts] = useState<IProduct[]>([]);
    const { id } = useParams();
    
    useEffect(() => {
        axios.get(`https://api.escuelajs.co/api/v1/categories/${id}/products`).then((response) => {
        setProducts(response.data);

        });
    }, [id]);
    
  return (
    <StyledCategoryPage>
        <Products products={products} />
    </StyledCategoryPage>
  )
}

export default CategoryPage;