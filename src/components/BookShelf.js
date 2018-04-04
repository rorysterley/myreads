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
                {this.props.shelf.map(book => 
                  <li key={book.id}>
                    <Book
                      title={book.title}
                      authors={book.authors}
                      imageURL={book.imageLinks.thumbnail}
                    />
                  </li>
                )}
              </ol>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default BookShelf
