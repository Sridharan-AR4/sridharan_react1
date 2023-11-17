import { Avatar, Box, Button, Checkbox, Container, FormControlLabel, Grid, Link, Paper, TextField, Typography } from "@mui/material";
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';
const Signup=()=>{
    const paperstyle={padding:20,height:'80vh',width:300,margin:"0px auto"}
    const avatarstyle={backgroundColor:'#6cdb0e'}
    return(
        <div style={{width:"100wh",height:"100vh",backgroundColor:"#04c49d"}}> 
            <Paper elevation={5} style={paperstyle}>
                <Grid align='center' spacing={3}>
                    <Avatar style={avatarstyle}><PersonAddAltOutlinedIcon /></Avatar>
                    <h2>Sign up</h2>
                </Grid>
                <TextField label="UserName" placeholder="Enter UserName" fullWidth required />
                <br></br>
                <br></br>
                <TextField label="Email" placeholder="Enter your email address" fullWidth required />
                <br></br>
                <br></br>
                <TextField label="Password" placeholder="Enter Password" type="password"fullWidth required />
                <br></br>
                <br></br>
                <TextField label="Retype-Password" placeholder="Re-Enter Password" type="password"fullWidth required />
                <br></br>
                <br></br>
                <Button type="submit" color="primary" variant="contained"  fullWidth>Sign up</Button>
                <br></br>
                <br></br>
                <Typography>
                    Already have an account ?
                    <Link href="#">Sign In</Link>
                </Typography>
            </Paper>
            
        </div>
        
    );
};
export default Signup;