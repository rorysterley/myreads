import React, { Component } from 'react'
import SearchBooksResults from './SearchBooksResults'
import { Link } from 'react-router-dom'
// import * as BooksAPI from './../BooksAPI'

class SearchBooks extends Component {
  componentDidMount() {
    this.props.clearSearch()
  }
  
  render() {
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link className='close-search' to='/'>Close</Link>
          <div className="search-books-input-wrapper">
            <input autoFocus={true} type="text" onChange={this.props.search} value={this.props.state.query} placeholder="Search by title or author"/>
          </div>
        </div>
        <SearchBooksResults books={this.props.state.books} callback={this.props.callback} />
      </div>
    )
  }
}

export default SearchBooks
