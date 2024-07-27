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
        <div>Ads/Promo running</div>
        <div>Upcoming Bookings For Event</div>
        <div><AppleCardsCarouselDemo /></div>
        <div></div>
        <div></div>
      </div>
    </>
  )
}

export default page