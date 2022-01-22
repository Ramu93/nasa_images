import styled from "styled-components";
import { theme } from "../../shared/theme";

export const Card = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  /* padding-bottom:  */
`;

export const Image = styled.img`
  height: auto;
  width: 100%;
  cursor: pointer;
  margin-top: 0.2rem;
  &:hover {
    opacity: 0.5;
  }
`;

export const Label = styled.span`
  font-weight: 600;
  width: 100%;
  height: 5px;
  position: absolute;
  top: 50%;
  bottom: 0;
  left: 0;
  right: 0;
  color: #ffff;
  visibility: hidden;
  transition: opacity 0.2s, visibility 0.2s;
  text-align: center;
  /* overflow: hidden; */
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const Wrapper = styled.div`
  position: relative;
  &:hover {
    .img_desc {
      visibility: visible;
    }
  }
`;
