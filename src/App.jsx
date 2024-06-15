import { useLoaderData } from "react-router-dom";
import { fetchMovies } from "./utils/api";
import { popularURL, topRatedURL } from "./utils/endpoints";
import { createContext, useState } from "react";
import styles from "./app.module.scss";
import Carousel from "./components/Carousel/Carousel";
import HeroComponent from "./components/HeroComponent/HeroComponent";
import Modal from "./components/Modal/Modal";

export const globalContext = createContext();

function App() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [movieDetails, setMovieDetails] = useState({});

  const movies = useLoaderData();

  const value = {
    setIsModalVisible,
    setMovieDetails,
    movieDetails,
  };

  return (
    <globalContext.Provider value={value}>
      <main className={styles.mainContainer}>
        <HeroComponent movie={movies.hero.movie} />
        <section className={styles.carouselSection}>
          <Carousel list={movies.popData} />
        </section>

        {movies.topRated && (
          <section className={styles.carouselSection}>
            <Carousel list={movies.topRated} />
          </section>
        )}
        {/* questo sopra serve a non far spuntare le categorie se manca l'oggetto sotto */}
        {isModalVisible && <Modal />}
      </main>
    </globalContext.Provider>
  );
}

/* le funzioni loader gestiscono informazioni dall'esterno e sono funzioni asincrone */
export const appLoader = async () => {
  const [popularData, topRatedData] = await Promise.all([
    fetchMovies(popularURL),
    fetchMovies(topRatedURL),
  ]);
  /* le promise dell'async hanno sempre bisogno di await
    l'ordine degli oggetti dentro la const corrisponde a quello delle fetch interne
    se ne può saltare uno facendo tipo pippo,, paperino, etc quindi 2 virgole */

  const movies = {
    hero: {
      movie: popularData.results[0]
    },
    popData: popularData.results.filter((_, index) => index < 8),
    topRated: topRatedData.results.filter((_, index) => index < 8),
  };

  return movies;
};

export default App;
