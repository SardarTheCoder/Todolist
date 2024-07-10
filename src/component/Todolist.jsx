import React, { useState } from 'react';
import Single from './Single';
// import Single from './Single'; 

const Todolist = () => {
    const [data, setData] = useState(''); 
    const [Todo, setTodo] = useState([]); 

    const addData = () => {
        if (data.trim() !== '') {
            setTodo([...Todo, data]); 
            setData(''); 
        }
    }
  

    return (
        <>
        <div className="space-y-4">
            <div className="flex items-center space-x-3">
                <input
                    type="text"
                    className='w-56 h-11 p-5 font-2xl font-bold border-none rounded-md focus:outline-none text-orange-700'
                    placeholder='Enter items....'
                    value={data} 
                    onChange={(e) => setData(e.target.value)} 
                />
                <button
                    className='font-serif font-extrabold text-2xl focus:outline-none border-none bg-white text-orange-700 p-2 rounded-full ml-3'
                    onClick={addData} 
                >
                    +
                </button>
            </div>
            <div>
                {Todo.map((singleTodo,index)=>{
                    return(
                         <Single datas={singleTodo} key={index}  Todo={Todo}/>) 
                    })
                }
                

                
            </div>
            
        </div>
        </>
    );
}

export default Todolist;