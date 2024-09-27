import React from "react";
import "./RemainingCard.css";

export default function RemainingCard() {
  return (
    <div
      className="m-4 p-4 rounded-lg "
      style={{
        width:"782px",
        height:"224px",
        background:
          "linear-gradient(177deg, rgba(245, 247, 251, 0.35) 0%, rgba(245, 247, 251, 0.37) 100%)",
        border: "1px solid #E7ECF5",
        borderRadius:"28px"
      }}
    >
      <div className="grid grid-cols-2 gap-4">
        {/* First Card */}
        <div className="p-4">
          <h2 className="amount">
            $588.75 <span className="percentage">49.2%</span>
          </h2>
          <div className="flex  items-center">
            {" "}
            <span className=" bg-black mr-2 rounded-full w-1 h-3 block"></span>
            <p className="first-text"> Remaining Deductible</p>
          </div>
          <div className="py-2">
            <div
              className="relative  w-full h-3.5 rounded-lg"
              style={{
                backgroundImage:
                  "repeating-linear-gradient(90deg, #92E9FD 0, #92E9FD 0.6px, transparent 0.8px, transparent 2px)",
                backgroundColor: "#fff",
              }}
            >
              <div
                className="absolute h-3.5 z-10"
                style={{
                  backgroundColor: "#3DBEDD",
                  width: "30%",
                  left: 0,
                  borderRadius: "8px",
                  opacity: 1,
                }}
              ></div>
              <div
                className="absolute h-3.5 z-0"
                style={{
                  backgroundColor: "#92E9FD",
                  width: "50%",
                  left: "0%",
                  borderRadius: "8px",
                  opacity: 1,
                }} // Custom background color
              ></div>
            </div>
          </div>

          <div className="flex justify-between items-center">
            {/* Left side: span and Met Year To Date */}
            <div className="flex items-center">
              <span className="bg-[#92E9FD] mr-2 rounded-full w-1 h-3 block"></span>
              <p className="small-text">Met Year To Date</p>
            </div>

            {/* Right side: percentage and amount */}
            <div className="flex items-center space-x-2">
              <span className="small-percentage">59.9%</span>
              <p className="very-small-amount">$611.25</p>
            </div>
          </div>

          <div className="flex justify-between items-center">
            {/* Left side: span and Met Year To Date */}
            <div className="flex items-center">
              <div className=" mr-1.5 flex items-center bg-[#F5F7FB] rounded-full">
                <span className="bg-[#D2DDEF] mr-0.5 rounded-full w-0.05 h-2 block"></span>
                <span className="bg-[#D2DDEF] mr-0.5 rounded-full w-0.05 h-3 block"></span>
                <span className="bg-[#D2DDEF] rounded-full w-0.05 h-2 block"></span>
              </div>
              <p className="small-text">Plan Amount</p>
            </div>

            {/* Right side: percentage and amount */}
            <div className="flex items-center space-x-2">
              <p className="very-small-amount">$1,200.00</p>
            </div>
          </div>
        </div>

        {/* Second Card */}
        <div className="p-4">
          <h2 className="amount">
            $1,355.00 <span className="percentage">49.2%</span>
          </h2>
          <div className="flex  items-center">
            {" "}
            <span className=" bg-[#5B7CDD] mr-2 rounded-full w-1 h-3 block"></span>
            <p className="first-text"> Remaining Out of Pocket</p>
          </div>
          <div className="py-2">
            <div
              className="relative  w-full h-4 rounded-lg"
              style={{
                backgroundImage:
                  "repeating-linear-gradient(90deg, #92E9FD 0, #92E9FD 1px, transparent 1px, transparent 3px)",
                backgroundColor: "#fff",
              }}
            >
              <div
                className="absolute  h-4 rounded-lg z-10"
                style={{ backgroundColor: "#5B7CDD", width: "85%", left: 0 }}
              ></div>
              <div
                className="absolute h-4 rounded-lg z-0"
                style={{ backgroundColor: "#92E9FD", width: "90%", left: "0" }} // Custom background color
              ></div>
            </div>
          </div>

          <div className="flex justify-between items-center">
            {/* Left side: span and Met Year To Date */}
            <div className="flex items-center">
              <span className="bg-[#92E9FD] mr-2 rounded-full w-1 h-3 block"></span>
              <p className="small-text">Met Year To Date</p>
            </div>

            {/* Right side: percentage and amount */}
            <div className="flex items-center space-x-2">
              <span className="small-percentage">59.9%</span>
              <p className="very-small-amount">$645.00</p>
            </div>
          </div>

          <div className="flex justify-between items-center">
            {/* Left side: span and Met Year To Date */}
            <div className="flex items-center">
              <div className=" mr-1.5 flex items-center bg-[#F5F7FB] rounded-full">
                <span className="bg-[#D2DDEF] mr-0.5 rounded-full w-0.05 h-2 block"></span>
                <span className="bg-[#D2DDEF] mr-0.5 rounded-full w-0.05 h-3 block"></span>
                <span className="bg-[#D2DDEF] rounded-full w-0.05 h-2 block"></span>
              </div>
              <p className="small-text">Plan Amount</p>
            </div>

            {/* Right side: percentage and amount */}
            <div className="flex items-center space-x-2">
              <p className="very-small-amount">$2,000.00</p>
            </div>
          </div>
        </div>
        {/* Second Card */}
      </div>
    </div>
  );
}
