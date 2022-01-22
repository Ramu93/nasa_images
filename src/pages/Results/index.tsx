import React, { FC, useState, useEffect, useCallback, useRef } from "react";

import { ResultsContainer, Loader } from "./styles";
import SearchBox from "../../components/SearchBox";
import { getMetadata, search } from "../../services/query";
import { Result } from "./result.interface";
import ListItem from "../../components/ListItem";

type ResultsProps = {};

const Results: FC<ResultsProps> = ({}) => {
  const [searchKey, setSearchKey] = useState<string>("test");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [results, setResults] = useState<Result[]>([]);
  const [selectedItem, setSelectedItem] = useState<string>();
  const [modalData, setModalData] = useState<any>();

  const fetchResults = async () => {
    setIsLoading(true);
    const data: Result[] = await search(searchKey);
    setResults(data);
    setIsLoading(false);
  };

  const fetchSelectedItem = async () => {
    if (selectedItem) {
      const data = await getMetadata(selectedItem);
      setModalData(data);
    }
  };

  useEffect(() => {
    fetchResults();
  }, []);

  //   fetch data for selected item
  useEffect(() => {
    fetchSelectedItem();
  }, [selectedItem]);

  return (
    <>
      <SearchBox
        onChange={setSearchKey}
        value={searchKey}
        onSearch={fetchResults}
      />
      <div>{isLoading && <Loader />}</div>
      <ResultsContainer>
        {results.map((result, index) => (
          <ListItem
            title={result.title}
            image={result.image}
            key={index.toString()}
            onClick={() => {
              setSelectedItem(result.nasa_id);
            }}
          />
        ))}
      </ResultsContainer>
    </>
  );
};

export default Results;
