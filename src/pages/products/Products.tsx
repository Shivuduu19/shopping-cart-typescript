import { useEffect } from "react";
// import { Link } from "react-router-dom";
import { setProducts } from "./ProductSlice";
import { useDispatch } from "react-redux";
import ProductCard from "./ProductCard";
import { v4 as uuidv4 } from "uuid";
import styled from "styled-components";
import { fadein } from "../Home";
import { Product } from "../../types/Products";
import { useAppSelector } from "../../state/hooks";
const Products = () => {
  const products = useAppSelector((state) => state.products.value);
  // console.log(products);
  const dispatch = useDispatch();

  useEffect(() => {
    loadProducts();
  }, []);

  const loadProducts = async () => {
    dispatch(setProducts(await fetchProducts()));
  };

  const fetchProducts = async () => {
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();
    return data;
  };
  // console.log(products);

  return (
    <ProductsWrapper>
      {products.map((product: Product) => (
        <ProductCard
          key={uuidv4()}
          id={product.id}
          title={product.title}
          price={product.price}
          image={product.image}
        />
      ))}
    </ProductsWrapper>
  );
};
const ProductsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 3rem;
  font-size: 2rem;
  animation: ${fadein} 2s ease;
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, minmax(28rem, 36rem));
    justify-content: center;
  }
  @media (max-width: 460px) {
    grid-template-columns: repeat(1, 36rem);
  }
`;
export default Products;
