import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './Sass/App.scss';
import { DataProvider } from './Pages/DataContext';
import Header from './Components/Header';
import Footer from './Layouts/Footer';
import HomePage from './Pages/HomePage';
import PortfolioPage from './Pages/PortfolioPage';
import ContactPage from './Pages/ContactPage';
import Aside from './Layouts/Aside';
import DetailsPage from './Pages/Details';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <DataProvider>
            <Route path="/PortfolioPage">
              <PortfolioPage />
            </Route>
            <Route path="/Details">
              <DetailsPage />
            </Route>
          </DataProvider>
          <Route path="/ContactPage">
            <ContactPage />
          </Route>

        </Switch>
        <Aside />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
