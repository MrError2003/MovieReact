import React from "react";
import MovieCard from "./MovieCard";
import { Container, Row, Col } from "react-bootstrap";

const movies = [
  {
    title: "Pelicula 1",
    description: "Descripción de la película 1.",
    imageUrl: "https://m.media-amazon.com/images/I/61XXvCFNaRL._AC_SL1024_.jpg"
  },
  {
    title: "Pelicula 2",
    description: "Descripción de la película 2.",
    imageUrl: "https://www.joblo.com/wp-content/uploads/2019/03/avengers-endgame-poster-xl-1.jpg",
  },
  {
    title: "Pelicula 3",
    description: "Descripción de la película 2.",
    imageUrl: "https://www.aceprensa.com/wp-content/uploads/2018/03/333339-0.jpg",
  },
  

  // ... Agrega más películas aquí
];

const MovieList = () => {
  return (
    <Container>
      <Row>
        {movies.map((movie, index) => (
          <Col key={index} xs={12} md={4}>
            <MovieCard
              title={movie.title}
              description={movie.description}
              imageUrl={movie.imageUrl}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
};
export default MovieList;