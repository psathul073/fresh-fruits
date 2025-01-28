import { useState } from "react";

const Appbar = () => {
  const [open, setOpen] = useState(false);

  const menuItem = () => {
    console.log("menu clicked");
    setOpen(!open);
  };
  return (
    <nav className="mt-5">
      <div className=" flex md:flex-row flex-col justify-between w-5/6 md:max-w-7xl mx-auto py-2">
        <div className=" flex justify-between items-center ">
          <div>
            <span className=" text-4xl text-emerald-500 font-bold">Fresh</span>
            <span className=" text-3xl text-slate-500 font-thin">Fruits</span>
          </div>

          {/* Menu Icon */}
          <div className="md:hidden p-0 text-slate-500 hover:text-black hover:scale-105">
            <button onClick={menuItem}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </button>
          </div>
        </div>

        <div
          className={`flex md:block justify-end  ${open ? "block" : "hidden"} `}
        >
          <ul className=" md:flex md:space-x-8 absolute z-10 bg-white md:relative shadow-md rounded-md md:rounded-none md:shadow-none p-2 md:pt-1.5 md:space-y-0 text-xl text-slate-500">
            <li className="navItem text-green-400">
              <a href="#" className=" font-poppins">
                Fruits
              </a>
            </li>
            <li className="navItem ">
              <a href="#" className=" font-poppins">
                Vegetables
              </a>
            </li>
            <li className="navItem border-b border-gray-200 ">
              <a href="#" className=" font-poppins">
                More
              </a>
            </li>
            <li className=" flex gap-2 md:px-2 px-4 py-1.5 text-lg  hover:bg-green-400 md:hover:bg-green-400 hover:text-white  rounded-lg md:rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6 hidden md:block "
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                />
              </svg>
              <p className="md:hidden">Cart</p>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Appbar;
