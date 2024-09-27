import { Card } from "flowbite-react";

export default function GridCard() {
  return (
    <div className="max-w-xs mt-4 ml-5">
      <Card className="border-2 border-[#E7ECF5]">
        <div className="flex items-center">
          <span className="mr-5 border-2 border-[#24A5C427] p-2 rounded-full bg-[#24A5C419] text-[#24A5C4]">
            IN
          </span>
          <h5 className="text-lg font-semibold">Co-Payment</h5>
        </div>
        <div>
          <hr className="my-2 border-gray-300" />
          <p className=" my-3 text-sm font-medium text-gray-500 uppercase">
            Place of Service
          </p>
          <p className=" my-3 text-sm font-semibold text-gray-900">Office</p>
          <p className="text-gray-600 mt-2">
            • Primary Care Visit or Evaluation, Minute Clinic Visit, Copay
            Included In CATAS OOP
          </p>
          <p className=" text-right text-2xl font-semibold text-gray-900 mt-4">
            $ 0.00
          </p>
        </div>
      </Card>
    </div>
  );
}
