import React from "react";
const Basicform=()=>{
    return(
        <div>
           
            <form>
                <label for="fname"> Name :</label>
                <input type="text" id="fname"></input><br></br><br></br>
                <label for="email">Email :</label>
                <input type="email" id="email"></input><br></br><br></br>
                <label for="msg" >Enter your msg here:</label><br></br>
                <textarea id="msg" cols={40} rows={5}></textarea><br></br><br></br>
                <button>Submit</button>
            </form>
        </div>
    );
};
export default Basicform;