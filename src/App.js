import './App.css';
import Fetching from './components/Fetching';
import State from './components/State';
import Teachers from './components/Teachers';

function App() {

  return (
    <div className="App">
      <State/>
      <Teachers/>
      <Fetching/>
    </div>
  );
}

export default App;
