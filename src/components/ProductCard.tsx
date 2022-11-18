import styled from "styled-components";

export interface ICategory {
  id: number;
  name: string;
  image: string;
}

export interface IProduct {
  id: number;
  title: string;
  price: number;
  description: string;
  category: ICategory;
  images: string[];
}

interface IPropsProduct {
  product: IProduct;
}

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  cursor: pointer;
`;

const Title = styled.h2`
  font-size: 16px;
  margin-top: 10px;
  margin-bottom: 10px;
  text-align: center;
`;

const Paragraph = styled.p`
color: var(--text-color);
font-size: 16px;
margin-bottom: 10px;
`;

const ParagraphPrice = styled.h4`
font-size: 16px;
margin-bottom: 10px;
font-weight: 600;

`;

const Image = styled.div`
height: 100px;
display: flex;
justify-content: center;
  img {
    height: 100%;
    width: auto;
  }
`;

const ProductCard = ({ product }: IPropsProduct) => {
  return (
    <Container className="product-card">
      <Image>
      <img src={product?.images[0]} alt="" />
      </Image>     
        <Title>{product.title}</Title>
        <ParagraphPrice>Price: ${product.price}</ParagraphPrice>
        <Paragraph>{product.category.name}</Paragraph>
    </Container>
  )
}

export default ProductCard;