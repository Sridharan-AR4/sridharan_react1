import { Avatar, Box, Button, Checkbox, FormControlLabel, Grid, Link, Paper, TextField, Typography } from "@mui/material";
import LoginOutlinedIcon from '@mui/icons-material/LoginOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';

const Login=()=>{
    const paperstyle={padding:20,height:'70vh',width:300,margin:"0px auto"}
    const avatarstyle={backgroundColor:'#6cdb0e'}
    return(
        <div style={{width:"100wh",height:"100vh",backgroundColor:"#04c49d"}}> 
            <Paper elevation={5} style={paperstyle}>
                <Grid align='center' spacing={3}>
                    <Avatar style={avatarstyle}><PersonOutlineOutlinedIcon /></Avatar>
                    <h2>Sign in</h2>
                </Grid>
                <TextField label="UserName" placeholder="Enter UserName" fullWidth required />
                <br></br>
                <br></br>
                <TextField label="Password" placeholder="Enter Password" type="password"fullWidth required />
                <FormControlLabel 
                control={
                    <Checkbox color="primary"/>
                }
                label="Remember me"
                />
                <Button type="submit" color="primary" variant="contained"  fullWidth>Sign in</Button>
                <br></br>
                <br></br>
                <Typography>
                    <Link href="#">Forgot password ?</Link>
                </Typography>
                
                <Typography>
                    Do you have an account ?
                    <Link href="#">Sign Up</Link>
                </Typography>
            </Paper>
        </div>
    );
};
export default Login;