import { DeleteForeverOutlined } from "@mui/icons-material";
import styled from "styled-components";
import { IProduct } from "./ProductCard";


const StyledCartItem = styled.div`
    display: flex;
    padding: 30px;
    border: 1px solid var(--text-secondary-color);
    border-radius: 7px;
    margin-bottom: 20px;

    .item-img {
        max-width: 200px;
    }

    .item-info {
        margin-left: 20px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    .delete {
        cursor: pointer;
        color: var(--text-color);
    }

    .item-desc {
        color: var(--text-color);
    }
    .item-categ {
        color: var(--text-color);
    }
`;

interface IPropsCartItem {
    product: IProduct;
    deleteProduct: (product: IProduct) => void;
}

const CartItem = ({ product, deleteProduct }: IPropsCartItem) => {
    return (
        <StyledCartItem className="cart-item">
            <img className="item-img" src={product.images[0]} alt="" />
            <div className="item-info">
                <h4 className="item-title">{product.title}</h4>
                <h6 className="item-desc">{product.description}</h6>
                <h6 className="item-categ">{product.category.name}</h6>
                <h4 className="item-price">Price: ${product.price}</h4>
                <DeleteForeverOutlined className="delete" onClick={() => {
                    deleteProduct(product);
                }}/>


            </div>

        </StyledCartItem>
    )
}

export default CartItem;