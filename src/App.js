import React from 'react'
import './App.css'
import {Route} from 'react-router-dom'
import SearchPage from './components/SearchPage'
import BookShelve from './components/BookShelve'
import * as BooksAPI from './BooksAPI'
class BooksApp extends React.Component {

  state = {

      books:[],

  };

  componentDidMount() {
      BooksAPI.getAll().then((books) => {
          this.setState({books:books})
      })
  }
  updateShelf = (book,shelf) => {
      // this.setState((state) =>{books: state.books.filter((item) => item.id!==book.id)})
      BooksAPI.update(book,shelf).then(
          book.shelf=shelf

      )
      // this.setState((state) => {books: state.books.concat([book])})
      // console.log('call update',book.shelf)
}


  render() {
      // console.log('books',this.state.books)


    return (
      <div className="app">
        <Route path="/search" render={() =>(
            <SearchPage booksList={this.state.books}
                        update={(book,newShelf) => {
                            this.updateShelf(book,newShelf)
                        }}
            />)}/>
        <Route exact path="/" render={({history}) =>(
            <BookShelve booksList={this.state.books}
                        update={(book,newShelf) => {
                            this.updateShelf(book,newShelf)
                            history.push("/")
                        }}
                        />)}/>
      </div>
    )
  }
}

export default BooksApp
