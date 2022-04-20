import React, { useState } from 'react'
import "./EditTimer.scss"
const EditTimer = ({ timer, editTimer }) => {

  const [timerToEdit, setTimertoEdit] = useState(timer);
  const { title, project } = timerToEdit;
  // const cancel = (event) => {
  //   event.preventDefault();
  //   let currentTimers = [...timers];
  //   currentTimers[i].show = true;
  //   setTimers(currentTimers);
  // }

  const onChangeInput = (key, value) => {
    const uploadedTimer = {
      ...timerToEdit, [key]: value
    }
    setTimertoEdit(uploadedTimer);
  }
  const handleUpdate = (event) => {
    event.preventDefault();
    editTimer(timerToEdit)
  }


  return (
    <div className='edit-timer'>
      <form onSubmit={handleUpdate}>
        <label htmlFor="title">Title</label>
        <input type="text" value={title} onChange={(e) => onChangeInput("title", e.target.value)} />
        <label htmlFor="project">Project</label>
        <input type="text" value={project} onChange={(e) => onChangeInput("project", e.target.value)} />
        <div className='form-controls'>
          <button className='update' type='submit'>Update</button>
          {/* <button className='cancel' onClick={cancel}>Cancel</button> */}
        </div>
      </form></div>
  )
}

export default EditTimer