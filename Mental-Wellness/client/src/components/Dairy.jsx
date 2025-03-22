import React, { useState } from 'react';
import WeekMoodTracker from './WeekMoodTracker';

// Not using react-hook-form since the import might not be available
// Not using react-icons since the imports might not be available

function Diary() {
    // Simple form state management without react-hook-form
    const [formData, setFormData] = useState({
        mood: '',
        notes: ''
    });
    const [errors, setErrors] = useState({});
    const [arr, setArr] = useState([]);
    
    // Format date correctly
    const today = new Date();
    const formattedDate = `${today.getDate()}/${today.getMonth() + 1}/${today.getFullYear()}`;
    
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };
    
    const validateForm = () => {
        const newErrors = {};
        if (!formData.mood) newErrors.mood = "*Mood is required";
        if (!formData.notes) newErrors.notes = "**Tell about today";
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };
    
    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            setArr([...arr, formData]);
            setFormData({ mood: '', notes: '' });
        }
    };

    return (
        <div>
            
            <WeekMoodTracker/>

            <div className='d-flex flex-column justify-content-center align-items-center '>
                <form className='d-flex flex-column mt-5 w-50 bg-light p-5 rounded' onSubmit={handleSubmit}>
                    <h3 className='mb-3'>Pen Your Thoughts, Free Your Mind</h3>
                    {/* <div className='d-flex flex-column mb-3'>
                        <label htmlFor="mood" className='m-1'>How are you feeling</label>
                        <select 
                            name="mood" 
                            value={formData.mood}
                            onChange={handleChange}
                            className='p-2 ps-3 rounded form-select'
                        >
                            <option value="">Select mood...</option>
                            <option value="happy">Happy</option>
                            <option value="calm">Calm</option>
                            <option value="anxious">Anxious</option>
                            <option value="sad">Sad</option>
                            <option value="energetic">Energetic</option>
                        </select>
                        {errors.mood && <span className="text-danger">{errors.mood}</span>}
                    </div> */}

                    <div className='d-flex flex-column mb-3'>
                        <label className='m-1'>Log Your Day</label>
                        <textarea 
                            name="notes" 
                            value={formData.notes}
                            onChange={handleChange}
                            className='pt-1 p-4 ps-3 rounded' 
                            placeholder='Write about your day...'
                        ></textarea>
                        {errors.notes && <span className="text-danger">{errors.notes}</span>}
                    </div>
                    <button className='btn btn-primary w-25 mt-2' type='submit'>
                        {/* Using text instead of icon */}
                        + Add Entry
                    </button>
                </form>
            </div>
            
            <div>
                <div className='d-flex flex-column align-items-center'>
                    <h3 className='mt-5'>Previous Entries</h3>
                    {
                        arr.map((obj, index) => (
                            <div key={index} className='border rounded w-50 mt-4 p-3'>
                                <p>📅 {formattedDate}</p>
                                <span className="badge bg-info rounded-pill px-3 py-2 text-light">
                                    {obj.mood}
                                </span>
                                <p className="mt-2">{obj.notes}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
}

export default Diary;