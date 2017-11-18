import React from 'react'
import './App.css'
import {Switch,Route} from 'react-router-dom'
import SearchPage from './components/SearchPage'
import BookShelve from './components/BookShelve'
import * as BooksAPI from './BooksAPI'
class BooksApp extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            books : []
        }


    }

  componentDidMount() {
      BooksAPI.getAll().then((bookServer) => {
          this.setState({books:bookServer})
      })
  }
  updateShelf = (book,shelf) => {
      BooksAPI.update(book,shelf).then(
              book.shelf=shelf
      )
      
}



  render() {

    return (
      <div className="app">
          <Switch>
            <Route path="/search" render={({history}) =>(
                <SearchPage  booksList={this.state.books}
                             update={(book,newShelf) => {
                                this.updateShelf(book,newShelf)
                                history.push("/search")}}
                />)}/>
            <Route exact path="/" render={({history}) =>(
                <BookShelve booksList={this.state.books}
                            update={(book,newShelf) => {
                                this.updateShelf(book,newShelf)
                                history.push("/")
                            }}
                            />)}/>
          </Switch>
      </div>
    )
  }
}

export default BooksApp
