import styles from "./errorpage.module.scss";

import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
    const error = useRouteError();
    console.error(error);
    
    return (
        <div className={styles.errorpage}>
            <h1>Oops!</h1>
            <p>Sorry, an unexpected error has occoured.</p>
            <p>
                <i>{error.statusText || error.message}</i>
            </p>
        </div>
    )
}