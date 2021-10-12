import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './Sass/App.scss';
//import Button from './Components/Button';
import Header from './Components/Header';
import Footer from './Layouts/Footer';
import HomePage from './Pages/HomePage';
import PortfolioPage from './Pages/PortfolioPage';
import ContactPage from './Pages/ContactPage';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/PortfolioPage">
            <PortfolioPage />
          </Route>
          <Route path="/ContactPage">
            <ContactPage />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
