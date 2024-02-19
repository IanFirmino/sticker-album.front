import Page from "./Page"
import styles from "./Book.module.css"
import LoadingPage from "./LoadingPage";
import { useState } from "react";

function Book({ page }){

    const [loading, setLoading] = useState(false);

    const img = "https://via.placeholder.com/150";
    const photos = [
        {id: 1, description: 'foto 1', name: 't', img: img},
        {id: 2, description: 'foto 2', name: 'y', img: img},
        {id: 3, description: 'foto 3', name: 'p', img: img},
        {id: 4, description: 'foto 4', name: 'i', img: img},
    ];

    const LoadingPages = (
        <div className={styles.bookContainer}>
            <div>
                <LoadingPage/>
            </div>
            <p>Page {page}/5</p>
        </div>
    );

    const pages = (
        <div className={styles.bookContainer}>
            <div className={styles.pagesContainer}>
                <div>
                    <Page photos={photos}/>
                </div>
                <div>
                    <Page photos={photos}/>
                </div>
            </div>
            <p>Page {page}/5</p>
        </div>
    )

    return (
        (loading ? LoadingPages : pages)
    )
}

export default Book;