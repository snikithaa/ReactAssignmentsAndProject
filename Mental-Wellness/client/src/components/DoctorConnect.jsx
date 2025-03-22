// ExpertConnect.jsx
import React from 'react';
import { Star, Clock, Video, MessageSquare } from 'lucide-react';
import './DoctorConnect.css';
import doc1 from "../assets/doc1.jpg"
import doc2 from "../assets/doc2.jpg"
import doc3 from "../assets/doc3.jpg"

export default function ExpertConnect() {
  const experts = [
    {
      name: 'Dr. Sarah Johnson',
      title: 'Clinical Psychologist',
      specialties: ['Anxiety', 'Depression', 'Trauma','work-life balance'],
      rating: 4.9,
      reviews: 127,
      image: doc1,
      available: true,
    },
    {
      name: 'Dr. Michael Chen',
      title: 'Licensed Therapist',
      specialties: ['Stress Management', 'Relationships', 'Work-Life Balance'],
      rating: 4.8,
      reviews: 93,
      image: doc2,
      available: false,
    },
    {
      name: 'Dr. Emily Rodriguez',
      title: 'Mental Health Counselor',
      specialties: ['Family Therapy', 'Grief Counseling', 'Personal Growth'],
      rating: 4.9,
      reviews: 156,
      image: doc3,
      available: true,
    },
  ];

  return (
    <div className="container py-5">
      <div className="text-center mb-5">
        <h2 className="fw-bold mb-3">Connect with Mental Health Experts</h2>
        <p className="text-muted mx-auto" style={{ maxWidth: '600px' }}>
          Schedule a session with licensed professionals who can provide the support
          you need on your mental health journey.
        </p>
      </div>

      <div className="row g-4">
        {experts.map((expert) => (
          <div key={expert.name} className="col-md-6 col-lg-4">
            <div className="card h-100 expert-card">
              <img
                src={expert.image}
                alt={expert.name}
                className="card-img-top expert-image"
              />
              <div className="card-body">
                <div className="d-flex justify-content-between align-items-start mb-3">
                  <div>
                    <h3 className="card-title h5 fw-bold">{expert.name}</h3>
                    <p className="text-muted mb-0">{expert.title}</p>
                  </div>
                  <div className="d-flex align-items-center">
                    <Star className="star-icon" />
                    <span className="ms-1 fw-medium">{expert.rating}</span>
                    <span className="ms-1 text-muted small">
                      ({expert.reviews})
                    </span>
                  </div>
                </div>

                <div className="mb-3">
                  <div className="d-flex flex-wrap gap-2">
                    {expert.specialties.map((specialty) => (
                      <span
                        key={specialty}
                        className="specialty-badge"
                      >
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="d-flex align-items-center mb-3">
                  <Clock className="text-muted me-2" size={16} />
                  <span className={expert.available ? 'text-success' : 'text-muted'}>
                    {expert.available ? 'Available Today' : 'Next Available: Tomorrow'}
                  </span>
                </div>

                <div className="d-grid gap-2 d-md-flex">
                  <button className="btn btn-primary d-flex align-items-center justify-content-center gap-2 flex-grow-1">
                    <Video size={16} />
                    Video Call
                  </button>
                  <button className="btn btn-outline-primary d-flex align-items-center justify-content-center gap-2 flex-grow-1">
                    <MessageSquare size={16} />
                    Message
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-5 p-4 bg-light rounded">
        <h3 className="fw-bold mb-3">Why Choose Our Experts?</h3>
        <ul className="list-unstyled mb-0">
          <li className="d-flex mb-3">
            <span className="me-2">•</span>
            <div>
              <span className="fw-medium">Licensed Professionals:</span> All our
              experts are licensed and verified mental health professionals.
            </div>
          </li>
          <li className="d-flex mb-3">
            <span className="me-2">•</span>
            <div>
              <span className="fw-medium">Flexible Sessions:</span> Choose
              between video calls or messaging based on your comfort.
            </div>
          </li>
          <li className="d-flex">
            <span className="me-2">•</span>
            <div>
              <span className="fw-medium">Secure & Confidential:</span> Your
              privacy is our top priority. All sessions are encrypted and private.
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}