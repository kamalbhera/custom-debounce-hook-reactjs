import logo from './logo.svg';
import './App.css';
import { useDebounce } from './hook/useDebounce';
import { useState } from 'react'
function App() {

  const [value, setValue] = useState(0)

  const debouncedValue = useDebounce(value, 2000)
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Debouncing <code>React.js</code> and Custom Hook.
        </p>
        <p className="App-link">Current Value: {value} | Debounced Value: {debouncedValue}</p>
        <button className='button' type='button' onClick={() => setValue(value+1)}>Count</button>
      </header>
    </div>
  );
}

export default App;
