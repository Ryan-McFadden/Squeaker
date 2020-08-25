import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux'
import Navbar from './components/navbar/Navbar'
import Posts from './components/posts/Posts'
import UserPosts from './components/posts/UserPosts'
import ShowPost from './components/posts/ShowPost'
import SearchedPosts from './components/posts/SearchedPosts'
import Info from './components/Info'
import './css/App.css'

export class App extends Component {
  render() {
    return (
      <div className='app'>
        <Router>
          <div className='app'>
            <Navbar />
            
            <Switch>
              <Route exact path='/' component={Posts} />
              <Route exact path={`/${this.props.currentUser.username}`} component={UserPosts} />
              <Route exact path='/search/:query' component={SearchedPosts}/>
              <Route exact path='/:username/:post_id' component={ShowPost}/>
            </Switch>

            <Info />
          </div>
        </Router>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return ({
    currentUser: state.userReducer.currentUser
  })
}

export default connect(mapStateToProps)(App)

