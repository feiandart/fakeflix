/* eslint-disable react/prop-types */
import styles from './moviecard.module.scss';

const MovieCard = ({ title = "Movie Title" }) => {

    return (
        <div className={styles.movieCard}>
            <img src="https://picsum.photos/200/300" alt="movie-card-img" />
            <p>{ title }</p>
        </div>
    )
}

export default MovieCard;