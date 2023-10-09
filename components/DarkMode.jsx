"use client"
import React from 'react'
import { useState } from 'react';
export default function DarkMode() {
    const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (!darkMode) {
      document.mainH.classList.add('dark-mode');
    } else {
      document.mainH.classList.remove('dark-mode');
    }
  };
  return (
    <button onClick={toggleDarkMode}>
      {darkMode ? 'Modo Claro' : 'Modo Oscuro'}
    </button>
  )
}
