import { Box, Grid, Typography } from "@mui/material";
import '../assets/Fonts/poppins.css';
import { LiaCopyrightSolid } from "react-icons/lia";

function Footer({ width }: { width?: { xs?: string, sm?: string, md?: string, lg?: string } }) {
    return (
        <Grid item sx={{
            height: { xs: '3%', sm: '8%', md: '20%' },
            width: width || '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: { xs: 'start', sm: 'center', md: 'center' },
            alignItems: "center",
            boxShadow: '0px -1px 5px rgba(0, 0, 0, 0.2)',
            paddingBottom: { xs: 0, sm: 0, md: 0 },
            paddingTop: { xs: 2, sm: 0, md: 0 }
        }}>
            <Box sx={{ display: "flex", fontSize: { xs: 13 }, alignItems: 'center' }}>
                <LiaCopyrightSolid style={{ marginRight: 4, color:'black' }} />
                <Typography sx={{
                    fontWeight: { sm: '300' },
                    fontFamily: 'poppins',
                    fontSize: { xs: 9, sm: 12 },
                    color: 'black'
                }}>
                    2025 Vamshi. All Rights Reserved.
                </Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: 'center' }}>
                <Typography sx={{
                    fontWeight: { sm: '300' },
                    fontFamily: 'poppins',
                    fontSize: { xs: 9, sm: 12 },
                    color: 'black'
                }}>
                    Designed and Developed with 💙 by Vamshi...
                </Typography>
            </Box>
        </Grid>
    );
}

export default Footer;
