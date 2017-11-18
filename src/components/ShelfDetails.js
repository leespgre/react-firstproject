/**
 * Created by sanolab on 2017/11/17.
 */
import React from 'react'
import BookDetails from './BookDetails'

const ShelfDetails = (props) => (
    <div className="bookshelf">
        <h2 className="bookshelf-title">{props.shelfTitle}</h2>
        <div className="bookshelf-books">
            <ol className="books-grid">
                {props.booksList.filter((book)=>(book.shelf===props.shelfName)).map(book =>(
                    <li key={book.id}>
                        <BookDetails
                            bookDetails={book}
                            updateBook={props.update}/>
                    </li>
                ))}
            </ol>
        </div>
    </div>
)

export default ShelfDetails;