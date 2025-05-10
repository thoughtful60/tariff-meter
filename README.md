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
        <div style={{ whiteSpace: 'pre-wrap', border: '1px dashed #aaa', padding: '1.5rem', marginTop: '2rem' }}>
          <h2>🧾 Tariff Town Receipt</h2>
          {`
—————————— TARIFF TOWN ——————————
INTERACTION:    ${result.relationship}
MOOD:           ${result.emotion}

BASE FEE:       $${result.baseFee.toFixed(2)}
EMOTIONAL TARIFF: +${result.tariffPercentage}%
TARIFF FEE:     $${result.emotionalFee.toFixed(2)}

———————————— TOTAL DUE ———————————
                $${result.total.toFixed(2)}

Note: Payment accepted in sleepless nights or long sighs.
          `}
          <div style={{ marginTop: '1rem' }}>
            <button onClick={() => setStep(1)} style={{ marginRight: '1rem' }}>Appeal the Fee</button>
            <button onClick={handlePay} style={{ marginRight: '1rem' }}>Pay and Proceed to Toll Booth</button>
            <button onClick={shareOnTwitter}>📣 Share on Twitter</button>
          </div>
        </div>
      )}

      {step === 4 && (
        <div>
          <h2>🚧 Tariff Town Toll Booth</h2>
          <p>You’ve paid your emotional dues. Now join the line of the absurd.</p>

          <div style={{ marginBottom: '2rem' }}>
            <img src="https://cdn.shopify.com/s/files/1/0737/4245/0929/files/ChatGPT_Image_May_7_2025_08_31_21_PM.png?v=1746854305" alt="Comic Panel 1" style={{ width: '100%', borderRadius: '12px' }} />
            <p style={{ fontStyle: 'italic', textAlign: 'center' }}>“Excess Emotional Luggage? Step aside.”</p>
          </div>

          <div style={{ marginBottom: '2rem' }}>
            <img src="https://cdn.shopify.com/s/files/1/0737/4245/0929/files/ChatGPT_Image_May_7_2025_08_12_54_PM.png?v=1746854437" alt="Comic Panel 2" style={{ width: '100%', borderRadius: '12px' }} />
            <p style={{ fontStyle: 'italic', textAlign: 'center' }}>“Therapists get a discount.”</p>
          </div>

          <div style={{ marginBottom: '2rem' }}>
            <img src="https://cdn.shopify.com/s/files/1/0737/4245/0929/files/ChatGPT_Image_May_7_2025_08_44_44_PM.png?v=1746853894" alt="Comic Panel 3" style={{ width: '100%', borderRadius: '12px' }} />
            <p style={{ fontStyle: 'italic', textAlign: 'center' }}>“Tears cost extra after 6 PM.”</p>
          </div>

          {(result.relationship === "Politician" && result.emotion === "Guilt-Ridden") && (
            <div style={{ marginBottom: '2rem' }}>
              <img src="https://cdn.shopify.com/s/files/1/0737/4245/0929/files/ChatGPT_Bonus_Panel_Politician_Guilt.png?v=1746959999" alt="Bonus Panel" style={{ width: '100%', borderRadius: '12px' }} />
              <p style={{ fontStyle: 'italic', textAlign: 'center' }}>“You voted for this. Emotionally AND literally.”</p>
            </div>
          )}

          <div style={{ textAlign: 'center' }}>
            <button onClick={() => setStep(1)} style={{ margin: '1rem', padding: '0.75rem 1.5rem' }}>🧾 Start Over</button>
            <button onClick={() => window.location.href='/collections/all'} style={{ margin: '1rem', padding: '0.75rem 1.5rem' }}>🛒 Enter the Merch Zone</button>
          </div>

          <footer style={{ textAlign: 'center', marginTop: '2rem', fontSize: '0.9rem', color: '#999' }}>
            “You again?” — Cat, Emotional Customs Officer 🐾
          </footer>
        </div>
      )}
    </div>
  );
}
