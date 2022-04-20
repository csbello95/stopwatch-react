import React from 'react'
import "./AddTimer.scss"
const AddTimer = ({ timers, setTimers, setShowForm }) => {

    const handleAddTimer = (e) => {
        e.preventDefault();
        let currentTimers = [...timers];
        const title = e.target[0].value;
        const project = e.target[1].value;
        const key = timers.length + 1;
        console.log(title, project);
        currentTimers.push({ key,title, project });
        setTimers(currentTimers);
        setShowForm(false);
    }

    const cancel = (event) => {
        event.preventDefault();
        console.log("cancel");
        setShowForm(false);
    }

    return (
        <div className='add-timer'>
            <form onSubmit={handleAddTimer}>
                <label htmlFor="title">Title</label>
                <input type="text" />
                <label htmlFor="project">Project</label>
                <input type="text" />
                <div className='form-controls'>
                    <button className='create' type='submit'>Create</button>
                    <button className='cancel' onClick={cancel}>Cancel</button>
                </div>
            </form></div>
    )
}

export default AddTimer