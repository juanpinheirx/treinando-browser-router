import React from "react";
import "./App.css";
import { Route, Link, Switch } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contacts from "./pages/Contacts";
import Gallery from "./pages/Gallery";
import Favorites from "./pages/Favorites";
import Career from "./pages/Career";
import Login from './pages/Login';
import Data from './pages/Data';

//hoje neste treino com BrowserRouter, pude compreender como uma Single Page Application pode ser feita com este método datado. Apesar de que está datado, funciona muito bem.

class App extends React.Component {
  handleClick(e) {
    console.log(e);
  }
  render() {
    return (
      <>
        <div className="app"  handleClick={this.handleClick}>
          <nav className="navbar">
            <Link to="/" className="nav-link">
              Home
            </Link>
            <Link to="/about" className="nav-link">
              About
            </Link>
            <Link to="/contacts" className="nav-link">
              Contacts
            </Link>
            <Link to="/favorites" className="nav-link">
              Favorites
            </Link>
            <Link to="/gallery" className="nav-link">
              Gallery
            </Link>
            <Link to="/career" className="nav-link">
              Career
            </Link>
          </nav>

          <div className="content" handleClick={this.handleClick}>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/about" component={About} />
              <Route path="/contacts" component={Contacts} />
              <Route path="/gallery" component={Gallery} />
              <Route path="/favorites" component={Favorites} />
              <Route
                path="/career"
                render={(props) => (
                  <Career
                    {...props}
                    jobs={["Front-End", "Back-end", "Fullstack"]}
                  />
                )}
              />
              <Route path='/login' component={Login} />
              <Route path='/data' component={Data} />
            </Switch>
          </div>
        </div>
      </>
    );
  }
}

export default App;
