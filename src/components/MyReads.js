import React, { Component } from 'react'
import BookShelf from './BookShelf'
import OpenSearch from './OpenSearch'
import * as BooksAPI from './../BooksAPI'

class MyReads extends Component {
  state = {
    currentlyReading: [],
    wantToRead: [],
    read: []
  }

  updateShelves() {
    BooksAPI.getAll()
      .then((books) => {
        var bookShelves = {
          currentlyReading: [],
          wantToRead: [],
          read: []
        }
        
        books.map(book => {
          bookShelves[book.shelf].push(book)
          
          // return false to clear no return warrning
          return false
        })
        
        this.setState(bookShelves)
      })
  }

  componentDidMount() {
    this.updateShelves()
  }
  
  render() {
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <BookShelf shelfTitle='Currently Reading' shelf={this.state.currentlyReading} />
        <BookShelf shelfTitle='Want to Read' shelf={this.state.wantToRead}/>
        <BookShelf shelfTitle='Read' shelf={this.state.read}/>
        <OpenSearch />
      </div>
    )
  }
}

export default MyReads