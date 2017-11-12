/**
 * Created by sanolab on 2017/11/02.
 */
import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import BookDetails from './BookDetails'
// import * as BooksAPI from '../BooksAPI'

class BookShelve extends Component {


    render() {
        const {booksList,update} = this.props;
        // console.log('bookList',booksList);

        return (
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                    <div>
                        <div className="bookshelf">
                            <h2 className="bookshelf-title">Currently Reading</h2>
                            <div className="bookshelf-books">
                                <ol className="books-grid">
                                    {booksList.filter((book)=>(book.shelf==='currentlyReading')).map(book =>(
                                        <li key={book.id}>
                                            <BookDetails
                                                bookDetails={book}
                                                updateBook={update}/>
                                        </li>
                                    ))}
                                </ol>
                            </div>
                        </div>
                        <div className="bookshelf">
                            <h2 className="bookshelf-title">Want To Read</h2>
                            <div className="bookshelf-books">
                                <ol className="books-grid">
                                    {booksList.filter((book)=>(book.shelf==='wantToRead')).map(book =>(
                                        <li key={book.id}>
                                            <BookDetails
                                                bookDetails={book}
                                                updateBook={update}/>
                                        </li>
                                    ))}
                                </ol>
                            </div>
                        </div>
                        <div className="bookshelf">
                            <h2 className="bookshelf-title">Read</h2>
                            <div className="bookshelf-books">
                                <ol className="books-grid">
                                    {booksList.filter((book)=>(book.shelf==='read')).map(book =>(
                                        <li key={book.id}>
                                            <BookDetails
                                                bookDetails={book}
                                                updateBook={update}/>
                                        </li>
                                    ))}
                                </ol>
                            </div>
                        </div>



                    </div>
                </div>
                <div className="open-search">
                    <Link to="/search"/>
                </div>
            </div>

        )
    }
}

export default BookShelve;