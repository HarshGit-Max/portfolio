import image from "../images/contactbg.jpg";
import { Box, Button, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import SendIcon from "@mui/icons-material/Send";
import { useState } from "react";
import { Link } from "@mui/material";
import resume from "../images/HomeBg.jpg";
import { FileSaver } from "file-saver";
import MyPDF from "../images/HARSH_CHOURASIYA_resume.pdf";
import CloudDownloadIcon from "@mui/icons-material/CloudDownload";

// const useStyles = makeStyles({
//   root: {
//     maxWidth: 310,
//     transition: "transform 0.15s ease-in-out",
//   },
//   cardHovered: {
//     transform: "scale3d(1.5, 1.5, 1)",
//   },
// });

function Projects(props) {
  // const classes = useStyles();
  // const [state, setState] = useState({
  //   raised: false,
  //   shadow: 1,
  // });

  function sayHello() {
    var blob = new Blob(["Hello, world!"], {
      type: "text/plain;charset=utf-8",
    });
    FileSaver.saveAs(blob, "hello world.txt");
    // FileSaver.save
  }

  const onClickMailtoHandler = () => {
    const email = "harshchourasiya063@gmailcom";
    const mailtoLink = `mailto:${email}`;

    // Open the mail client with the mailto link
    window.location.href = mailtoLink;
  };

  return (
    <>
      <div data-aos="fade-up-right">
        <Box
          sx={{
            backgroundImage: `url(${image})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            height: "700px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            position: "relative",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              gap: 3,
            }}
          >
            <Button
              onClick={onClickMailtoHandler}
              // className={classes.root}
              // classes={{ root: state.raised ? classes.cardHovered : "" }}
              // onMouseOver={() => setState({ raised: true, shadow: 3 })}
              // onMouseOut={() => setState({ raised: false, shadow: 1 })}
              // raised={state.raised}
              // zdepth={state.shadow}
              sx={{
                padding: "16px",
                fontSize: "24px",
                width: "150px",
                height: "50px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "white",
                boxShadow: 2,
                borderRadius: "8px",
              }}
            >
              <AlternateEmailIcon sx={{ fontSize: "40px", color: "black" }} />
            </Button>

            <a href="https://www.instagram.com/harsh_chourasiya_30/profilecard/?igsh=a3EwMnVncnZuZnh4">
              <Button
                // className={classes.root}
                // classes={{ root: state.raised ? classes.cardHovered : "" }}
                // onMouseOver={() => setState({ raised: true, shadow: 3 })}
                // onMouseOut={() => setState({ raised: false, shadow: 1 })}
                // raised={state.raised}
                // zdepth={state.shadow}
                sx={{
                  padding: "16px",
                  fontSize: "24px",
                  width: "150px",
                  height: "50px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: "white",
                  boxShadow: 2,
                  borderRadius: "8px",
                }}
              >
                <InstagramIcon sx={{ fontSize: "40px", color: "black" }} />
              </Button>
            </a>

            <a href="https://www.linkedin.com/in/harsh-chourasiya-9a775322b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
              <Button
                sx={{
                  padding: "16px",
                  fontSize: "24px",
                  width: "150px",
                  height: "50px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: "white",
                  boxShadow: 2,
                  borderRadius: "8px",
                }}
              >
                <LinkedInIcon sx={{ fontSize: "40px", color: "black" }} />
              </Button>
            </a>

            <a href="https://www.facebook.com/profile.php?id=61561539385003&minbextid=ZbWKwL">
              <Button
                sx={{
                  padding: "16px",
                  fontSize: "24px",
                  width: "150px",
                  height: "50px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: "white",
                  boxShadow: 2,
                  borderRadius: "8px",
                }}
              >
                <FacebookOutlinedIcon
                  sx={{ fontSize: "40px", color: "black" }}
                />
              </Button>
            </a>

            <a href={MyPDF} download="Harsh_Chourasiya_resume.pdf">
              <Button
                sx={{
                  padding: "16px",
                  fontSize: "24px",
                  width: "150px",
                  height: "50px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: "white",
                  boxShadow: 2,
                  borderRadius: "8px",
                }}
                download="resume.jpeg"
              >
                <CloudDownloadIcon sx={{ fontSize: "40px", color: "black" }} />
              </Button>
              Download my resume
            </a>
          </Box>
        </Box>
      </div>
    </>
  );
}

export default Projects;
