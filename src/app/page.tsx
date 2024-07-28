"use client"
import Homepage from "@/components/homepage";
import React, { useState } from 'react';
import SplashScreen from '@/components/splashScreen';




export default function Home() {
  const [loading, setLoading] = useState(true);

  const finishLoading = () => {
    setLoading(false);
  };

  return (
    <main>
      {loading ? <SplashScreen finishLoading={finishLoading} /> : null}
      {loading ? null : <Homepage />}
      
     
    </main>
  );
}
