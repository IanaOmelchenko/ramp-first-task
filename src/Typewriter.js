import React, { useState, useEffect } from "react";

export const Typewriter = ({ text }) => {
  const [displayedText, setDisplayedText] = useState([]);

  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (text && currentIndex < text.length) {
        let newItem = text[currentIndex];
        setDisplayedText((prevText) => [...prevText, newItem]);
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, 500);
    return () => clearInterval(interval);
  }, []);
  return (
    <ul>
      {displayedText.map((char, index) => (
        <li key={index}>{char}</li>
      ))}
    </ul>
  );
};
