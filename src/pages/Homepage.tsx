import { useState, useEffect } from "react";
import { Grid, Typography, Drawer, Box } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import "../assets/Fonts/poppins.css";
import Navbar from "../components/navbar";
import LandscapeImg from '../assets/Images/Landing.jpg';

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
    <Grid container sx={{ height: "100vh", width: "100vw", display: "flex" }}>
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
          paddingLeft: { md: 3 }
        }}
      >
        <Typography
          sx={{
            fontFamily: 'Poppins',
            fontSize: { md: 50 },
            fontWeight: { md: '600' },
            color: 'white'
          }}
        >
          Vamshi Vadla
        </Typography>
        <Box
          sx={{
            mt: 2,
            fontSize: { xs: 20, md: 28 },
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
                left: `${displayText.indexOf(currentWord) * -75}px`,
                width: `${subIndex * 9}px`,
                height: "2px",
                backgroundColor: "primary.main",
                transition: "width 0.1s linear",
              }}
            />
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
}

export default Homepage;
