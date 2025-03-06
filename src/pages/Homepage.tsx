import { useState } from "react"; 
import { Grid, Typography, Drawer, Box } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import "../assets/Fonts/poppins.css";
import Navbar from "../components/navbar";

function Homepage() {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (state: boolean) => () => {
    setOpen(state);
  };

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
        <Navbar width="20vw"/>
      </Grid>

      <Drawer 
        anchor="left" 
        open={open} 
        onClose={toggleDrawer(false)} 
        sx={{
          "& .MuiDrawer-paper": {
            backgroundColor: "pink",
            width: { xs: "71vw", sm: "71vw", md: "71vw" },
            height: "100vh",
          },
        }}
      >
        <Box 
          sx={{ width: "100%", height: "100%", display: "flex", flexDirection: "column" }} 
          onClick={(e) => e.stopPropagation()} 
        >
          <Navbar width="71vw"/>
        </Box>
      </Drawer>

      <Grid
        item
        sx={{
          backgroundColor: "lightblue",
          height: "100vh",
          width: { xs: "100vw", sm: "100vw", md: "75vw", lg: "80vw" },
        }}
      >
        <Typography>Vamshi</Typography>
      </Grid>
    </Grid>
  );
}

export default Homepage;
