import styled from "styled-components";
import { theme } from "../../shared/theme";

export const ResultsContainer = styled.div`
  max-width: 100vw;
  margin: 0.5rem;
  grid-gap: 0.2rem;
  line-height: 0;
  column-count: 8;

  @media (max-width: 1200px) {
    column-count: 6;
  }

  @media (max-width: 1000px) {
    column-count: 5;
  }

  @media (max-width: 800px) {
    column-count: 2;
  }

  @media (max-width: 400px) {
    column-count: 2;
  }
`;

export const Loader = styled.div`
  display:block;
  margin:auto;
  border-radius: 50%;
  border-top: 16px solid  ${theme.primary};
  width: 100px;
  height: 100px;
  -webkit-animation: spin 2s linear infinite;
  animation: spin 2s linear infinite;

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
`