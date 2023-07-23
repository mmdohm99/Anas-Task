import React, { useEffect, useState, useCallback } from "react";
import List from "../Table/Table";
import "./pagination.scss";
import { useQuery } from "react-query";
import { getData } from "../../myApi";
import Loading from "../Loading/Loading";
export default function PaginationRounded() {
  const headers = ["Alpha twocode", "Country", "Domains", "Name", "Web pages"];
  const { data, isLoading } = useQuery("todos", getData);
  const [hidePagination, setHidePagination] = useState(false);
  const [items, setItems] = useState([]);

  const [firstPages, setFirstPages] = useState([]);
  const [startItem, setStartItem] = useState(0);
  const [startLatsItem, setStartLastItem] = useState(3);
  const [lastPages, setLastPages] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const [pagesN, setPagesN] = useState([]);

  const selectPage = useCallback(
    (item) => {
      setCurrentPage(item);
      setItems(data.slice(Math.ceil((item - 1) * 10), Math.ceil(item * 10)));
    },
    [data]
  );
  const NextTenPages = useCallback(() => {
    if (currentPage < pagesN?.length - 10) {
      setCurrentPage((old) => old + 10);
      setItems(
        data.slice(
          Math.ceil((currentPage + 10) * 10),
          Math.ceil((currentPage + 11) * 10)
        )
      );
    }
  }, [currentPage, data, pagesN]);
  const prevPage = useCallback(() => {
    if (currentPage > 1) {
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
  }, [currentPage, data]);
  const NextPage = useCallback(() => {
    if (currentPage < pagesN?.length - 1) {
      setCurrentPage((old) => old + 1);
      setItems(
        data.slice(
          Math.ceil((currentPage + 1) * 10),
          Math.ceil((currentPage + 2) * 10)
        )
      );
    }
  }, [currentPage, data, pagesN]);
  const prevTenPages = useCallback(() => {
    if (currentPage > 10) {
      setCurrentPage((old) => old - 10);
      setItems(
        data.slice(
          Math.ceil((currentPage - 11) * 10),
          Math.ceil((currentPage - 10) * 10)
        )
      );
    }
  }, [currentPage, data]);

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
  console.log(pagesN);
  console.log(currentPage);
  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <List
            items={items}
            headers={headers}
            setHidePagination={setHidePagination}
          />
          {hidePagination ? (
            ""
          ) : (
            <div className="paginationContainer">
              <div className="paginationBox">
                <div className="PrevBox">
                  {" "}
                  <div onClick={prevTenPages}>{"<<"}</div>
                  <div onClick={prevPage}>{"<"}</div>
                </div>
                <div className="firstBox">
                  {" "}
                  {firstPages.map((item, i) => (
                    <div key={i} onClick={() => selectPage(item)}>
                      {item}
                    </div>
                  ))}
                </div>

                <div className="CurrBox">{currentPage}</div>
                <div className="lastBox">
                  {lastPages.map((item, i) => (
                    <div key={i} onClick={() => selectPage(item)}>
                      {item}
                    </div>
                  ))}
                </div>

                <div className="NextBox">
                  <div onClick={NextPage}>{">"} </div>
                  <div onClick={NextTenPages}>{">>"}</div>
                </div>
              </div>
            </div>
          )}
        </>
      )}
    </>
  );
}
