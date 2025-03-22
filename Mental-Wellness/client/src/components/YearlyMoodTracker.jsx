import React, { useState, useEffect } from 'react';

const YearlyMoodTracker = () => {
  const [selectedMood, setSelectedMood] = useState(null);
  const [yearData, setYearData] = useState({});

  useEffect(() => {
    // Initialize empty year data
    const initializeYear = () => {
      const months = ['Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan', 'Feb'];
      const data = {};
      
      months.forEach(month => {
        // Create days for each month (simplified to 4 weeks)
        data[month] = Array(28).fill(null);
      });
      
      return data;
    };

    setYearData(initializeYear());
  }, []);

  const moods = {
    happy: '😊 Happy',
    neutral: '😐 Neutral',
    sad: '😔 Sad'
  };

  const handleDayClick = (month, dayIndex) => {
    if (selectedMood) {
      setYearData(prev => ({
        ...prev,
        [month]: prev[month].map((day, idx) => 
          idx === dayIndex ? selectedMood : day
        )
      }));
    }
  };

  const getMoodClass = (mood) => {
    switch (mood) {
      case 'happy':
        return 'bg-success';
      case 'neutral':
        return 'bg-warning';
      case 'sad':
        return 'bg-danger';
      default:
        return 'bg-secondary';
    }
  };

  const customStyles = {
    gridContainer: {
      display: 'grid',
      gridTemplateColumns: 'auto repeat(28, 1fr)',
      gap: '2px',
      fontSize: '12px',
    },
    dayCell: {
      width: '15px',
      height: '15px',
      borderRadius: '2px',
      cursor: 'pointer',
      opacity: 0.3,
      transition: 'opacity 0.2s ease',
    },
    monthLabel: {
      padding: '0 10px',
      textAlign: 'left',
      color: '#666',
    }
  };

  return (
    <div className="container-fluid py-5">
      <div className="row justify-content-center">
        <div className="col-12 col-lg-10">
          <div className="card shadow">
            <div className="card-body">
              <h2 className="card-title mb-4">Yearly Mood Tracker</h2>

              {/* Mood Selection Buttons */}
              <div className="d-flex gap-3 mb-4">
                {Object.entries(moods).map(([mood, label]) => (
                  <button
                    key={mood}
                    className={`btn ${getMoodClass(mood)} ${selectedMood === mood ? 'border-dark border-2' : 'border'}`}
                    style={{
                      opacity: 0.3,
                      transform: selectedMood === mood ? 'scale(1.05)' : 'scale(1)',
                      transition: 'all 0.3s ease'
                    }}
                    onClick={() => setSelectedMood(mood)}
                  >
                    {label}
                  </button>
                ))}
              </div>

              {/* Year Grid */}
              <div style={customStyles.gridContainer}>
                {/* Empty cell for alignment */}
                <div></div>
                
                {/* Day numbers (1-28) */}
                {Array(28).fill().map((_, i) => (
                  <div key={`day-${i}`} style={{ textAlign: 'center', fontSize: '10px' }}>
                    {(i + 1) % 7 === 0 ? i + 1 : ''}
                  </div>
                ))}

                {/* Months and their days */}
                {Object.entries(yearData).map(([month, days]) => (
                  <React.Fragment key={month}>
                    <div style={customStyles.monthLabel}>{month}</div>
                    {days.map((mood, dayIndex) => (
                      <div
                        key={`${month}-${dayIndex}`}
                        className={`${getMoodClass(mood)} hover-opacity-75`}
                        style={{
                          ...customStyles.dayCell,
                          opacity: mood ? 0.3 : 0.1
                        }}
                        onClick={() => handleDayClick(month, dayIndex)}
                        title={`${month} ${dayIndex + 1}`}
                      />
                    ))}
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default YearlyMoodTracker;