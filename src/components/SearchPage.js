/**
 * Created by sanolab on 2017/11/02.
 */
import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import * as BooksAPI from '../BooksAPI'
import BookDetails from './BookDetails'
import escapeRegExp from 'escape-string-regexp'

class SearchPage extends Component {


    constructor(props) {
        super(props);
        this.state = {
            query: '',
            booksSearch : []
        };
    this.updateQuery = this.updateQuery.bind(this)
    }

    updateQuery(event){
        this.setState({query: event.target.value})
        BooksAPI.search(event.target.value).then( (books) => {
            this.setState({booksSearch:books})
            }

        )
    };



    render() {
        const {booksList,update} = this.props;
        const {query,booksSearch} = this.state;


        let showingBooks = [];
        if(query) {
            const match=new RegExp(escapeRegExp(query),'i')
            showingBooks=booksList.filter((book) => match.test(book.title))
            showingBooks=showingBooks.concat(booksSearch)
        }
        else {
            showingBooks=[]
        }

        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link className="close-search" to="/" />
                    <div className="search-books-input-wrapper">

                        <input type="text"
                               placeholder="Search by title or author"
                               value={this.state.query}
                               onChange={this.updateQuery}
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