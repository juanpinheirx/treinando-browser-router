import React from "react";
import { withRouter } from 'react-router-dom';
class Home extends React.Component {
  state = {
      login: false,
    };
  
  handleRedirectToLogin = () => {
    this.props.history.push("/login");
  };

  handleRedirectToData = () => {
    this.props.history.push("/data");
  };

  render() {
    this.checkLogin = () => this.setState({login: true});
    this.uncheckLogin = () => this.setState({login: false});
    
    return (
      <>
        <button onClick={this.checkLogin}>I am Logged</button>
        <button onClick={this.uncheckLogin}>I am not Logged</button>
        <br />
        <br />
        <button onClick={this.handleRedirectToLogin} disabled={this.state.login}>
          Go to Login
        </button>
        <br />
        <button onClick={this.handleRedirectToData} disabled={!this.state.login}>
          Go to Data
        </button>

      </>
    );
  }
}

export default withRouter(Home);
