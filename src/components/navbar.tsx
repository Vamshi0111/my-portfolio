import { Box, Grid, Typography, IconButton } from "@mui/material";
import '../assets/Fonts/poppins.css';
import { useRef } from "react";
import Image from "../assets/Images/Profile.jpeg";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaSkype, FaXTwitter, FaHouse, FaFileArrowDown } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { IoBriefcase, IoPerson } from "react-icons/io5";
import { AiFillMessage } from "react-icons/ai";

function Navbar({ width }: { width?: string }) {
  const fileInputRef = useRef<HTMLInputElement>(null);

  return (
    <Grid sx={{ backgroundColor: '#1D242C', height: '100vh', width: width || '20vw', display: 'flex', flexDirection: 'column', rowGap: "30px", justifyContent: 'center', alignItems: 'center' }}>
      <Box sx={{
        display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', rowGap: "10px"
      }}>

          <img src={Image} alt="ProfilePic" height={110} width={110} style={{ borderRadius: "50%" }} />

        <Typography sx={{ fontFamily: 'poppins', fontWeight: "600", fontSize: {xs:28,sm:37,lg:25}, color: '#FEFDFB' }}>
          VAMSHI VADLA
        </Typography>
        <input ref={fileInputRef} type="file" accept="image/*" hidden />

        <Box sx={{ width: {sm:'30vw',md:'25vw',lg:"15vw"}, display: 'flex', justifyContent: "space-between" }}>
          <Box sx={{ backgroundColor: '#1D242C', borderRadius: 50 }}>
            <IconButton component="a" href="https://x.com/vamshichary117" sx={{ color: "white", "&:hover": { color: 'red' },fontSize:{xs: 20, sm: 29, md: 18, lg: 18} }}>
              <FaXTwitter />
            </IconButton>
          </Box>
          <Box sx={{ backgroundColor: '#1D242C', borderRadius: 50 }}>
            <IconButton component="a" href="https://www.facebook.com/vamshi.chary.92351" sx={{ color: "white", "&:hover": { color: 'red' },fontSize:{xs: 20, sm: 29, md: 18, lg: 18}}}>
              <FaFacebookF />
            </IconButton>
          </Box>
          <Box sx={{ backgroundColor: '#1D242C', borderRadius: 50 }}>
            <IconButton component="a" href="https://www.instagram.com/v.1.m.s.8.9/" sx={{ color: "white", "&:hover": { color: 'red' },fontSize:{xs: 20, sm: 29, md: 18, lg: 18} }}>
              <FaInstagram />
            </IconButton>
          </Box>
          <Box sx={{ backgroundColor: '#1D242C', borderRadius: 50 }}>
            <IconButton component="a" href="https://join.skype.com/invite/qfGtIZ170RZL" sx={{ color: "white", "&:hover": { color: 'red' },fontSize:{xs: 20, sm: 29, md: 18, lg: 18} }}>
              <FaSkype />
            </IconButton>
          </Box>
          <Box sx={{ backgroundColor: '#1D242C', borderRadius: 50 }}>
            <IconButton component="a" href="https://www.linkedin.com/in/vamshi-vadla/" sx={{ color: "white", "&:hover": { color: 'red' },fontSize:{xs: 20, sm: 29, md: 18, lg: 18} }} >
              <FaLinkedinIn />
            </IconButton>
          </Box>
        </Box>
      </Box>
      <Box sx={{ width: {xs:"82%",sm:"80%"}, height: "50%", display: 'flex', rowGap: {xs:5,sm:6}, flexDirection: 'column',paddingTop:{sm:3} }}>
        <Box sx={{ display: 'flex', alignItems: 'center', columnGap: "10px" }}>
          <Link to={"/"} style={{ textDecoration: 'none', color: 'inherit' }}>
            <Box sx={{ display: 'flex', alignItems: 'center', columnGap: {xs:"10px",sm:"10px"},fontSize:{xs:19,sm:32,md:18} }}>
              <FaHouse style={{ color: 'gray' }} />
              <Typography sx={{ fontWeight: "500", fontFamily: 'poppins', color: "gray", fontSize: {xs:18,sm:33,md:20} }}>
                Home
              </Typography>
            </Box>
          </Link>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Link to={"/about"} style={{ textDecoration: 'none', color: 'inherit' }}>
            <Box sx={{ display: 'flex', alignItems: 'center', columnGap: {xs:"10px",sm:"10px"}, fontSize:{xs:19,sm:34,md:18} }}>
              <IoPerson style={{ color: 'gray' }} />
              <Typography sx={{ fontWeight: "500", fontFamily: 'poppins', color: "gray", fontSize: {xs:18,sm:33,md:20} }}>
                About
              </Typography>
            </Box>
          </Link>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', columnGap: "3px" }}>
          <Link to={"/about"} style={{ textDecoration: 'none', color: 'inherit' }}>
            <Box sx={{ display: 'flex', alignItems: 'center', columnGap: {xs:"10px",sm:"10px"},fontSize:{xs:19,sm:34,md:18} }}>
              <FaFileArrowDown style={{ color: 'gray' }} />
              <Typography sx={{ fontWeight: "500", fontFamily: 'poppins', color: "gray", fontSize: {xs:18,sm:33,md:20} }}>
                Resume
              </Typography>
            </Box>
          </Link>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', columnGap: "3px" }}>
          <Link to={"/contact"} style={{ textDecoration: 'none', color: 'inherit' }}>
            <Box sx={{ display: 'flex', alignItems: 'center', columnGap: {xs:"10px",sm:"10px"}, fontSize:{xs:19,sm:34,md:18} }}>
              <AiFillMessage style={{ color: "gray" }} />
              <Typography sx={{ fontWeight: "500", fontFamily: 'poppins', color: "gray", fontSize: {xs:18,sm:33,md:18} }}>
                Contact
              </Typography>
            </Box>
          </Link>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', columnGap: "3px" }}>
          <Link to={"/servicesprojects"} style={{ textDecoration: 'none', color: 'inherit' }}>
            <Box sx={{ display: 'flex', alignItems: 'center', columnGap: {xs:"10px",sm:"10px"}, fontSize:{xs:19,sm:34,md:18} }}>
              <IoBriefcase style={{ color: 'gray' }} />
              <Typography sx={{ fontWeight: "500", fontFamily: 'poppins', color: "gray", fontSize: {xs:18,sm:33,md:18} }}>
                Services & Projects
              </Typography>
            </Box>
          </Link>
        </Box>
      </Box>
    </Grid>
  );
}

export default Navbar;