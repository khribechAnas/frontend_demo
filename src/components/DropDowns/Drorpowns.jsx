import React from "react";
import { Dropdown } from "flowbite-react";
import { IoClose } from "react-icons/io5";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { GoChevronDown } from "react-icons/go";

import datePickerIcon from '../../assets/datePicker.svg';
import verifiedIcon from '../../assets/time.svg'

export default function MyPage() {
  return (
    <div className="w-full flex items-center justify-center p-3">
      <div className="w-3/12 flex items-center justify-center ">
        <Dropdown
          arrowIcon={false}
          inline
          label={
            <div className="flex items-center justify-between w-[23vw] rounded-xl px-3 py-2 border border-[#E7ECF5] focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
              <span className="dropdown-span text-gray-500 hover:text-gray-700 cursor-pointer mr-8">
                Insurance
              </span>
              <GoChevronDown size={20} className="ml-4" />
            </div>
          }
        ></Dropdown>
      </div>
      <div className="w-3/12 flex items-center justify-center ">
        <Dropdown
          arrowIcon={false}
          inline
          label={
            <div className="flex items-center justify-between w-[23vw] rounded-xl px-2 py-1 border border-[#E7ECF5] focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
              <div className="flex items-center">
              <span className="dropdown-span text-[#696F81CC] hover:text-gray-700 cursor-pointer mr-2">
                Provider
              </span>
              <span class="w-8 h-8 flex items-center justify-center border border-[#E7ECF5] rounded-full text-[#6235FB] mr-2">
                2
              </span>
              <span className="dropdown-span text-[#3F465D] hover:text-gray-700 cursor-pointer mr-2">
                Selected
              </span>
              <MdOutlineKeyboardArrowDown size={20} className="ml-1" />
              </div>
              <IoClose size={20} className="ml-4" />
            </div>
          }
        ></Dropdown>
      </div>
      <div className="w-3/12 flex items-center justify-center ">
        <Dropdown
          arrowIcon={false}
          inline
          label={
            <div className="flex items-center justify-between w-[23vw] rounded-xl px-3 py-2 border border-[#E7ECF5] focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
              <span className="dropdown-span text-gray-500 hover:text-gray-700 cursor-pointer mr-8">
                Service Type
              </span>
              <MdOutlineKeyboardArrowDown size={20} className="ml-4" />
            </div>
          }
        ></Dropdown>
      </div>
      <div className="w-1/12  flex items-center justify-center ">
        <Dropdown
          arrowIcon={false}
          inline
          label={
            <div className=" bg-[#14B8A614] flex items-center justify-between w-[8vw] rounded-xl px-1 py-2 border border-[#E7ECF5] focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
              <img src={verifiedIcon} alt="" className="mr-1" />
              <span className="dropdown-span text-[#14B8A6] hover:text-gray-700 cursor-pointer mr-8">
                Eligible
              </span>
              <GoChevronDown style={{ width: '15px', height: '23px' }}/>
              
            </div>
          }
        ></Dropdown>
      </div>
      <div className="w-2/12  flex items-center justify-center ">
        <Dropdown
          arrowIcon={false}
          inline
          label={
            <div className="flex items-center justify-between w-[15vw] rounded-xl px-3 py-2 border border-[#E7ECF5] focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
              <span className="dropdown-span text-gray-500 hover:text-gray-700 cursor-pointer mr-8">
                Transaction Period
              </span>
              <div>
              <img src={datePickerIcon} alt="pic" />
              </div>
            </div>
          }
        ></Dropdown>
      </div>
    </div>

  );
}
