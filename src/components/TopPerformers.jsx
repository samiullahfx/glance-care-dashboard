import React, { useState } from "react";

const TopPerformers = ({ data, setSelectedMovie }) => {
    const [selectedTitle, setSelectedTitle] = useState(null); // Track selected movie title
    const sortedData = [...data].sort((a, b) => b.imdb_rating - a.imdb_rating);

    const handleClick = (movie) => {
        setSelectedTitle(movie.title); // Update the selected title
        setSelectedMovie(movie); // Pass the selected movie to the parent
    };

    return (
        <div className="mb-4">
            <h5 className="text-muted mb-3"><i className="fa-solid fa-trophy me-2"></i>Top Performers
            </h5>
            <ul className="list-group">
                {sortedData.slice(0, 13).map((movie, index) => (
                    <li
                        key={`${movie.title}-${index}`}
                        className={`list-group-item d-flex justify-content-between align-items-center ${selectedTitle === movie.title ? "bg-secondary text-white" : ""
                            }`}
                        onClick={() => handleClick(movie)}
                        style={{ cursor: "pointer" }} // Add pointer cursor for better UX
                    >
                        {movie.title}
                        <span className="badge bg-light text-dark rounded-pill">
                            {movie.imdb_rating}
                        </span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TopPerformers;
