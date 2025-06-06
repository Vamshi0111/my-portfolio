import { Box, Drawer, Typography, Skeleton } from "@mui/material";
import Grid from "@mui/material/Grid";
import Navbar from "../components/navbar";
import { useState, useEffect } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { motion } from "framer-motion";

function Resume() {
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
        return(
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
        <Grid container sx={{ backgroundColor: '#f4f6f8', height: "100%", width: "100%", display: "flex", minHeight: '100dvh', overflow: 'hidden', overflowY: 'auto' }}>
            <Box
                sx={{
                    position: "fixed",
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
                    height: "100%",
                    width: { xs: "0%", sm: "0%", md: "25%", lg: "20%" },
                    display: { xs: "none", sm: "none", md: "block" },
                    overflow: 'hidden'
                }}
            >
                <Navbar width="100%" />
            </Grid>

            <Drawer
                anchor="left"
                open={open}
                onClose={toggleDrawer(false)}
                sx={{
                    "& .MuiDrawer-paper": {
                        width: { xs: "75%", sm: "71%", md: "71%" },
                        height: "100%",
                    },
                }}
            >
                <Box
                    sx={{ width: "100%", height: "100%", display: "flex", flexDirection: "column" }}
                    onClick={(e) => e.stopPropagation()}
                >
                    <Navbar width="100%" />
                </Box>
            </Drawer>

            <Grid item sx={{ width: { xs: '100%', sm: '100%', md: '80%' }, paddingTop: { xs: 5, sm: 8, md: 0 }, paddingLeft: { xs: 2, sm: 3, md: 2 }, paddingRight: { sm: 3 }, overflowY: 'auto', height: '100vh', padding: { xs: 2, sm: 2 } }}>
                <Typography sx={{
                    fontSize: { xs: 20, sm: 28 },
                    fontFamily: 'poppins',
                    fontWeight: "500",
                    position: 'relative',
                    display: 'inline-block',
                    color: '#1e88e5',
                    marginTop: { xs: 3, sm: 6, md:2 }
                }}>
                    Resume
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

                <Box sx={{ marginTop: { xs: 2, sm: 2, md: 2 } }}>
                    <Typography sx={{
                        fontFamily: 'poppins',
                        color: '#4f4f4f',
                        fontSize: { xs: 14, sm: 16, md: 16 }
                    }}>
                        Full Stack Developer with 1+ year of experience in JavaScript, HTML5, and CSS. Built and maintained web apps for ATS and E-commerce platforms. Quick learner, team player, and passionate about building user-friendly web and mobile apps.
                    </Typography>
                </Box>

                <Box sx={{ marginTop: { xs: 2, sm: 2, md: 2 } }}>
                    <Typography sx={{
                        color: "#212121",
                        fontWeight: 600,
                        fontFamily: 'poppins',
                        fontSize: { xs: 16, sm: 18, md: 18 }
                    }}>
                        Professional Experience
                    </Typography>

                    <Typography variant="subtitle2" sx={{
                        color: 'primary.dark',
                        letterSpacing: 0.5,
                        marginTop: 1,
                        fontFamily: 'poppins',
                        fontStyle: 'italic',
                        fontSize: { xs: 14, sm: 15, md: 16 }
                    }}>
                        Genamplify Solutions Hub Pvt Ltd. | Software Developer
                    </Typography>

                    <Typography sx={{
                        color: '#4f4f4f',
                        marginTop: 1,
                        fontFamily: 'poppins',
                        fontSize: { xs: 12, sm: 13, md: 13 }
                    }}>
                        2023 - Present
                    </Typography>

                    <ul style={{ color: '#4f4f4f', fontFamily: 'poppins', rowGap: 18, display: 'flex', flexDirection: "column", fontSize: '0.875rem' }}>
                        <li>Successfully lead and manage a team of developers, fostering collaboration and promoting a culture of accountability and discipline within the organization.</li>
                        <li>Ensure that web and mobile apps are scalable, secure, and meet business and user requirements.</li>
                        <li>Lead efforts to ensure web applications are fully responsive across all devices and screen sizes (e.g., desktops, tablets, mobile phones).</li>
                        <li>Ensure the use of version control tools (e.g., Git) for maintaining the source code of both web and mobile projects, managing branches, and ensuring seamless collaboration.</li>
                    </ul>

                    <Typography sx={{
                        color: "#212121",
                        fontWeight: 600,
                        fontFamily: 'poppins',
                        fontSize: { xs: 16, sm: 18, md: 18 },
                        marginTop: 2
                    }}>
                        Education
                    </Typography>

                    <Typography variant="subtitle2" sx={{
                        color: 'primary.dark',
                        letterSpacing: 0.5,
                        marginTop: 1,
                        fontFamily: 'poppins',
                        fontStyle: 'italic',
                        fontSize: { xs: 14, sm: 15, md: 16 }
                    }}>
                        B.Tech - Computer Science and Engineering
                    </Typography>

                    <Typography sx={{
                        color: '#4f4f4f',
                        marginTop: 1,
                        fontFamily: 'poppins',
                        fontSize: { xs: 12, sm: 13, md: 13 }
                    }}>
                        2020 - 2023
                    </Typography>

                    <Typography sx={{ color: '#4f4f4f', marginTop: 1, fontFamily: 'poppins', fontSize: { xs: 14, sm: 14, md: 15 } }}>
                        MallaReddy Institute of Technology and Science, Hyd, 500014.
                    </Typography>

                    <Typography sx={{ color: '#4f4f4f', marginTop: 1, fontFamily: 'poppins', fontSize: { xs: 13, sm: 14, md: 15 } }}>
                        - Explored core computer science subjects including data structures, algorithms, operating systems, and database management systems, while actively enhancing technical skills through self-learning and personal projects.
                    </Typography>

                    <Typography variant="subtitle2" sx={{
                        color: 'primary.dark',
                        letterSpacing: 0.5,
                        marginTop: 2,
                        fontFamily: 'poppins',
                        fontStyle: 'italic',
                        fontSize: { xs: 14, sm: 15, md: 16 }
                    }}>
                        Diploma - Electrical and Electronics Engineering
                    </Typography>

                    <Typography sx={{
                        color: '#4f4f4f',
                        marginTop: 1,
                        fontFamily: 'poppins',
                        fontSize: { xs: 12, sm: 13, md: 13 }
                    }}>
                        2017 - 2020
                    </Typography>

                    <Typography sx={{ color: '#4f4f4f', marginTop: 1, fontFamily: 'poppins', fontSize: { xs: 14, sm: 14, md: 15 } }}>
                        Ratnapuri Institute of Technology College of Polytechnic, Hyd, 502296.
                    </Typography>

                    <Typography sx={{ color: '#4f4f4f', marginTop: 1, fontFamily: 'poppins', fontSize: { xs: 13, sm: 14, md: 15 } }}>
                        - Gained a solid foundation in electrical circuits, electronic devices, power systems, and control systems, while developing strong analytical and troubleshooting skills through hands-on lab work and technical projects.
                    </Typography>
                </Box>
            </Grid>
        </Grid>
        </motion.div>
    );
}

export default Resume;
