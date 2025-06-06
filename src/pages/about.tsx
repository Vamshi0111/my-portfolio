import { Box, Drawer, Grid, Typography, Skeleton } from "@mui/material";
import Navbar from "../components/navbar";
import MenuIcon from "@mui/icons-material/Menu";
import ProfileImg from '../assets/Images/Photo.jpg'
import { useState, useEffect } from "react";
import { motion } from "framer-motion";


function About() {
    const [open, setOpen] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const isFirstLoad = localStorage.getItem("isFirstLoad")

        if (!isFirstLoad) {
            localStorage.setItem("isFirstLoad", "false");
            setLoading(true);

            setTimeout(() => {
                setLoading(false);
            }, 1000)
        } else {
            setLoading(false);
        }
    }, []);

    const toggleDrawer = (state: boolean) => () => {
        setOpen(state);
    };

    if (loading) {
        return (
            <Grid container sx={{ height: "100vh", width: "100vw" }}>
                <Grid
                    item
                    xs={12}
                    sx={{
                        backgroundColor: "#f0f0f0",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                >
                    <Skeleton variant="text" width={200} height={50} />
                    <Skeleton variant="text" width={150} height={40} sx={{ mt: 2 }} />
                    <Skeleton
                        variant="rectangular"
                        height="60vh"
                        sx={{ mt: 4, width: { xs: "90%", md: "90%" } }}
                    />
                </Grid>
            </Grid>
        )
    }

    return (
        <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.2 }}
        >
            <Grid container sx={{ backgroundColor: '#f4f6f8', height: "100vh", width: "100vw", display: "flex" }}>
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
                    <MenuIcon fontSize="large" sx={{ color: 'black' }} />
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
                <Grid item sx={{ width: { xs: '100%', sm: '100%', md: '80%' }, paddingTop: { xs: 5, sm: 8, md: 2 }, paddingLeft: { xs: 2, sm: 3, md: 2 }, paddingRight: { sm: 3 } }}>
                    <Typography sx={{
                        fontSize: { xs: 20, sm: 28 }, fontFamily: 'poppins', fontWeight: '500',
                        position: 'relative',
                        display: 'inline-block',
                        color: '#1e88e5'
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
                        <Typography sx={{ marginTop: { xs: 2, sm: 2, md: 2 }, fontFamily: 'poppins', fontSize: { xs: 11, sm: 17, md: 15 }, color: '#4f4f4f' }}>
                            As a Full-Stack Developer, I specialize in JavaScript, TypeScript, React, React-Native, Node.js, Express.js, and MongoDB/PostgreSQL. I design and develop responsive web applications, ensuring efficient API integrations and database management to deliver high-performance solutions.
                        </Typography>
                    </Box>
                    <Box sx={{ display: 'flex', columnGap: { sm: 2 }, marginTop: { xs: 2, sm: 3 }, width: { xs: "76vw", sm: "77vw" }, color: 'black' }}>
                        {loading ? (
                            <Skeleton
                                variant="rectangular"
                                sx={{
                                    height: { xs: 94, sm: 205, md: 265 },
                                    width: { xs: 94, sm: 205, md: 265 },
                                    borderRadius: 2,
                                }}
                            />
                        ) : (
                            <Box
                                component="img"
                                src={ProfileImg}
                                alt="Photo.jpg"
                                sx={{
                                    height: { xs: 94, sm: 205, md: 265 }
                                }}
                            />
                        )}
                        <Box sx={{ width: { xs: '50vw', sm: '48vw' } }}>
                            <Typography sx={{ fontFamily: 'poppins', fontWeight: "500", width: { sm: '45vw' }, fontSize: { xs: 14, sm: 28 }, marginLeft: { xs: 1 }, color: '#212121' }}>
                                Web & Mobile Developer | UI/UX Designer.
                            </Typography>
                            <Typography sx={{ fontFamily: 'poppins', marginTop: { sm: 1 }, fontSize: { xs: 11, sm: 18 }, marginLeft: { xs: 1 }, color: '#4f4f4f' }}>
                                "Transforming ideas into seamless digital experiences. As a UI/UX Designer and Web & Mobile Developer, I craft intuitive interfaces and develop robust applications that enhance user engagement."
                            </Typography>
                        </Box>
                    </Box>
                    <Grid sx={{ display: 'flex', marginTop: { xs: 3, sm: 4, md: 0 }, width: { sm: "77vw", md: "50vw" }, height: { md: '30vh' }, marginLeft: { md: 36 } }}>
                        <Box sx={{ height: '100%', width: '50%', display: 'flex', flexDirection: 'column', justifyContent: 'space-around' }}>
                            <Typography sx={{ fontFamily: 'poppins', fontSize: { xs: 9.7, sm: 20, md: 17 }, color: '#4f4f4f' }}>
                                Email : vamshichary117@gmail.com.
                            </Typography>
                            <Typography sx={{ fontFamily: 'poppins', fontSize: { xs: 11, sm: 20, md: 17 }, color: '#4f4f4f' }}>
                                Phone : 8523035382
                            </Typography>
                            <Typography sx={{ fontFamily: 'poppins', fontSize: { xs: 11, sm: 20, md: 17 }, color: '#4f4f4f' }}>
                                City : Madhapur, HYD 500081.
                            </Typography>
                        </Box>
                        <Box sx={{ height: '100%', width: '50%', display: 'flex', flexDirection: 'column', justifyContent: 'space-around', marginLeft: { xs: 3 } }}>
                            <Typography sx={{ fontFamily: 'poppins', fontSize: { xs: 11, sm: 20, md: 17 }, color: '#4f4f4f' }}>
                                Degree : B.Tech Computer Science.
                            </Typography>
                            <Typography sx={{ fontFamily: 'poppins', fontSize: { xs: 11, sm: 20, md: 17 }, color: '#4f4f4f' }}>
                                Birthday : 04 Mar 2000
                            </Typography>
                            <Typography sx={{ fontFamily: 'poppins', fontSize: { xs: 11, sm: 20, md: 17 }, color: '#4f4f4f' }}>
                                Freelance : Available
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>
            </Grid>
        </motion.div>
    )
}

export default About;