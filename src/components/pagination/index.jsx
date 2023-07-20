import React, { useEffect, useState } from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import List from "../List";

import { useQuery } from "react-query";
import { getData } from "../../myApi";
export default function PaginationRounded() {
  const { data, isLoading } = useQuery("todos", getData);

  const [items, setItems] = useState([]);

  const [firstPages, setFirstPages] = useState([]);
  const [startItem, setStartItem] = useState(0);
  const [startLatsItem, setStartLastItem] = useState(3);
  const [lastPages, setLastPages] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageItems, setPageItems] = useState(10);
  const [pagesN, setPagesN] = useState([]);

  const selectPage = (item) => {
    setCurrentPage(item);
    setItems(data.slice(Math.ceil((item - 1) * 10), Math.ceil(item * 10)));
  };
  const NextTenPages = () => {
    if (currentPage < 217) {
      setCurrentPage((old) => old + 10);
      setItems(
        data.slice(
          Math.ceil((currentPage + 10) * 10),
          Math.ceil((currentPage + 11) * 10)
        )
      );
    }
  };
  const prevPage = () => {
    if (currentPage > 1) {
      //   setFirstPages((old) => [...old?.map((ele) => ele - 1)]);
      setCurrentPage((old) => old - 1);
      setItems(
        data.slice(
          Math.ceil((currentPage - 2) * 10),
          Math.ceil((currentPage - 1) * 10)
        )
      );
      setStartItem((old) => old - 1);
      setStartLastItem((old) => old - 1);
    }
  };
  const NextPage = () => {
    if (currentPage < 227) {
      setCurrentPage((old) => old + 1);
      setItems(
        data.slice(
          Math.ceil((currentPage + 1) * 10),
          Math.ceil((currentPage + 2) * 10)
        )
      );
    }
  };
  const prevTenPages = () => {
    if (currentPage > 10) {
      setCurrentPage((old) => old - 10);
      setItems(
        data.slice(
          Math.ceil((currentPage - 11) * 10),
          Math.ceil((currentPage - 10) * 10)
        )
      );
    }
  };
  console.log(currentPage);
  useEffect(() => {
    if (isLoading === false) {
      setItems(data.slice(0, 10));
      for (let i = 1; i <= Math.ceil(data?.length / 10); i++) {
        setPagesN((old) => [...old, i]);
      }
    }
  }, [data, isLoading]);
  useEffect(() => {
    setFirstPages(pagesN?.slice(startItem, startLatsItem));
    setLastPages(pagesN?.slice(pagesN?.length - 3, pagesN?.length));
  }, [pagesN, startItem, startLatsItem]);
  useEffect(() => {
    if (isLoading === false) {
      if (firstPages[1] === currentPage || firstPages[2] === currentPage) {
        setStartItem((old) => old + 1);
        setStartLastItem((old) => old + 1);
      }
    }
  }, [currentPage, firstPages, isLoading]);
  console.log(items);
  console.log(data);
  //   console.log(firstPages);
  //   console.log(!firstPages?.includes(currentPage + 1));
  return (
    <>
      <List items={items} />
      <div onClick={prevTenPages}>prev 10</div>
      <div onClick={prevPage}>prev </div>
      {firstPages.map((item) => (
        <div onClick={() => selectPage(item)}>{item}</div>
      ))}
      <div>{currentPage}</div>
      {lastPages.map((item) => (
        <div onClick={() => selectPage(item)}>{item}</div>
      ))}
      <div onClick={NextTenPages}>Next 10</div>
      <div onClick={NextPage}>Next </div>
    </>
  );
}
