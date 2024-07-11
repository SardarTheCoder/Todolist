import React from 'react'

const Card = ({No,Img,Name,Bill}) => {
  return (
    <>
      <div className="bg-gradient-to-l from-amber-500 gap-4 p-3 mt-5 items-center to-white rounded-md  shadow-lg">
        <div className="textCenter mt-4 font-bold text-2xl text-teal-700">{No}</div>
        <img width={"50%"} className='object-cover ml-[25%] rounded-md' src={Img}></img>
        <p className='text-xl font-extrabold text-sky-600'>We welcome you in our party $ ({Name})</p>
        <h1 className="text-xl font-extrabold text-emerald-500">{Bill}</h1>

          
      </div>
    </>
  )
}

export default Card
