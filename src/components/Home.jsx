import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="flex items-center justify-center">
      <div className="flex h-screen items-center">
        <div>
          <img className="w-2xl" src="/dice.png" alt="" />
        </div>
        <div className="flex gap-3 items-end flex-col">
          <div className="text-8xl font-bold">DICE GAME</div>
          <Link to="/game">
          <button className="bg-black p-2 flex justify-center w-full px-20 rounded-sm text-white ">
            Play Now
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
