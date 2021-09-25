import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Navbar from './containers/Layout/Navbar';
import Footer from './containers/Layout/Footer';
import Home from './containers/Home';
import Default from './containers/Default';
import './App.css';
import './assets/css/styles.css';

function App() {
  return (
    <div className="App">
      <Router >
        <Navbar />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/default' component={Default} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
