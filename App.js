import React, { useEffect, useState } from "react";
import "./index.css";
import { User } from "./components/User";
import NavBar from "./components/NavBar";
import About from "./components/About";
import Home from "./components/Home";
import Contact from "./components/Contact";
import { Routes, Route } from "react-router-dom";
import ErrorPage from "./components/ErrorPage";
function App() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [dataPerPage] = useState(50);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const response = await fetch("https://randomuser.me/api/?results=500");
        if (!response.ok) {
          throw new Error("Something is wrong");
        }
        const data = await response.json();
        setData(data.results);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        setError(error.message);
      }
    };
    fetchData();

    return () => {};
  }, []);

  const indexOfLastUser = currentPage * dataPerPage;
  const indexOfFirstData = indexOfLastUser - dataPerPage;
  const currentData = data.slice(indexOfFirstData, indexOfLastUser);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const handlePrev = (event) => {
    event.preventDefault();
    if (currentPage === 1) {
      setCurrentPage(1);
    } else {
      setCurrentPage((prev) => prev - 1);
    }
  };

  const handleNext = (event) => {
    event.preventDefault();
    if (currentPage === 10) {
      setCurrentPage(10);
    } else {
      setCurrentPage((prev) => prev + 1);
    }
  };

  return (
    <div>
      <NavBar />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route
            path="/user"
            element={
              <User
                data={currentData}
                isLoading={isLoading}
                dataPerPage={dataPerPage}
                totalData={data.length}
                paginate={paginate}
                handlePrev={handlePrev}
                handleNext={handleNext}
                error={error}
              />
            }
          />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
