import { Box, Drawer, Grid, Typography } from "@mui/material";
import '../assets/Fonts/poppins.css'
import { useState } from "react";
import Navbar from "../components/navbar";
import MenuIcon from "@mui/icons-material/Menu";
import { IoIosDesktop, IoMdCloudy } from "react-icons/io";
import { HiOutlineDevicePhoneMobile } from "react-icons/hi2";
import { FaUserLock, FaPalette } from "react-icons/fa";
import { RiToolsLine } from "react-icons/ri";
import Footer from "../components/footer";
import MessengerImg from '../assets/Images/Messenger.png';
import ShipEaseImg from '../assets/Images/ShipEase.png';
import { motion } from "framer-motion";


function Servicesprojects() {
    const [open, setOpen] = useState(false);

    const toggleDrawer = (state: boolean) => () => {
        setOpen(state);
    };

    return (
        <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.2 }}
        >
        <Grid container sx={{ backgroundColor: '#f4f6f8', height: "100vh", width: "100vw", display: "flex", flexDirection: { md: 'column' }, overflow: 'auto', minHeight: { xs: '100dvh', md: 0 } }}>
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
                <Navbar width="100%" />
            </Grid>

            <Drawer
                anchor="left"
                open={open}
                onClose={toggleDrawer(false)}
                sx={{
                    "& .MuiDrawer-paper": {
                        width: { xs: "71vw", sm: "71vw", md: "71vw" },
                        height: "100vh",
                        overflow: 'hidden'
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
            <Grid item sx={{ width: { xs: '100%', md: '80%' }, paddingTop: { sm: 5, md: 2 }, paddingLeft: { xs: 2, sm: 3, md: 2 }, paddingRight: { sm: 3 }, overflow: 'auto', padding: { xs: 2 } }}>
                <Typography sx={{
                    fontSize: { xs: 20, sm: 28 }, fontFamily: 'poppins', fontWeight: '500',
                    position: 'relative',
                    display: 'inline-block',
                    color: '#1e88e5',
                    marginTop: { xs: 3 }
                }}>
                    Services
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
                        fontSize: { xs: 13, sm: 20, md: 16 }
                    }}>
                        "Here’s how I can help you bring your ideas to life—from concept to deployment, across web and mobile platforms.”
                    </Typography>
                </Box>
                <Box sx={{ width: { sm: '100%', md: '100%' }, height: { xs: '30%', sm: '47%', md: '70%' }, marginTop: { xs: 1, sm: 2, md: 2 }, flexWrap: 'wrap', display: 'flex', rowGap: 2, justifyContent: 'space-between', boxSizing: 'border-box', overflow: { xs: 'auto' } }}>
                    <Box sx={{ backgroundColor: 'white', width: { xs: '48%', sm: '48.5%', md: '32%' }, borderRadius: 2, height: { xs: '30%', sm: '32%', md: '45%' }, boxShadow: '0px 3px 6px rgba(0,0,0,0.2)', border: "1px solid #e0e0e0", boxSizing: 'border-box', overflow: 'hidden', display: 'flex', paddingRight: { xs: 0.5, md: 0 } }}>
                        <Box sx={{ height: '100%', width: '25%', display: 'flex', justifyContent: 'center', paddingTop: { xs: 2, md: 2 }, fontSize: { md: 24 } }}>
                            <Box sx={{ borderRadius: '50%', height: { xs: '14%', md: '20%' }, width: { xs: '60%', sm: '51%', md: '50%' }, backgroundColor: '#2AA6E0', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: { sm: 25 } }}>    <IoIosDesktop color="white" /> </Box>
                        </Box>
                        <Box sx={{ width: "75%", height: '90%', overflow: 'hidden' }}>
                            <Box sx={{ height: { xs: '21%', sm: '19%', md: '27%' }, display: 'flex', justifyContent: 'start', alignItems: { xs: 'end', md: 'flex-end' } }}>
                                <Typography sx={{ fontFamily: 'poppins', fontWeight: '500', color: 'black', fontSize: { xs: 10, sm: 20, md: 18 } }}>
                                    Web Development
                                </Typography>
                            </Box>
                            <Box sx={{ height: '50%', display: 'flex', boxSizing: 'border-box', marginTop: { xs: 1, md: 1 } }}>
                                <Typography sx={{ fontFamily: 'poppins', fontSize: { xs: 9, sm: 15, md: 15 }, color: '#4f4f4f', marginBottom: 0 }}>
                                    Build scalable, secure, and fast web applications using modern technologies like React, Node.js, and PostgreSQL/MongoDB.
                                </Typography>
                            </Box>
                        </Box>
                    </Box>
                    <Box sx={{ backgroundColor: 'white', width: { xs: '48%', sm: '48.5%', md: '32%' }, borderRadius: 2, height: { xs: '30%', sm: '32%', md: '45%' }, boxShadow: '0px 3px 6px rgba(0,0,0,0.2)', border: "1px solid #e0e0e0", boxSizing: 'border-box', overflow: 'hidden', display: 'flex', paddingRight: { xs: 0.5, md: 0 } }}>
                        <Box sx={{ height: '100%', width: '25%', display: 'flex', justifyContent: 'center', paddingTop: { xs: 2, md: 2 }, fontSize: { md: 24 } }}>
                            <Box sx={{ borderRadius: '50%', height: { xs: '14%', md: '20%' }, width: { xs: '60%', sm: '51%', md: '50%' }, backgroundColor: '#2AA6E0', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: { sm: 25 } }}>    <HiOutlineDevicePhoneMobile color="white" /> </Box>
                        </Box>
                        <Box sx={{ width: "75%", height: '90%', overflow: 'hidden' }}>
                            <Box sx={{ height: { xs: '21%', sm: '19%', md: '27%' }, display: 'flex', justifyContent: 'start', alignItems: { xs: 'end', md: 'flex-end' }, paddingTop: { sm: 0, md: 0 } }}>
                                <Typography sx={{ fontFamily: 'poppins', fontWeight: '500', color: 'black', fontSize: { xs: 10, sm: 20, md: 18 } }}>
                                    Mobile Development
                                </Typography>
                            </Box>
                            <Box sx={{ height: '50%', display: 'flex', boxSizing: 'border-box', marginTop: { xs: 1, md: 1 }, paddingRight: { md: 2 } }}>
                                <Typography sx={{ fontFamily: 'poppins', fontSize: { xs: 9, sm: 15, md: 15 }, color: '#4f4f4f', marginBottom: 0 }}>
                                    Create cross-platform mobile apps with React Native and Expo that deliver native-like performance and experience.
                                </Typography>
                            </Box>
                        </Box>
                    </Box>
                    <Box sx={{ backgroundColor: 'white', width: { xs: '48%', sm: '48.5%', md: '32%' }, borderRadius: 2, height: { xs: '30%', sm: '32%', md: '45%' }, boxShadow: '0px 3px 6px rgba(0,0,0,0.2)', border: "1px solid #e0e0e0", boxSizing: 'border-box', overflow: 'hidden', display: 'flex', paddingRight: { xs: 0.5, md: 0 } }}>
                        <Box sx={{ height: '100%', width: '25%', display: 'flex', justifyContent: 'center', paddingTop: { xs: 2, md: 2 }, fontSize: { md: 24 } }}>
                            <Box sx={{ borderRadius: '50%', height: { xs: '14%', md: '20%' }, width: { xs: '60%', sm: '51%', md: '50%' }, backgroundColor: '#2AA6E0', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: { sm: 25 } }}>    <FaPalette color="white" /> </Box>
                        </Box>
                        <Box sx={{ width: "75%", height: '90%', overflow: 'hidden' }}>
                            <Box sx={{ height: { xs: '21%', sm: '19%', md: '27%' }, display: 'flex', justifyContent: 'start', alignItems: { xs: 'end', md: 'flex-end' } }}>
                                <Typography sx={{ fontFamily: 'poppins', fontWeight: '500', color: 'black', fontSize: { xs: 10, sm: 20, md: 18 } }}>
                                    UI/UX Design
                                </Typography>
                            </Box>
                            <Box sx={{ height: '50%', display: 'flex', boxSizing: 'border-box', marginTop: { xs: 1, md: 1 } }}>
                                <Typography sx={{ fontFamily: 'poppins', fontSize: { xs: 9, sm: 15, md: 15 }, color: '#4f4f4f', marginBottom: 0 }}>
                                    Design engaging user interfaces and intuitive experiences using tool Figma with a mobile-first approach.
                                </Typography>
                            </Box>
                        </Box>
                    </Box>
                    <Box sx={{ backgroundColor: 'white', width: { xs: '48%', sm: '48.5%', md: '32%' }, borderRadius: 2, height: { xs: '30%', sm: '32%', md: '45%' }, boxShadow: '0px 3px 6px rgba(0,0,0,0.2)', border: "1px solid #e0e0e0", boxSizing: 'border-box', overflow: 'hidden', display: 'flex', paddingRight: { xs: 0.5, md: 0 } }}>
                        <Box sx={{ height: '100%', width: '25%', display: 'flex', justifyContent: 'center', paddingTop: { xs: 2, md: 2 }, fontSize: { md: 24 } }}>
                            <Box sx={{ borderRadius: '50%', height: { xs: '14%', md: '20%' }, width: { xs: '60%', sm: '51%', md: '50%' }, backgroundColor: '#2AA6E0', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: { sm: 25 } }}>    <FaUserLock color="white" /> </Box>
                        </Box>
                        <Box sx={{ width: "75%", height: '90%', overflow: 'hidden' }}>
                            <Box sx={{ height: { xs: '21%', sm: '19%', md: '27%' }, display: 'flex', justifyContent: 'start', alignItems: { xs: 'end', md: 'flex-end' } }}>
                                <Typography sx={{ fontFamily: 'poppins', fontWeight: '500', color: 'black', fontSize: { xs: 10, sm: 20, md: 18 } }}>
                                    Security
                                </Typography>
                            </Box>
                            <Box sx={{ height: '50%', display: 'flex', boxSizing: 'border-box', marginTop: { xs: 1, md: 1 }, paddingRight: { md: 3 } }}>
                                <Typography sx={{ fontFamily: 'poppins', fontSize: { xs: 9, sm: 15, md: 15 }, color: '#4f4f4f', marginBottom: 0 }}>
                                    Implement secure login systems, JWT-based authentication, and protection against common vulnerabilities.
                                </Typography>
                            </Box>
                        </Box>
                    </Box>
                    <Box sx={{ backgroundColor: 'white', width: { xs: '48%', sm: '48.5%', md: '32%' }, borderRadius: 2, height: { xs: '30%', sm: '32%', md: '45%' }, boxShadow: '0px 3px 6px rgba(0,0,0,0.2)', border: "1px solid #e0e0e0", boxSizing: 'border-box', overflow: 'hidden', display: 'flex', paddingRight: { xs: 0.5, md: 0 } }}>
                        <Box sx={{ height: '100%', width: '25%', display: 'flex', justifyContent: 'center', paddingTop: { xs: 2, md: 2 }, fontSize: { md: 24 } }}>
                            <Box sx={{ borderRadius: '50%', height: { xs: '14%', md: '20%' }, width: { xs: '60%', sm: '51%', md: '50%' }, backgroundColor: '#2AA6E0', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: { sm: 25 } }}>    <RiToolsLine color="white" /> </Box>
                        </Box>
                        <Box sx={{ width: "75%", height: '90%', overflow: 'hidden' }}>
                            <Box sx={{ height: { xs: '21%', sm: '19%', md: '27%' }, display: 'flex', justifyContent: 'start', alignItems: { xs: 'end', md: 'flex-end' } }}>
                                <Typography sx={{ fontFamily: 'poppins', fontWeight: '500', color: 'black', fontSize: { xs: 10, sm: 20, md: 18 } }}>
                                    API Integration
                                </Typography>
                            </Box>
                            <Box sx={{ height: '50%', display: 'flex', boxSizing: 'border-box', marginTop: { xs: 1, md: 1 }, paddingRight: { md: 3 } }}>
                                <Typography sx={{ fontFamily: 'poppins', fontSize: { xs: 9, sm: 15, md: 15 }, color: '#4f4f4f', marginBottom: 0 }}>
                                    Build robust RESTful APIs and integrate third-party services to extend app functionality.
                                </Typography>
                            </Box>
                        </Box>
                    </Box>
                    <Box sx={{ backgroundColor: 'white', width: { xs: '48%', sm: '48.5%', md: '32%' }, borderRadius: 2, height: { xs: '30%', sm: '32%', md: '45%' }, boxShadow: '0px 3px 6px rgba(0,0,0,0.2)', border: "1px solid #e0e0e0", boxSizing: 'border-box', overflow: 'hidden', display: 'flex', paddingRight: { xs: 0.5, md: 0 } }}>
                        <Box sx={{ height: '100%', width: '25%', display: 'flex', justifyContent: 'center', paddingTop: { xs: 2, md: 2 }, fontSize: { md: 24 } }}>
                            <Box sx={{ borderRadius: '50%', height: { xs: '14%', md: '20%' }, width: { xs: '60%', sm: '51%', md: '50%' }, backgroundColor: '#2AA6E0', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: { sm: 25 } }}>    <IoMdCloudy color="white" /> </Box>
                        </Box>
                        <Box sx={{ width: "75%", height: '90%', overflow: 'hidden' }}>
                            <Box sx={{ height: { xs: '21%', sm: '19%', md: '27%' }, display: 'flex', justifyContent: 'start', alignItems: { xs: 'end', md: 'flex-end' } }}>
                                <Typography sx={{ fontFamily: 'poppins', fontWeight: '500', color: 'black', fontSize: { xs: 10, sm: 20, md: 18 } }}>
                                    Cloud
                                </Typography>
                            </Box>
                            <Box sx={{ height: '50%', display: 'flex', boxSizing: 'border-box', marginTop: { xs: 1, md: 1 }, paddingRight: { md: 2 } }}>
                                <Typography sx={{ fontFamily: 'poppins', fontSize: { xs: 9, sm: 15, md: 15 }, color: '#4f4f4f', marginBottom: 0 }}>
                                    Deploy, scale, and maintain applications with AWS, Nginx, Docker, and CI/CD pipelines.
                                </Typography>
                            </Box>
                        </Box>
                    </Box>
                </Box>
                <Grid item sx={{ width: '100%', paddingTop: { xs: 2, sm: 3, md: 2 }, marginTop: { xs: 2.5, sm: 0, md: 0 }, overflow: 'hidden' }}>
                    <Typography sx={{
                        fontSize: { xs: 20, sm: 28 }, fontFamily: 'poppins', fontWeight: '500',
                        position: 'relative',
                        display: 'inline-block',
                        color: '#1e88e5'
                    }}>
                        Projects
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
                    <Box sx={{ backgroundColor: '#F4F6F8', width: "100%", marginTop: { sm: 2, md: 2 }, display: 'flex', flexDirection: { xs: 'column', sm: 'column', md: 'row' }, justifyContent: { md: 'space-between' }, rowGap: { xs: 2, sm: 2, md: 0 } }}>
                        <Box sx={{ backgroundColor: '#F4F6F8', height: '100%', width: { xs: '100%', sm: "100%", md: "49%" }, marginTop: { xs: 1, sm: 0, md: 0 } }}>
                            <Typography sx={{ color: 'black', fontFamily: 'poppins', marginBottom: { xs: 1, sm: 1, md: 2 }, fontSize: { xs: 19, sm: 24, md: 24 } }}>
                                MessengerApp
                            </Typography>
                            <Box
                                component="img"
                                src={MessengerImg}
                                sx={{
                                    width: {
                                        xs: '100%',
                                        sm: '100%',
                                        md: '100%',
                                    },
                                    height: 'auto',
                                }}
                            />
                            <Typography sx={{ color: '#4f4f4f', fontFamily: 'poppins', marginTop: { xs: 1, md: 2 }, marginBottom: { md: 2 } }}>
                                MessengerApp is a cross-platform real-time messaging application developed using React for the web and React Native for mobile platforms. It includes essential features like real-time chat, media sharing, and user authentication, offering a seamless communication experience across devices. This was a team project, and I took the role of Team Leader, where I was responsible for guiding the team, maintaining coordination, and ensuring smooth progress throughout the development cycle. Additionally, I actively contributed to the development by building key UI screens for both the web and mobile versions.
                            </Typography>
                        </Box>
                        <Box sx={{ backgroundColor: '#F4F6F8', width: { xs: '100%', sm: '100%', md: '49%' }, padding: { sm: 0, md: 2 }, paddingBottom: { md: 0 }, paddingTop: { md: 0 } }}>
                            <Typography sx={{ color: 'black', fontFamily: 'poppins', fontSize: { xs: 19, sm: 24, md: 24 } }}>
                                ShipEase
                            </Typography>
                            <Typography sx={{ color: '#4f4f4f', fontFamily: 'poppins', marginTop: { xs: 1, sm: 1, md: 2 }, marginBottom: { xs: 1, sm: 2, md: 2 } }}>
                                ShipEase is a transport logistics application designed to facilitate the shipment of goods using various types of vehicles. Developed using React for the web and React Native for mobile, the platform includes features such as vehicle selection, booking, real-time tracking, and fare estimation to ensure a smooth and efficient user experience. This was a team project, and I served as the Team Leader, responsible for guiding the team, maintaining workflow, and ensuring timely delivery. Along with managing the team, I also contributed to building several key interfaces across both web and mobile platforms.
                            </Typography>
                            <Box
                                component="img"
                                src={ShipEaseImg}
                                sx={{
                                    width: {
                                        xs: '100%',
                                        sm: '100%',
                                        md: '100%',
                                    },
                                    height: 'auto',
                                }}
                            />
                        </Box>
                    </Box>
                </Grid>
                <Footer />
            </Grid>
        </Grid>
        </motion.div>
    )
}

export default Servicesprojects;