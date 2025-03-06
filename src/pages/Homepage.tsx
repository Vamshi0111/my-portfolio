import { Grid, Typography } from "@mui/material";
import '../assets/Fonts/poppins.css'


function Homepage () {
    return(
        <Grid sx={{backgroundColor:'aqua',height:'100vh', width:'100vw',display:'flex',justifyContent:'center',alignItems:'center'}}>
            <Typography sx={{fontWeight:'600',fontFamily:'poppins'}}>
                Homepage
            </Typography>
        </Grid>
    )
}

export default Homepage;