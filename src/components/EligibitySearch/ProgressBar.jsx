"use client";

export default function CustomProgressBar() {
  return (
    <>
    <div className="relative w-full bg-yellow-200 rounded-lg h-4" style={{ width: '200px' }}>
      <div
        className="absolute bg-yellow-400 h-4 rounded-lg z-10"
        style={{ width: '45%', left: 0 }}
      ></div>
            <div
        className="absolute bg-blue-500 h-4 rounded-lg z-0"
        style={{ width: '50%', left: '30%' }}  // Left adjusted to overlap
      ></div>
    </div>
    <div>
        hello
    </div>
     <div className="relative w-full bg-yellow-200 rounded-lg h-4" style={{ width: '200px' }}>
    </div>
    <div>hello</div>
    <div className="relative w-full h-4 rounded-lg" style={{
     width: '200px',
     backgroundImage: 'repeating-linear-gradient(90deg, #92E9FD 0, #92E9FD 1px, transparent 1px, transparent 3px)',
     backgroundColor: '#fff'
}}>
       <div
        className="absolute  h-4 rounded-lg z-10"
        style={{ backgroundColor: '#3DBEDD', width: '45%', left: 0 }}
      ></div>
          <div
  className="absolute h-4 rounded-lg z-0"
  style={{ backgroundColor: '#92E9FD', width: '50%', left: '30%' }}  // Custom background color
></div>
 
    </div>


    </>
  );
}
