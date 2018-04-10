import React from 'react'
import * as BooksAPI from './../BooksAPI'

class BookShelfChanger extends React.Component {
  theShelf = this.props.shelf

  handleChange = e => {
    let book = { id: this.props.id }
    let shelf = e.target.value
    this.theShelf = shelf
    
    BooksAPI.update(book, shelf)
      .then((res) => {
        // re-render page
        this.props.callback()
      })
  }
  
  render() {
    return (
      <div className="book-shelf-changer">
      <select value={this.theShelf} onChange={this.handleChange}>
        <option value="null" disabled>Move to...</option>
        <option value="currentlyReading">Currently Reading</option>
        <option value="wantToRead">Want to Read</option>
        <option value="read">Read</option>
        <option value="none">None</option>
      </select>
      </div>
    )
  }
}

export default BookShelfChanger
