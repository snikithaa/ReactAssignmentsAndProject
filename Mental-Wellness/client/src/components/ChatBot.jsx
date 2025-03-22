import React, { useState, useRef, useEffect } from 'react';
import { Mic, MicOff, Send, Volume2, VolumeX } from 'lucide-react';
import "./ChatBot.css"
import { GoogleGenerativeAI } from "@google/generative-ai";

const Chatbot = () => {
  const [input, setInput] = useState([]);
  const [output, setOutput] = useState([]);
  const [response, setResponse] = useState("");
  const [messages, setMessages] = useState([
    { text: "Hello! How can I help you today?", isBot: true }
  ]);
  const [ans, setAns] = useState("");
  const [user, setUser] = useState(true);
  const [inputText, setInputText] = useState("");
  const [isRecording, setIsRecording] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [speechEnabled, setSpeechEnabled] = useState(true);
  const messagesEndRef = useRef(null);
  const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const speakMessage = (text) => {
    if (!speechEnabled) return;
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.onstart = () => setIsSpeaking(true);
    utterance.onend = () => setIsSpeaking(false);
    utterance.onerror = () => setIsSpeaking(false);
    window.speechSynthesis.speak(utterance);
  };

  const handleSendMessage = async (inputText) => {
    if (inputText.trim()) {
      setMessages([...messages, { text: inputText, isBot: false }]);
      setInputText("");
      const response = await fetchAIResponse(inputText);
      setMessages(prev => [...prev, { text: response, isBot: true }]);
      speakMessage(response);
    }
  };

  const toggleVoiceInput = () => {
    if (!isListening) {
      setIsListening(true);
      setIsRecording(true);
      recognition.start();
      recognition.onresult = (event) => {
        const voiceText = event.results[0][0].transcript;
        setMessages(prev => [...prev, { text: voiceText, isBot: false }]);
        handleSendMessage(voiceText);
      };
      recognition.onend = () => {
        setIsListening(false);
        setIsRecording(false);
      };
      recognition.onerror = () => {
        setIsListening(false);
        setIsRecording(false);
      };
    } else {
      recognition.stop();
      setIsListening(false);
      setIsRecording(false);
    }
  };

  const toggleSpeech = () => {
    if (isSpeaking) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
    }
    setSpeechEnabled(!speechEnabled);
  };

  // let count = 0;÷
  const apiKeys = [
    import.meta.env.VITE_GOOGLE_API_KEY1,

  ];

  const fetchAIResponse = async (inputText) => {
    try {
      const apiKey = apiKeys[0];
      // count += 1;
      const genAI = new GoogleGenerativeAI(apiKey);
      const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });
      
  
      const systemPrompt = `You are ManasSetu, a warm and empathetic mental health companion. 
      Your responses should be short, conversational, and engaging—like chatting with a close friend. 
      Always ask follow-up questions to keep the user engaged. 
      Show empathy and encourage them to share their feelings without judgment. 
      If relationships affect their mental health, gently ask about them and guide them towards understanding their emotions. 
      Offer small, practical steps for emotional healing. Avoid medical diagnoses and encourage professional help when needed.`;
      
      const result = await model.generateContent([systemPrompt, inputText]);
      const responseText = await result.response.text();
      
      setResponse(responseText);
      return responseText;
    } catch (error) {
      console.error("Error:", error);
      return "Sorry, I couldn't process your request.";
    }
    
  };
  

  return (
    <div className="chatbot-container">
      <div className="chatbot-inner">
        <div className="chatbot-header">
          <div className="header-content">
            <div className="header-title">
              <span className="status-dot"></span>
              <h2>AI Assistant</h2>
            </div>
            <button
              onClick={toggleSpeech}
              className={`speech-toggle ${speechEnabled ? 'active' : ''}`}
              title={speechEnabled ? "Turn off speech" : "Turn on speech"}
            >
              {speechEnabled ? <Volume2 size={24} /> : <VolumeX size={24} />}
            </button>
          </div>
        </div>

        <div className="chatbot-messages">
          {messages.map((message, index) => (
            <div key={index} className={`message-wrapper ${message.isBot ? 'bot' : 'user'}`}>
              <div className="message">
                {message.text}
              </div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>

        <div className="chatbot-input">
          <div className="input-group">
            <input
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSendMessage(inputText)}
              placeholder="Type your message..."
            />
            <button
              className={`voice-button ${isListening ? 'recording' : ''}`}
              onClick={toggleVoiceInput}
            >
              {isListening ? <MicOff size={20} /> : <Mic size={20} />}
            </button>
            <button
              className="send-button"
              onClick={() => handleSendMessage(inputText)}
            >
              <Send size={20} />
            </button>
          </div>
          {isRecording && (
            <div className="recording-indicator">
              <span className="recording-dot"></span>
              Recording... (tap microphone to stop)
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Chatbot;