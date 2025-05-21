import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';

const App = () => {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("http://localhost:5000/api/welcome")
      .then(res => res.json())
      .then(data => setMessage(data.message))
      .catch(err => console.error("Error fetching welcome message:", err));
  }, []);

  return (
    <div>
      <h1>{message || "Loading..."}</h1>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
