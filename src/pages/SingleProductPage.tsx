import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import Button from "../components/Button";
import { IProduct } from "../components/ProductCard";
import ProductSlider from "../components/ProductSlider";
import { CartContext } from "../context/CartContext";

const StyledProductPage = styled.div`
  padding: 20px;
  display: flex;

  .info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;  
    padding: 20px;

    @media screen and (max-width: 900px) {
      margin-top: 30px;
    }

    .product-title {
      margin-bottom: 20px;
    }
    .product-category {
      margin-bottom: 20px;
    }
    .product-price {
      margin-bottom: 20px;
    }
  }

  @media screen and (max-width: 900px) {
    flex-direction: column;
    .info {
      padding: 0;
    }
  }
`;

const SingleProductPage = () => {

  const { id } = useParams();
  const [product, setProduct] = useState<IProduct | null>(null);
  const { addProduct } = useContext(CartContext);

  useEffect(() => {
    axios.get('https://api.escuelajs.co/api/v1/products/' + id).then((response) => {
      console.log(response);
      setProduct(response.data);
    });
  }, [id]);

  return (
    <StyledProductPage>
      <ProductSlider images={product?.images || []} />
      <div className="info">
        <h4 className="product-title">{product?.title}</h4>
        <h5 className="product-category">{product?.category.name}</h5>
        <p className="product-desc">{product?.description}</p>
        <h4 className="product-price">Price: ${product?.price}</h4>
        <Button onClick={() => {
          if (product) {
            addProduct(product);
          }
        }} name="Add to card" />
      </div>

    </StyledProductPage>
  )
}

export default SingleProductPage