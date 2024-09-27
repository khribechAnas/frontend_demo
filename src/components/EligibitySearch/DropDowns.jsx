// import React, { useState } from "react";
// import { Dropdown } from "flowbite-react";
// import { MdOutlineKeyboardArrowDown } from "react-icons/md";
// import { GoChevronDown } from "react-icons/go";
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";

// import datePickerIcon from "../../../src/assets/datePicker.svg";
// export default function DropDownButton() {
//   const [selectedDate, setSelectedDate] = useState(new Date());

//   return (
//     <div className="w-full flex   py-2 mb-8 ">
//       <div style={{ width: "36.6%" }} className="mt-4 flex items-center justify-center ">
//         <Dropdown
//           arrowIcon={false}
//           inline
//           label={
//             <div className="flex items-center justify-between w-[29vw] rounded-xl px-1 py-2 border border-[#E7ECF5] focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
//               <span className="dropdown-span text-gray-500 hover:text-gray-700 cursor-pointer">
//                 Service Type
//               </span>
//               <GoChevronDown size={20} />
//             </div>
//           }
//         />
//       </div>

//       <div
//         style={{ width: "17.4%" }}
//         className=" flex items-center justify-center mt-4"
//       >
//         <Dropdown
//           arrowIcon={false}
//           inline
//           label={
//             <div className="flex items-center justify-between w-[14vw] rounded-xl px-1 py-2 border border-[#E7ECF5] focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
//               <span className="text-[#696F81CC] hover:text-gray-700 cursor-pointer mr-2">
//                 Network
//               </span>
//               <MdOutlineKeyboardArrowDown size={20} />
//             </div>
//           }
//         />
//       </div>

//       <div
//         style={{ width: "22.9%" }}
//         className=" flex items-center justify-center mt-4"
//       >
//         <Dropdown
//           arrowIcon={false}
//           inline
//           label={
//             <div className="flex items-center justify-between w-[18vw] rounded-xl px-3 py-2 border border-[#E7ECF5] focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
//               <span className="text-gray-500 hover:text-gray-700 cursor-pointer mr-8">
//                 Place of Service
//               </span>
//               <MdOutlineKeyboardArrowDown size={20} className="ml-4" />
//             </div>
//           }
//         />
//       </div>

//       <div
//         style={{ width: "22.9%" }}
//         className=" flex items-center justify-center mt-4"
//       >
//         <Dropdown
//           arrowIcon={false}
//           inline
//           label={
//             <div className="flex items-center justify-between w-[18vw] rounded-xl px-3 py-2 border border-[#E7ECF5] focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
//               <span className="text-gray-500 hover:text-gray-700 cursor-pointer mr-8">
//                 Benefit Date
//               </span>
//               <div>
//                 <img src={datePickerIcon} alt="date picker" />
//               </div>
//             </div>
//           }
//         >
//           <div className="px-4 py-2">
//             <DatePicker
//               selected={selectedDate}
//               onChange={(date) => setSelectedDate(date)}
//               inline
//               className="border-none shadow-none"
//             />
//           </div>
//         </Dropdown>
//       </div>
//     </div>
//   );
// }
