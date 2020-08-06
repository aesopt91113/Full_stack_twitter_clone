import React from 'react';
import Layout from '@src/layout';
import { handleErrors } from '@src/utils/fetchHelper';

class UserProfile extends React.Component {
  componentDidMount() {
    fetch('/api/authenticated', {
      method: 'GET',
      headers: {'Content-Type': 'application/json'} 
    })
      .then(handleErrors)
      .then(data => {
        console.log(data)
        if (!data.authenticated) {
          this.props.history.push('/')
        }
      })
  }

  render() {
    return (
      <Layout> 
        <nav className="navbar navbar-expand navbar-light bg-light">
          <a href="/">
            <span className="navbar-brand mb-0 h1 pl-2"><i className="fa fa-twitter fa-2x" aria-hidden="true"></i></span>
          </a>
        </nav>
        <h1>User Profile</h1>

        {/* <div className="card" style={{width: '18rem'}}>
          <img src="..." className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" className="btn btn-primary">Go somewhere</a>
          </div>
        </div> */}

        {/* <div className="container">          
          <div className="card" style="width: 18rem;">
            <div className="card-body">
              <h5 className="card-title">Username</h5>
              <h6 className="card-subtitle mb-2 text-muted">id</h6>
            </div>
          </div>
        </div> */}
      </Layout>
    )
  }
}

export default UserProfile;