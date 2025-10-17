import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [user, setUser] = useState(null);

  const fetchData = () => {
    fetch("https://randomuser.me/api/?results=1")
      .then((response) => response.json())
      .then(data => {
        setUser(data.results[0]);
      })
      .catch(error => {
        console.error("Veri çekme sırasında bir hata oluştu:", error);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (!user) {
    return (
      <div className="container">
        <h1>Data pending...</h1>
      </div>
    );
  }
  
  return (
    <div className="container">
      <div className="user-card">
        <img 
          className="user-avatar" 
          src={user.picture.large} 
          alt={`Profile of ${user.name.first} ${user.name.last}`} 
        />
        <h1 className="user-name">
          {user.name.first} {user.name.last}
        </h1>
        <p className="user-email">{user.email}</p>
      </div>
    </div>
  );
}

export default App;