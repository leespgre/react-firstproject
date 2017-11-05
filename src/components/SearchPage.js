/**
 * Created by sanolab on 2017/11/02.
 */
import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import * as BooksAPI from '../BooksAPI'
import BookSearch from './BookSearch'
import escapeRegExp from 'escape-string-regexp'
import sortBy from 'sort-by'
class SearchPage extends Component {



    state = {
        booksDefaults:[],
        books:[],
        query:''
    }
    // componentDidMount() {
    //     BooksAPI.getAll().then((books) => {
    //         this.setState({booksDefaults:books})
    //     })
    // }

    updateQuery = (query) => {
        this.setState({query: query.trim()})
    }
    searchBook = (query) => {
        BooksAPI.search(query).then((books) => this.setState({books}))
    }


    render() {

        const {query,books,booksDefaults} = this.state;
        console.log('in side search',books);
        this.setState({booksDefaults:this.props.booksList})
        let showingBooks
        if(query) {
            this.searchBook(query);
            showingBooks = books
        }
        else {
            showingBooks = booksDefaults
        }

        // if (query) {
        //
        //     const match = new RegExp(escapeRegExp(query),'i')
        //     showingBooks = books.filter((book) => match.test(book.title))
        //     test = this.searchBook(query)
        //
        //     console.log('test search',test)
        //   }
        //  else {
        //     showingBooks = books
        // }
        showingBooks.sort(sortBy('authors'))
        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link className="close-search" to="/" />
                    <div className="search-books-input-wrapper">

                        <input type="text"
                               placeholder="Search by title or author"
                               value={this.state.query}
                               onChange={(event) => this.updateQuery(event.target.value)}
                        />
                    </div>
                </div>


                <div className="search-books-results">
                    <ol className="books-grid">
                                {showingBooks.map((book)=>(
                                    <li key={book.id}>
                                        <BookSearch
                                            bookDetails={book}/>
                                    </li>

                                ))}
                    </ol>
                </div>
            </div>
        )
    }
}

export default SearchPage;