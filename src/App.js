import logo from './logo.svg';
import './App.css';
import HelloWorld from './HelloWorld.jsx'; 
import Counter from './Counter.jsx';

function App() {
  return (
    <div className="App">
      <HelloWorld name={'Dat Huynh'}/>
      <Counter/>
    </div>
  );
}

export default App;
