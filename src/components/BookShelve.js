/**
 * Created by sanolab on 2017/11/02.
 */
import React from 'react'
import {Link} from 'react-router-dom'
import ShelfDetails from './ShelfDetails'


const BookShelve = (props) => {


    let shelfArray = [ {shelfName : 'currentlyReading',
                        shelfTitle: 'Currently Reading'
                        },
                        {shelfName : 'wantToRead',
                            shelfTitle: 'Want To Read'
                        },
                        {shelfName : 'read',
                            shelfTitle: 'Read'
                        },
                        ]

    return (
        <div className="list-books">
            <div className="list-books-title">
                <h1>MyReads</h1>
            </div>
            <ol className="list-books-content">
                {shelfArray.map((shelf) => (
                    <li key={shelf.shelfName}>
                        <ShelfDetails booksList={props.booksList}
                                      update={props.update}
                                      shelfName={shelf.shelfName}
                                      shelfTitle={shelf.shelfTitle}/>
                    </li>

                ))}
            </ol>
            <div className="open-search">
                <Link to="/search"/>
            </div>
        </div>
    )


}


export default BookShelve;