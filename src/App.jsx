import React from "react"
import Todolist from "./component/Todolist"
import Practice from "./component/Prartice/Practice"

function App() {
 

  return (
    <>
    {/* <div className="bg-orange-400 h-screen w-screen  flex items-center justify-center">
  

     <Todolist/>
  </div> */}
        <div className="bg-fixed bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-20% to-emerald-500 to-90% ...
        h-screen w-screen text-white font-bold  ">


          <Practice/>
        </div>
   
    </>
  )
}

export default App
