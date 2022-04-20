import React, { useState, useEffect } from 'react'
import "./Timer.scss"
import EditTimer from '../EditTimer';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan, faPenToSquare } from "@fortawesome/free-solid-svg-icons";

const Timer = ({ timer, deleteTimer,setTimerToEdit }) => {
    const [time, setTime] = useState(0);
    const [timerOn, setTimeOn] = useState(false);
  
    const { title, project, key } = timer
 
    useEffect(() => {
        let interval = null;
        if (timerOn) {
          interval = setInterval(() => {
            setTime((prevTime) => prevTime + 10);
          }, 10); //10 segundos
        } else {
          clearInterval(interval);
        }
        return () => clearInterval(interval);
      }, [timerOn]);

      const hours = ("0" + Math.floor((time / 60000) % 60)).slice(-2);
      const minutes = ("0" + Math.floor((time / 1000) % 60)).slice(-2);
      const seconds = ("0" + ((time / 10) % 100)).slice(-2);
      return (

        <div className="timer-card">
            <h2>{title}</h2>
            <span className="project">{project}</span>
            <span className="timer">{`${hours}:${minutes}:${seconds}`}</span>
            <div className="timer-buttons">
                <button onClick={() => deleteTimer(key)}>
                    <FontAwesomeIcon icon={faTrashCan} />
                </button>
                <button onClick={()=>setTimerToEdit()}>
                    <FontAwesomeIcon icon={faPenToSquare} />
                </button>
            </div>
            <button className="start" onClick={() => setTimeOn(true)}>Start</button>
            <button className="stop" onClick={() => setTimeOn(false)}>Stop</button>
        </div>

    );
};

export default Timer