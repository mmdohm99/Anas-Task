import React from "react";

const List = ({ items }) => {
  return (
    <>
      {items &&
        items.map((item) => (
          <div>
            <h3>{item?.name}</h3>
          </div>
        ))}
    </>
  );
};

export default List;
