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
                      id={book.id ? book.id : 'No id given'}
                      title={book.title ? book.title : 'No title given'}
                      authors={book.authors ? book.authors : 'No author given'}
                      imageURL={book.imageLinks ? book.imageLinks.thumbnail : ''}
                      shelf={book.shelf ? book.shelf : 'none'}
                      callback={this.props.callback}
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
