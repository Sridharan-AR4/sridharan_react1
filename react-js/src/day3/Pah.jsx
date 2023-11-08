import { useState } from "react";
const Pah=()=>{
    const [currentstate,setcurrentstate]=useState("kaioken");
    return(
        <div>
           <input type="checkbox" onChange={()=>(currentstate==="kaikon"?setcurrentstate("Supersaiyan"):setcurrentstate("kaikon"))}></input>
           <p>{currentstate}</p>
        </div>

    );
};
export default Pah;