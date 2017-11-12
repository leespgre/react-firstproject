/**
 * Created by sanolab on 2017/11/02.
 */
import React, {Component} from 'react'

class BookDetails extends Component {
    constructor(props) {
    super(props);
    this.state = {value: props.bookDetails.shelf,
                  test:''};

}


handleChange(event) {
    this.setState({value: event.target.value});
    // console.log('value in handleChange',this.state.value)

}




    render() {
        const {bookDetails}=this.props;

        return (
            <div className="book">
                <div className="book-top">
                    <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${bookDetails.imageLinks.smallThumbnail})` }}></div>
                    <div className="book-shelf-changer">
                        <select value={this.state.value} onChange={(event) => {
                            this.handleChange(event)
                            this.props.updateBook(this.props.bookDetails,event.target.value)
                        }
                        }>
                            <option value="none" disabled>Move to...</option>
                            <option value="currentlyReading">Currently Reading</option>
                            <option value="wantToRead">Want to Read</option>
                            <option value="read">Read</option>
                            <option value="none">None</option>
                        </select>
                        <div>
                            {this.state.test}
                        </div>
                    </div>
                </div>
                <div className="book-title">{bookDetails.title}</div>
                <div className="book-authors">{bookDetails.authors}</div>
            </div>
        )
    }
}

export default BookDetails;