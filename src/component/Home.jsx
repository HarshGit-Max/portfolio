import React from "react";
import image from "../images/HomeBg.jpg";
import image1 from "../images/image1.jpeg";
import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid2";

function Home() {
  return (
    <div data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500">
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
      >
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Typography
              sx={{
                justifyContent: { xs: "center", lg: "flex-start" },
                marginTop: { lg: "250px" },
                marginLeft: { xs: "28px", lg: "50px" },
                fontFamily: "Rowdies, sans-serif",
                fontSize: { xs: "32px", lg: "56px" },
                color: "white",
                marginBottom: { xs: "10px", sm: "15px" },
              }}
            >
              Harsh Chourasiya
            </Typography>
            <Typography
              sx={{
                marginLeft: "100px",
                justifyContent: { xs: "center", md: "flex-start" },
                fontFamily: "Kaushan Script, cursive",
                fontSize: { xs: "18px", lg: "32px" },
                color: "white",
              }}
            >
              ReactJs Developer
            </Typography>
          </Grid>

          <Grid item xs={12} md={6}>
            <Box
              component="img"
              sx={{
                // opacity:0.3,
                height: { xs: 400, lg: 690 },
                width: { xs: 330, lg: 600 },
                marginBottom: { xs: -10, lg: -2 },
                borderTopLeftRadius: { lg: "350px" },
                borderBottomLeftRadius: { lg: "350px" },
              }}
              src={image1}
            />
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default Home;
