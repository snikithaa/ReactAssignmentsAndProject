import React from 'react';
import './Section2.css';
import { useNavigate } from 'react-router-dom';
// Section2.css will be created separately with the CSS styles

const Section2 = () => {
    const navigate=useNavigate();
    function chatbot(){
        navigate('chatbot')
    }
    function music(){
        navigate('music')
    }
    function dairy(){
        navigate('dairy')
    }
    function resources(){
        navigate('resources')
    }
    function doctorConnect(){
        navigate('doctor')
    }
    function breathing(){
        navigate('breathing-excersice')
    }









  return (
    <div className="container py-5">
      <div className="row">
        {/* AI Chatbot Support */}
        <div className="col-lg-4 col-md-6 mb-4" onClick={chatbot}>
          <div className="feature-card">
            <div className="icon-box green-bg">
              <i className="fas fa-comments"></i>
            </div>
            <h3>AI Chatbot Support</h3>
            <p>24/7 emotional support through our advanced AI assistant that listens, understands, and guides you.</p>
            
          </div>
        </div>

        {/* Daily Mood Tracking */}
        <div className="col-lg-4 col-md-6 mb-4" onClick={dairy}>
          <div className="feature-card">
            <div className="icon-box blue-bg">
              <i className="fas fa-chart-bar"></i>
            </div>
            <h3>Daily Mood Tracking</h3>
            <p>Track your emotional journey with our intuitive mood journal and visualization tools.</p>
            
          </div>
        </div>

        {/* Breathing & Meditation */}
        <div className="col-lg-4 col-md-6 mb-4" onClick={breathing}>
          <div className="feature-card">
            <div className="icon-box purple-bg">
              <i className="fas fa-clock"></i>
            </div>
            <h3>Breathing & Meditation</h3>
            <p>Guided exercises and meditation sessions to help you find calm and clarity.</p>
            
          </div>
        </div>

        {/* Music Theraphy */}
        <div className="col-lg-4 col-md-6 mb-4" onClick={music}>
          <div className="feature-card">
            <div className="icon-box teal-bg">
              <i className="fas fa-lock"></i>
            </div>
            <h3>Music Theraphy</h3>
            <p>Your mental health journey is protected with enterprise-grade security and privacy.</p>
          </div>
        </div>

        {/* Resource Hub */}
        <div className="col-lg-4 col-md-6 mb-4" onClick={resources}>
          <div className="feature-card">
            <div className="icon-box orange-bg">
              <i className="fas fa-book"></i>
            </div>
            <h3>Yearly Mood Tracking</h3>
            <p>Visualize Your Year: Mood Heatmap Insights</p>
            
          </div>
        </div>

        {/* Expert Connection */}
        <div className="col-lg-4 col-md-6 mb-4" onClick={doctorConnect}>
          <div className="feature-card">
            <div className="icon-box pink-bg">
              <i className="fas fa-users"></i>
            </div>
            <h3>Expert Connection</h3>
            <p>Connect with licensed therapists and counselors for professional guidance.</p>
            
          </div>
        </div>

        

      </div>
    </div>
  );
};

export default Section2;