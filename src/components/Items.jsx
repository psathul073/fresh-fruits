import { useState } from "react";
import FruitsCard from "./FruitsCard";

const Items = () => {
  const [fruits, setFruits] = useState([
    {
      id: 1,
      image: "1",
      name: "Apple",
      price: 100,
    },
    {
      id: 2,
      image: "2",
      name: "Black Grapes",
      price: 200,
    },
    {
      id: 3,
      image: "3",
      name: "Black Berry",
      price: 250,
    },
    {
      id: 4,
      image: "4",
      name: "Grapefruit",
      price: 300,
    },
    {
      id: 5,
      image: "5",
      name: "Jackfruit",
      price: 250,
    },
    {
      id: 6,
      image: "6",
      name: "lemon",
      price: 180,
    },
    {
      id: 7,
      image: "7",
      name: "Mango",
      price: 250,
    },
    {
      id: 8,
      image: "8",
      name: "Orange",
      price: 250,
    },
    {
      id: 9,
      image: "9",
      name: "Pomegranate",
      price: 299,
    },
  ]);
  return (
    <section className=" w-5/6 mx-auto grid sm:grid-cols-2 md:grid-cols-3 gap-16 my-10 py-10">
      {fruits.map((fruit) => {
       return <FruitsCard key={fruit.id} fruit={fruit} />
      })}
    </section>
  );
};

export default Items;
