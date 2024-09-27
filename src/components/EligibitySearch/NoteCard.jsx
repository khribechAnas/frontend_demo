import React from 'react';
import { Card } from 'flowbite-react';

export default function StatusNoteCard() {
  return (
    <div className=" mt-4 ml-5 w-4/6 mb-4">
    <Card className=" border-2 border-[#E7ECF5]">
      <div className="flex items-center">
        <span className="mr-5 border-2 border-[#14B8A621] p-2 rounded-full bg-[#14B8A61C] text-[#14B8A6]">
          ACTIVE
        </span>
        <h5 className="text-lg font-semibold">Note</h5>
      </div>
      <div>
        <hr className="my-3 border-gray-300" />        <p className="text-gray-600 mt-2">
        • Only Coverage Information Is Returned For Vision (Optometry) When Health Benefit Plan Coverage Is Selected As The Service Type.
        </p>
        
      </div>
    </Card>
  </div>
  );
}
