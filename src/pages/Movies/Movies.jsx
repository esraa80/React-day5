import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Card } from "react-bootstrap";
import {
  moviesAction,
  moviesPagenationAction,
} from "../../store/slices/MoviesSlice";
import { Link } from "react-router-dom";

export default function Movies() {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const movies = useSelector((state) => state.movies.movies);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(moviesPagenationAction(currentPage));
  }, [currentPage]);

  console.log(movies);
  console.log(currentPage);
  const handleNextPage = () => {
    if (currentPage > totalPages) {
      setCurrentPage(currentPage + 1);
    }
    console.log(currentPage);
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };
  return (
    <>
      <div className="d-flex flex-wrap justify-content-around">
        {movies &&
          movies.map((movie) => (
            <Link to={`/${movie.id}`}>
              <Card
                key={movie.id}
                style={{ width: "18rem", marginBottom: "20px" }}
              >
                <Card.Img
                  variant="top"
                  src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
                  alt={movie.title}
                />
                <Card.Body>
                  <Card.Title>{movie.title}</Card.Title>
                </Card.Body>
              </Card>
            </Link>
          ))}
      </div>
      <div className="d-flex justify-content-between ">
        <button
          className="btn btn-success"
          onClick={handlePrevPage}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <div>
          <span>Page: {currentPage} </span>
          <button
            className="btn btn-success"
            onClick={handleNextPage}
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
}
