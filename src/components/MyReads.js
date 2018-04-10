import React, { Component } from 'react'
import BookShelf from './BookShelf'
import OpenSearch from './OpenSearch'
// import * as BooksAPI from './../BooksAPI'

class MyReads extends Component {
  componentDidMount() {
    this.props.updateShelves()
  }
  
  render() {
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <BookShelf shelfTitle='Currently Reading' shelf={this.props.state.currentlyReading} callback={this.props.updateShelves} />
        <BookShelf shelfTitle='Want to Read' shelf={this.props.state.wantToRead} callback={this.props.updateShelves} />
        <BookShelf shelfTitle='Read' shelf={this.props.state.read} callback={this.props.updateShelves} />
        <OpenSearch />
      </div>
    )
  }
}

export default MyReads
