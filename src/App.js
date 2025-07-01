
import './App.css';

function App() {
  return (
    <>
    <div className="passwordBox">
      <h2>Password Generator</h2>
      
      <div className='passwordBoxIn'>
        <input type='text' />
        <button>Copy</button>
      </div>

      <div className="passLength">
        <label>Password Length</label>
        <input type='number'/>
      </div>
    </div>
    </>
  );
}

export default App;
