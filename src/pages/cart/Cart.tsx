// import { useDispatch, useSelector } from "react-redux";
import { useAppDispatch, useAppSelector } from "../../state/hooks";
import CartItemCard from "./CartItemCards";
import styled, { css } from "styled-components";
import { v4 as uuidv4 } from "uuid";
import { closeCart } from "./CartOpenSlice";

const Cart = () => {
  const cart = useAppSelector((state) => state.cart.value);
  // console.log(cart);
  const dispatch = useAppDispatch();
  const isCartOpen = useAppSelector((state) => state.cartOpen.value);
  const cartItems = cart.map((cartItem) => (
    <CartItemCard
      key={uuidv4()}
      id={cartItem.id}
      title={cartItem.title}
      image={cartItem.image}
      price={cartItem.price}
      quantity={cartItem.quantity}
    ></CartItemCard>
  ));

  // console.log(isCartOpen);

  const sumTotal = () =>
    cart
      .reduce(
        (total, cartItem) => total + cartItem.price * cartItem.quantity,
        0
      )
      .toFixed(2);
  // console.log(sumTotal);
  return (
    <CardWrapper $isOpen={isCartOpen}>
      <Title>Your cart items</Title>
      <Products>{cartItems}</Products>
      <Total>Total:{sumTotal()}</Total>
      <Button
        $color="green"
        onClick={() => {
          dispatch(closeCart());
        }}
      >
        Checkout
      </Button>
      <Button $color="red" onClick={() => dispatch(closeCart())}>
        close
      </Button>
    </CardWrapper>
  );
};

const CardWrapper = styled.div<{ $isOpen?: true | false }>`
  height: 100%;
  position: fixed;
  z-index: 1;
  /* right: -110%; */
  /* right: 0; */
  top: 0;
  color: red;
  width: 50rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;
  padding: 3rem;
  font-size: 2rem;
  transition: right 0.3s ease-in-out;
  background-color: #fff;
  ${(props) =>
    props.$isOpen
      ? css`
          right: 0;
        `
      : css`
          right: 110%;
        `}
`;
const Title = styled.div`
  font-size: bold;
  font-size: 4rem;
`;
const Products = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  /* height: 40%; */
  width: 100%;
  overflow: auto;
`;
const Total = styled.div`
  font-weight: bold;
  padding: 3rem;
`;
const Button = styled.button<{ $color?: string }>`
  font-size: 2rem;
  width: 100%;
  background-color: ${(props) => props.$color};
  /* ${(props) =>
    props.$color
      ? css`
          background-color: green;
        `
      : css`
          background-color: red;
        `} */
`;
export default Cart;
