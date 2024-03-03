// import { useDispatch } from "react-redux";
import styled from "styled-components";
import { addItem } from "../cart/CartSlice";
import { Product } from "../../types/Products";
import { useAppDispatch } from "../../state/hooks";

interface props {
  id: number;
  image: string;
  title: string;
  price: number;
  quantity?: number;
}

const ProductCard = ({ id, image, title, price }: props) => {
  const product: Product = { id, image, title, price };
  let quantity = 0;
  const dispatch = useAppDispatch();
  return (
    <>
      <CardWrapper>
        <ImageContainer>
          <Image src={image} alt={title} />
        </ImageContainer>
        <AboutCard>
          <Info>
            <Title>{title}</Title>
            <div>{price}</div>
          </Info>
        </AboutCard>
        <Button onClick={() => dispatch(addItem({ ...product, quantity }))}>
          Add to Cart
        </Button>
      </CardWrapper>
    </>
  );
};
const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid whitesmoke;
  background-color: #bab4b4;
  border-radius: 12px;
  /* font-size: 3rem; */
  /* width: 100%; */
`;
const ImageContainer = styled.div`
  padding: 1rem;
  height: 20rem;

  margin: 0 auto;
`;
const Image = styled.img`
  height: 100%;
  max-width: 100%;
`;
const AboutCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1rem;
  padding: 2rem;
  padding-top: 4rem;
`;
const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  gap: 1rem;
  height: 100%;
`;
const Title = styled.div`
  /* font-size: 1rem; */
  font-weight: bold;
`;
const Button = styled.button`
  color: #000;
  margin: 1rem;
  margin-top: auto;
  margin-bottom: 1rem;
`;
export default ProductCard;
