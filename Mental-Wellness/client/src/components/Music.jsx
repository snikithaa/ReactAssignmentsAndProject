import React, { useState, useRef } from 'react';
import { Play, Pause } from 'lucide-react';
import './Music.css';
import water from "../assets/audio/water.mp3";
import oceanWaves from "../assets/audio/oceanWaves.mp3";
import dreams from "../assets/audio/dreams.mp3";
import forestSound from "../assets/audio/forestSound.mp3";
import tibetSound from "../assets/audio/tibetSound.mp3";
import morning from "../assets/audio/morning.mp3";
import zenGarden from "../assets/audio/zenGarden.mp3";

// Sample tracks data
const tracksData = [
  {
    id: 1,
    title: 'Ocean Waves Meditation',
    description: 'Calming ocean waves for deep relaxation and stress relief',
    duration: '10:00',
    category: 'Nature Sounds',
    coverUrl: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80',
    audioUrl: oceanWaves,
  },
  {
    id: 2,
    title: 'Zen Garden',
    description: 'Traditional Japanese instruments for mindfulness practice',
    duration: '15:00',
    category: 'Meditation',
    coverUrl: 'https://images.unsplash.com/photo-1464982326199-86f32f81b211?auto=format&fit=crop&w=800&q=80',
    audioUrl: zenGarden,
  },
  {
    id: 3,
    title: 'Forest Rain',
    description: 'Gentle rainfall and forest ambiance for peaceful sleep',
    duration: '20:00',
    category: 'Nature Sounds',
    coverUrl: 'https://images.unsplash.com/photo-1418065460487-3e41a6c84dc5?auto=format&fit=crop&w=800&q=80',
    audioUrl: forestSound,
  },
  {
    id: 4,
    title: 'Crystal Bowls',
    description: 'Healing frequencies from Tibetan singing bowls',
    duration: '12:00',
    category: 'Meditation',
    coverUrl: 'https://images.unsplash.com/photo-1517685352821-92cf88aee5a5?auto=format&fit=crop&w=800&q=80',
    audioUrl: tibetSound,
  },
  {
    id: 5,
    title: 'Delta Dreams',
    description: 'Binaural beats for deep sleep and relaxation',
    duration: '30:00',
    category: 'Sleep',
    coverUrl: 'https://images.unsplash.com/photo-1495197359483-d092478c170a?auto=format&fit=crop&w=800&q=80',
    audioUrl: dreams,
  },
  {
    id: 6,
    title: 'Morning Light',
    description: 'Uplifting piano melodies for a positive start',
    duration: '8:00',
    category: 'Music',
    coverUrl: 'https://images.unsplash.com/photo-1519682577862-22b62b24e493?auto=format&fit=crop&w=800&q=80',
    audioUrl: morning,
  }
];

const MusicCard = () => {
  const [currentTrackId, setCurrentTrackId] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const handlePlayPause = (trackId, audioUrl) => {
    if (currentTrackId === trackId && isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      if (audioRef.current) {
        audioRef.current.pause();
      }
      audioRef.current = new Audio(audioUrl);
      audioRef.current.play();
      setCurrentTrackId(trackId);
      setIsPlaying(true);
    }
  };

  return (
    <div className="app-container">
      <header className="app-header">
        <h1 className="app-title">
          <span className="sound-icon">🔊</span> 
          Harmony Haven
        </h1>
        <p className="app-description">
          Discover the healing power of music therapy through our carefully
          curated collection of therapeutic soundscapes and melodies.
        </p>
      </header>

      <div className="tracks-grid">
        {tracksData.map((track) => (
          <div key={track.id} className="track-card">
            <img
              src={track.coverUrl}
              alt={track.title}
              className="track-image"
            />
            <div className="track-overlay">
              <h2 className="track-title">{track.title}</h2>
              <p className="track-description">{track.description}</p>
              <div className="track-footer">
                <div className="track-info">
                  <div className="info-item">
                    <span className="info-label">Duration: </span>
                    <span className="info-value">{track.duration}</span>
                  </div>
                  <div className="info-item">
                    <span className="info-label">Category: </span>
                    <span className="info-value">{track.category}</span>
                  </div>
                </div>
                <button 
                  className="play-button"
                  onClick={() => handlePlayPause(track.id, track.audioUrl)}
                  aria-label={isPlaying && currentTrackId === track.id ? "Pause track" : "Play track"}
                >
                  {isPlaying && currentTrackId === track.id ? <Pause className="play-icon" /> : <Play className="play-icon" />}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MusicCard;