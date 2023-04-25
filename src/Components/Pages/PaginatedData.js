import React, { useState } from "react";
import Pagination from "react-bootstrap/Pagination";

const PaginatedData = ({ Data, pageSize }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(Data.length / pageSize);
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const currentData = Data.slice(startIndex, endIndex);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "3%",
        }}
      >
        {currentData.map((dataItem, index) => (
          <DataCard key={index} Data={dataItem} />
        ))}
      </div>
      <Pagination>
        {[...Array(totalPages)].map((_, index) => (
          <Pagination.Item
            key={index}
            active={index + 1 === currentPage}
            onClick={() => handlePageChange(index + 1)}
          >
            {index + 1}
          </Pagination.Item>
        ))}
      </Pagination>
    </div>
  );
};

export default PaginatedData;
