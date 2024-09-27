import React from 'react';
import './index.css';
// import CustomDropdown from './components/EligibitySearch/Drop';
// import  CustomProgressBar  from './components/EligibitySearch/ProgressBar';
import Search from './components/EligibitySearch/Search';
// import DropDownButton from './components/EligibitySearch/DropDowns';
// import CardSearch from './components/EligibitySearch/CradSearch';
// import GridCard from './components/EligibitySearch/GridCards';
// import StatusNoteCard from './components/EligibitySearch/NoteCard';
import Remaining from './components/EligibitySearch/Remaining';
import RemainingCard from './components/EligibitySearch/RemainingCard';
// import FilterSection from './components/EligibitySearch/DropSection';



function App() {
  return (
    < >

<div className="flex justify-center items-center">
      <div className="w-5/6 mt-4 mx-auto">
       <Search />
       {/* <DropDownButton /> */}
        {/* <CardSearch /> */}
        {/* <GridCard /> */}
        {/* <StatusNoteCard />  */}
        <RemainingCard />
         <Remaining /> 
         {/* <CustomProgressBar/> */}
         {/* <CustomDropdown/>  */}
        <div className="w-5/6 mt-4 mx-auto">
        {/* <FilterSection/> */}
        </div>
      </div>
    </div>
    
    </>
  );
}

export default App;
