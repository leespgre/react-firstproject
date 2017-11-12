/**
 * Created by sanolab on 2017/11/02.
 */
import React, {Component} from 'react'
import {Link} from 'react-router-dom'
// import * as BooksAPI from '../BooksAPI'
import BookDetails from './BookDetails'
import escapeRegExp from 'escape-string-regexp'
import sortBy from 'sort-by'
class SearchPage extends Component {


   state = {
       query: '',

   };


    updateQuery = (query) => {
        this.setState({query: query.trim()})
    };



    render() {
        const {update,booksList} = this.props;
        const {query} = this.state;
        // this.setState({books:BookList});
        // console.log('in side search',booksList);

        let showingBooks;
        if(query) {
            const match = new RegExp(escapeRegExp(query), 'i')
            showingBooks = booksList.filter((book) => match.test(book.title))
        }
        else {
            showingBooks=[]
        }
        console.log('show',showingBooks);

        showingBooks.sort(sortBy('authors'));
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
                                        <BookDetails
                                            bookDetails={book}
                                            updateBook={update}/>
                                    </li>

                                ))}
                    </ol>
                </div>
            </div>
        )
    }
}

export default SearchPage;