import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

// Importing Sass with Bootstrap CSS
import "./App.scss";

import Header from "./components/Header";
import Footer from "./components/Footer";

import HomePage from "./pages/HomePage";
import CommercialPage from "./pages/CommercialPage";
import GalleryPage from "./pages/GalleryPage";
import ContactPage from "./pages/ContactPage";
import NotFoundPage from "./pages/NotFoundPage";

class App extends React.Component {
  render() {
    return (
      <Router>
        <Header />
        <div role="main">
          <Switch>
            <Route exact path="/" render={HomePage} />
            <Route path="/commercial" component={CommercialPage} />
            <Route path="/gallery" component={GalleryPage} />
            <Route path="/contact" component={ContactPage} />
            <Route component={NotFoundPage} />
          </Switch>
        </div>
        <Footer />
      </Router>
    );
  }
}

export default App;
