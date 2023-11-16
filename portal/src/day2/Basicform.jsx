import React, { useState } from "react";
const Basicform=()=>{
    const [fname,setfname]=useState("");
    const [email,setemail]=useState("");
    const [message,setmessage]=useState("");
    const handlesubmit=(event)=>{
        event.preventDefault();
        console.log(fname);
        console.log(email);
        console.log(message);

    }

    return(
        <div>
           
            <form onSubmit={handlesubmit}> 
                <label for="fname"> Name :
                <input type="text" id="fname" onChange={(event)=>setfname(event.target.value)}></input></label>
                <br></br><br></br>
                <label for="email">Email :
                <input type="email" id="email"  onChange={(event)=>setemail(event.target.value)}></input></label>
                <br></br><br></br>
                <label for="msg" >Enter your msg here:
                <br></br>
                <textarea id="msg" cols={40} rows={5} onChange={(event)=>setmessage(event.target.value)}></textarea></label>
                <br></br><br></br>
                <button>Submit</button>
            </form>
        </div>
    );
};
export default Basicform;