import React from 'react'
import BookShelfChanger from './BookShelfChanger'

const Book = (props) => {
  return (
    <div className="book">
      <div className="book-top">
        <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: 'url(' + props.imageURL + ')' }}></div>
        <BookShelfChanger shelf={props.shelf} id={props.id} callback={props.callback} />
      </div>
      <div className="book-title">{props.title}</div>
      <div className="book-authors">{props.authors}</div>
    </div>
  )
}

export default Book
