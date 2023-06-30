import PropTypes from "prop-types";
import { useState } from "react";

const Card = ({ name, image, status, url, description, listTech }) => {
  const [isHover, setHover] = useState(false);
  return (
    <div
      onClick={() => {
        window.open(url, "_blank");
      }}
      className={`${
        isHover && "cursor-pointer bg-slate-800"
      } relative border border-mainColor border-solid rounded-sm shadow-subColor shadow-lg`}
    >
      <div
        style={{ backgroundImage: `url(${image})` }}
        className={`h-[600px] bg-no-repeat bg-center rounded-lg transition-colors duration-300 ${
          isHover ? "opacity-50" : ""
        }`}
        onMouseEnter={() => {
          setHover(true);
        }}
        onMouseLeave={() => {
          setHover(false);
        }}
      ></div>
      {isHover && (
        <section className="animate-fade-in w-full bottom-56 absolute flex flex-col justify-center items-center pointer-events-none">
          <h1 className="font-bold text-4xl font-signika text-center text-subColor">
            {name}
          </h1>
          <div className="flex flex-col text-center">
            <label className="font-gudea">
              Status: <span className="text-green-500 font-bold">{status}</span>
            </label>
            <label className="font-gudea">
              Status: <span className="font-bold">{status}</span>
            </label>
            <label className="font-gudea">
              Description: <p className="font-bold">{description}</p>
            </label>
            <label className="font-gudea">
              Tech using:{" "}
              {listTech.map((tech, index) => (
                <span key={index} className="font-bold">
                  {`${tech}${index === listTech.length - 1 ? "" : ", "} `}
                </span>
              ))}
            </label>
          </div>
        </section>
      )}
    </div>
  );
};

Card.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  image: PropTypes.string,
  status: PropTypes.string,
  url: PropTypes.string,
  description: PropTypes.string,
  listTech: PropTypes.array,
};

export default Card;
