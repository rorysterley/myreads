import React, { Component } from 'react'
import Book from './Book'

class BookShelf extends Component {
  render() {
    return (
      <div className="list-books-content">
        <div>
          <div className="bookshelf">
            <h2 className="bookshelf-title">{this.props.shelfTitle}</h2>
            <div className="bookshelf-books">
              <ol className="books-grid">
                // Add books array here
                <li><Book /></li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default BookShelf
