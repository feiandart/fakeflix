/* eslint-disable react/prop-types */
import styles from "./modal.module.scss";
import { IoMdCloseCircle } from "react-icons/io";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { globalContext } from "../../App";


const Modal = () => {

  const { setIsModalVisible, movieDetails } = useContext(globalContext)

  return (
    <div className={styles.modalContainer}>
      <div className={styles.modalWindow}>
        <img src={`https://image.tmdb.org/t/p/w500${movieDetails.backdrop_path}`} alt="" />
        <div className={styles.modalInfo}>
          <h2>{movieDetails.title}</h2>
          <p className={styles.overview}>{movieDetails.overview}</p>
        </div>
        <div className={styles.closeButtonContainer}>
          <IoMdCloseCircle
            className={styles.iconClose}
            onClick={() => setIsModalVisible(false)}
          />
        </div>
        <NavLink to={`catalog/${movieDetails.id}`}>Vai al film</NavLink>
      </div>
    </div>
  );
};

export default Modal;
