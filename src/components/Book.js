import Page from "./Page"
import styles from "./Book.module.css"
import LoadingPage from "./LoadingPage";

function Book({ page }){

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
                <Page/>
                <Page/>
            </div>
            <p>Page {page}/5</p>
        </div>
    )

    return (
        pages
    )
}

export default Book;