
import { Tabs } from "flowbite-react";
import { HiAdjustments, HiClipboardList, HiUserCircle } from "react-icons/hi";
import { MdDashboard } from "react-icons/md";

const FilterBar = () =>  {
  return (
    <Tabs aria-label="Tabs with underline" variant="underline">
      <Tabs.Item active title="Profile" icon={HiUserCircle}>
      </Tabs.Item>
      <Tabs.Item title="Dashboard" icon={MdDashboard}>
      </Tabs.Item>
      <Tabs.Item title="Settings" icon={HiAdjustments}>
      </Tabs.Item>
      <Tabs.Item title="Contacts" icon={HiClipboardList}>
      </Tabs.Item>
    </Tabs>
  );
}
export default FilterBar;
