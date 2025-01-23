import React, { useState, useEffect, useCallback } from "react";
import OscarOverview from "./components/OscarOverview";
import TopPerformers from "./components/TopPerformers";
import SearchFilter from "./components/SearchFilter";
import LanguageInsights from "./components/LanguageInsights";
import CountryInsights from "./components/CountryInsights";
import MovieDetailsCard from "./components/MovieDetailsCard";
import data from "./data/api.json";
import profileImage from './assets/profile.png';

const App = () => {
  const [filteredData, setFilteredData] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [, setIsFilterActive] = useState(false);

  useEffect(() => {
    // Simulate a 1-second loading time
    const timer = setTimeout(() => {
      setFilteredData(data);
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const handleFilterUpdate = useCallback((filteredData) => {
    setFilteredData(filteredData);
    setIsFilterActive(filteredData.length !== data.length);
    if (filteredData.length !== data.length) {
      setSelectedMovie(null);
    }
  }, [data.length]);

  return (
    <div className="container mt-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h4 className="text-center text-dark"><i className="fa-solid fa-layer-group me-2"></i>Movie Insights Dashboard</h4>
        {/* User Profile on Top Right Side */}
        <div className="d-flex align-items-center">
          <img src={profileImage} alt="Shamiulla Shaik" className="rounded-circle" width={40} height={40} />
          <span className="ms-2 text-dark">Shamiulla Shaik</span>
        </div>
      </div>

      {loading ? (
        <div className="text-center">
          <div className="spinner-border text-secondary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : (
        <>
          <SearchFilter data={data} setFilteredData={handleFilterUpdate} />

          <div className="row">
            <div className="col-12 col-md-4">
              <OscarOverview data={filteredData} />
            </div>
            <div className="col-12 col-md-4">
              <LanguageInsights data={filteredData} />
            </div>
            <div className="col-12 col-md-4">
              <CountryInsights data={filteredData} />
            </div>
          </div>
          <div className="row g-3">
            {/* Column for Top Performers & Movie Details */}
            <div className="col-12 d-flex flex-lg-row flex-column gap-3">
              {/* Top Performers */}
              <div className="col-lg-6 col-12 p-0">
                <div className="h-100">
                  <TopPerformers data={filteredData} setSelectedMovie={setSelectedMovie} />
                </div>
              </div>

              {/* Movie Details Card */}
              {selectedMovie && (
                <div className="col-lg-6 col-12 p-0">
                  <div className="h-100">
                    <MovieDetailsCard movie={selectedMovie} />
                  </div>
                </div>
              )}
            </div>
          </div>
        </>
      )}

      <footer className="footer mt-4 text-center">
        <p>© 2025 Movie Insights Dashboard. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;
