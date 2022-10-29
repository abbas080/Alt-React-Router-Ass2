// import React from "react";

// const Pagination = ({
//   dataPerPage,
//   totalData,
//   paginate,
//   handleNext,
//   handlePrev,
// }) => {
  // const pageNumbers = [];

  // for (let i = 1; i <= Math.ceil(totalData / dataPerPage); i++) {
  //   pageNumbers.push(i);
  // }

  // return (
    // <nav>
    //   <ul>
    //     <button onClick={handlePrev}>prev</button>
    //     {pageNumbers.map((number) => (
    //       <>
    //         <li key={number.toString()} className="page-item">
    //           <a
    //             onClick={() => paginate(number)}
    //             href="/#"
    //             className="page-link">
    //             {number}
    //           </a>
    //         </li>
    //       </>
    //     ))}
    //     <button onClick={handleNext}>Next</button>
    //   </ul>
    // </nav>
//   );
// };

// export default Pagination;
