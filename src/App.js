import React from 'react'
import './App.css'
import { BrowserRouter, Route } from 'react-router-dom'
import MyReads from './components/MyReads'
import SearchBooks from './components/SearchBooks'
import * as BooksAPI from './BooksAPI'

class BooksApp extends React.Component {
  state = {
    currentlyReading: [],
    wantToRead: [],
    read: [],
    query: '',
    books: []
  }

  updateShelves = () => {
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
  
  clearSearch = () => { this.setState({books: [], query: ''}) }
  rerender = () => { this.forceUpdate() }
  
  
  render() {
    return (
      <BrowserRouter>
        <div className="app">
          <Route exact path='/' render={()=><MyReads state={this.state} updateShelves={this.updateShelves} />}/>  
          <Route path='/search' render={()=><SearchBooks 
                                              state={this.state} 
                                              search={this.search} 
                                              clearSearch={this.clearSearch} 
                                              callback={this.rerender}/>} />
        </div>
      </BrowserRouter>
    )
  }
  
}

export default BooksApp
