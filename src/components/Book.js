import Page from "./Page"
import styles from "./Book.module.css"

function Book({ page }){
    return (
        <div className={styles.bookContainer}>
            <div className={styles.pagesContainer}>
                <Page/>
                <Page/>
            </div>
            <p>Page {page}/5</p>
        </div>
    )
}

export default Book;