"use client";
import { useState } from "react";
import SpeedMeter from "./components/speedMeter";

export default function Home() {
  const [speed, setSpeed] = useState(null);
  const [loading, setLoading] = useState(false);

  const testSpeed = async () => {
    setLoading(true);
    setSpeed(null);

    const response = await fetch("/api/speed?nocache=" + Math.random(), {
      cache: "no-store",
    });

    const reader = response.body?.getReader();
    if (!reader) {
      console.error("No reader found on response body");
      return;
    }

    const startTime = performance.now();
    let bytesReceived = 0;

    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      bytesReceived += value.length;
    }

    const endTime = performance.now();
    const duration = (endTime - startTime) / 1000; // seconds
    const bitsLoaded = bytesReceived * 8;
    const mbps = bitsLoaded / duration / 1024 / 1024;

    setSpeed(parseFloat(mbps.toFixed(2)));
    setLoading(false);
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-white">
      <h1 className="text-6xl font-bold mb-10">FAST Clone</h1>
      <SpeedMeter speed={speed} loading={loading} />
      <button
        onClick={testSpeed}
        className="mt-10 px-6 py-3 bg-black text-white rounded text-lg"
      >
        {loading ? "Testing..." : "Start"}
      </button>
    </main>
  );
}
