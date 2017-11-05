/**
 * Created by sanolab on 2017/11/02.
 */
import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import BookDetails from './BookDetails'

class BookShelve extends Component {
    Books = [
        {
            bookId:'001',
            bookTitile: 'To Kill the mockingbird',
            bookAuthor: 'Harry lee',
            imageURL:'http://books.google.com/books/content?id=PGR2AwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73-GnPVEyb7MOCxDzOYF1PTQRuf6nCss9LMNOSWBpxBrz8Pm2_mFtWMMg_Y1dx92HT7cUoQBeSWjs3oEztBVhUeDFQX6-tWlWz1-feexS0mlJPjotcwFqAg6hBYDXuK_bkyHD-y&source=gbs_api',
        },

        {
            bookId:'002',
            bookTitile: "Ender's Game ",
            bookAuthor: 'Orson Scott Card',
            imageURL:'http://books.google.com/books/content?id=yDtCuFHXbAYC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE72RRiTR6U5OUg3IY_LpHTL2NztVWAuZYNFE8dUuC0VlYabeyegLzpAnDPeWxE6RHi0C2ehrR9Gv20LH2dtjpbcUcs8YnH5VCCAH0Y2ICaKOTvrZTCObQbsfp4UbDqQyGISCZfGN&source=gbs_api',
        },

        {
            bookId:'003',
            bookTitile: "1776 ",
            bookAuthor: 'David McCullough',
            imageURL:'http://books.google.com/books/content?id=uu1mC6zWNTwC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73pGHfBNSsJG9Y8kRBpmLUft9O4BfItHioHolWNKOdLavw-SLcXADy3CPAfJ0_qMb18RmCa7Ds1cTdpM3dxAGJs8zfCfm8c6ggBIjzKT7XR5FIB53HHOhnsT7a0Cc-PpneWq9zX&source=gbs_api'
        },

        {
            bookId:'004',
            bookTitile: "Harry Potter and the Sorcerer's Stone ",
            bookAuthor: 'J.K. Rowling',
            imageURL:'http://books.google.com/books/content?id=wrOQLV6xB-wC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE72G3gA5A-Ka8XjOZGDFLAoUeMQBqZ9y-LCspZ2dzJTugcOcJ4C7FP0tDA8s1h9f480ISXuvYhA_ZpdvRArUL-mZyD4WW7CHyEqHYq9D3kGnrZCNiqxSRhry8TiFDCMWP61ujflB&source=gbs_api'
        },

        {
            bookId:'005',
            bookTitile: "The Hobbit",
            bookAuthor: 'J.R.R. Tolkien',
            imageURL:'http://books.google.com/books/content?id=pD6arNyKyi8C&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE70Rw0CCwNZh0SsYpQTkMbvz23npqWeUoJvVbi_gXla2m2ie_ReMWPl0xoU8Quy9fk0Zhb3szmwe8cTe4k7DAbfQ45FEzr9T7Lk0XhVpEPBvwUAztOBJ6Y0QPZylo4VbB7K5iRSk&source=gbs_api'
        },

        {
            bookId:'006',
            bookTitile: "Oh, the Places You'll Go!",
            bookAuthor: 'Seuss',
            imageURL:'http://books.google.com/books/content?id=1q_xAwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE712CA0cBYP8VKbEcIVEuFJRdX1k30rjLM29Y-dw_qU1urEZ2cQ42La3Jkw6KmzMmXIoLTr50SWTpw6VOGq1leINsnTdLc_S5a5sn9Hao2t5YT7Ax1RqtQDiPNHIyXP46Rrw3aL8&source=gbs_api'
        },

        {
            bookId:'007',
            bookTitile: "The Adventures of Tom Sawyer",
            bookAuthor: 'Mark Twain',
            imageURL:'http://books.google.com/books/content?id=32haAAAAMAAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE72yckZ5f5bDFVIf7BGPbjA0KYYtlQ__nWB-hI_YZmZ-fScYwFy4O_fWOcPwf-pgv3pPQNJP_sT5J_xOUciD8WaKmevh1rUR-1jk7g1aCD_KeJaOpjVu0cm_11BBIUXdxbFkVMdi&source=gbs_api'
        }


    ];

    state = {
        // currentReading:[this.Books.filter((book) => (book.bookId === '001')||(book.bookId === '002') )],
        currentReading:this.Books.filter((book) => (book.bookId==='001')||(book.bookId==='002')),
        wantToRead:this.Books.filter((book) => (book.bookId==='003')||(book.bookId==='004')),
        Read:this.Books.filter((book) => (book.bookId==='005')||(book.bookId==='006')||(book.bookId==='007'))

    };

    // updateCurrentReading = (book) => {
    //     this.setState({currentReading:(book)=>{}})
    // }

    render() {

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
                                    {this.state.currentReading.map((book)=>(
                                        <li key={book.bookId}>
                                            <BookDetails
                                                bookGroup="currentlyReading"
                                                bookDetails={book}/>
                                        </li>

                                    ))}

                                </ol>
                            </div>
                        </div>
                        <div className="bookshelf">
                            <h2 className="bookshelf-title">Want to Read</h2>
                            <div className="bookshelf-books">
                                <ol className="books-grid">
                                    {this.state.wantToRead.map((book)=>(
                                    <li key={book.bookId}>
                                        <BookDetails
                                            bookGroup="wantToRead"
                                            bookDetails={book}/>
                                    </li>

                                    ))}
                                </ol>
                            </div>
                        </div>
                        <div className="bookshelf">
                            <h2 className="bookshelf-title">Read</h2>
                            <div className="bookshelf-books">
                                <ol className="books-grid">
                                    {this.state.Read.map((book)=>(
                                        <li key={book.bookId}>
                                            <BookDetails
                                                bookGroup="read"
                                                bookDetails={book}/>
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