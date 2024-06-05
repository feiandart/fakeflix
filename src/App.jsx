import { useEffect, useState } from "react";
import styles from "./app.module.scss";
import HeroComponent from "./components/HeroComponent/HeroComponent";
import NavBar from "./components/NavBar/NavBar";
import { AUTH_KEY } from "../constants";
import MovieCard from "./components/MovieCard/MovieCard";
import Carousel from "./components/Carousel/Carousel";

function App() {
  const [popularList, setPopularList] = useState([]);

  useEffect(() => {
    fetch("https://api.themoviedb.org/3/movie/popular", {
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${AUTH_KEY}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setPopularList(data.results);
        console.log(popularList)
      })
  }, []);

  return (
    <main className={styles.mainContainer}>
      <NavBar />
      <HeroComponent
        imageUrl={ popularList[0]?.backdrop_path }
        title={ popularList[0]?.original_title }
      />
      <section className={styles.carouselSection}>
      <Carousel list={popularList} />
      </section>
      {/* {
        popularList.map((movie, index) => (
          <MovieCard
            key={ index }
            title={ movie.original_title }
            imgUrl={ movie.backdrop_path }
          />
        ))
      } */}
    </main>
  );
}

export default App;
