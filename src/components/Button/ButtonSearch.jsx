import React from 'react';
import { Dropdown } from 'flowbite-react';

export default function Component() {
  return (
    <div className="w-44">
      <Dropdown
        label="Dropdown button"
        dismissOnClick={false}
        style={{
          backgroundColor: 'white',
          color: 'black',
          border: '1px solid black',
        }
    }
      >
        <div className="border border-black">
          <Dropdown.Item 
            style={{ 
              backgroundColor: 'white', 
              color: 'black', 
            }}
          >
            Dashboard
          </Dropdown.Item>
          <Dropdown.Item 
            style={{ 
              backgroundColor: 'white', 
              color: 'black', 
            }}
          >
            Settings
          </Dropdown.Item>
          <Dropdown.Item 
            style={{ 
              backgroundColor: 'white', 
              color: 'black', 
            }}
          >
            Earnings
          </Dropdown.Item>
          <Dropdown.Item 
            style={{ 
              backgroundColor: 'white', 
              color: 'black'
            }}
          >
            Sign out
          </Dropdown.Item>
        </div>
      </Dropdown>
    </div>
  );
}