import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const WeekMoodTracker = () => {
  const [selectedMood, setSelectedMood] = useState(null);
  const [weekData, setWeekData] = useState({
    Monday: null,
    Tuesday: null,
    Wednesday: null,
    Thursday: null,
    Friday: null,
    Saturday: null,
    Sunday: null
  });

  const moods = {
    happy: '😊 Happy',
    neutral: '😐 Neutral',
    sad: '😔 Sad'
  };

  const handleDayClick = (day) => {
    if (selectedMood) {
      setWeekData(prev => ({
        ...prev,
        [day]: selectedMood
      }));
    }
  };

  const handleReset = () => {
    setWeekData({
      Monday: null,
      Tuesday: null,
      Wednesday: null,
      Thursday: null,
      Friday: null,
      Saturday: null,
      Sunday: null
    });
    setSelectedMood(null);
  };

  const getMoodClass = (mood) => {
    switch (mood) {
      case 'happy':
        return 'bg-success bg-opacity-50';
      case 'neutral':
        return 'bg-warning bg-opacity-50';
      case 'sad':
        return 'bg-danger bg-opacity-50';
      default:
        return 'bg-light';
    }
  };

  const customStyles = {
    moodButton: {
      width: '120px',
      transition: 'all 0.3s ease',
    },
    dayCell: {
      aspectRatio: '1',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
    }
  };

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-12 col-md-8 col-lg-6">
          <div className="card shadow">
            <div className="card-body">
              {/* Header with Reset Button */}
              <div className="d-flex justify-content-between align-items-center mb-4">
                <h2 className="card-title mb-0">Weekly Mood Tracker</h2>
                <button 
                  className="btn btn-light" 
                  onClick={handleReset}
                >
                  Reset Week
                </button>
              </div>

              {/* Mood Selection Buttons */}
              <div className="d-flex justify-content-center gap-3 mb-4">
                {Object.entries(moods).map(([mood, label]) => (
                  <button
                    key={mood}
                    className={`btn ${getMoodClass(mood)} ${selectedMood === mood ? 'border-dark border-2' : 'border'}`}
                    style={{
                      ...customStyles.moodButton,
                      transform: selectedMood === mood ? 'scale(1.05)' : 'scale(1)'
                    }}
                    onClick={() => setSelectedMood(mood)}
                  >
                    {label}
                  </button>
                ))}
              </div>

              {/* Week Grid */}
              <div className="row g-3">
                {Object.entries(weekData).map(([day, mood]) => (
                  <div key={day} className="col">
                    <div
                      className={`rounded p-2 text-center ${getMoodClass(mood)}`}
                      style={customStyles.dayCell}
                      onClick={() => handleDayClick(day)}
                    >
                      <small className="d-block mb-1">{day.slice(0, 3)}</small>
                      {mood && (
                        <span>
                          {mood === 'happy' ? '😊' : mood === 'neutral' ? '😐' : '😔'}
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeekMoodTracker;