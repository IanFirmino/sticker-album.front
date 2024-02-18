import Page from "./Page"

function Book({ page }){
    return (
        <div className="Book">
            <Page/>
            <Page/>
            <p>Page {page}/5</p>
        </div>
    )
}

export default Book;