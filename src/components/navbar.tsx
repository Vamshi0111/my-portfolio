import { Box, Button, Grid, Typography, Dialog, IconButton } from "@mui/material";
import '../assets/Fonts/poppins.css';
import { useState, useCallback, useRef } from "react";
import Image from "../assets/Profile.jpeg";
import Cropper from "react-easy-crop";
import getCroppedImg from "../utils/cropImage"; // Utility function to crop the image
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaSkype, FaXTwitter, FaHouse, FaFileArrowDown } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { IoBriefcase, IoPerson } from "react-icons/io5";
import { AiFillMessage } from "react-icons/ai";

function Navbar() {
  const [image, setImage] = useState<string | undefined>(undefined);
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [cropDialogOpen, setCropDialogOpen] = useState(false);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState<any>(null);
  const [croppedImage, setCroppedImage] = useState<string | undefined>(undefined);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedFile(file);
      setCropDialogOpen(true);
    }
  };

  const handleCropComplete = useCallback(async (_croppedArea: any, croppedAreaPixels: any) => {
    setCroppedAreaPixels(croppedAreaPixels);
  }, []);

  const handleCropApply = async () => {
    if (selectedFile && croppedAreaPixels) {
      try {
        const croppedBlob = await getCroppedImg(URL.createObjectURL(selectedFile), croppedAreaPixels);
        if (croppedBlob) {
          const croppedImageUrl = URL.createObjectURL(croppedBlob);
          setCroppedImage(croppedImageUrl); // Show the cropped image
          setCropDialogOpen(false);
        }
      } catch (error) {
        console.error("Error cropping image:", error);
      }
    }
  };

  return (
    <Grid sx={{ backgroundColor: '#1D242C', height: '100vh', width: '20vw', display: 'flex', flexDirection: 'column', rowGap: "30px", justifyContent: 'center', alignItems: 'center' }}>
      <Box sx={{
        display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column',rowGap:"10px"
      }}>
        <Box
          sx={{ backgroundColor: 'lightgray', height: '20vh', width: '10vw', borderRadius: 50, display: 'flex', justifyContent: 'center', alignItems: 'center', cursor: 'pointer' }}
          onClick={() => fileInputRef.current?.click()}
        >
          {Image ? ( //REplace croppedImage at Image for crop Image in next line also
            <img src={Image} alt="ProfilePic" height={110} width={110} style={{ borderRadius: "50%" }} />
          ) : (
            <Button component="label" variant="text" sx={{ borderRadius: 50 }}>
              Upload
            </Button>
          )}
          <input ref={fileInputRef} type="file" accept="image/*" hidden onChange={handleImageChange} />
        </Box>
        <Typography sx={{ fontFamily: 'poppins', fontWeight: "600", fontSize: 30, color: '#FEFDFB' }}>
          VAMSHI VADLA
        </Typography>

        <Dialog open={cropDialogOpen} onClose={() => setCropDialogOpen(false)}>
          <Box sx={{ width: 400, height: 400, position: "relative" }}>
            <Cropper
              image={selectedFile ? URL.createObjectURL(selectedFile) : undefined}
              crop={crop}
              zoom={zoom}
              aspect={1}
              onCropChange={setCrop}
              onZoomChange={setZoom}
              onCropComplete={handleCropComplete}
            />
          </Box>
          <Button onClick={handleCropApply}>Crop & Apply</Button>
        </Dialog>
        <Box sx={{ width: '16vw', display: 'flex', justifyContent: "space-between" }}>
          <Box sx={{ backgroundColor: '#1D242C', borderRadius: 50 }}>
            <IconButton component="a" href="https://x.com/vamshichary117" sx={{ color: "white", "&:hover": { color: 'red' } }}>
              <FaXTwitter size={20} />
            </IconButton>
          </Box>
          <Box sx={{ backgroundColor: '#1D242C', borderRadius: 50 }}>
            <IconButton component="a" href="https://www.facebook.com/vamshi.chary.92351" sx={{ color: "white", "&:hover": { color: 'red' } }}>
              <FaFacebookF size={20} />
            </IconButton>
          </Box>
          <Box sx={{ backgroundColor: '#1D242C', borderRadius: 50 }}>
            <IconButton component="a" href="https://www.instagram.com/v.1.m.s.8.9/" sx={{ color: "white", "&:hover": { color: 'red' } }}>
              <FaInstagram size={20} />
            </IconButton>
          </Box>
          <Box sx={{ backgroundColor: '#1D242C', borderRadius: 50 }}>
            <IconButton component="a" href="https://join.skype.com/invite/qfGtIZ170RZL" sx={{ color: "white", "&:hover": { color: 'red' } }}>
              <FaSkype size={20} />
            </IconButton>
          </Box>
          <Box sx={{ backgroundColor: '#1D242C', borderRadius: 50 }}>
            <IconButton component="a" href="https://www.linkedin.com/in/vamshi-vadla/" sx={{ color: "white", "&:hover": { color: 'red' } }} >
              <FaLinkedinIn size={20} />
            </IconButton>
          </Box>
        </Box>
      </Box>
      <Box sx={{ backgroundColor: '', width: "84%", height: '50%', display: 'flex', rowGap: 6, flexDirection: 'column' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', columnGap: "10px" }}>
          <Link to={"/"} style={{ textDecoration: 'none', color: 'inherit' }}>
            <Box sx={{ display: 'flex', alignItems: 'center', columnGap: "10px" }}>
              <FaHouse size={20} style={{color:'gray'}}/>
              <Typography sx={{ fontWeight: "500", fontFamily: 'poppins', color: "gray", fontSize: 18 }}>
                Home
              </Typography>
            </Box>
          </Link>
        </Box>

        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Link to={"/about"} style={{ textDecoration: 'none', color: 'inherit' }}>
            <Box sx={{ display: 'flex', alignItems: 'center', columnGap: "10px" }}>
              <IoPerson  size={20} style={{color:'gray'}}/>
              <Typography sx={{ fontWeight: "500", fontFamily: 'poppins', color: "gray", fontSize: 18 }}>
                About
              </Typography>
            </Box>
          </Link>
        </Box>

        <Box sx={{ display: 'flex', alignItems: 'center', columnGap: "3px" }}>
          <Link to={"/about"} style={{ textDecoration: 'none', color: 'inherit' }}>
            <Box sx={{ display: 'flex', alignItems: 'center', columnGap: "10px" }}>
              <FaFileArrowDown  size={20} style={{color:'gray'}} />
              <Typography sx={{ fontWeight: "500", fontFamily: 'poppins', color: "gray", fontSize: 18 }}>
                Resume
              </Typography>
            </Box>
          </Link>
        </Box>

        <Box sx={{ display: 'flex', alignItems: 'center', columnGap: "3px" }}>
          <Link to={"/contact"} style={{ textDecoration: 'none', color: 'inherit' }}>
            <Box sx={{ display: 'flex', alignItems: 'center', columnGap: "10px" }}>
              <AiFillMessage   size={20} style={{color:"gray"}}/>
              <Typography sx={{ fontWeight: "500", fontFamily: 'poppins', color: "gray", fontSize: 18 }}>
                Contact
              </Typography>
            </Box>
          </Link>
        </Box>

        <Box sx={{ display: 'flex', alignItems: 'center', columnGap: "3px" }}>
          <Link to={"/about"} style={{ textDecoration: 'none', color: 'inherit' }}>
            <Box sx={{ display: 'flex', alignItems: 'center', columnGap: "10px" }}>
              <IoBriefcase  size={20} style={{color:'gray'}}/>
              <Typography sx={{ fontWeight: "500", fontFamily: 'poppins', color: "gray", fontSize: 18 }}>
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
