
import { useState } from "react";

export default function TariffMeter() {
  const [step, setStep] = useState(1);
  const [relationship, setRelationship] = useState("");
  const [emotion, setEmotion] = useState("");
  const [result, setResult] = useState(null);

  const handleGenerate = () => {
    const tariffs = {
      "Lover (Ex)": 320,
      "Family": 80,
      "Friend": 50,
      "Coworker": 0,
      "Stranger": 60,
      "Pet": -100,
      "Politician": 200,
      "AI Assistant": 75,
      "Inner Child": 0
    };
    const emotionCharges = {
      "Happy": 0,
      "Anxious": 50,
      "Lonely": 100,
      "Guilt-Ridden": 150,
      "Clingy": 180,
      "Indifferent": 20,
      "Spiritually Drained": 120,
      "Just Texted My Ex": 250,
      "Emotionally Unavailable": 200,
      "Pet-Deprived": 80
    };

    const total =
      (tariffs[relationship] || 0) + (emotionCharges[emotion] || 0);

    setResult({
      relationship,
      emotion,
      total
    });
    setStep(3);
  };

  return (
    <div style={{ padding: '2rem', maxWidth: '600px', margin: 'auto' }}>
      {step === 1 && (
        <div>
          <h2>Who are you dealing with today?</h2>
          <select onChange={(e) => setRelationship(e.target.value)} style={{ width: '100%', padding: '0.5rem' }}>
            <option value="">Select One</option>
            <option>Lover (Ex)</option>
            <option>Family</option>
            <option>Friend</option>
            <option>Coworker</option>
            <option>Stranger</option>
            <option>Pet</option>
            <option>Politician</option>
            <option>AI Assistant</option>
            <option>Inner Child</option>
          </select>
          <button onClick={() => setStep(2)} style={{ marginTop: '1rem' }}>Next</button>
        </div>
      )}

      {step === 2 && (
        <div>
          <h2>How are you feeling?</h2>
          <select onChange={(e) => setEmotion(e.target.value)} style={{ width: '100%', padding: '0.5rem' }}>
            <option value="">Select One</option>
            <option>Happy</option>
            <option>Anxious</option>
            <option>Lonely</option>
            <option>Guilt-Ridden</option>
            <option>Clingy</option>
            <option>Indifferent</option>
            <option>Spiritually Drained</option>
            <option>Just Texted My Ex</option>
            <option>Emotionally Unavailable</option>
            <option>Pet-Deprived</option>
          </select>
          <button onClick={handleGenerate} style={{ marginTop: '1rem' }}>Calculate Tariff</button>
        </div>
      )}

      {step === 3 && result && (
        <div>
          <h2>🧾 Your Tariff Receipt</h2>
          <p><strong>Relationship:</strong> {result.relationship}</p>
          <p><strong>Emotion:</strong> {result.emotion}</p>
          <p><strong>Total Due:</strong> {result.total}%</p>
          <button onClick={() => setStep(1)}>Try Again</button>
        </div>
      )}
    </div>
  );
}
