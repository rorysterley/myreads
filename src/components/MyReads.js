import React, { Component } from 'react'
import BookShelf from './BookShelf'
import OpenSearch from './OpenSearch'

class MyReads extends Component {
  render() {
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <BookShelf shelfTitle='Currently Reading' />
        <BookShelf shelfTitle='Want to Read' />
        <BookShelf shelfTitle='Read' />
        <OpenSearch />
      </div>
    )
  }
}

export default MyReads