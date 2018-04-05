import React, { Component } from 'react'

class BookShelfChanger extends Component {
  render() {
    return (
      <div className="book-shelf-changer">
        <select>
          <option value="none" disabled>Move to...</option>
          <option selected={this.props.shelf === 'currentlyReading' ? true : false} value="currentlyReading">Currently Reading</option>
          <option selected={this.props.shelf === 'wantToRead' ? true : false} value="wantToRead">Want to Read</option>
          <option selected={this.props.shelf === 'read' ? true : false} value="read">Read</option>
          <option selected={this.props.shelf === 'none' ? true : false} value="none">None</option>
        </select>
      </div>
    )
  }
}

export default BookShelfChanger
