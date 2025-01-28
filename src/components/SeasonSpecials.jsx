import { useState } from 'react'
import FruitsCard from './FruitsCard';
import Divider from './Divider';

const SeasonSpecials = () => {
      const [fruits, setFruits] = useState([  
        {
        id: 7,
        image: "7",
        name: "Mango",
        price: 100,
      },
      {
        id: 2,
        image: "2",
        name: "Black Grapes",
        price: 100,
      },
      {
        id: 6,
        image: "6",
        name: "lemon",
        price: 150,
      },
    ]);

  return (
    <section className=' w-5/6 mx-auto my-10 relative' >
       <Divider text={"Season Special"} />
         <div className=" grid sm:grid-cols-2 md:grid-cols-3 gap-16 my-10 py-10">
              {fruits.map((fruit) => {
               return <FruitsCard key={fruit.id} fruit={fruit} />
              })}
            </div>
    </section>
  )
}

export default SeasonSpecials