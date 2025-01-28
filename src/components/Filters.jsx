import { useState } from "react";

const Filters = () => {
  const [selectedItem, setSelectedItem] = useState(1);

  return (
    <section className=" my-10 py-4 w-5/6 md:w-4/6 mx-auto flex flex-col md:flex-row justify-around ">
      <button
        onClick={() => setSelectedItem(1)}
        className={`btnStyle ${
          selectedItem === 1 ? "bg-green-400 text-white" : "text-slate-400"
        }`}
      >
        Latest
      </button>
      <button
        onClick={() => setSelectedItem(2)}
        className={`btnStyle ${
          selectedItem === 2 ? "bg-green-400 text-white" : "text-slate-400"
        }`}
      >
        Best Seller
      </button>
      <button
        onClick={() => setSelectedItem(3)}
        className={`btnStyle ${
          selectedItem === 3 ? "bg-green-400 text-white" : "text-slate-400"
        }`}
      >
        Special
      </button>
    </section>
  );
};

export default Filters;
