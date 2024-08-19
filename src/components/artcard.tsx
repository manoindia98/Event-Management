"use client";
import { Separator } from "@/components/ui/separator"

import { useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { DirectionAwareHover } from "./ui/direction-aware-hover";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";

export default function Artcard({
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
    <div className="items-center justify-center mx-2 my-8">
        <div className="hidden md:block">
            <Card className="">
                <CardHeader>
                <CardTitle className="text-md">
                    {title}
                </CardTitle>
                
                </CardHeader>
                
                <CardContent>
                    <DirectionAwareHover imageClassName="" imageUrl={image}>
                        <p className="font-bold text-xl">{title}</p>
                        <p className="font-normal text-sm">₹{price} / day</p>
                    </DirectionAwareHover>
                    <CardDescription className="pt-4 w-[15rem] break-words">
                       
                        Price: ₹{price} / day
                        <br/><br/>
                       {description}
                    </CardDescription>
                </CardContent>

                <CardFooter className="justify-between">
                    <Button className="hover:bg-accent">Add to cart</Button>
                    <Button className="hover:bg-accent">View Details</Button>
                </CardFooter>
            </Card>
        </div>
        <div className="md:hidden w-[100vw] px-4">
            <div className="flex flex-row">
            <div>
                <DirectionAwareHover imageClassName="" imageUrl={image}>
                        <p className="font-bold text-sm">{title}</p>
                        <p className="font-normal text-sm">₹{price} / day</p>
                </DirectionAwareHover>
            </div>
            
            <div className="ml-4 border-l-[1px] pl-2">
                <div className=" font-bold">{title}</div>
                <div className="mt-2">Price: ₹{price} / day</div>
            </div>
            </div>
            
            <Separator className="mt-4"/>
        </div>
        
      
    </div>
  );
}
