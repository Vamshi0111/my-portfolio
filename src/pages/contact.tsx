import { Box, Drawer, Grid, Typography, useTheme, useMediaQuery, TextField, Button } from "@mui/material";
import Navbar from "../components/navbar";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import emailjs from "emailjs-com";


function Contact() {
    const [open, setOpen] = useState(false);

    const toggleDrawer = (state: boolean) => () => {
        setOpen(state);
    };

    const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        emailjs.sendForm(
            "your_service_id",  // Replace with your actual Service ID from EmailJS
            "your_template_id", // Replace with your actual Template ID from EmailJS
            e.target as HTMLFormElement,
            "your_public_key"  // Replace with your actual Public Key from EmailJS
        )
            .then((result) => {
                console.log("Email sent:", result.text);
                alert("Message sent successfully!");
            })
            .catch((error) => {
                console.error("Email sending error:", error);
                alert("Failed to send message. Try again.");
            });

        // Reset the form after submission
        (e.target as HTMLFormElement).reset();
    };

    const theme = useTheme();
    const isXsScreen = useMediaQuery(theme.breakpoints.only("xs"));

    // Check if the screen is 'sm' (small)
    const isSmScreen = useMediaQuery(theme.breakpoints.only("sm"));

    const isMdScreen = useMediaQuery(theme.breakpoints.up("md"));




    return (
        <Grid container sx={{ backgroundColor:'#f4f6f8', height: "100vh", width: "100vw", display: "flex" }}>
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
            <Grid item sx={{ width: '80vw', paddingTop: { xs: 5, sm: 8, md: 2 }, paddingLeft: { xs: 2, sm: 3, md: 2 }, paddingRight: { sm: 3 } }}>
                <Typography sx={{
                    fontSize: { xs: 18, sm: 28 }, fontFamily: 'poppins', fontWeight: '500',
                    position: 'relative',
                    display: 'inline-block',
                    color: '#1e88e5'
                }}>
                    Contact
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
                <Typography sx={{ fontFamily: 'poppins', marginTop: { xs: 2, sm: 2, md: 2 }, fontSize: { sm: 24, md: 18 }, color: '#4f4f4f' }}>
                    Great things start with a simple conversation—let’s connect and build!
                </Typography>
                <Box sx={{ height: { md: "65vh" }, width: { md: "75vw" }, marginTop: { xs: 2, md: 6 } }}>
                    <Box
                        sx={{
                            // backgroundImage: "linear-gradient(to bottom, #ff9a9e, #a1c4fd)",
                            height: { xs: '52vh', sm: '21%', md: "100%" },
                            width: { xs: '100%', sm: '81%', md: "75%" },
                            boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)",
                            gap: { md: 3 },
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "start",
                            padding: { xs: 2, sm: 3, md: 3 },
                        }}
                    >
                        <Box
                            sx={{
                                display: "flex",
                                gap: 2,
                                flexWrap: "wrap", // ✅ Allows wrapping
                                width: { md: "100%" },
                                justifyContent: "space-between",
                            }}
                        >
                            {/* First TextField - Your Name */}
                            <TextField
                                sx={{
                                    width: "100%", // Ensure it takes full width
                                    maxWidth: { xs: "100%", md: "45%" }, // ✅ Full width on xs, 45% on md                                    
                                    "& input::placeholder": {
                                        color: "black",
                                        opacity: 0.7,
                                        fontFamily: "Poppins",
                                    },
                                }}
                                fullWidth
                                placeholder="Your Name"
                            />
                            <TextField
                                sx={{
                                    flex: 1,
                                    maxWidth: { xs: "100%", sm: '100%', md: "45%" },
                                    "& input::placeholder": {
                                        color: "black",
                                        opacity: 0.7,
                                        fontFamily: "Poppins",
                                    },
                                }}
                                placeholder="Your Email"
                            />
                        </Box>


                        <TextField sx={{ width: { xs: '100%', sm: "100%", md: "100%" }, mt: { xs: 2, md: 3 }, "& input::placeholder": { color: "black", opacity: 0.7, fontFamily: 'poppins' }, }} placeholder="Subject" />

                        <TextField
                            sx={{
                                width: { xs: "100%", sm: "100%", md: "100%" }, 
                                height: { xs: "10vh", sm: "12vh", md: "15vh" }, 
                                mt: { xs: 2, sm: 2, md: 2 },
                                "& .MuiInputBase-root": {
                                    fontFamily: "Poppins",
                                    fontSize: "16px",
                                },
                                "& .MuiInputBase-input::placeholder": {
                                    color: "black",
                                    opacity: 0.7,
                                    fontFamily: "Poppins",
                                },
                            }}
                            placeholder="Message"
                            multiline
                            minRows={isXsScreen ? 2 : isSmScreen ? 4 : isMdScreen ? 6 : 1}
                        />
                        <Box component="form"
                            onSubmit={sendEmail}
                            sx={{ backgroundColor: '#2AA6E0', height: { md: '11vh' }, width: { xs: '26vw', sm: '13vw', md: "10vw" }, marginTop: { xs: 3.5, md: 8 }, borderRadius: { xs: 5, sm: 5, md: 5 }, display: 'flex', justifyContent: 'center', alignItems: 'center' }}
                        >
                            <Button sx={{ fontFamily: 'poppins',color:'white' }}>
                                Submit
                            </Button>
                        </Box>
                    </Box>
                </Box>
            </Grid>
        </Grid>
    )
}

export default Contact;