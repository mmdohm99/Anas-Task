import React, { useState } from "react";
import Search from "../Search/Search";
import "./Table.scss";
const Table = ({ items, headers, setHidePagination }) => {
  const [filtered, setFiltered] = useState([]);

  return (
    <>
      <div className="searchContainer">
        <Search
          data={items}
          setFiltered={setFiltered}
          setHidePagination={setHidePagination}
        />
      </div>
      <div className="tableContainer">
        <table>
          <thead>
            <tr>
              {headers?.map((ele) => (
                <td>{ele}</td>
              ))}
            </tr>
          </thead>
          <tbody>
            {(filtered?.length > 0 ? filtered : items).map((item, i) => (
              <tr key={i}>
                <td> {item?.alpha_two_code}</td>
                <td> {item?.country}</td>
                <td> {item?.domains}</td>
                <td> {item?.name}</td>

                <td>
                  {" "}
                  {item?.web_pages?.map((ele, i) => (
                    <a key={i} target="_blank" href={ele}>
                      {ele}
                    </a>
                  ))}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Table;
