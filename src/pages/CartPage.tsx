
import { useContext } from "react";
import styled from "styled-components";
import Button from "../components/Button";
import CartItem from "../components/CartItem";
import { CartContext } from "../context/CartContext";

const StyledCartPage = styled.div`
 
  padding: 50px;

  .page-title {
    margin-bottom: 20px;
  }
  .wrapper {
    display: flex;
   
  }

  .finish-order-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    border: 1px solid var(--text-secondary-color);
    border-radius: 7px;
    max-width: 400px;
    max-height: 230px;
    flex-grow: 1;
    padding: 20px;
    margin-left: 20px;
    
    
    .flex-order {
      display: flex;
      justify-content: space-between;
      margin-top: 30px;
      margin-bottom: 30px;
    }

    .right {
      margin-left: 100px;
    }
  }
`;

const CartPage = () => {
  const { products, removeProduct } = useContext(CartContext);

  const calcTotal = () => {
    let res = 0;

    products.forEach(product => {
      res = res + product.price;
    });

    return res;
  }

  return (
    <StyledCartPage>
      <h3 className="page-title">Shopping Cart</h3>
      <div className="wrapper">
        <div className="items-container">
          {products.map((product, idx) => <CartItem deleteProduct={removeProduct} product={product} />)}
        </div>
        <div className="finish-order-container">
          <h4>Order</h4>
          <div className="flex-order">
            <h4>Total: </h4>
            <h4 className="right">${calcTotal()}</h4>
          </div>
          <Button name="Place Order" onClick={() => { }} />
        </div>
      </div>
    </StyledCartPage>
  )
}

export default CartPage;