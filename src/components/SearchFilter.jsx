import React, { useState, useEffect } from "react";

const SearchFilter = ({ data, setFilteredData }) => {
  const [filterType, setFilterType] = useState(""); // Stores the selected filter type
  const [filterValue, setFilterValue] = useState(""); // Stores the value for the selected filter
  const [search, setSearch] = useState("");

  // Extract unique values for dropdown options
  const years = Array.from(new Set(data.map((movie) => movie.year))).sort();
  const genres = Array.from(new Set(data.flatMap((movie) => movie.genre))).sort();
  const ratings = Array.from(
    new Set(data.map((movie) => Math.floor(movie.imdb_rating)))
  ).sort((a, b) => b - a);

  useEffect(() => {
    let filtered = data;
  
    if (search) {
      filtered = filtered.filter((movie) =>
        movie.title.toLowerCase().includes(search.toLowerCase())
      );
    }
  
    if (filterType && filterValue) {
      switch (filterType) {
        case "year":
          filtered = filtered.filter((movie) => movie.year.toString() === filterValue);
          break;
        case "genre":
          filtered = filtered.filter((movie) => movie.genre.includes(filterValue));
          break;
        case "rating":
          filtered = filtered.filter((movie) => movie.imdb_rating >= parseFloat(filterValue));
          break;
        default:
          break;
      }
    }
  
    setFilteredData(filtered);
  }, [search, filterType, filterValue, data]);
  
  return (
    <div className="mb-4 p-4 bg-light border rounded">
      <h5 className="text-muted mb-3"><i className="fa-solid fa-magnifying-glass me-2"></i>Search and Filter</h5>
      <div className="row g-3">
        {/* Search Input */}
        <div className="col-md-4">
          <input
            type="text"
            className="form-control"
            placeholder="Search by movie name..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        {/* Filter Type Dropdown */}
        <div className="col-md-4">
          <select
            className="form-select"
            value={filterType}
            onChange={(e) => {
              setFilterType(e.target.value);
              setFilterValue(""); // Reset filter value when filter type changes
            }}
          >
            <option value="">Select Filter Type</option>
            <option value="year">Filter by Year</option>
            <option value="genre">Filter by Genre</option>
            <option value="rating">Filter by IMDB Rating</option>
          </select>
        </div>

        {/* Filter Value Dropdown */}
        {filterType && (
          <div className="col-md-4">
            <select
              className="form-select"
              value={filterValue}
              onChange={(e) => setFilterValue(e.target.value)}
            >
              <option value="">Select Value</option>
              {filterType === "year" &&
                years.map((year) => (
                  <option key={year} value={year}>
                    {year}
                  </option>
                ))}
              {filterType === "genre" &&
                genres.map((genre) => (
                  <option key={genre} value={genre}>
                    {genre}
                  </option>
                ))}
              {filterType === "rating" &&
                ratings.map((rating) => (
                  <option key={rating} value={rating}>
                    {rating}+
                  </option>
                ))}
            </select>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchFilter;
