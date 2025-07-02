import { useState } from "react";
import "./App.css";
import { LC, UC, NC, SC } from "./data/PassChar";

function App() {
  let [uppercase, setUppercase] = useState(false);
  let [lowercase, setLowercase] = useState(false);
  let [number, setNumber] = useState(false);
  let [symbols, setSymbols] = useState(false);
  let [passwordlen, setPasswordlen] = useState(10);
  let [fpass, setPass] = useState("");

  const validate = (value) => {
    const errors = {};
    if (value > 20) {
      errors.passwordlen = "Max length is 20!";
    } else if (value < 4) {
      errors.passwordlen = "Min length is 4!";
    }
    return errors;
  };

  const createPassword = () => {
    const length = parseInt(passwordlen);
    const errors = validate(length);

    if (Object.keys(errors).length > 0) {
      alert(errors.passwordlen);
      return;
    }
     
    let charSet = "";
    if (uppercase || lowercase || number || symbols) {
      let finalpass = "";
      if (uppercase) charSet += UC;
      if (lowercase) charSet += LC;
      if (number) charSet += NC;
      if (symbols) charSet += SC;
      for (let i = 0; i < passwordlen; i++) {
        finalpass += charSet.charAt(Math.floor(Math.random() * charSet.length));
      }
      setPass(finalpass);
    } else {
      alert("Select CheckBox !");
    }
  };

  return (
    <>
      <div className="passwordBox">
        <h2>Password Generator</h2>

        <div className="passwordBoxIn">
          <input type="text" value={fpass} readOnly />
          <button
            onClick={() => {
              navigator.clipboard.writeText(fpass);
              alert("Password copied!");
            }}
          >
            Copy
          </button>
        </div>

        <div className="passLength">
          <label>Password Length</label>
          <input
            type="number"
            max={20}
            min={4}
            value={passwordlen}
            onChange={(event) => setPasswordlen(event.target.value)}
          />
        </div>

        <div className="passLength">
          <label>Include UpperCase Letters</label>
          <input
            type="checkbox"
            checked={uppercase}
            onChange={() => setUppercase(!uppercase)}
          />
        </div>

        <div className="passLength">
          <label>Include LowerCase Letters</label>
          <input
            type="checkbox"
            checked={lowercase}
            onChange={() => setLowercase(!lowercase)}
          />
        </div>

        <div className="passLength">
          <label>Include Numbers</label>
          <input
            type="checkbox"
            checked={number}
            onChange={() => setNumber(!number)}
          />
        </div>

        <div className="passLength">
          <label>Include Symbols</label>
          <input
            type="checkbox"
            checked={symbols}
            onChange={() => setSymbols(!symbols)}
          />
        </div>

        <button className="btn" onClick={createPassword}>
          Generate Password
        </button>
      </div>
    </>
  );
}

export default App;
