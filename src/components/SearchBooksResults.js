import React, { Component } from 'react'
import Book from './Book'

class SearchBooksResults extends Component {
  render() {
    return (
      <div className="search-books-results">
        <ol className="books-grid"> 
          {this.props.books.map(book => 
            <li key={book.id}>
              <Book
                id={book.id ? book.id : 'No id given'}
                title={book.title ? book.title : 'No title given'}
                authors={book.authors ? book.authors : 'No author given'}
                imageURL={book.imageLinks ? book.imageLinks.thumbnail : ''}
                shelf={book.shelf ? book.shelf : 'none'}
              />
            </li>
          )}    
        </ol>
      </div>
    )
  }
}

export default SearchBooksResults
