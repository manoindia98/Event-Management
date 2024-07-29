"use client"
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
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

import { Input } from "../../components/ui/input"
import { Label } from "../../components/ui/label"
import { WobbleCardDemo } from '@/components/WobbleCardDemo'
import { WobbleCard } from '@/components/ui/wobble-card'
import { AppleCardsCarouselDemo } from '@/components/AppleCardsCarouselDemo'


function page() {
  return (
    <>  
      
      <div className='mb-8 mx-4'>

        {/* Ad/promo section */}
         <div className='mb-10'>
          <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200">
        Ads/Promo running
      </h2>
      {/* <Card className='w-[12rem] p-10 m-8'>
        <CardContent>
          asa
        </CardContent>
      </Card> */}
      <div className='md:p-10 md:mx-10'>
      <Carousel className=' lg:w-[60vw]'>
        <CarouselContent className='py-10 max-w-[32rem]'>
            <CarouselItem className='mr-10'>              
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
            </CarouselItem>
            <CarouselItem className='mr-10'>
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
            </CarouselItem>
            <CarouselItem className=''>
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
            </CarouselItem>
            
        </CarouselContent>
      
        <div className='hidden md:block'>
          <CarouselPrevious />
          <CarouselNext />
        </div>
        
      </Carousel>

      {/* <WobbleCard
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
      </WobbleCard> */}
      </div>
      
         </div>

        {/* Booking Section */}
        <div className=''><h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200">
        Upcoming Bookings For Event
          </h2>
          <div className='md:p-10 md:mx-10'>
            <Carousel className=' lg:w-[60vw]'>
              <CarouselContent className='py-10 max-w-[32rem]'>
                  <CarouselItem className='mr-10'>              
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
                  </CarouselItem>
                  <CarouselItem className='mr-10'>
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
                  </CarouselItem>
                  <CarouselItem className=''>
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
                  </CarouselItem>
                  
              </CarouselContent>

              <div className='hidden md:block'>
                <CarouselPrevious />
                <CarouselNext />
              </div>
          
            </Carousel>
      {/* <WobbleCard
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
      </WobbleCard> */}
          </div>
        </div>

        {/* Best seller section */}
        <div>
          <AppleCardsCarouselDemo />
        </div>
      </div>
    </>
  )
}

export default page