import React, { useState } from 'react'
import Card from './Card'

const Practice = () => {
    const [data,setData]=useState([
        {
            No:"1001",
            Img:"https://t3.ftcdn.net/jpg/02/41/32/08/360_F_241320849_OdSd5J47uglxJjdqBkZMMQm0sE6VXB1m.jpg",
            Name:"ALi",
            Bill:"5000"
    },
    {
        No:"1002",
        Img:"https://www.shutterstock.com/shutterstock/photos/2196133075/display_1500/stock-vector-white-and-green-wedding-welcome-banner-card-or-invitation-card-with-white-flower-nature-welcome-2196133075.jpg",
        Name:"Ahmed",
        Bill:"5500"
},
{
    No:"1003",
    Img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5G0XPO1CRP08JvxksyHlAFkJG0R3OOqfaiA&s",
    Name:"Ahsan",
    Bill:"10,000"
},
{
    No:"1004",
    Img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROW-I626ahe7H6oczgKWHdNH_xiKFHVJ0IVg&s",
    Name:"Sami",
    Bill:"8000"
},
{
    No:"1005",
    Img:"https://gulbaan.com/cdn/shop/products/Welcome.png?v=1635751189",
    Name:"King",
    Bill:"2000"
},
])
  return (
    <>
          <div className="text-center">
            <div className="text-4xl   font-sans underline decoration-double">Welcome Card</div>
            <div className=" mx-10 my-20  grid grid-rows-2 grid-flow-col w-[50%] h-[50%] bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-20% to-emerald-500 to-90%   gap-6">
              {
                data.map((single,i)=>{
                    return(

                        <Card {...single} key={i}/>
                    )
                })
              }
            </div>

             </div>    
    </>
  )
}

export default Practice
