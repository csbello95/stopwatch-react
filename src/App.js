import Timer from "./Component/Timer";
import "./App.scss";
import AddTimer from "./Component/AddTimer";
import EditTimer from "./Component/EditTimer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { useRef, useState } from "react";
function App() {
  const [timerToEdit,setTimerToEdit] = useState(null);
  const [timers, setTimers] = useState([
    {
      key: 1,
      title: "title1",
      project: "Proyecto",
    },
    {
      key: 2,
      title: "title2",
      project: "proyecto2",
    },
  ]);

  const deleteTimer = (key) => {
    const timerstoUpload = timers.filter((timer) => timer.key !== key);
    setTimers(timerstoUpload);
  };

  const editTimer = (timerToUpload) => {
    const timerstoUpload = timers.map((timer) => {
      if ((timer.key = timerToUpload.key)) return timerToUpload;
      return timer;
    });
    setTimers(timerstoUpload);
    setTimerToEdit(null);
  };

  const [showForm, setShowForm] = useState(false);

  const addTimer = () => {
    setShowForm(!showForm);
  };

  return (
    <div className="App">
     {timerToEdit && <EditTimer timer={timerToEdit} editTimer={(timer) => editTimer(timer)}/>}
      <h1>Cronometros</h1>
      {timers.map((timer, i) => (
        <Timer
          timer={timer}
          key={i}
          deleteTimer={(title) => deleteTimer(title)}
          setTimerToEdit = {()=>setTimerToEdit(timer)}
        />
      ))}
      {showForm && (
        <AddTimer
          timers={timers}
          setTimers={setTimers}
          setShowForm={setShowForm}
        />
      )}
      {!showForm && (
        <button className="add-Timer" onClick={addTimer}>
          <FontAwesomeIcon icon={faPlus} />
        </button>
      )}
    </div>
  );
}

export default App;
