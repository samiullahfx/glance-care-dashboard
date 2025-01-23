import React from "react";

const MovieDetailsCard = ({ movie }) => {
    const isBestPicture = movie.oscar_winning_list.includes("Best Picture");
    return (
        <>
            <h5 className="text-muted mb-3"><i className="fa-solid fa-film me-2"></i>Movie Details</h5>
            <div className="card">
                <div className="card-body">
                    <div className="d-flex justify-content-between align-items-center mb-3">
                        <h5 className="card-title py-2 px-0">
                            Movie - {movie.title}
                        </h5>
                        {/* Conditionally render the ribbon if the movie is a Best Picture winner */}
                        {isBestPicture && (
                            <div className="ribbon is-best-picture">
                                <i className="fa-solid fa-trophy me-2"></i> Best Movie By Oscar
                            </div>
                        )}
                    </div>
                    <p className="card-text">
                        <span className="d-inline-block bg-secondary me-2"></span>
                        <strong><i className="fas fa-users"></i> Cast:</strong> {movie.cast.join(", ")}</p>
                    <p className="card-text">
                        <span className="d-inline-block bg-secondary me-2"></span>
                        <strong><i className="fas fa-language"></i> Language(s):{" "}</strong>
                        {movie.language.map((language, index) => {
                            // Array of Bootstrap background color classes
                            const colorClasses = ["bg-success", "bg-warning", "bg-danger", "bg-dark"];

                            // Cycle through the colors using the index
                            const colorClass = colorClasses[index % colorClasses.length];

                            return (
                                <span key={index} className={`badge ${colorClass} rounded-pill me-2`}>
                                    {language}
                                </span>
                            );
                        })}
                    </p>
                    <p className="card-text">
                        <span className="d-inline-block bg-secondary me-2"></span>
                        <strong><i className="fas fa-rocket"></i> Year:</strong> {movie.year}</p>
                    <p className="card-text">
                        <strong>
                            <span className="d-inline-block bg-secondary me-2"></span>
                            <i className="fab fa-renren"></i> Genre:</strong>{" "}
                        {movie.genre.map((genre, index) => (
                            <span key={index} className="badge bg-dark rounded-pill me-2">
                                {genre}
                            </span>
                        ))}
                    </p>
                    <p className="card-text">
                        <span className="d-inline-block bg-secondary me-2"></span>
                        <strong><i className="fas fa-star-half-alt"></i> IMDB Rating:</strong> {movie.imdb_rating} / 10</p>
                    <p className="card-text">
                        <span className="d-inline-block bg-secondary me-2"></span>
                        <strong><i className="fa-solid fa-crown"></i> Oscar Wins:</strong> {movie.oscar_winning}</p>
                    <p className="card-text">
                        <span className="d-inline-block bg-secondary me-2"></span>
                        <strong><i className="fas fa-bullhorn"></i> Oscar Nominations:</strong> {movie.oscar_nominations}</p>
                    <p className="card-text">
                        <span className="d-inline-block bg-secondary me-2"></span>
                        <strong><i className="fas fa-list-alt"></i> Oscar Winning List:</strong> {movie.oscar_winning_list.length > 0 ? movie.oscar_winning_list.join(", ") : "N/A"}
                    </p>

                    <p className="card-text">
                        <span className="d-inline-block bg-secondary me-2"></span>
                        <strong><i className="fas fa-list-alt"></i> Oscar Nominations List:</strong> {movie.oscar_nominations_list.length > 0 ? movie.oscar_nominations_list.join(", ") : "NA"}
                    </p>

                </div>
            </div>
        </>
    );
};

export default MovieDetailsCard;
