import { useState, useEffect } from "react";
import { Grid, Typography, Drawer, Box } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import "../assets/Fonts/poppins.css";
import Navbar from "../components/navbar";
import LandscapeImg from '../assets/Images/Landing.jpg';
import { motion } from "framer-motion";

function Homepage() {
  const [open, setOpen] = useState(false);
  const toggleDrawer = (state: boolean) => () => setOpen(state);

  const texts = ["I'm a Developer", "I'm a Designer", "I'm a Freelancer"];
  const [textIndex, setTextIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [forward, setForward] = useState(true);

  useEffect(() => {
    if (subIndex === texts[textIndex].length + 1 && forward) {
      setForward(false);
      return;
    }

    if (subIndex === 0 && !forward) {
      setForward(true);
      setTextIndex((prev) => (prev + 1) % texts.length);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (forward ? 1 : -1));
    }, forward ? 120 : 50);

    return () => clearTimeout(timeout);
  }, [subIndex, forward, textIndex]);

  const displayText = texts[textIndex].substring(0, subIndex);
  const currentWord = texts[textIndex].split(" ")[3];

  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
      transition={{ duration: 0.2 }}
    >
      <Grid container sx={{ height: "100vh", width: "100vw", display: "flex" }}>
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
          <MenuIcon fontSize="large" sx={{ color: 'white' }} />
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
              overflow: { xs: 'auto' }
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
        <Grid
          item
          sx={{
            backgroundImage: `url(${LandscapeImg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundColor: "lightblue",
            height: "100vh",
            width: { xs: "100vw", sm: "100vw", md: "75vw", lg: "80vw" },
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            paddingLeft: { xs: 1, sm: 2, md: 3 }
          }}
        >
          <Typography
            sx={{
              fontFamily: 'Poppins',
              fontSize: { xs: 20, sm: 40, md: 50 },
              fontWeight: { xs: '600', md: '600' },
              color: 'white',
              marginTop: { xs: 5, sm: 5 }
            }}
          >
            Vamshi Vadla
          </Typography>
          <Box
            sx={{
              mt: 2,
              fontSize: { xs: 20, sm: 24, md: 28 },
              fontWeight: 500,
              fontFamily: "Poppins",
              color: "white",
              position: "relative",
              display: "inline-block",
            }}
          >
            <Box component="span" sx={{ position: 'relative', display: 'inline-block' }}>
              {displayText}
              <Box
                component="span"
                sx={{
                  position: "absolute",
                  bottom: -4,
                  left: {
                    xs: `${displayText.indexOf(currentWord) * -54}px`,  // Adjust for xs
                    sm: `${displayText.indexOf(currentWord) * -64}px`,  // Adjust for sm
                    md: `${displayText.indexOf(currentWord) * -75}px`,  // Default for md and larger
                  },
                  width: {
                    xs: `${subIndex * 6}px`,  // Adjust for xs
                    sm: `${subIndex * 7}px`,  // Adjust for sm
                    md: `${subIndex * 9}px`,  // Default for md and larger
                  },
                  height: "2px",
                  backgroundColor: "primary.main",
                  transition: "width 0.1s linear",
                }}
              />
            </Box>
          </Box>
          <Box sx={{
            display: { xs: 'block', sm: 'block', md: 'none' },
            alignItems: 'center',
            justifyContent: 'center',
            padding: { xs: 1, sm: 1 },
            position: 'fixed',
            bottom: { xs: 0, sm: 0 },
            left: { xs: 0, sm: 0 },
            zIndex: 1300

          }}>
            <Typography sx={{ color: 'white', fontSize: { xs: 8, sm: 13 }, fontFamily: 'poppins' }}>
              Note: Navigate screens through Hamburger in Top right
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </motion.div>
  );
}

export default Homepage;
