import React, { FC } from "react";
import { Image, Label, Wrapper } from "./styles";

type ListItemsProps = {
  title: string;
  image: string;
  onClick: Function;
};

const ListItem: FC<ListItemsProps> = ({ title, image, onClick }) => {
  return (
    <Wrapper onClick={() => onClick()}>
      <Image src={image} alt="nasa_img" />
      <Label className="img_desc">{title}</Label>
    </Wrapper>
  );
};

export default ListItem;
