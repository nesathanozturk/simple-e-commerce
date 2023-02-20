import styled from "styled-components";
import { breakpoints } from "../../theme";

export const Section = styled.section`
  width: 90%;
  margin: 50px auto auto auto;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.h1`
  margin-bottom: 10px;
  font-size: 2.5rem;
  letter-spacing: 2px;
  text-align: center;

  @media ${breakpoints.xl} {
    font-size: 2.3rem;
  }
`;

export const Description = styled.p`
  color: #666;
  margin-bottom: 10px;
  font-size: 1rem;
  letter-spacing: 1px;
  text-align: center;
`;

export const Products = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3rem;
  margin-top: 40px;

  @media (max-width: 745px) {
    flex-wrap: wrap;
  }
`;

export const ProductItem = styled.div`
  background-color: #fff;
  width: 15rem;
  overflow: hidden;
  border-radius: 0.4rem;
  cursor: pointer;
  box-shadow: 0 3rem 6rem rgba(0, 0, 0, 0.1);
  transition: 0.2s;

  &:hover {
    transform: translateY(-0.5%);
    box-shadow: 0 4rem 8rem rgba(0, 0, 0, 0.5);
  }

  @media ${breakpoints.xl} {
    width: 10.53rem;
  }

  @media ${breakpoints.md} {
    width: 10.2rem;
  }

  @media (max-width: 413px) {
    width: 9rem;
  }
`;

export const CardImg = styled.img`
  width: 100%;
  height: 15rem;
`;

export const CardContent = styled.div`
  padding: 0.3rem;

  @media ${breakpoints.xl} {
    padding: 0.2rem;
  }
`;

export const CardTitle = styled.p`
  font-size: 1.3rem;
  letter-spacing: 0.1rem;
  color: #3d3d3d;

  @media ${breakpoints.xl} {
    font-size: 1.1rem;
  }
`;

export const CardPrice = styled.p`
  font-size: 1rem;
  letter-spacing: 0.1rem;
  color: #666;

  @media ${breakpoints.xl} {
    font-size: 0.9rem;
  }
`;
