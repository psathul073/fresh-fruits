import PropTypes from "prop-types";

const Divider = ({ text }) => {
  return (
    <div className=" relative">
      {/* divider */}
      <div className=" absolute inset-0 flex items-center">
        <div className=" border border-slate-200  w-5/6 mx-auto "></div>
      </div>
      {/* text */}
      <div className=" flex justify-center relative ">
        <div className="font-cinzel  text-slate-600 text-4xl uppercase bg-white px-2">
          {text}
        </div>
      </div>
    </div>
  );
};

Divider.propTypes = {
  text: PropTypes.string,
};

export default Divider;
