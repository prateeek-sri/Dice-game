import React, { useState } from "react";
import { Link } from "react-router-dom";

function Playground() {
  const [click, setClick] = useState(false);
  const [userValue, setUserValue] = useState(0);
  const [showRules, setShowRules] = useState(false);
  const [dice, setDice] = useState(1);
  const [total, setTotal] = useState(0);
  const [error, setError] = useState(false);
  const [win, setWin] = useState(false);
  const reset = () => {
    setTotal(0);
    setError(false);
    setShowRules(false);
    setUserValue(0);
    setDice(1);
  };

  const randomNumber = () => {
    if (userValue === 0) {
      setError(true);
    } else {
      setError(false);

      let num = Math.floor(Math.random() * 6 + 1);
      setDice(num);
      setUserValue(0);
      console.log("randomNumber");
      if (num === userValue) {
        function increase(total, num) {
          setTotal(total + num);
          console.log("inc");
        }
        increase(total, num);
      } else {
        function decrease(total, num) {
          setTotal(total - 2);
          console.log("dec");
        }
        decrease(total, num);
      }
      console.log(total);
      if (total === 50) {
        setWin(true);
      }
    }
  };
  return (
    <div className="flex py-12 px-8 md:px-28 flex-col items-center justify-center">
        {win && 
        <div className=" bg-[#FBF1F1] p-20 rounded-md text-red-600">Congratulations! You Won!!</div>}
 <Link to="/">
            <div className="text-lg font-medium">Back to Home</div>
          </Link>
       
      <div className="flex flex-col gap-2 items-center justify-center md:w-full  md:flex md:flex-row md:items-center md:justify-between">
        <div className="flex pt-3 flex-col items-center">
         

          <div className="text-8xl font-medium">{total}</div>
          <div className="font-medium text-xl">Total Score</div>
        </div>
        <div>
          <div className="flex flex-col gap-3 items-center md:flex-col md:gap-4 md:items-end md:flex ">
            {error && (
              <div className=" text-xl text-red-500">
                You have not selected any number
              </div>
            )}

            <div className="flex flex-col md:flex-row md:flex md:gap-4">
              <div
                onClick={() => {
                  setUserValue(1);
                }}
                className={`${
                  userValue === 1
                    ? "bg-black text-white"
                    : "bg-white text-black"
                } border-2 text-lg font-bold sm:px-4 sm:py-2 md:px-[26px] md:py-4`}
              >
                1
              </div>
              <div
                onClick={() => {
                  setUserValue(2);
                }}
                className={`${
                  userValue === 2
                    ? "bg-black text-white"
                    : "bg-white text-black"
                } border-2 text-lg font-bold sm:px-4 sm:py-2 md:px-[26px] md:py-4`}
              >
                2
              </div>
              <div
                onClick={() => {
                  setUserValue(3);
                }}
                className={`${
                  userValue === 3
                    ? "bg-black text-white"
                    : "bg-white text-black"
                } border-2 text-lg font-bold sm:px-4 sm:py-2 md:px-[26px] md:py-4`}
              >
                3
              </div>
              <div
                onClick={() => {
                  setUserValue(4);
                }}
                className={`${
                  userValue === 4
                    ? "bg-black text-white"
                    : "bg-white text-black"
                } border-2 text-lg font-bold sm:px-4 sm:py-2 md:px-[26px] md:py-4`}
              >
                4
              </div>
              <div
                onClick={() => {
                  setUserValue(5);
                }}
                className={`${
                  userValue === 5
                    ? "bg-black text-white"
                    : "bg-white text-black"
                } border-2 text-lg font-bold sm:px-4 sm:py-2 md:px-[26px] md:py-4`}
              >
                5
              </div>
              <div
                onClick={() => {
                  setUserValue(6);
                }}
                className={`${
                  userValue === 6
                    ? "bg-black text-white"
                    : "bg-white text-black"
                } border-2 text-lg font-bold sm:px-4 sm:py-2 md:px-[26px] md:py-4`}
              >
                6
              </div>
            </div>
            <div className="font-bold text-xl">Select Number</div>
          </div>
        </div>
        </div>
      

      <div className=" flex items-center flex-col mb-16">
        <button onClick={randomNumber}>
          <img className=" sm:w-3xs w-2xs" src={`/${dice}.png`} alt="" />
        </button>
        <div className="mb-6 font-medium text-2xl">Click on Dice to roll</div>
        <button
          onClick={reset}
          className="mb-6 border-2 px-14 py-2 rounded-md font-semibold"
        >
          Reset Score
        </button>
        <button
          onClick={() => {
            setShowRules(!showRules);
          }}
          className="border-2 px-14 py-2 rounded-md bg-black font-semibold text-white "
        >
          {showRules ? "Hide Rules" : "Show Rules"}
        </button>
      </div>

      {showRules && (
        <div className="flex flex-col bg-[#FBF1F1] gap-4 p-5">
          <div className="text-xl font-bold">How to play dice game</div>
          <div className="text-sm font-medium">
            <p>Select any number</p>
            <p>Click on dice image</p>
            <p>
              After click on dice if selected number is equal to dice number you
              will get same point as dice{" "}
            </p>
            <p>If you get wrong guess then 2 point will be dedcuted </p>
            <p>If you reach a total of 50 points you win </p>
          </div>
        </div>
      )}
    
    </div>
  );
}

export default Playground;
