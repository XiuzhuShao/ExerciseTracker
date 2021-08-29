import React, { useState } from 'react';
import { useHistory } from "react-router-dom";

export const AddExercisePage = () => {
    
    const [name, setName] = useState('');
    const [reps, setReps] = useState('');
    const [weight, setWeight] = useState('');
    const [unit, setUnit] = useState('kgs');
    const [date, setDate] = useState('');

    const history = useHistory();

    const addExercise = async () => {
        const newExercise = { name, reps, weight, unit, date };
        const response = await fetch('/exercises', {
            method: 'POST',
            body: JSON.stringify(newExercise),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if (response.status === 201) {
            alert("Successfully added the exercise!");
        } else {
            alert(`Failed to add exercise, status code = ${response.status}`);
        }
        history.push("/");
    };

    return (
        <>
            <h2>Add Exercise!</h2>
            <table id="edit exercises">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Reps</th>
                        <th>Weight</th>
                        <th>Unit</th>
                        <th>Date</th>
                        <th>Add</th>
                    </tr>
                </thead>
                <tbody>
                <td>
                <input
                    type="text"
                    placeholder="Enter name"
                    value={name}
                    onChange={e => setName(e.target.value)} />
                </td>
                <td>
                <input
                    type="number"
                    value={reps}
                    placeholder="Enter reps"
                    onChange={e => setReps(e.target.value)} />
                </td>
                <td>
                <input
                    type="number"
                    value={weight}
                    placeholder="Enter weight"
                    onChange={e => setWeight(e.target.value)} />
                </td>
                <td>
                <select id="dropdown"
                    onChange={e => setUnit(e.target.value)}>
                    <option value="kgs">kgs</option>
                    <option value="lbs">lbs</option>
                </select>
                </td>
                <td>
                <input
                    type="text"
                    placeholder="Enter date"
                    value={date}
                    onChange={e => setDate(e.target.value)} />
                </td>
                <td>
                <button
                    onClick={addExercise}
                >Add</button>
                </td>
                </tbody>
            </table>
        </>
    );
}

export default AddExercisePage;