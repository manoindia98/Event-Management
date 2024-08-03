// import React from 'react'
"use client"
import { CategoryBarData } from "@/Data/data"
import CategoryBar from "@/components/CategoryBar"


import { useState,useEffect } from "react";
import ArtistsComponent from "@/components/artist";
interface Artist {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

const Artist = [
  {
    id:1,
    title: "Title of Artist Card",
    description: "Description of artist",
    price: 5000
  },
  {id:2,
    title: "Title of Artist Card",
    description: "Description of artist",
    price: 5000
  },
  {
    id:3,
    title: "Title of Artist Card",
    description: "Description of artist",
    price: 5000
  },
  {
    id:4,
    title: "Title of Artist Card",
    description: "Description of artist",
    price: 5000
  },
  {id:5,
    title: "Title of Artist Card",
    description: "Description of artist",
    price: 5000
  },
  {id:6,
    title: "Title of Artist Card",
    description: "Description of artist",
    price: 5000
  },
  {id:7,
    title: "Title of Artist Card",
    description: "Description of artist",
    price: 5000
  },
  {id:8,
    title: "Title of Artist Card",
    description: "Description of artist",
    price: 5000
  }
  
];


const page: React.FC = () => {
  const API_URL = "";
  const [posts, setPosts] = useState(Artist);

  async function fetchProductData() {
   

    try {
      // const res = await fetch(API_URL);
      // const data: Product[] = await res.json();
      const data= Artist;
      setPosts(data);
    } catch (error) {
      console.log("Error occured");
      setPosts([]);
    }

  }

  useEffect(() => {
    fetchProductData();
  }, []);

  return (
    <div className='h-full'>
      <div>upcoming event</div>
      <div>Event Packages</div>
      <div>list of halls available to book</div>

      <div className=" w-full  flex gap-2">
        <div className="w-full mx-auto text-center  gap-x-4 flex justify-evenly items-center py-5">
          {CategoryBarData.map((item, index) => (
            <CategoryBar
              key={index}
              Imgsrc={item.imageSrc}
              CategoryName={item.category}
            />
          ))}
         </div>
   </div>


<div className="m-2">
  <h1 className="text-4xl mx-auto pl-7">Featured Singers</h1>
      
<div className="grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 max-w-6xl p-2 mx-auto space-y-10 space-x-5 min-h-[80vh]">
  {posts.map((post:any) => (
    <ArtistsComponent key={post.id} post={post} />
  ))}
</div>

</div>

<div className="m-4">
  <h1 className="text-4xl mx-auto pl-7">Featured Dancers</h1>
      
<div className="grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 max-w-6xl p-2 mx-auto space-y-10 space-x-5 min-h-[80vh]">
  {posts.map((post:any) => (
    <ArtistsComponent key={post.id} post={post} />
  ))}
</div>

</div>

<div>
  <h1 className="text-4xl mx-auto pl-7">Featured Chef</h1>
      
<div className="grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 max-w-6xl p-2 mx-auto space-y-10 space-x-5 min-h-[80vh]">
  {posts.map((post:any) => (
    <ArtistsComponent key={post.id} post={post} />
  ))}
</div>

</div>

<div>
  <h1 className="text-4xl mx-auto pl-7">Featured Photographer</h1>
      
<div className="grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 max-w-6xl p-2 mx-auto space-y-10 space-x-5 min-h-[80vh]">
  {posts.map((post:any) => (
    <ArtistsComponent key={post.id} post={post} />
  ))}
</div>

</div>

    </div>


  )
}

export default page
