import React, { Component } from 'react';
import { BrowserRouter as Router , Switch , Route } from 'react-router-dom';

// my layout components 
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

// my pages .. 
import Home from './pages/Home';
import Search from './pages/Search';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import AboutCreator from './pages/About Creator';
import NotFound from './pages/Not Found';
import Booking from './pages/Booking';
 
// my css style 
import './assets/styles/App.css';


// component 
import ClientOptions from './components/Client Options';


class App extends Component {

  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/search" component={Search} />
                <Route exact path="/gallery" component={Gallery} />
                <Route exact path="/contact-us" component={Contact} />
                <Route exact path="/about-creator" component={AboutCreator} />
                { /* hidden routes  .. */}
                <Route exact path="/booking" component={Booking} />
                {/* just test .. */}
                <Route exact path="/c" component={ClientOptions} />
                <Route component={NotFound} />
            </Switch>
          <br/>
          <Footer />
        </div>
      </Router>
    );
  }

}

export default App;
