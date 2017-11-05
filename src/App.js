import React from 'react'
// import * as BooksAPI from './BooksAPI'
import './App.css'
import {Route} from 'react-router-dom'
import SearchPage from './components/SearchPage'
import BookShelve from './components/BookShelve'
import * as BooksAPI from './BooksAPI'
class BooksApp extends React.Component {

  state = {

      books:[],
      shelf: {
          currentlyReading : [],
          wantToRead:[],
          read:[]
      }
  };

  componentDidMount() {
      BooksAPI.getAll().then((books) => {
          this.setState({books:books})
      })
  }

  updateShelf = (book,shelf) => {
      BooksAPI.update(book,shelf).then((book,shelf) =>{
          this.setState(state => {
              state.shelf.currentlyReading.concat([book])
              }

          )
      })
  }



  render() {
      console.log('books',this.state.books)


    return (
      <div className="app">
        <Route path="/search" render={() =>(
            <SearchPage booksList={this.state.books}/>)}/>
        <Route exact path="/" render={() =>(<BookShelve books={this.book}/>)}/>
      </div>
    )
  }
}

export default BooksApp
