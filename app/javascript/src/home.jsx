import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Layout from '@src/layout'
import LoginWidget from '@src/login/loginWidget'
import SignupWidget from '@src/login/signupWidget'
import UserProfile from './user-profile'
import { handleErrors } from '@src/utils/fetchHelper';

import './home.scss';

class HomeContent extends React.Component {
  componentDidMount() {
    fetch('/api/authenticated', {
      method: 'GET',
      headers: {'Content-Type': 'application/json'} 
    })
      .then(handleErrors)
      .then(data => {
        console.log(data)
        if (data.authenticated) {
          this.props.history.push(`/user/${data.username}`)
        }
      })
  }

  render() {
    return (
      <React.Fragment>
        <Layout>
          <nav className="navbar navbar-expand navbar-light bg-light">
            <a href="/">
              <span className="navbar-brand mb-0 h1 pl-2"><i className="fa fa-twitter fa-2x" aria-hidden="true"></i></span>
            </a>
          </nav>

          <div className="container-fluid">
            <div className="row">
              <div className="col-7 d-inline mt-7 ml-10 mr-10">
                <h1>Welcome to Twitter</h1>
                <h4>Connect with your friends - and other fascinating people. Get in-the-moment updates on the things that interest you. And watch events unfold, in real time, from every angle.</h4>
              </div>
              <div className="col-5">
                <LoginWidget optClass="mb-3" history={this.props.history} />
                <SignupWidget/>
              </div>
            </div>
          </div>
        </Layout>
      </React.Fragment>
    )
  } 
}

class Home extends React.Component {
  render () {
    return (
      <Router>
        <Switch>
          <Route path="/" exact component={HomeContent}  />
          <Route path="/user/:username" exact component={UserProfile}  />
        </Switch>
      </Router>
    )
  }
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Home />,
    document.body.appendChild(document.createElement('div')),
  )
})
