import React, { Component } from 'react'
import SearchBooksResults from './SearchBooksResults'

class SearchBooks extends Component {
  render() {
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <a className="close-search" onClick={() => this.setState({ showSearchPage: false })}>Close</a>
          <div className="search-books-input-wrapper">
            <input type="text" placeholder="Search by title or author"/>
          </div>
        </div>
        <SearchBooksResults />
      </div>
    )
  }
}

export default SearchBooks
