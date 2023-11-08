import React,{ useState } from "react";
const DynamicRendering=()=>{
    const[selectedfr,setselectedfr]=useState(-1);
    const arr=[
        "ReactJs",
        "AngularJs",
        "VueJs",
        "NextJs",
        "Javascript"
    ];
    return(
        <>
        <h1 className="font-bold">Clicked Framework {selectedfr}
        </h1>
        <ul>
        {arr.map((element,index)=>(
            <li className="my-4 px-4 border-2 rounded-lg"
            key={index}
            onClick={()=>{
                setselectedfr(index);
            }}
            >{element}</li>
        )
        )}
        </ul>    
        </>

);
};
export default DynamicRendering;