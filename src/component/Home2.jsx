import React from "react";
import image from "../images/HomeBg.jpg";
import image1 from "../images/image1.jpeg";
import { Box, Grid2, Typography } from "@mui/material";


function Home() {
  return (
    <Box height="100vh" display="flex" flexDirection="column">
      <Box style={{ color: "white", background: "blue" }}>Filter</Box>
      <Box
        sx={{
          backgroundImage: `url(${image})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          height: "700px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: { xs: "center", sm: "flex-start" },
          paddingLeft: { sm: "20px", md: "40px" },
          textAlign: { xs: "center", sm: "left" },
          position: "relative",
        }}
      >
       
        <Typography
          sx={{
            fontFamily: "Rowdies, sans-serif",
            fontSize: { xs: "32px", sm: "40px", md: "48px", lg: "56px" },
            color: "white",
            marginBottom: { xs: "10px", sm: "15px" },
          }}
        >
          Harsh Chourasiya
        </Typography>

        <Typography
          sx={{
            fontFamily: "Caveat, cursive",
            fontSize: { xs: "18px", sm: "24px", md: "28px", lg: "32px" },
            color: "white",
          }}
        >
          ReactJs Developer
        </Typography>
       
          <Box 
            component="img"
            sx={{
              justifyContent:{lg:'flex-end'},
              alignItems:{lg:'flex-end'},
              maxHeight: { xs: 233, lg: 567 },
              maxWidth: { xs: 350, lg: 350 },
                             
            }}
            alt="The house from the offer."
            src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&w=350&dpr=2"
          />
       </Box>
    </Box>
  );
}

export default Home;
