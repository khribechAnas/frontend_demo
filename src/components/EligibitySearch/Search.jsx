import { Button, Flowbite, TextInput } from "flowbite-react";
import { HiFilter, HiLink, HiSearch } from "react-icons/hi";

const customTheme = {
  textInput: {
    field: {
      input: {
        sizes: {
          base:"pl-10",
          sm: "p-6"
          
        }
      }
    }
  }
};

export default function MyPage() {
  return (
    <Flowbite theme={{ theme: customTheme }}>
      <div className="bg-blue-50 flex p-2  w-full space-x-2 rounded-[15px]">
        <div className="w-3/5">
          <Flowbite theme={{ theme: customTheme }}>
            <TextInput id="search" type="search" placeholder="Search" icon={HiSearch} className="pl-2"/>
          </Flowbite>
        </div>
        <div className="flex w-2/5 space-x-2">
          <div className="w-2/5 flex items-center justify-center">
            <Button color="light" pill={true} className="w-full h-[38px] rounded-[10px] text-gray-400">
              <HiFilter className="mr-2" />
              Filter
            </Button>
          </div>
          <div className="w-3/5 flex items-center justify-center">
            <Button color="light" pill={true} className="w-full h-[38px] rounded-[10px] text-gray-400">
              <HiLink className="mr-2" />
              Save Present
            </Button>
          </div>
        </div>
      </div>
    </Flowbite>
  );
}
