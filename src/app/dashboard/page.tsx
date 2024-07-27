import React from 'react'
import { Button } from "../../components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../components/ui/card"
import { Input } from "../../components/ui/input"
import { Label } from "../../components/ui/label"
import { AppleCardsCarouselDemo } from '@/components/AppleCardsCarouselDemo'
import { WobbleCardDemo } from '@/components/WobbleCardDemo'
import { WobbleCard } from '@/components/ui/wobble-card'


function page() {
  return (
    <>  
      
      <div className='my-8 mx-4'>
        <div className='my-10'>
          <h2 className="max-w-7xl pl-4 mx-auto text-2xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200">
        Ads/Promo running
      </h2>
      {/* <Card className='w-[12rem] p-10 m-8'>
        <CardContent>
          asa
        </CardContent>
      </Card> */}
      <div className='p-10 w-[40rem]'>
      <WobbleCard
        containerClassName="col-span-1 lg:col-span-2 h-full bg-blue-800 h-[300px]"
        className=""
      >
        <div className="max-w-xs">
          <h2 className="text-left text-balance text-2xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
            Running Package
          </h2>
          <p className="mt-4 text-left  text-base/6 text-neutral-200">
            With over 100,000 mothly active bot users, Gippity AI is the most
            popular AI platform for developers.
          </p>
        </div>
      </WobbleCard>
      </div>
      
      </div>
        <div className='my-10'><h2 className="max-w-7xl pl-4 mx-auto text-2xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200">
        Upcoming Bookings For Event
      </h2>
      <div className='p-10 w-[40rem]'>
      <WobbleCard
        containerClassName="col-span-1 lg:col-span-2 h-full bg-purple-900 h-[300px]"
        className=""
      >
        <div className="max-w-xs">
          <h2 className="text-left text-balance text-2xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
            Your Upcoming Booking For Artists
          </h2>
          <p className="mt-4 text-left  text-base/6 text-neutral-200">
            With over 100,000 mothly active bot users, Gippity AI is the most
            popular AI platform for developers.
          </p>
        </div>
      </WobbleCard>
      </div></div>
        <div><AppleCardsCarouselDemo /></div>
        <div></div>
        <div></div>
      </div>
    </>
  )
}

export default page