import React from 'react'
import './App.css'
import { BrowserRouter, Route } from 'react-router-dom'
import MyReads from './components/MyReads'
import SearchBooks from './components/SearchBooks'

class BooksApp extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div className="app">
          <Route exact path='/' component={MyReads} />  
          <Route path='/search' component={SearchBooks} />
        </div>
      </BrowserRouter>
    )
  }
  
}

export default BooksApp
