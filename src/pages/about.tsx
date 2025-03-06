import { Grid, Typography } from "@mui/material";


function About () {
    return(
        <Grid sx={{backgroundColor:'aqua',height:'100vh', width:'100vw'}}>
            <Typography sx={{fontWeight:'600',fontFamily:'poppins'}}>
                About
            </Typography>
        </Grid>
    )
}

export default About;