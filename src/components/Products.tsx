
import styled from "styled-components";
import ProductCard, { IProduct } from "./ProductCard";

interface IPropsProducts {
    products: IProduct[];
}

const Container = styled.div`
    background-color: var(--background-color);
`;
const Products = (props: IPropsProducts) => {
  return (
    <Container className="products grid-container">
        {props.products.map((product, idx) => <div className="grid-item xs-12 sm-6 md-4 lg-3" key={product.id}><ProductCard product={product} /></div>)}
    </Container>
  )
}

export default Products;