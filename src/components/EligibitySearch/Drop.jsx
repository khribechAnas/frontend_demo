import React from 'react';
import { Dropdown, DropdownItem, Flowbite } from 'flowbite-react';

// Define the custom theme as a JavaScript object
const customTheme = {
  dropdown: {
    arrowIcon: "ml-auto h-4 w-4 text-gray-500", // Arrow styling
    content: "py-2 px-3 focus:outline-none", // Content padding and focus
    floating: {
      animation: "transition-opacity",
      base: "z-10 w-full divide-y divide-gray-100 rounded-lg shadow focus:outline-none border border-gray-300 bg-white", // Full width and rounded dropdown
      item: {
        base: "flex w-full cursor-pointer items-center justify-start px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 focus:bg-gray-50", // Item hover and focus
      },
      style: {
        light: "border border-gray-300 bg-white text-gray-900", // Light mode styling
      },
    },
    inlineWrapper: "flex items-center w-full px-3 py-2 bg-white border border-gray-300 rounded-lg shadow-sm focus:outline-none", // Wrapper for trigger button
  },
};

// Create a React component to apply this custom theme
export default function CustomDropdown({ insuranceOptions, selectedInsuranceId, handleInsuranceChange }) {
  return (
    <Flowbite theme={{ theme: customTheme }}>
    <div className="col-span-12 sm:col-span-3 mt-4 w-full relative">
      <Dropdown
  label={
    selectedInsuranceId
      ? insuranceOptions.find((option) => option.id === selectedInsuranceId)?.name
      : 'Insurance'
  }
  inline
  className="w-full bg-white border border-[#E7ECF5] rounded-lg"
  theme={customTheme}  // Apply the custom theme here
>
  <DropdownItem onClick={() => handleInsuranceChange(null)}>
    All Insurances
  </DropdownItem>
  
  {/* Explicitly defined DropdownItems */}
  <DropdownItem onClick={() => handleInsuranceChange(1)}>
    Insurance Option 1
  </DropdownItem>
  <DropdownItem onClick={() => handleInsuranceChange(2)}>
    Insurance Option 2
  </DropdownItem>
  <DropdownItem onClick={() => handleInsuranceChange(3)}>
    Insurance Option 3
  </DropdownItem>

</Dropdown>
</div>
</Flowbite>
  );
}
