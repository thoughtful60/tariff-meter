import { useState } from "react";

export default function TariffMeter() {
  const [step, setStep] = useState(1);
  const [relationship, setRelationship] = useState("");
  const [emotion, setEmotion] = useState("");
  const [result, setResult] = useState(null);

  const handleGenerate = () => {
    const baseFee = 100;

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

    const tariffPercentage = (tariffs[relationship] || 0) + (emotionCharges[emotion] || 0);
    const emotionalFee = (baseFee * tariffPercentage) / 100;
    const total = baseFee + emotionalFee;

    setResult({
      relationship,
      emotion,
      baseFee,
      tariffPercentage,
      emotionalFee,
      total
    });
    setStep(3);
  };

  const handlePay = () => {
    setStep(4);
  };

  const shareOnTwitter = () => {
    const tweet = `I just paid $${result.total.toFixed(2)} in emotional tariffs for dealing with ${result.relationship} while feeling ${result.emotion}. What’s your toll? 🧾 #TariffTown`;
    const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(tweet)}`;
    window.open(url, '_blank');
  };

  return (
    <div style={{ padding: '2rem', maxWidth: '800px', margin: 'auto', fontFamily: 'monospace' }}>
      {step === 1 && (
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <a href="#" onClick={() => setStep(2)} style={{ textDecoration: 'none', display: 'inline-block' }}>
            <img
              src="https://cdn.shopify.com/s/files/1/0737/4245/0929/files/ChatGPT_Image_May_9_2025_09_18_53_PM.png?v=1746850757"
              alt="Tariff Town Sign"
              style={{ maxWidth: '100%', borderRadius: '12px' }}
            />
            <div style={{ marginTop: '10px', fontWeight: 'bold', fontSize: '1.1rem', color: '#333' }}>
              👇 Click the sign to enter Tariff Town
            </div>
          </a>
        </div>
      )}

      {/* Step 2 and onward logic here... */}

      <div style={{ textAlign: 'center' }}>
        <button onClick={() => setStep(1)} style={{ margin: '1rem', padding: '0.75rem 1.5rem' }}>🧾 Start Over</button>
        <button onClick={() => window.open('https://olgaforeign.com/collections/all', '_blank')} style={{ margin: '1rem', padding: '0.75rem 1.5rem' }}>🛒 Enter the Merch Zone</button>
      </div>

      <footer style={{ textAlign: 'center', marginTop: '2rem', fontSize: '0.9rem', color: '#999' }}>
        “You again?” — Cat, Emotional Customs Officer 🐾
      </footer>
    </div>
  );
}
