"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { DirectionAwareHover } from "./ui/direction-aware-hover";

export function ProductCard({
    className,
    title,
    description,
    price,
    image,
    link,
}:{
    className?: string;
    title?: string | React.ReactNode;
    description?: string | React.ReactNode;
    price?: string | React.ReactNode;
    image?: string ;
    link?: string | React.ReactNode;
}) {
    image =
    "https://images.unsplash.com/photo-1663765970236-f2acfde22237?q=80&w=3542&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  return (
    <div className="h-[40rem] relative  flex items-center justify-center">
      <DirectionAwareHover imageUrl={image}>
        <p className="font-bold text-xl">{title}</p>
        <p className="font-normal text-sm">₹{price} / day</p>
      </DirectionAwareHover>
    </div>
  );
}
