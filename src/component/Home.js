import React, { useEffect, useState } from "react";
import Movie from "./Movie";
import Header from "./Header";
import { Container } from "react-bootstrap";
import Spinner from "react-bootstrap/Spinner";
import Footer from "./Footer";

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const [selectedRating, setSelectedRating] = useState(""); // 선택한 평점을 저장하는 state

  const ratingList = [1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0, 9.0];

  const getMovies = async () => {
    const response = await fetch(
      `https://yts.mx/api/v2/list_movies.json?minimum_rating=${selectedRating}&sort_by=year`
    );

    const json = await response.json();
    setMovies(json.data.movies);
    setLoading(false);
  };
  console.log(movies);
  const RatingChange = (event) => {
    const selectedValue = event.target.value; // 선택한 옵션의 값을 추출
    setSelectedRating(selectedValue); // state에 선택한 값을 저장
  };

  useEffect(() => {
    getMovies();
  }, [selectedRating]); // rating 값이 변경될 때마다 getMovies 함수 호출

  useEffect(() => {
    getMovies();
  }, []); // 처음 로딩 시 한 번만 실행

  return (
    <div className="main-page">
      <Header />
      <Container>
        {loading ? (
          <h1>
            <Spinner animation="border" variant="danger" />
            <div className="main-loading">
              <img height={30} src="images/logo.png" />
            </div>
          </h1>
        ) : (
          <div>
            <div className="rating-movie">
              <p>평점 순으로 나열하기</p>
              <select onChange={RatingChange} value={selectedRating}>
                <option value="">전체</option> {/* 선택 안 함 */}
                {ratingList.map((list) => (
                  <option key={list} value={list}>
                    {list}점 이상
                  </option>
                ))}
              </select>
            </div>

            {movies.map((movie) => (
              <Movie movie={movie} key={movie.id} />
            ))}
          </div>
        )}
      </Container>
      <Footer />
    </div>
  );
};

export default Home;
