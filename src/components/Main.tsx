import styled from "styled-components";
import { Outlet } from "react-router-dom";

// interface OutletProps {
//   context?: unknown;
// }
// declare function Outlet(props: OutletProps): React.ReactElement | null;

const Main = () => {
  return (
    <MainWrapper>
      <Outlet />
    </MainWrapper>
  );
};
const MainWrapper = styled.main`
  margin: 0 auto;
  padding: 3rem;
  width: 100%;
  padding-bottom: 10rem;
  @media (max-width: 460px) {
    padding: 1rem;
  }
`;
export default Main;
