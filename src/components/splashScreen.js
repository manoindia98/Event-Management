"use client"
import React, { useEffect, useState } from 'react';
import anime from 'animejs';



const SplashScreen = ({ finishLoading }) => {
  useEffect(() => {
    const loader = anime.timeline({
      complete: () => finishLoading()
    });
    loader.add({
      targets: "#logo",
      delay: 0,
      scale: 4,
      duration: 2000,
      easing: "easeInOutExpo",
    });
  }, []);

  return (
    <div className="flex h-screen items-center justify-center bg-accent">
      <img id="logo" src="/logo.jpg" alt="Logo" className=" rounded-full h-12 w-12" />
    </div>
  );
};

export default SplashScreen;