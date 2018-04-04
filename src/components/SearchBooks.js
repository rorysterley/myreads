import React, { Component } from 'react'
import SearchBooksResults from './SearchBooksResults'
import { Link } from 'react-router-dom'

class SearchBooks extends Component {
  render() {
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link className='close-search' to='/'>Close</Link>
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
