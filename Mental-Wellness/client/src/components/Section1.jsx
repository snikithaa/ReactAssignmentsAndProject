import React, { useState, useEffect } from 'react';
import { ArrowLeft, ArrowRight, ChevronDown } from 'lucide-react';
import './Section1.css'; // Import the custom CSS
import { useNavigate } from "react-router-dom"
import { useUser } from '@clerk/clerk-react';
import img1 from "../assets/1.jpeg"
import img2 from "../assets/2.jpeg"
import img3 from "../assets/3.jpeg"
import img4 from "../assets/4.jpeg"
import img5 from "../assets/5.jpeg"
import img6 from "../assets/6.jpeg"
import img7 from "../assets/7.jpeg"
import img8 from "../assets/8.jpeg"
import animationData from "../assets/animations/main-page.json"; // Import the Lottie animation JSON file
import Lottie from 'lottie-react';

function Section1() {
  const navigate = useNavigate();
  const { user, isSignedIn } = useUser();
  const [greeting, setGreeting] = useState('');
  const [userName, setUserName] = useState('Guest');
  const [currentSlide, setCurrentSlide] = useState(0);

  // Time-based greeting
  useEffect(() => {
    const getCurrentGreeting = () => {
      const hour = new Date().getHours();
      if (hour >= 5 && hour < 12) return 'Good Morning';
      if (hour >= 12 && hour < 18) return 'Good Afternoon';
      return 'Good Evening';
    };

    setGreeting(getCurrentGreeting());

    const intervalId = setInterval(() => {
      setGreeting(getCurrentGreeting());
    }, 60000);

    return () => clearInterval(intervalId);
  }, []);

  // Set the user's name if signed in
  useEffect(() => {
    if (isSignedIn && user) {
      setUserName(user.firstName || 'Guest');
    }
  }, [isSignedIn, user]);

  // Testimonials data
  const testimonials = [
    {
      id: 1,
      name: "Emma Thompson",
      role: "Teacher",
      quote: "This platform completely transformed my approach to mental wellness. The guided meditations helped me manage classroom stress effectively.",
      avatar: img1
    },
    {
      id: 2,
      name: "Marcus Chen",
      role: "Software Developer",
      quote: "As someone dealing with anxiety, finding this supportive community was life-changing. The journaling feature helps me track my progress daily.",
      avatar: img2
    },
    {
      id: 3,
      name: "Leila Patel",
      role: "Healthcare Worker",
      quote: "After months of burnout, this platform provided me with the tools to reconnect with myself and develop healthier coping mechanisms.",
      avatar: img3
    },
    {
      id: 4,
      name: "James Wilson",
      role: "Marketing Executive",
      quote: "The AI chatbot feature became my 3 AM friend when anxiety wouldn't let me sleep. It guided me through panic attacks with practical techniques.",
      avatar: img4
    },
    {
      id: 5,
      name: "Sofia Rodriguez",
      role: "Graduate Student",
      quote: "Balancing research and teaching was overwhelming until I found this platform. The structured breathing exercises helped me stay centered during stressful periods.",
      avatar: img5
    },
    {
      id: 6,
      name: "Dr. Michael Okonkwo",
      role: "Pediatrician",
      quote: "I recommend this platform to parents struggling with burnout. The evidence-based approaches align perfectly with what I know works for sustainable mental health.",
      avatar: img6
    },
    {
      id: 7,
      name: "Aisha Kumar",
      role: "Entrepreneur",
      quote: "Running a startup took a toll on my mental health. This platform's expert connect feature got me personalized advice that traditional therapy couldn't provide.",
      avatar: img7
    },
    {
      id: 8,
      name: "Thomas Bergström",
      role: "Professional Athlete",
      quote: "Mental training is as important as physical training. The visualization exercises and mood tracking helped improve my performance under pressure.",
      avatar: img8
    }
  ];

  // Navigate through slides
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };


  function navigateSignin() {
    navigate('signin')
  }

  return (
    <div className="landing-page">
      {/* Greeting Component */}
      <div className="greeting-box bg-transparent">
        <p className="greeting-text">
          <span>{greeting} ,</span>
          <span className="user-name">{userName}</span>
        </p>
      </div>

      {/* Navbar
      <nav className="navbar">
        <div className="navbar-brand">MindWell</div>
        <div className="navbar-links">
          <a href="#" className="nav-link">Home</a>
          <a href="#" className="nav-link">About</a>
          <a href="#" className="nav-link">Features</a>
          <a href="#" className="nav-link">Testimonials</a>
        </div>
        <button className="btn-primary">Get Started</button>
      </nav> */}

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-heading">
            Your Journey to <span className="highlight">Mental Wellness</span> Starts Here
          </h1>
          <p className="hero-subtext">
            A supportive platform designed to guide you through your mental health journey with personalized tools and expert guidance.
          </p>
          <div className="hero-buttons">
            <button className="btn-primary" onClick={navigateSignin}>Start Your Journey</button>
            <button className="btn-outline">Learn More</button>
          </div>
        </div>
        <div className="hero-animation ">
          <div className="animation-circle">
            <div className="hero-animation">
              <Lottie animationData={animationData} loop={true} />
            </div>
          </div>
        </div>

      </section>

      {/* Scroll Indicator */}
      <div className="scroll-indicator">
        <span>Scroll Down</span>
        <ChevronDown className="scroll-icon" />
      </div>

      {/* Testimonials Section */}
      <section className="testimonials-section">
        <h2 className="section-heading">What Our Users Say</h2>
        <div className="testimonial-slider">
          <div className="testimonial-card">
            <div className="testimonial-avatar">
              <img src={testimonials[currentSlide].avatar} alt={testimonials[currentSlide].name} />
              <div className="avatar-badge">★</div>
            </div>
            <p className="testimonial-quote">"{testimonials[currentSlide].quote}"</p>
            <h4 className="testimonial-name">{testimonials[currentSlide].name}</h4>
            <p className="testimonial-role">{testimonials[currentSlide].role}</p>
          </div>
          <div className="slider-controls">
            <button onClick={prevSlide} className="slider-button">
              <ArrowLeft className="slider-icon" />
            </button>
            <div className="slider-dots">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`slider-dot ${currentSlide === index ? 'active' : ''}`}
                />
              ))}
            </div>
            <button onClick={nextSlide} className="slider-button">
              <ArrowRight className="slider-icon" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Section1;