import React from "react";
import "./sass/App.scss";

function TimeBoxEditor() {
  console.log("witaj");
  return (
    <div className="box-editor">
      Witam
      <label className="box-editor__label" htmlFor="">
        Co robisz?
        <input
          className="box-editor__input"
          value="Uczę się skrótów klawiszowych"
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

function Clock({ hours, minutes, secondes, milisecondes }) {
  function formatTime(value) {
    if (value.length === 1) {
      value = "0" + value;
    } else if (value > 59 || value < 0) {
      value = "00";
    }
    return value;
  }
  return (
    <h2 className="box-timer__clock">{`${formatTime(
      hours
    )}:${minutes}:${secondes}:${milisecondes}`}</h2>
  );
}
function ProgressBar({ percent, trackRemaining }) {
  return (
    <div>
      <div
        className="box-timer__progress-bar"
        style={{ background: `${!trackRemaining ? "orangered" : "white"}` }}
      ></div>
      <style>
        {`
            .box-timer__progress-bar::before {
            content: '';
            display: block;
            transform: translateX(${percent}%);
            width: 100%;
            height: 100%;
            background-color: ${!trackRemaining ? "white" : "orangered"};
            transition: transform .3s linear;
        }`}
      </style>
    </div>
  );
}
function TimerBox() {
  return (
    <div className="box-timer">
      <h1 className="box-timer__header">Uczę się skrótów klawiszowych.</h1>
      <Clock hours="5" minutes="15" secondes="4" milisecondes="20" />
      <ProgressBar percent="15" trackRemaining={false} />
      <button disabled={true} className="box-timer__button">
        Start
      </button>
      <button className="box-timer__button">Stop</button>
      <button className="box-timer__button">Pauza</button>
      Liczba przerw: 2
    </div>
  );
}

function App() {
  return (
    <div>
      <TimeBoxEditor />
      <TimerBox />
    </div>
  );
}

export default App;
