import { Card } from "flowbite-react";

export default function CardSearch() {
  return (
    <div className="ml-5 mt-3 mb-12">
      <Card className="w-4/6">
        <div className="flex items-start">
          <div>
            <div className="flex">
            <span className=" mr-2 w-5 h-5 border-2 border-[#BAB414] bg-[#BAB414] text-white rounded-full flex items-center justify-center">
              !
            </span>

            <span className="font-semibold text-[#BAB414]">
              Benefit Disclaimer:
            </span>
            </div>
            <p className="text-gray-600 mt-1">
              The provider understands that receipt or use of this information
              does not guarantee payment of any health care claim by Aetna, and
              such information is subject to change, even retroactively, at any
              time.
            </p>
          </div>
        </div>
      </Card>
    </div>
  );
}
