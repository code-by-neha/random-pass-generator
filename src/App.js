import "./App.css";

function App() {
  return (
    <>
      <div className="passwordBox">
        <h2>Password Generator</h2>

        <div className="passwordBoxIn">
          <input type="text" />
          <button>Copy</button>
        </div>

        <div className="passLength">
          <label>Password Length</label>
          <input type="number" max={20} />
        </div>

        <div className="passLength">
          <label>Include UpperCase Letters</label>
          <input type="checkbox" />
        </div>

        <div className="passLength">
          <label>Include LowerCase Letters</label>
          <input type="checkbox" />
        </div>

        <div className="passLength">
          <label>Include Numbers</label>
          <input type="checkbox" />
        </div>

        <div className="passLength">
          <label>Include Symbols</label>
          <input type="checkbox" />
        </div>
      </div>
    </>
  );
}

export default App;
