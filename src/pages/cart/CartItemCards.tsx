import { useDispatch } from "react-redux";
import styled from "styled-components";
import { Plus, Minus } from "phosphor-react";
import { addItem, removeItem } from "./CartSlice";
import { Product } from "../../types/Products";
import { CartItem } from "../../types/CartItem";

function CartItemCard({ id, title, price, image, quantity }: CartItem) {
  // const cartItem: CartItem = { id, title, price, image, quantity };
  const product: Product = { id, title, price, image };
  const dispatch = useDispatch();

  const formatText = (title: string) => {
    return title.length === 12 ? title : title.substr(0, 12) + "...";
  };
  const sumPrice = () => (price * quantity).toFixed(2);
  // console.log(cartItem.id);
  return (
    <CartItemWrapper>
      <ImageContainer>
        <Image src={image} alt={title} />
      </ImageContainer>
      <Details>
        <Title>{formatText(title)}</Title>

        <div>
          quantity:{quantity} price: {sumPrice()}
        </div>
        <ItemAmountWrapper>
          <Button
            onClick={() => dispatch(removeItem({ ...product, quantity }))}
          >
            {<Minus size={32} />}
          </Button>
          <div>{price}</div>
          <Button onClick={() => dispatch(addItem({ ...product, quantity }))}>
            {<Plus size={32} />}
          </Button>
        </ItemAmountWrapper>
      </Details>
    </CartItemWrapper>
  );
}

const CartItemWrapper = styled.div`
  display: flex;
`;
const ImageContainer = styled.div`
  height: 16rem;
  width: 20%;
  margin: auto;
`;
const Image = styled.img`
  width: auto;
  height: 100%;
`;
const Details = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  font-size: 2rem;
  width: 100%;
`;
const Title = styled.div`
  height: 3rem;
  font-weight: bold;
  /* text-overflow: ellipsis; */
  overflow: hidden;
`;
const ItemAmountWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 3rem;
`;
const Button = styled.button`
  background-color: rgba(0, 0, 0, 0.1);
`;

export default CartItemCard;
