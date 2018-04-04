import React, { Component } from 'react'
import SearchBooksResults from './SearchBooksResults'
import { Link } from 'react-router-dom'
import * as BooksAPI from './../BooksAPI'

class SearchBooks extends Component {
  
  state = {
    query: '',
    books: []
  }
  
  search = event => {
    this.setState({query: event.target.value})
    
    // Prevent empty search error
    if (event.target.value === '') {
      this.setState({books: []})
      
      return
    }
    
    BooksAPI.search(event.target.value)
      .then(books => {
        // Prevent non-matching search error
        books = books.error ? [] : books

        this.setState({books: books})
      })
  }
  
  render() {
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link className='close-search' to='/'>Close</Link>
          <div className="search-books-input-wrapper">
            <input type="text" onChange={this.search} value={this.state.query} placeholder="Search by title or author"/>
          </div>
        </div>
        <SearchBooksResults books={this.state.books} />
      </div>
    )
  }
}

export default SearchBooks
