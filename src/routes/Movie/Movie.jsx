import styles from "./movie.module.scss";
import { useLoaderData } from "react-router-dom";
import { fetchMovies } from "../../utils/api";
import { BASE_URL } from "../../utils/endpoints";
import HeroComponent from "../../components/HeroComponent/HeroComponent";

export default function Movie() {
  const movie = useLoaderData();

  return (
    <>
      <div className={styles.movie}>
        <HeroComponent title={movie.title} imageUrl={movie.backdrop_path} />
      </div>
    </>
  );
}

export const movieLoader = async ({ params }) => {
  const movieUrl = `${BASE_URL}/${params.id}?language=en-US`;
  const movie = await fetchMovies(movieUrl);

  return movie;
};

/* params gli prende in automatico tutti i dati che gli servono */
