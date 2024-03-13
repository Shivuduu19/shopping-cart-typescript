import styled from "styled-components";
import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";
import { openCart } from "../pages/cart/CartOpenSlice";
import { useAppDispatch, useAppSelector } from "../state/hooks";

const Header = () => {
  const dispatch = useAppDispatch();
  const cart = useAppSelector((state) => state.cart.value);
  const login = useAppSelector((state) => state.login.value);
  const sumQuantity = () =>
    cart.reduce((total, item) => total + item.quantity, 0);
  // console.log(login);

  return (
    <>
      <HeaderWrapper>
        <Container>
          <LogoName>Fake Store</LogoName>
          <Navbar>
            <NavbarLink to="/">Home</NavbarLink>
            <NavbarLink to="products">Products</NavbarLink>
            <NavbarLink to="contact">Contact</NavbarLink>
            {login ? null : (
              <VerifyContainer to="login">signin</VerifyContainer>
            )}
            <ButtonContainer>
              <CartButton onClick={() => dispatch(openCart())}>
                {/* <button onClick={() => dispatch(openCart())}>dsfgsdf</button> */}
                {<ShoppingCart size="30px" />}
              </CartButton>
              {sumQuantity() ? <Quantity>{sumQuantity()}</Quantity> : ""}
            </ButtonContainer>
          </Navbar>
        </Container>
      </HeaderWrapper>
    </>
  );
};
const HeaderWrapper = styled.header`
  background-color: #000;
  width: 100%;
`;
const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem;
  width: 100%;
  margin: 0 auto;
  @media (max-width: 1400px) {
    padding: 1rem;
  }
  @media (max-width: 768px) {
    flex-direction: column;
    /* gap: 3rem; */
  }
  @media (max-width: 460px) {
    height: 20vh;
  }
`;
const LogoName = styled.h1`
  color: #4677d3;
  font-size: 6rem;
  padding: 50px;
  padding-left: 9rem;
  font-weight: 700;
  @media (max-width: 1400px) {
    padding: 1rem;
  }
  @media (max-width: 480px) {
    font-size: 2rem;
    padding: 1rem;
  }
`;
const Navbar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-content: center;
  gap: 6rem;
  font-size: 2rem;
  @media (max-width: 460px) {
    width: 100%;
    gap: 8px;
    /* display: none; */
    font-size: 20px;
  }
`;
const NavbarLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #91c1d4;
  font-size: 40px;
  font-weight: 600;
  transition: trasform 0.2s ease-in;
  &:hover {
    transform: scale(1.3);
  }
  @media (max-width: 1400px) {
    font-size: 25px;
  }
  @media (max-width: 460px) {
    font-size: 20px;
    &:hover {
      transform: scale(1.1);
    }
  }
`;
const VerifyContainer = styled(Link)`
  margin: auto;
`;
const CartButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #91c1d4;
  font-size: 40px;
  font-weight: 600;
  transition: trasform 0.2s ease-in;
  &:hover {
    transform: scale(1.3);
  }
  border-radius: 40px;
  padding: 1rem;
  &:active {
    transform: scale(1.1);
  }
  @media (max-width: 460px) {
    /* font-size: 5px; */
    /* font-weight: 200; */
    position: absolute;
    right: 1px;
    height: 40px;
    border-radius: 20px;
    padding: 0.5rem;
    bottom: 25px;
  }
`;
const ButtonContainer = styled.div`
  position: relative;
  cursor: pointer;
`;
const Quantity = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 3rem;
  right: rem;
  width: 3rem;
  height: 3rem;
  border-radius: 50px;
  background-color: #793333;
  font-size: large;
  font-family: bold;
`;
export default Header;
