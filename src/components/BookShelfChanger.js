import React, { Component } from 'react'
import * as BooksAPI from './../BooksAPI'

class BookShelfChanger extends Component {
  handleChange = e => {
    let book = { id: this.props.id }
    let shelf = e.target.value
    
    BooksAPI.update(book, shelf)
      .then((res) => {
        // re-render page
        this.props.callback()
      })
  }
  
  render() {
    return (
      <div className="book-shelf-changer">
        <select value={this.props.shelf} onChange={this.handleChange}>
          <option value="none" disabled>Move to...</option>
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
