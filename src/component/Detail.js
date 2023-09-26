import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { json, useParams, Link } from "react-router-dom";
import Spinner from "react-bootstrap/Spinner";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faStar,
  faClapperboard,
} from "@fortawesome/free-solid-svg-icons";

const Detail = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState([]);

  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    console.log(json);
    setMovie(json.data.movie);
    setLoading(false);
  };

  useEffect(() => {
    getMovie();
  }, []);
  return (
    <div className="detail-area">
      {loading ? (
        <h1 className="detail-data-true">
          <Spinner animation="border" variant="danger" />
          <div className="main-loading">
            <img height={30} src="/images/logo.png" />
          </div>
        </h1>
      ) : (
        <div
          className="detail-data-false"
          style={{ backgroundImage: `url("${movie.background_image}")` }}
        >
          <Container>
            <div className="detail-show-items">
              <div>
                <img width={400} src={movie.large_cover_image} />
              </div>

              <div className="detail-movie-description">
                <div className="detail-title-long">{movie.title_long}</div>
                <div className="detail-movie-rating">
                  <span>
                    <FontAwesomeIcon
                      icon={faHeart}
                      style={{ color: "#dc1a28" }}
                    />{" "}
                    {movie.like_count}
                  </span>
                  <span>
                    <FontAwesomeIcon
                      icon={faStar}
                      style={{ color: "#ffed66" }}
                    />{" "}
                    {movie.rating}/10
                  </span>
                  <span>
                    <FontAwesomeIcon icon={faClapperboard} /> {movie.runtime}min
                  </span>
                </div>
                <div>
                  {movie.genres.map((item) => (
                    <span>
                      #{item} {"   "}
                    </span>
                  ))}
                </div>
                <div className="detail-description-full">
                  {movie.description_full}
                </div>

                <div>
                  <Link
                    to={`https://www.youtube.com/watch?v=${movie.yt_trailer_code}`}
                  >
                    Trailer Video...
                  </Link>
                </div>
              </div>
            </div>
          </Container>
        </div>
      )}
    </div>
  );
};

export default Detail;
