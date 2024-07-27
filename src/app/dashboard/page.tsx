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


function page() {
  return (
    <>  
      
      <div className='my-8 mx-4'>
      <Card className="w-full">
        <CardHeader>
          <CardTitle>Ads/Promo running</CardTitle>
          <CardDescription>Your Packags currently Active</CardDescription>
        </CardHeader>
        <CardContent>
          
        </CardContent>
        <CardFooter className="flex justify-between">
          
        </CardFooter>
      </Card>
      </div>
      <div className='my-8 mx-4'>
      <Card className="w-full">
        <CardHeader>
          <CardTitle>Upcoming Bookings For Event</CardTitle>
          <CardDescription>Your Upcomming Bookings</CardDescription>
        </CardHeader>
        <CardContent>
          
        </CardContent>
        <CardFooter className="flex justify-between">
          
        </CardFooter>
      </Card>
      </div>
      <div className='my-8 mx-4'>
      <Card className="w-full">
        <CardHeader>
          <CardTitle>Top trending deals</CardTitle>
          <CardDescription>Grab these deals before it runs out</CardDescription>
        </CardHeader>
        <CardContent>
          
        </CardContent>
        <CardFooter className="flex justify-between">
          
        </CardFooter>
      </Card>
      </div>
      <div className='my-8 mx-4'>
      <Card className="w-full">
        {/* <CardHeader>
          <CardTitle>Know our top Artists</CardTitle>
          <CardDescription>Top trending artists and their works</CardDescription>
        </CardHeader> */}
        <CardContent>
          <AppleCardsCarouselDemo />
        </CardContent>
        <CardFooter className="flex justify-between">
          
        </CardFooter>
      </Card>
      </div>
    </>
  )
}

export default page