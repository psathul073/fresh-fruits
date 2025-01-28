
import PropTypes from "prop-types"

const FruitsCard = ({fruit}) => {
  return (
    <div className=" rounded-lg overflow-hidden shadow-lg transform hover:scale-105 duration-100 relative  group">
        <img src={`${fruit.image}.png`} alt={`${fruit.name}`}  className=" object-scale-down bg-center w-full p-4 h-64 drop-shadow-2xl"/>
        <div className=" flex flex-col items-center space-y-0 font-poppins text-base text-slate-400 font-normal h-auto ">
          <span>{fruit.name}</span>
          <span>₹{fruit.price}</span>
          <span className=" text-emerald-500  uppercase invisible group-hover:visible "> Add to cart </span>
        </div>
        <span className=" absolute top-4 left-4 px-2 py-1 rounded-lg text-white text-sm bg-emerald-600">10% Off</span>
      {/* cart icon */}
        <div className=" invisible group-hover:visible cursor-pointer absolute top-2.5 right-4 rounded-full shadow-lg p-2 z-10 bg-white hover:bg-emerald-600 text-slate-400 text-sm hover:text-white ">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
</svg>

        </div>
    </div>
  )
}

FruitsCard.propTypes = {
  fruit: PropTypes.object,
};



export default FruitsCard