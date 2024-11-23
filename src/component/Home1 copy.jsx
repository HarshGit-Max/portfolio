import React from "react";
import image from "../images/HomeBg.jpg";
import image1 from "../images/image1.jpeg";
import { TextField, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid2";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  ...theme.applyStyles("dark", {
    backgroundColor: "#1A2027",
  }),
}));

function Home() {
  return (
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
      <Grid container spacing={2}>
      <Grid  item xs={12} >
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

        </Grid>
      
        <Grid  item xs={12} md={6}>
        <Box
            component="img"
            sx={{
              // justifyContent:{lg:'flex-end'},
              // alignItems:{lg:'flex-end'},
              maxHeight: { xs: 233, lg: 567 },
              maxWidth: { xs: 330, lg: 660 },

            }}
            alt="The house from the offer."
            src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&w=350&dpr=2"
          />
        </Grid>
        </Grid>
    </Box>
  );
}

export default Home;
