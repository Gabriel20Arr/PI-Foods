import React from "react";
import style from "./Pagination.module.css";

const Pagination = ({
  currentPage,
  itemsPerPage,
  allRecipes,
  onPageChange,
}) => {
  const totalPages = Math.ceil(allRecipes / itemsPerPage);

  const handlePageChange = (page) => {
    if (page < 1 || page > totalPages) {
      return;
    }
    onPageChange(page);
  };


  return (
    <div className={style.container}>
      <svg
        className={style.B1}
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        <path d="M20.697 24L9.303 16.003 20.697 8z" />
      </svg>

      <span style={{ width: "50px", height: "30px" }}>{currentPage}</span>

      <svg
        className={style.B2}
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages }
      >
        <path d="M11.303 8l11.394 7.997L11.303 24z" />
      </svg>
    </div>
  );
};

export default Pagination;
