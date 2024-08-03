

import { Button } from "./ui/button";


interface ProductProps {
  post: {
    id: number;
    title: string;
    description: string;
    price: number;
    image: string;
  };
}





const ArtistsComponent: React.FC<ProductProps> = ({ post }) => {
  
 

  return (
    <div
      className="flex flex-col  bg-white
    hover:scale-110 transition duration-300 ease-in gap-3 p-6 mt-10 ml-5 rounded-xl border-1 hover:shadow-2xl"
    >
      <div className="h-[180px] w-full my-2">
        {/* <img src={post.image} className="h-full w-full" alt={post.title} /> */}
        {/* <img src={post.image} className="h-full w-full" alt={post.title} /> */}
        <img src="https://via.placeholder.com/150" className="h-full w-full" alt={post.title} />
      </div>
      <div>
        <p className="m-2 text-sm">
        Price: ₹5000 / day
        </p>
      </div>
      <div>
        <p className="m-2 text-sm">
        This package is best suited for private events like home gatherings, birthday parties, anniversaries. 
        </p>
      </div>
      <div className="flex  justify-between"><Button className="hover:bg-accent">Book Now</Button>
      <Button className="hover:bg-accent">View Details</Button></div>
     
      

      
    </div>
  );
};

export default ArtistsComponent;

