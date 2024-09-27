import { Sidebar } from 'flowbite-react';

const EligibilitySidebar = () => {
  const items = [
    'Patient Demographics',
    'Dependent',
    'Coverage Information',
    'Provider Information',
    'Payer Information',
    'Deductibles & Maximums',
    'Service & Benefit',
  ];

  return (
    <Sidebar aria-label="Eligibility Details" className="bg-white w-72 p-4 rounded-lg ">
      <h2 className="text-lg font-semibold text-gray-900 mb-2 bg-white">Eligibility Details</h2>
      <Sidebar.Items className="bg-blue-500" >
        <Sidebar.ItemGroup className="bg-white space-y-1">
          {items.map((item) => (
            <Sidebar.Item
              key={item}
              className={
                item === 'Patient Demographics'
                  ? 'bg-white border border-gray-300 text-gray-900 rounded-lg px-3 py-2 !important'
                  : 'text-gray-500 px-3 py-2 hover:bg-gray-100 rounded-lg bg-white !important'
              }
            >
              {item}
            </Sidebar.Item>
          ))}
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  );
};

export default EligibilitySidebar;
