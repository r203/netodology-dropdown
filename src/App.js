import './App.css';
import Dropdown from './components/Dropdown';

function App() {
  return (
    <div className="App">
      <div className="container">
        <div data-id="wrapper" className="dropdown-wrapper open">
          <Dropdown />
        </div>
      </div>
    </div>
  );
}

export default App;
