import { useEffect, useState } from "react";
import styles from "./app.module.css";
import HeroComponent from "./components/HeroComponent/HeroComponent";
import NavBar from "./components/NavBar/NavBar";
import { AUTH_KEY } from "../constants";
import MovieCard from "./components/MovieCard/MovieCard";

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
      .then((data) => setPopularList(data.results))
      .then(() => console.log(popularList));
  }, []);

  return (
    <main className={styles.mainContainer}>
      <NavBar />
      <HeroComponent
        imageUrl={ popularList[0]?.backdrop_path }
        title={ popularList[0]?.original_title }
      />
      <MovieCard />
    </main>
  );
}

export default App;
