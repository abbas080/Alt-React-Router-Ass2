import React from "react";
// import Pagination from "./Pagination";
// import { useState } from "react";

export const User = ({
  data,
  isLoading,
  dataPerPage,
  totalData,
  paginate,
  handleNext,
  handlePrev,
  error,
}) => {
  // const [currentPage, setCurrentPage] = useState(1);
  // const [dataPerPage] = useState(10);
  // const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // const totalData = data.length;

  // const indexOfLastUser = currentPage * dataPerPage;
  // const indexOfFirstData = indexOfLastUser - dataPerPage;
  // const currentData = data.slice(indexOfFirstData, indexOfLastUser);

  // const handlePrev = (event) => {
  //   event.preventDefault();
  //   if (currentPage === 1) {
  //     setCurrentPage(1);
  //   } else {
  //     setCurrentPage((prev) => prev - 1);
  //   }
  // };

  // const handleNext = (event) => {
  //   event.preventDefault();
  //   if (currentPage === 10) {
  //     setCurrentPage(1);
  //   } else {
  //     setCurrentPage((prev) => prev + 1);
  //   }
  // };

  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalData / dataPerPage); i++) {
    pageNumbers.push(i);
  }

  if (isLoading) {
    return <h1>Loading...</h1>;
  } else if (error) {
    return (
      <h1 className="err-mess">
        Something is wrong somewhere! <br />
        Please check your internet connection and try again.
      </h1>
    );
  }
  return (
    <>
      <div className="user-cont">
        {data.map((user) => (
          <div>
            <div>
              <span>
                <img src={user.picture.medium} alt="" className="user-pic" />
              </span>
            </div>
            <div className="user-name">Name: {user.name.first}</div>
          </div>
        ))}
      </div>
      <nav>
        <ul className="pagination">
          <button onClick={handlePrev} className="page-item">
            prev
          </button>
          {pageNumbers.map((number) => (
            <>
              <ul key={number.toString()} className="page-item">
                <button onClick={() => paginate(number)} className="page-link">
                  {number}
                </button>
              </ul>
            </>
          ))}
          <button onClick={handleNext} className="page-item">
            Next
          </button>
        </ul>
      </nav>
    </>
  );
};
