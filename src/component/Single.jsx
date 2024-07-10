import React from 'react';
import { RiDeleteBin6Line } from "react-icons/ri";

const Single = ({ datas ,index,Todo}) =>{
  
    const deleteItem=(index)=>{
        let newListTodo=[...Todo];
        newListTodo.splice(index,1)

    }

  return (
    <>
    <div className="font-bold font-serif text-orange-600 flex  rounded-lg border-red-300  text-2xl bg-white">
      <p className="p-2">{datas}</p>
      <button className="font-bold ml-32 text-3xl" onClick={deleteItem}><RiDeleteBin6Line /></button>
    </div>
    </>
  );
}

export default Single;
