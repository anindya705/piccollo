import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Header from './components/Header'
import Showcase from './components/Showcase'
import Destinations from './components/Destinations'
import Footer from './components/Footer'
import Login from './components/Login.js'
import SignUp from './components/SignUp'
import Error from './components/Error'
import Contact from './components/Contact'
import FAQ from './components/FAQ'

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path='/'>
          <Showcase />
          <Destinations />
          <Footer />
        </Route>
        <Route path='/contact'>
          <Contact />
        </Route>
        <Route path='/improve'>
          <SignUp />
        </Route>
        <Route path='/faq'>
          <FAQ />
        </Route>
        <Route path='*'>
          <Error />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
