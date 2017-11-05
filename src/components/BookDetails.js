/**
 * Created by sanolab on 2017/11/02.
 */
import React, {Component} from 'react'

class BookDetails extends Component {
    constructor(props) {
    super(props);
    this.state = {value: ''};
    this.handleChange = this.handleChange.bind(this);


}


handleChange(event) {
    this.setState({value: event.target.value});
}

defaultState(group) {
        this.setState({value: group})
}


    render() {
        const {bookDetails,bookGroup}=this.props;
        return (
            <div className="book">
                <div className="book-top">
                    <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${bookDetails.imageURL})` }}></div>
                    <div className="book-shelf-changer">
                        <select value={this.state.value} onChange={this.handleChange}>
                            <option value="none" disabled>Move to...</option>
                            <option value="currentlyReading">Currently Reading</option>
                            <option value="wantToRead">Want to Read</option>
                            <option value="read">Read</option>
                            <option value="none">None</option>
                        </select>
                    </div>
                </div>
                <div className="book-title">{bookDetails.bookTitile}</div>
                <div className="book-authors">{bookDetails.bookAuthor}</div>
            </div>
        )
    }
}

export default BookDetails;