import React, { useState } from "react";
import { Autocomplete, Button, Container, Grid, Stack, TextField, Typography } from "@mui/material";
export default function Favfruit() {
    const fruits = [
      { label: 'Apple' },
      { label: 'Banana' },
      { label: 'Cherru' },
      { label: 'Durian' },
      { label: 'Elderberry' }
      
    ];
    const[fname,setfname]=useState("");
    const[fruit,setfruit]=useState("");
    const[sub,setsub]=useState(false);
    const handlesubmit=()=>{
        setsub(true);
    }
    return (
    <Stack direction={"column"} spacing={2} alignItems={"center"}>
        <Typography variant="h1">Enter Your Name Favourite Fruit</Typography>
        <form onSubmit={handlesubmit}>
        <TextField sx={{width:300}} required label="Name" variant="standard" width="50px" onChange={(event)=>setfname(event.target.value)}/>
        <br></br>
        <br></br>
    <Autocomplete
    sx={{width:300}}
    onChange={(event)=>setfruit(event.target.value)}
      disablePortal
      id="combo-box-demo"
      options={fruits}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="Choose a fruit" />}
      />
      <br></br>
      <Button variant="contained" >Submit</Button>
      </form>
      {sub && (
                <div>
                    {fname && <p> Hello {fname}! Your favourite is {fruit} </p>}
                </div>
      )}
      </Stack>      
);
};