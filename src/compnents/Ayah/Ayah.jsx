import React from 'react'

export default function Ayah({ayah,surrah}) {
  // Ayah componet take some props (array of ayah that contain many of formation about it , name of surrah) and display in its 

  return (
    <>
    
    <div className=" space-y-2"> 
         <div className="ayah flex  gap-4 text-xl items-center">
              <span className="text-lg font-semibold uppercase">الاية</span>
              <p className="bg-gray-200 p-4 rounded-md flex-grow flex justify-between items-center">
                 <p>{ayah.arabic_text} <span className='bg-gray-200 rounded-full mr-2 border-main border w-[25px]  h-[25px] mt-2 text-main font-bold  inline-flex justify-center items-center text-sm '>{ayah.aya}</span></p>
                < span className='bg-gray-300 px-2 py-1 rounded-md text-main'>{surrah} </span>
              </p>
            </div>
            <div className="tafser flex gap-4 items-center">
              <span className="text-lg font-semibold uppercase">تفسير</span>
              <p className="bg-gray-200 p-4 rounded-md flex-grow font-rubic text-lg">
                  <span>{ayah.translation}</span>
              </p>
            </div>
         </div>
    </>
  )
}
