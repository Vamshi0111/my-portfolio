import { Box, Drawer, Grid, Typography } from "@mui/material";
import Navbar from "../components/navbar";
import MenuIcon from "@mui/icons-material/Menu";
import Image from '../assets/Images/Photo.jpg'
import { useState } from "react";


function About() {
    const [open, setOpen] = useState(false);

    const toggleDrawer = (state: boolean) => () => {
        setOpen(state);
    };

    return (
        <Grid container sx={{ backgroundImage: "linear-gradient(to bottom, #ff9a9e, #a1c4fd)",height: "100vh", width: "100vw", display: "flex" }}>
            <Box
                sx={{
                    position: "absolute",
                    top: 20,
                    right: 20,
                    display: { xs: "block", sm: "block", md: "none" },
                    zIndex: 1300,
                }}
                onClick={toggleDrawer(!open)}
            >
                <MenuIcon fontSize="large" />
            </Box>

            <Grid
                item
                sx={{
                    height: "100vh",
                    width: { xs: "0", sm: "0", md: "25vw", lg: "20vw" },
                    display: { xs: "none", sm: "none", md: "block" },
                }}
            >
                <Navbar width="20vw" />
            </Grid>

            <Drawer
                anchor="left"
                open={open}
                onClose={toggleDrawer(false)}
                sx={{
                    "& .MuiDrawer-paper": {
                        width: { xs: "71vw", sm: "71vw", md: "71vw" },
                        height: "100vh",
                    },
                }}
            >
                <Box
                    sx={{ width: "100%", height: "100%", display: "flex", flexDirection: "column" }}
                    onClick={(e) => e.stopPropagation()}
                >
                    <Navbar width="71vw" />
                </Box>
            </Drawer>
            <Grid item sx={{ width: '80vw', paddingTop: { xs: 5, sm: 8, md: 2 }, paddingLeft: { xs: 2, sm: 3, md: 2 }, paddingRight: { sm: 3 } }}>
                <Typography sx={{
                    fontSize: { xs: 18, sm: 28 }, fontFamily: 'poppins', fontWeight: '500',
                    position: 'relative',
                    display: 'inline-block'
                }}>
                    About
                    <Box
                        sx={{
                            position: 'absolute',
                            left: 0,
                            bottom: -5,
                            width: '100%',
                            height: 3,
                            backgroundColor: 'primary.main',
                            borderRadius: 2
                        }}
                    />
                </Typography>
                <Box sx={{ width: { sm: "77vw" } }}>
                    <Typography sx={{ marginTop: { xs: 2, sm: 2, md: 2 }, fontFamily: 'poppins', fontSize: { xs: 11, sm: 17 } }}>
                        As a Full-Stack Developer, I specialize in JavaScript, TypeScript, React, React-Native, Node.js, Express.js, and MongoDB/PostgreSQL. I design and develop responsive web applications, ensuring efficient API integrations and database management to deliver high-performance solutions.
                    </Typography>
                </Box>
                <Box sx={{ display: 'flex', columnGap: { sm: 2 }, marginTop: { xs: 2, sm: 3 }, width: { xs: "76vw", sm: "77vw" } }}>
                    <Box
                        component="img"
                        src={Image}
                        alt="Photo.jpg"
                        sx={{
                            height: { xs: 94, sm: 205, md: 265 }
                        }}
                    />
                    <Box sx={{ width: { xs: '50vw', sm: '48vw' } }}>
                        <Typography sx={{ fontFamily: 'poppins', fontWeight: "500", width: { sm: '45vw' }, fontSize: { xs: 14, sm: 28 } }}>
                            Web & Mobile Developer | UI/UX Designer.
                        </Typography>
                        <Typography sx={{ fontFamily: 'poppins', marginTop: { sm: 1 }, fontSize: { xs: 11, sm: 18 } }}>
                            "Transforming ideas into seamless digital experiences. As a UI/UX Designer and Web & Mobile Developer, I craft intuitive interfaces and develop robust applications that enhance user engagement."
                        </Typography>
                    </Box>
                </Box>
                <Grid sx={{ display: 'flex', marginTop: { xs: 3, sm: 4,md:0 }, width: { sm: "77vw",md:"50vw" }, height: { md: '30vh' },marginLeft:{md:36} }}>
                    <Box sx={{ height: '100%', width: '50%', display: 'flex', flexDirection: 'column', justifyContent: 'space-around' }}>
                        <Typography sx={{ fontFamily: 'poppins', fontWeight: { md:'500' }, fontSize: { xs: 9.7, sm: 20 } }}>
                            Email : vamshichary117@gmail.com.
                        </Typography>
                        <Typography sx={{ fontFamily: 'poppins', fontWeight: { md: "500" }, fontSize: { xs: 11, sm: 20 } }}>
                            Phone : 8523035382
                        </Typography>
                        <Typography sx={{ fontFamily: 'poppins', fontWeight: { md: "500" }, fontSize: { xs: 11, sm: 20 } }}>
                            City : Madhapur, HYD 500081.
                        </Typography>
                    </Box>
                    <Box sx={{ height: '100%', width: '50%', display: 'flex', flexDirection: 'column', justifyContent: 'space-around' }}>
                        <Typography sx={{ fontFamily: 'poppins', fontWeight: { md: "500" }, fontSize: { xs: 11, sm: 20 } }}>
                            Degree : B.Tech Computer Science.
                        </Typography>
                        <Typography sx={{ fontFamily: 'poppins', fontWeight: { md: "500" }, fontSize: { xs: 11, sm: 20 } }}>
                            Birthday : 04 Mar 2000
                        </Typography>
                        <Typography sx={{ fontFamily: 'poppins', fontWeight: { md: "500" }, fontSize: { xs: 11, sm: 20 } }}>
                            Freelance : Available
                        </Typography>
                    </Box>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default About;