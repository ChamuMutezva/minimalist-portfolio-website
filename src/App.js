import './Sass/App.scss';
import Button from './Components/Button';
import Header from './Components/Header';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <Button />
      </header>
    </div>
  );
}

export default App;
