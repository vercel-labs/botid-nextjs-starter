"use client";

import { useState } from "react";

export const GenerateButton = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [value, setValue] = useState<number | null>(null);

  const handleClick = async () => {
    setIsLoading(true);

    // Fetches against the BotID protected endpoint
    const response = await fetch("/api/generate", {
      method: "POST",
    });
    const data = await response.json();
    setIsLoading(false);
    setValue(data.result);
  };

  return (
    <>
      <button
        className="bg-blue-500 text-white p-2 rounded-md cursor-pointer hover:bg-blue-600 active:bg-blue-700"
        onClick={handleClick}
        disabled={isLoading}
      >
        Trigger BotID Protected Endpoint
      </button>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <p>Rolled a {value != null ? value : "-1"}</p>
      )}
    </>
  );
};
