import React, { useState, useEffect } from 'react';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';
import { Play, Pause, ArrowClockwise, Hourglass } from 'react-bootstrap-icons';
import Lottie from 'lottie-react';
import breathing from "../assets/animations/breathing.json";

const Breathing = () => {
  const [isActive, setIsActive] = useState(false);
  const [phase, setPhase] = useState('idle');
  const [timer, setTimer] = useState(0);
  const [selectedDuration, setSelectedDuration] = useState(0); // in seconds
  const [remainingTime, setRemainingTime] = useState(0);
  const [isCompleted, setIsCompleted] = useState(false);

  const breathingCycle = {
    inhale: { duration: 5, message: 'Inhale' },
    hold: { duration: 3, message: 'Hold' },
    exhale: { duration: 5, message: 'Exhale' },
    rest: { duration: 3, message: 'Rest' }
  };

  const durationOptions = [
    { label: '5 mins', value: 300 },
    { label: '10 mins', value: 600 },
    { label: '15 mins', value: 900 }
  ];

  useEffect(() => {
    let interval = null;

    if (isActive && !isCompleted) {
      interval = setInterval(() => {
        setTimer((prevTimer) => {
          const newTimer = prevTimer + 1;

          if (selectedDuration > 0) {
            const newRemainingTime = selectedDuration - newTimer;
            setRemainingTime(newRemainingTime);

            if (newRemainingTime <= 0) {
              setIsActive(false);
              setIsCompleted(true);
              return prevTimer;
            }
          }

          const cycleLength = Object.values(breathingCycle).reduce((sum, { duration }) => sum + duration, 0);
          const cyclePosition = newTimer % cycleLength;

          let currentPhase = 'inhale';
          let timeSum = 0;

          for (const [phaseName, { duration }] of Object.entries(breathingCycle)) {
            timeSum += duration;
            if (cyclePosition < timeSum) {
              currentPhase = phaseName;
              break;
            }
          }

          setPhase(currentPhase);
          return newTimer;
        });
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [isActive, selectedDuration, isCompleted]);

  const toggleExercise = () => {
    if (!isActive && selectedDuration === 0) {
      return;
    }
    setIsActive(!isActive);
  };

  const resetExercise = () => {
    setIsActive(false);
    setPhase('idle');
    setTimer(0);
    setRemainingTime(selectedDuration);
    setIsCompleted(false);
  };

  const selectDuration = (duration) => {
    setSelectedDuration(duration);
    setRemainingTime(duration);
    resetExercise();
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <Container className="d-flex justify-content-center mt-5">
      <Card className="w-50 text-center p-4 shadow">
        <Card.Title className="mb-3">Breathing Exercise</Card.Title>

        {isCompleted ? (
          <div className="d-flex flex-column align-items-center">
            <div className="rounded-circle bg-success text-white p-4 d-flex justify-content-center align-items-center" style={{ width: '100px', height: '100px' }}>
              <Hourglass size={40} />
            </div>
            <h4 className="mt-3 text-success">Great job!</h4>
          </div>
        ) : (
          <div className="d-flex flex-column align-items-center">
            <div 
              className="rounded-circle bg-primary text-white p-4 d-flex justify-content-center align-items-center"
              style={{ width: '120px', height: '120px', fontSize: '18px' }}
            >
              {phase === 'idle' ? 'Ready' : breathingCycle[phase].message}
            </div>
            <div className="">
              {isActive && (
                <Lottie animationData={breathing} style={{ width: '100%', height: '300px' }} />
              )}
            </div>
          </div>
        )}

        {!isCompleted && (
          <Row className="mt-3">
            {durationOptions.map((option) => (
              <Col key={option.value} className="mb-2">
                <Button
                  onClick={() => selectDuration(option.value)}
                  variant={selectedDuration === option.value ? "primary" : "outline-secondary"}
                  className="w-100"
                >
                  {option.label}
                </Button>
              </Col>
            ))}
          </Row>
        )}

        {selectedDuration > 0 && !isCompleted && (
          <h5 className="mt-3">Time remaining: {formatTime(remainingTime)}</h5>
        )}

        <div className="d-flex justify-content-center gap-3 mt-3">
          <Button 
            onClick={toggleExercise}
            disabled={selectedDuration === 0 || isCompleted}
          >
            {isActive ? <Pause size={20} className="me-2" /> : <Play size={20} className="me-2" />}
            {isActive ? 'Pause' : 'Start'}
          </Button>
          <Button 
            onClick={resetExercise}
            variant="outline-secondary"
          >
            <ArrowClockwise size={20} className="me-2" />
            Reset
          </Button>
        </div>

        {!isCompleted && (
          <div className="text-muted mt-3">
            Complete cycles: {Math.floor(timer / 16)}
          </div>
        )}
      </Card>
    </Container>
  );
};

export default Breathing;