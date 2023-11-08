import { useState } from "react";

const Cricketscore=()=>{
    const [score,setscore]=useState(0);
    const [wicket,setwicket]=useState(0);
    return(
        <div className="">
            <button className="px-4 py-1 bg-gray-700 rounded-lg" onClick={()=>setscore(score+1)}>1</button>
            <button className="px-4 py-1 bg-yellow-600 rounded-lg" onClick={()=>setscore(score+2)}>2</button>
            <button className="px-4 py-1 bg-orange-700 rounded-lg" onClick={()=>setscore(score+3)}>3</button>
            <button className="px-4 py-1 bg-blue-700 rounded-lg" onClick={()=>setscore(score+4)}>4</button>
            <button className="px-4 py-1 bg-green-700 rounded-lg" onClick={()=>setscore(score+6)}>6</button>
            <button className="px-4 py-1 bg-red-700 rounded-lg" onClick={()=>setwicket(wicket+1)}>Wicket</button>
            <p>Score:{score} Wicket:{wicket}</p>
        </div>

    );
};
export default Cricketscore;