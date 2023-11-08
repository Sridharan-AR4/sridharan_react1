import React from "react";

const Main= () =>{
    return(
      <div><center>
               <label for="email" style={{marginLeft:"25px"}}>Email  :</label>
             <input id="email" type="text" placeholder="Enter your email"></input>
           <br>
           </br>
               <label for="pass" style={{marginLeft:"55px"}}>Password : </label>
            <input id="pass" type="password" placeholder="Enter your password"></input>
            <br>
            </br>
            <br></br>
        <button id="bt" className="px-4 py-2 bg-yellow-500 rounded-lg">
          Submit
        </button>
          
      </center>
        </div>
        
    );
};

export default Main;