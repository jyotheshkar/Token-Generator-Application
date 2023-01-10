import React, { useState } from 'react';

const App = () => {

  //handeling Blue Boxes 
  const [blueBoxNumber, setBlueBoxNumber] = useState('');
  const [blueBoxPrefix, setBlueBoxPrefix] = useState('');
  const [blueBoxList, setBlueBoxList] = useState([]);
  const [blueBoxRow, setBlueBoxRow] = useState('');
  const [blueBoxCols, setBlueBoxCols] = useState([]);

  const handleBlueRow = (e) => {
    setBlueBoxRow(e.target.value);
  }


  const handleBlueNumber = (e) => {
    setBlueBoxNumber(e.target.value);
  }
  const handleBluePrefix = (e) => {
    setBlueBoxPrefix(e.target.value);
  }

  const renderBlue = () => {
    let arr = [];
    for (let i = 1; i <= blueBoxNumber; i++) {
      arr.push(blueBoxPrefix + i);
    }
    setBlueBoxList(arr)
  }
  //handeling Red Boxes 
  const [redBoxNumber, setRedBoxNumber] = useState('');
  const [redBoxPrefix, setRedBoxPrefix] = useState('');
  const [redBoxList, setRedBoxList] = useState([]);
  const [redBoxRow, setRedBoxRow] = useState('');
  const [redBoxCols, setRedBoxCols] = useState([]);


  const handleRedRow = (e) => {
    setRedBoxRow(e.target.value);
  }

  const handleRedNumber = (e) => {
    setRedBoxNumber(e.target.value);
  }
  const handleRedPrefix = (e) => {
    setRedBoxPrefix(e.target.value);
  }

  const renderRed = () => {
    let arr = [];
    for (let i = 1; i <= redBoxNumber; i++) {
      arr.push(redBoxPrefix + i);
    }
    setRedBoxList(arr)
  }

  const render = () => {
    renderBlue();
    renderRed();
    
    
    setBlueBoxCols(blueBoxRow ) 
    setRedBoxCols( redBoxRow )
  
    console.log(blueBoxCols)
    console.log(redBoxCols)
  }

  //it'll clear everything via reloding page
  const reload = () => {
    window.location.reload()

  }

  return (
    <div className='bg-gray-50 h-max flex flex-col items-center '>
      <h1 className='flex justify-center mt-8 text-xl font-semibold'>Token Genterator Application</h1>

      <form className='mt-12 my-8'>

        <div className='flex justify-center  '>
          <h1 className='font-semibold' >Number of blue Tokens</h1>
          <input className='border-2 border-gray-800 mx-8 ' type="text" value={blueBoxNumber} onChange={handleBlueNumber} />
        </div>

        <div className='flex justify-center my-6 '>
          <h1 className='font-semibold  px-[23px]' >Blue token prefix</h1>
          <input className='border-2 border-gray-800 mx-8 ' type="text" value={blueBoxPrefix} onChange={handleBluePrefix} />
        </div>

        <div className='flex justify-center my-6 '>
          <h1 className='font-semibold  px-[16px]' >Blue token per row</h1>
          <input className='border-2 border-gray-800 mx-8 ' type="text" value={blueBoxRow} onChange={handleBlueRow} />
        </div>


        <div className='flex justify-center  '>
          <h1 className='font-semibold px-[4px]' >Number of red Tokens</h1>
          <input className='border-2 border-gray-800 mx-8 ' type="text" value={redBoxNumber} onChange={handleRedNumber} />
        </div>

        <div className='flex justify-center my-6'>
          <h1 className='font-semibold px-[25px]' >Red token prefix</h1>
          <input className='border-2 border-gray-800 mx-8 ' type="text" value={redBoxPrefix} onChange={handleRedPrefix} />
        </div>

        <div className='flex justify-center my-6 '>
          <h1 className='font-semibold  px-[20px]' >red token per row</h1>
          <input className='border-2 border-gray-800 mx-8 ' type="text" value={redBoxRow} onChange={handleRedRow} />
        </div>


      </form>


      <div className='flex justify-center mb-8'>
        <button className='hover:scale-105  shadow-xl hover:shadow-green-200 hover:bg-green-400 
 bg-gray-300 border border-gray-700   px-5 p-1' onClick={render}
        >Generate</button>

        <button className='hover:scale-105  shadow-xl hover:shadow-red-200  
bg-gray-300 hover:bg-red-400 mx-4 px-5 border border-gray-700' onClick={reload} > Clear </button>

      </div>

      <div className='flex  border-2 w-max h-max flex-col 
      justify-start items-center'>
        {/* it'll render every element in array and create a new div for every element acc to there index */}

        <div className={` grid grid-cols-${blueBoxCols} gap-1 pt-2`}>
          {blueBoxList.map((item, index) => (
            <div
              key={index}
            >
              <div className='flex justify-center w-14 h-14 bg-blue-700 items-center'>
                <p className='font-bold'>{item}</p>
              </div>
            </div>
          ))}
        </div>

        {/* it'll render every element in array and create a new div for every element acc to there index */}
        <div 
      className={`grid grid-cols-${redBoxCols} gap-1 pt-2`}
        >
          {redBoxList.map((item, index) => (
            <div
              key={index}
            >
              <div className='flex justify-center w-14 h-14 bg-red-700 items-center'>
                <p className='font-bold'>{item}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default App;