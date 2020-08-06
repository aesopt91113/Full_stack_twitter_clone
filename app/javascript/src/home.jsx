import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Layout from '@src/layout'
import LoginWidget from '@src/login/loginWidget'
import SignupWidget from '@src/login/signupWidget'
import LoggedIn from './loggedIn'

import './home.scss';

const HomeContent = (props) => {
  return (
    <React.Fragment>
      <Layout>
        <div className="container-fluid">
          <div className="row">
            <div className="col-7 d-inline mt-7 ml-10 mr-10">
              <h1>Welcome to Twitter</h1>
              <h4>Connect with your friends - and other fascinating people. Get in-the-moment updates on the things that interest you. And watch events unfold, in real time, from every angle.</h4>
            </div>
            <div className="col-5">
              <LoginWidget optClass="mb-3" />
              <SignupWidget/>
            </div>
          </div>
        </div>
      </Layout>
    </React.Fragment>
  )
}

class Home extends React.Component {

  render () {
    return (
      <Router>
        <Switch>
          <Route path="/" exact component={HomeContent}  />
          <Route path="/demo" exact component={LoggedIn}  />
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
