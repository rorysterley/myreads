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
        let searchBooks = books.error ? [] : books.slice(0)

        BooksAPI.getAll()
          .then(myBooks => {
            for (let i = 0; i < myBooks.length; i++) {
              for (let j = 0; j < searchBooks.length; j++) {
                if (searchBooks[j].id === myBooks[i].id) {
                  searchBooks[j].shelf = myBooks[i].shelf
                }
                
                if (!searchBooks[j].shelf) {
                  searchBooks[j].shelf = 'none'
                }
              }
            }

            this.setState({books: searchBooks})
          })
      })
  }
  
  render() {
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link className='close-search' to='/'>Close</Link>
          <div className="search-books-input-wrapper">
            <input autoFocus={true} type="text" onChange={this.search} value={this.state.query} placeholder="Search by title or author"/>
          </div>
        </div>
        <SearchBooksResults books={this.state.books} />
      </div>
    )
  }
}

export default SearchBooks
