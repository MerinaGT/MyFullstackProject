import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [feedbacks, setFeedbacks] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8080/api/feedback')
      .then(res => res.json())
      .then(data => setFeedbacks(data))
      .catch(err => console.error("Error loading feedbacks:", err));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newFeedback = { username: name, comment: message };

    try {
      const res = await fetch('http://localhost:8080/api/feedback', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newFeedback)
      });

      if (!res.ok) throw new Error('Failed to send feedback');
      const savedFeedback = await res.json();

      setFeedbacks([...feedbacks, savedFeedback]);
      setName('');
      setMessage('');
    } catch (err) {
      console.error(err);
      alert('Something went wrong!');
    }
  };

  return (
    <div className="App">
      <h1>Feedback Collector</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        /><br /><br />
        <textarea
          placeholder="Your Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        /><br /><br />
        <button type="submit">Submit Feedback</button>
      </form>

      <h2>All Feedbacks</h2>
      <ul>
        {feedbacks.map((fb) => (
          <li key={fb.id}><strong>{fb.username}:</strong> {fb.comment}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
