import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Card } from "react-bootstrap";
import useFetch from "../../hooks/useFetch";
import { useSelector } from "react-redux";

const MovieDetails = () => {
  const { id } = useParams();
  const endPoint = `https://api.themoviedb.org/3/movie/${id}?api_key=04229759bd2257e769a077ccb97a575f`;
  const { data: movie, isLoading, isError } = useFetch(endPoint);
  const currentCurrency = useSelector((state) => state.currency.selectCurrency);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>Error fetching data</p>;
  }

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-8">
          {movie && (
            <Card style={{ marginBottom: "20px" }}>
              <Card.Img
                variant="top"
                src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
                alt={movie.title}
              />
              <Card.Body>
                <Card.Title>{movie.title}</Card.Title>
                <Card.Text>
                  Price: {movie.popularity} {currentCurrency}
                </Card.Text>
              </Card.Body>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
