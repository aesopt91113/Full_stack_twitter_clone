import React from 'react';
import ReactDOM from 'react-dom';
import Layout from '@src/layout';

class LoggedIn extends React.Component {
  render() {
    return (
      <Layout> 
        <h1>Demo Page</h1>
        {/* <div className="container">          
          <div className="card" style="width: 18rem;">
            <div className="card-body">
              <h5 class="card-title">Username</h5>
              <h6 class="card-subtitle mb-2 text-muted">id</h6>
            </div>
          </div>
        </div> */}
      </Layout>
    )
  }
}

export default LoggedIn;