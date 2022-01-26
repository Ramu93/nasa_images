import React, { useState, useEffect } from "react";

import { ResultsContainer, Loader } from "./styles";
import SearchBox from "../../components/SearchBox";
import { getMetadata, search } from "../../services/query";
import { Result } from "./result.interface";
import ListItem from "../../components/ListItem";
import Modal from "../../components/Modal";
import { StickyContainer } from "../../components/SearchBox/styles";

const Results = () => {
  const [searchKey, setSearchKey] = useState<string>("test");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [results, setResults] = useState<Result[]>([]);
  const [selectedItem, setSelectedItem] = useState<string>();
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  const [modalData, setModalData] = useState<Object>();

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
      setIsModalVisible(true);
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
      <StickyContainer>
        <SearchBox
          onChange={setSearchKey}
          value={searchKey}
          onSearch={fetchResults}
        />
      </StickyContainer>
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
      <Modal
        visible={isModalVisible}
        onClose={() => {
          setIsModalVisible(false);
          setModalData({});
        }}
        header="Meta"
      >
        {JSON.stringify(modalData)}
      </Modal>
    </>
  );
};

export default Results;
