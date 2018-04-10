import React from 'react'
import * as BooksAPI from './../BooksAPI'

// const BookShelfChanger = (props) => {
//   let handleChange = e => {
//     let book = { id: props.id }
//     let shelf = e.target.value
// 
//     BooksAPI.update(book, shelf)
//       .then((res) => {
//         // re-render page
//         props.callback()
//       })
//   }
// 
//   return (
//     <div className="book-shelf-changer">
//       <select value={props.shelf} onChange={handleChange}>
//         <option value="none" disabled>Move to...</option>
//         <option value="currentlyReading">Currently Reading</option>
//         <option value="wantToRead">Want to Read</option>
//         <option value="read">Read</option>
//         <option value="none">None</option>
//       </select>
//     </div>
//   )
// }

class BookShelfChanger extends React.Component {
  theShelf = this.props.shelf

  handleChange = e => {
    let book = { id: this.props.id }
    let shelf = e.target.value
    this.theShelf = shelf
    
    BooksAPI.update(book, shelf)
      .then((res) => {
        // re-render page
        this.props.callback()
      })
  }
  
  render() {
    return (
      <div className="book-shelf-changer">
      <select value={this.theShelf} onChange={this.handleChange}>
      <option value="none" disabled>Move to...</option>
      <option value="currentlyReading">Currently Reading</option>
      <option value="wantToRead">Want to Read</option>
      <option value="read">Read</option>
      <option value="none">None</option>
      </select>
      </div>
    )
  }
}

export default BookShelfChanger
