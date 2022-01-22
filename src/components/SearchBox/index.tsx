import React, { FC } from "react";
import { FaSearch } from "react-icons/fa";
import {
  SearchContainer,
  InputContainer,
  Input,
  ButtonContainer,
} from "./styles";

type SearchBoxProps = {
  onChange: Function;
  value: string;
  onSearch: Function;
};

const SearchBox: FC<SearchBoxProps> = ({ onChange, value, onSearch }) => {
  return (
    <SearchContainer>
      <InputContainer>
        <Input
          placeholder="Search"
          onChange={(event) => onChange(event.target.value)}
          onKeyDown={(event) => {
            if (event.key === "Enter" && value.length > 0) {
              onSearch();
            }
          }}
          value={value}
        />
        <ButtonContainer
          onClick={() => {
            if (value.length > 0) {
              onSearch();
            }
          }}
        >
          <FaSearch color="white" size={40} />
        </ButtonContainer>
      </InputContainer>
    </SearchContainer>
  );
};

export default SearchBox;
