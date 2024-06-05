/* eslint-disable react/prop-types */
import styles from './moviecard.module.scss';

const MovieCard = ({ title = "Movie Title", imgUrl }) => {

    return (
        <div className={styles.movieCard}>
            <img src={`https://image.tmdb.org/t/p/w500${imgUrl}`} alt="movie-card-img" />
            <p>{ title }</p>
        </div>
    )
}

export default MovieCard;