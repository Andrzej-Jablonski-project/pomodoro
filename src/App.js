import React from "react";
import "./App.scss";

function TimeBoxEditor() {
  console.log("witaj");
  return (
    <div className="box-editor">
      Witam
      <label className="box-editor__label" htmlFor="">
        Co robisz?
        <input
          className="box-editor__input"
          value="Uczę się skrótów klawiaturowych"
          type="text"
        />
      </label>
      <label className="box-editor__label" htmlFor="">
        Ile minut?
        <input className="box-editor__input" value="25" type="number" />
      </label>
      <button className="box-editor__button">Zacznij</button>
    </div>
  );
}

function App() {
  return <TimeBoxEditor />;
}

export default App;
