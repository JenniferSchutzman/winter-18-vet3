import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Category from './pages/categories/show'
import Home from './pages/home'
import Resources from './pages/resources'
import Categories from './pages/categories'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/resources" component={Resources} />
            <Route exact path="/categories" component={Categories} />
            <Route path="/categories/:id" component={Category} />
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}

export default App
