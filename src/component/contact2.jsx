import image from "../images/contactbg.jpg";
import { Box, Button } from "@mui/material";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import SendIcon from '@mui/icons-material/Send';

function Projects() {
  return (
    <>
      <Box
        sx={{
          backgroundImage: `url(${image})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          height: "700px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: { xs: "center", sm: "flex-end" },
          paddingLeft: { sm: "20px", md: "40px" },
          position: "relative",
        }}
      ></Box>

<Box>
  <Button
    sx={{
      marginTop: '-1100px',
      padding: '46px 62px',  
      fontSize: '24px',       
      width: '150px',         
      height: '50px',         
    }}
  >
    <AlternateEmailIcon sx={{ fontSize: '100px' , color:'black'}} />  
  </Button>
  <br/><br/><br/><br/><br/>
  <Button
    sx={{
      marginTop: '-1100px',
      padding: '46px 62px',  
      fontSize: '24px',       
      width: '150px',         
      height: '50px',         
    }}
  >
    <InstagramIcon sx={{ fontSize: '100px' , color:'black'}} />  
  </Button>
  <br/><br/><br/><br/><br/>
  <Button
    sx={{
      marginTop: '-1100px',
      padding: '46px 62px',  
      fontSize: '24px',       
      width: '150px',         
      height: '50px',         
    }}
  >
    <LinkedInIcon sx={{ fontSize: '100px' , color:'black'}} />  
  </Button>
  <br/><br/><br/><br/><br/>
  <Button
    sx={{
      marginTop: '-1100px',
      padding: '46px 62px',  
      fontSize: '24px',       
      width: '150px',         
      height: '50px',         
    }}
  >
    <FacebookOutlinedIcon sx={{ fontSize: '100px' , color:'black'}} />  
  </Button>
  <br/><br/><br/><br/><br/>
  <Button
    sx={{
      marginTop: '-1100px',
      padding: '46px 62px',  
      fontSize: '24px',       
      width: '150px',         
      height: '50px',         
    }}
  >
    <SendIcon sx={{ fontSize: '100px' , color:'black'}} />  
  </Button>
</Box>

    </>
  );
}

export default Projects;