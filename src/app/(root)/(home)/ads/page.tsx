"use client"
import { ProductCard } from '@/components/productCard'
import React from 'react'

const adServices = [
  {
    title: "Premium Banner Ad",
    description: "Get your advertisement prominently displayed on our homepage banner.",
    price: 5000
  },
  {
    title: "Sidebar Ad Slot",
    description: "Your ad will appear on the sidebar of our most visited pages.",
    price: 3000
  },
  {
    title: "Footer Ad Placement",
    description: "Showcase your ad in the footer section across all pages.",
    price: 2000
  },
  {
    title: "Popup Ad Campaign",
    description: "Engage users with interactive pop-up ads.",
    price: 7000
  },
  {
    title: "Video Ad Feature",
    description: "Feature your video advertisement before our content videos.",
    price: 10000
  }
];

function page() {
  return (
    <>
      <div className='flex flex-wrap'>
          {adServices.map((service)=> (
              <ProductCard title={service.title} price={service.price} description={service.description} />
          ))}
          
          
      </div>

      
    </>
  )
}

export default page