import { Box, Drawer, Grid, Typography, useTheme, useMediaQuery, TextField, Button } from "@mui/material";
import Navbar from "../components/navbar";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import emailjs from "emailjs-com";
import { motion } from "framer-motion";

function Contact() {
    const [open, setOpen] = useState(false);

    const toggleDrawer = (state: boolean) => () => {
        setOpen(state);
    };

    const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        emailjs.sendForm(
            "service_pbt0rw5",      // This is Actual EmailJS Service ID
            "template_tmnippn",     // This is Actual EmailJS Template ID
            e.target as HTMLFormElement,
            "xb4SnK8NoDXUuofIT"       // This is Actual EmailJS Public Key
        )
            .then((result) => {
                console.log("Email sent:", result.text);
                alert("Message sent successfully!");
            })
            .catch((error) => {
                console.error("Email sending error:", error);
                alert("Failed to send message. Please try again.");
            });

        (e.target as HTMLFormElement).reset();
    };

    const theme = useTheme();
    const isXsScreen = useMediaQuery(theme.breakpoints.only("xs"));
    const isSmScreen = useMediaQuery(theme.breakpoints.only("sm"));

    return (
        <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.2 }}
        >
            <Box sx={{ paddingTop: 'env(safe-area-inset-top)' }}>
                <Grid container sx={{ backgroundColor: '#f4f6f8', height: "100%", width: "100vw", minHeight: '100vh', overflow: 'hidden' }}>
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
                            width: { xs: 0, sm: 0, md: "25vw", lg: "20vw" },
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
                                width: { xs: "71vw", sm: "71vw" },
                                height: "100vh",
                            },
                        }}
                    >
                        <Box sx={{ height: "100%" }} onClick={(e) => e.stopPropagation()}>
                            <Navbar width="71vw" />
                        </Box>
                    </Drawer>
                    <Grid item sx={{ width: { xs: '100%', sm: '100%', md: '80%' }, paddingLeft: { xs: 2, sm: 3, md: 2 }, paddingTop: { xs:5 ,sm: 3, md: 2 } }}>
                        <Typography
                            sx={{
                                fontSize: { xs: 20, sm: 28 },
                                fontFamily: 'poppins',
                                fontWeight: '500',
                                color: '#1e88e5',
                                position: 'relative',
                                display: 'inline-block',
                                // marginTop: { xs: 5 }                                
                            }}
                        >
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

                        <Typography
                            sx={{
                                fontFamily: 'poppins',
                                mt: 2,
                                fontSize: { xs: 16, sm: 20, md: 18 },
                                color: '#4f4f4f',
                            }}
                        >
                            Great things start with a simple conversation—let’s connect and build!
                        </Typography>
                        <Box
                            component="form"
                            onSubmit={sendEmail}
                            sx={{
                                mt: { xs: 3, sm: 4, md: 4 },
                                width: { xs: '87%', sm: '90%', md: '70%' },
                                maxWidth: '800px',
                                boxShadow: 3,
                                padding: { xs: 2, sm: 3, md: 4 },
                                borderRadius: 2,
                                backgroundColor: 'white',
                                display: 'flex',
                                flexDirection: 'column',
                                gap: 3,
                            }}
                        >
                            <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 2 }}>
                                <TextField
                                    fullWidth
                                    name="from_name"
                                    placeholder="Your Name"
                                    sx={{
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
                                />
                                <TextField
                                    fullWidth
                                    name="from_email"
                                    placeholder="Your Email"
                                    sx={{
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
                                />
                            </Box>

                            <TextField
                                fullWidth
                                name="subject"
                                placeholder="Subject"
                                sx={{
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
                            />

                            <TextField
                                fullWidth
                                name="message"
                                placeholder="Message"
                                multiline
                                minRows={isXsScreen ? 2 : isSmScreen ? 4 : 6}
                                sx={{
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
                            />

                            <Button
                                type="submit"
                                sx={{
                                    alignSelf: 'flex-start',
                                    backgroundColor: '#2AA6E0',
                                    color: 'white',
                                    fontFamily: 'Poppins',
                                    paddingX: 3,
                                    paddingY: 1,
                                    borderRadius: 3,
                                    textTransform: 'none',
                                    '&:hover': {
                                        backgroundColor: '#1e88e5',
                                    }
                                }}
                            >
                                Submit
                            </Button>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </motion.div>
    );
}

export default Contact;
