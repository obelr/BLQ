"use client";
import React, { useState, useEffect } from "react";
import Image from 'next/image';

const Shortcuts = () => {
  const [shortcuts, setShortcuts] = useState([]);

  useEffect(() => {
    const fetchShortcuts = async () => {
      try {
        const response = await fetch(
          "https://api.testvalley.kr/main-shortcut/all"
        );
        const data = await response.json();
        setShortcuts(data);
      } catch (error) {
        console.error("Error fetching shortcuts:", error);
      }
    };

    fetchShortcuts();
  }, []);

  return (
    <div className="flex flex-wrap justify-center items-center mt-10 gap-6 md:gap-10"> {/* Added flex-wrap and adjusted gap */}
      {shortcuts.map((shortcut) => (
        <div key={shortcut.mainShortcutId} className="text-center">
          <Image
            src={shortcut.imageUrl}
            alt={shortcut.title}
            width={64} 
            height={64}
            objectFit="cover"
          />
          <p className="text-sm font-medium mt-2">{shortcut.title}</p>
        </div>
      ))}
    </div>
  );
};

export default Shortcuts;
