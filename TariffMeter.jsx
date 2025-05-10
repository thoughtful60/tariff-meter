
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Textarea } from "@/components/ui/textarea";

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
    <div className="p-6 max-w-xl mx-auto space-y-6">
      {step === 1 && (
        <Card>
          <CardContent className="space-y-4">
            <h2 className="text-xl font-bold">Who are you dealing with today?</h2>
            <select
              className="w-full p-2 border rounded"
              onChange={(e) => setRelationship(e.target.value)}
            >
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
            <Button onClick={() => setStep(2)}>Next</Button>
          </CardContent>
        </Card>
      )}

      {step === 2 && (
        <Card>
          <CardContent className="space-y-4">
            <h2 className="text-xl font-bold">How are you feeling?</h2>
            <select
              className="w-full p-2 border rounded"
              onChange={(e) => setEmotion(e.target.value)}
            >
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
            <Button onClick={handleGenerate}>Calculate Tariff</Button>
          </CardContent>
        </Card>
      )}

      {step === 3 && result && (
        <Card>
          <CardContent className="space-y-4">
            <h2 className="text-xl font-bold">🧾 Your Tariff Receipt</h2>
            <p><strong>Relationship:</strong> {result.relationship}</p>
            <p><strong>Emotion:</strong> {result.emotion}</p>
            <p><strong>Total Due:</strong> {result.total}%</p>
            <Button onClick={() => setStep(1)}>Try Again</Button>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
