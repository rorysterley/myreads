import React from 'react'
// import * as BooksAPI from './BooksAPI'
import './App.css'
import MyReads from './components/MyReads'
import SearchBooks from './components/SearchBooks'

class BooksApp extends React.Component {
  state = {
    showSearchPage: false
  }
  
  render() {
    return (
      <div className="app">
          {
            // <SearchBooks />
          }
          <MyReads />
      </div>
    )
  }
}

export default BooksApp
