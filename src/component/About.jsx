import React from "react";
import image from "../images/WhatsApp Image 2024-11-22 at 3.20.57 PM.jpeg";
import { Box, Typography } from "@mui/material";
import Grid2 from "@mui/material/Grid2";

function About() {
  return (
    <div data-aos="fade-up"
    data-aos-duration="3000">
    
      
      <Box sx={{ position: "relative", height: "100vh" }}>
        <Typography
          sx={{
            fontFamily: "Playfair Display, serif",
            fontSize: { xs: "30px", sm: "40px", lg: "52px" },
            color: "Black",
            marginLeft: { lg: -59 },
            marginTop: { xs: "20px", lg: "15" },
            textAlign: "center",
            position: "absolute",
            top: "25%",
            left: "50%",
            transform: "translateX(-50%)",
            width: "100%",
          }}
        >
          SO, Who am I?
        </Typography>

        <Box
          sx={{
            width: "90%",
            maxWidth: { lg: "600px" },
            marginLeft: { lg: "0" },
            position: "absolute",
            top: "40%",
            left: { xs: "50%", lg: "0" },
            transform: { xs: "translateX(-50%)", lg: "none" },
            textAlign: { xs: "center", lg: "left" },
          }}
        >
          <Typography
            sx={{
              fontFamily: "Open Sans, sans-serif",
              fontSize: { xs: "14px", sm: "16px", md: "18px", lg: "22px" },
              color: "Black",
              marginTop: { xs: "20px", sm: "30px" },
              lineHeight: 1.6,
              textAlign: { xs: "center", lg: "left" },
              marginLeft: { lg: 5 },
            }}
          >
            Hello! I'm Harsh Chourasiya, a passionate React Developer focused on
            building seamless and dynamic web applications. With a strong
            foundation in JavaScript and React, I create intuitive and efficient
            solutions tailored to meet client needs. I strive to write clean,
            scalable code and deliver high-quality results that make an impact.
            Let's bring your ideas to life!
          </Typography>
        </Box>
        <Grid2
          sx={{
            marginRight: { lg: 15 },
            opacity: { xs: 0, lg: 1 },
            display: "flex",
            justifyContent: { lg: "flex-end", xs: "center" },
          }}
        >
          <Box
            component="img"
            sx={{
              height: { xs: 600, lg: 690 },
              width: { xs: 330, lg: 600 },
              marginBottom: { xs: -80, lg: 0 },
            }}
            src={image}
          />
        </Grid2>
      </Box>
    </div>
  );
}

export default About;
