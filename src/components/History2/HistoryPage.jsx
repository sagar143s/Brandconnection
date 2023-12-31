import React from "react";
import { Box, Container } from "@mui/material";
import Image1 from "../../assets/TimeLineImage1.jpg";
import Image2 from "../../assets/Timelin2.jpg";
import Image3 from "../../assets/timeline3.jpg";
import VideoImg from "../../assets/videoImg.jpeg";
import Typography from "@mui/material/Typography";
import Historybg from "./historybg";

const HistoryContent = () => {
  const boxArray = Array(123)
    .fill()
    .map((_, index) => (
      <Box
        key={index}
        sx={{
          width: "5px",
          height: "5px",
          borderRadius: "50%",
          background: "#707070",
          marginTop: "5px",
        }}
      ></Box>
    ));
  return (
    <div style={{padding:"25px 0"}}>
      {/* <Historybg /> */}
      <Box>
        {/* <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            marginTop: "5rem",
          }}
        >
          <Typography
            fontFamily="Rounded Elegance"
            fontSize="15px"
            fontWeight="500"
            align="center"
            letterSpacing={5}
            sx={{ wordSpacing: "5px" }}
          >
            HOW DO WE WORK
          </Typography>
        </Box> */}
        {/* <Box>
          <Container>
            <Box
              sx={{
                background: "#707070",
                borderRadius: "20px",
                margin: "1rem",
                height: "600px",
              }}
            >

              <img
                className="historyimg"
                src={VideoImg}
                alt="Img"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  borderRadius: "20px",
                }}
              />
            </Box>
          </Container>
        </Box> */}

        <Box sx={{ marginTop: "1rem" }}>
          <Container>
           
          </Container>
        </Box>
        <Box>
          <Container>
            <Box sx={{ display: "flex" }}>
              <Box sx={{ flex: 2 }}>
                <Box sx={{ height: "250px" }}>
                  <Typography
                    fontFamily="Rounded Elegance"
                    fontSize="35px"
                    fontWeight="300"
                    align="right"
                    paddingTop="2rem"
                    sx={{ wordSpacing: "5px" }}
                  >
                    2018
                  </Typography>
                  <Typography
                    fontFamily="Rounded Elegance"
                    fontSize="11px"
                    fontWeight="300"
                    align="right"
                    sx={{ wordSpacing: "2px" }}
                    className="texthistory"
                  >
                    Founded by two partners with strong background in Active
                    Sports and fashion. over 25 years of Market experience,
                    Freezone Set up Launched Fila watch{" "}
                  </Typography>
                </Box>
                <Box
                  sx={{
                    height: "150px",
                    borderRadius: "20px",
                    overflow: "hidden",
                    paddingTop: "0rem",
                  }}
                >
             
                </Box>
                <Box sx={{ height: "240px" }}>
                  <Typography
                    fontFamily="Rounded Elegance"
                    fontSize="35px"
                    fontWeight="300"
                    align="right"
                    paddingTop="2rem"
                    sx={{ wordSpacing: "5px" }}
                  >
                    2020
                  </Typography>
                  <Typography
                    fontFamily="Rounded Elegance"
                    fontSize="18px"
                    fontWeight="300"
                    align="right"
                    sx={{ wordSpacing: "2px" }}
                    className="texthistory"
                  >
                    Founded by two partners with strong background in Active
                    Sports and fashion. over 25 years of Market experience,
                    Freezone Set up Launched Fila watch{" "}
                  </Typography>
                </Box>
                <Box
                  sx={{
                    height: "150px",
                    borderRadius: "20px",
                    overflow: "hidden",
                    paddingTop: "1rem",
                  }}
                >
                 
                </Box>
                <Box sx={{ height: "240px" }}>
                  <Typography
                    fontFamily="Rounded Elegance"
                    fontSize="35px"
                    fontWeight="300"
                    align="right"
                    paddingTop="0rem"
                    sx={{ wordSpacing: "5px" }}
                  >
                    2022
                  </Typography>
                  <Typography
                    fontFamily="Rounded Elegance"
                    fontSize="18px"
                    fontWeight="300"
                    align="right"
                    sx={{ wordSpacing: "2px" }}
                    className="texthistory"
                  >
                    Founded by two partners with strong background in Active
                    Sports and fashion. over 25 years of Market experience,
                    Freezone Set up Launched Fila watch{" "}
                  </Typography>
                </Box>
                <Box
                  sx={{
                    height: "196px",
                    borderRadius: "20px",
                    overflow: "hidden",
                    paddingTop: "1rem",
                  }}
                >
               
                </Box>
              </Box>
              <Box sx={{ flex: 1 }}>
                <Box sx={{ position: "relative" }}>
                  {/* Column dots */}
                  <Box sx={{ position: "absolute", left: "50%" }}>
                    {boxArray}
                  </Box>
                        {/* Right Dots */}
                        <Box sx={{ position: "absolute", top: "0px", left: "43%" }}>
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                      <Box
                        sx={{
                          width: "15px",
                          height: "15px",
                          borderRadius: "15%",
                          background:
                            "linear-gradient(to right, #ec6ead, #3494e6)",
                          marginTop: "5px",
                        }}
                      ></Box>
                      
                      
                      
                    </Box>
                  </Box>
                  {/* Column Dots */}
                  {/* Right Dots */}
                  <Box sx={{ position: "absolute", top: "320px", left: "45%" }}>
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                      <Box
                        sx={{
                          width: "15px",
                          height: "15px",
                          borderRadius: "50%",
                          background:
                            "linear-gradient(to right, #ec6ead, #3494e6)",
                          marginTop: "5px",
                        }}
                      ></Box>
                      <Box
                        sx={{
                          width: "5px",
                          height: "5px",
                          borderRadius: "50%",
                          background: "#707070",
                          marginTop: "5px",
                          marginLeft: "5px",
                        }}
                      ></Box>
                      <Box
                        sx={{
                          width: "5px",
                          height: "5px",
                          borderRadius: "50%",
                          background: "#707070",
                          marginTop: "5px",
                          marginLeft: "5px",
                        }}
                      ></Box>
                     
                     
                     
                     
                    </Box>
                  </Box>
                  {/* Column Dots */}

                  {/* Left Dots */}
                  <Box
                    sx={{ position: "absolute", top: "150px", right: "38%" }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "row-reverse",
                        alignItems: "center",
                      }}
                    >
                      <Box
                        sx={{
                          width: "15px",
                          height: "15px",
                          borderRadius: "50%",
                          background:
                            "linear-gradient(to right, #ec6ead, #3494e6)",
                          marginTop: "5px",
                          marginLeft: "5px",
                        }}
                      ></Box>
                      <Box
                        sx={{
                          width: "5px",
                          height: "5px",
                          borderRadius: "50%",
                          background: "#707070",
                          marginTop: "5px",
                          marginLeft: "5px",
                        }}
                      ></Box>
                      <Box
                        sx={{
                          width: "5px",
                          height: "5px",
                          borderRadius: "50%",
                          background: "#707070",
                          marginTop: "5px",
                          marginLeft: "5px",
                        }}
                      ></Box>
                     
                     
                    </Box>
                  </Box>
                  {/* Column Dots */}

                  {/* Right Dots */}
                  <Box sx={{ position: "absolute", top: "690px", left: "45%" }}>
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                      <Box
                        sx={{
                          width: "15px",
                          height: "15px",
                          borderRadius: "50%",
                          background:
                            "linear-gradient(to right, #ec6ead, #3494e6)",
                          marginTop: "5px",
                        }}
                      ></Box>
                      <Box
                        sx={{
                          width: "5px",
                          height: "5px",
                          borderRadius: "50%",
                          background: "#707070",
                          marginTop: "5px",
                          marginLeft: "5px",
                        }}
                      ></Box>
                      <Box
                        sx={{
                          width: "5px",
                          height: "5px",
                          borderRadius: "50%",
                          background: "#707070",
                          marginTop: "5px",
                          marginLeft: "5px",
                        }}
                      ></Box>
                      
                      
                    </Box>
                  </Box>
                  {/* Column Dots */}

                  {/* Left Dots */}
                  <Box
                    sx={{ position: "absolute", top: "530px", right: "38%" }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "row-reverse",
                        alignItems: "center",
                      }}
                    >
                      <Box
                        sx={{
                          width: "15px",
                          height: "15px",
                          borderRadius: "50%",
                          background:
                            "linear-gradient(to right, #ec6ead, #3494e6)",
                          marginTop: "5px",
                          marginLeft: "5px",
                        }}
                      ></Box>
                      <Box
                        sx={{
                          width: "5px",
                          height: "5px",
                          borderRadius: "50%",
                          background: "#707070",
                          marginTop: "5px",
                          marginLeft: "5px",
                        }}
                      ></Box>
                      <Box
                        sx={{
                          width: "5px",
                          height: "5px",
                          borderRadius: "50%",
                          background: "#707070",
                          marginTop: "5px",
                          marginLeft: "5px",
                        }}
                      ></Box>
                      
                    </Box>
                  </Box>
                  {/* Column Dots */}
                  {/* Right Dots */}
                

                  
                </Box>
                 {/* Right Dots */}
                 <Box sx={{ position: "absolute", top: "1080px", left: "45%" }}>
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                      <Box
                        sx={{
                          width: "15px",
                          height: "15px",
                          borderRadius: "50%",
                          background:
                            "linear-gradient(to right, #ec6ead, #3494e6)",
                          marginTop: "5px",
                        }}
                      ></Box>
                      <Box
                        sx={{
                          width: "5px",
                          height: "5px",
                          borderRadius: "50%",
                          background: "#707070",
                          marginTop: "5px",
                          marginLeft: "5px",
                        }}
                      ></Box>
                      <Box
                        sx={{
                          width: "5px",
                          height: "5px",
                          borderRadius: "50%",
                          background: "#707070",
                          marginTop: "5px",
                          marginLeft: "5px",
                        }}
                      ></Box>
                      
                      
                    </Box>
                  </Box>
                  {/* Column Dots */}
                  {/* Left Dots */}
                  <Box
                    sx={{ position: "absolute", top: "890px", right: "38%" }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "row-reverse",
                        alignItems: "center",
                      }}
                    >
                      <Box
                        sx={{
                          width: "15px",
                          height: "15px",
                          borderRadius: "50%",
                          background:
                            "linear-gradient(to right, #ec6ead, #3494e6)",
                          marginTop: "5px",
                          marginLeft: "5px",
                        }}
                      ></Box>
                      <Box
                        sx={{
                          width: "5px",
                          height: "5px",
                          borderRadius: "50%",
                          background: "#707070",
                          marginTop: "5px",
                          marginLeft: "5px",
                        }}
                      ></Box>
                      <Box
                        sx={{
                          width: "5px",
                          height: "5px",
                          borderRadius: "50%",
                          background: "#707070",
                          marginTop: "5px",
                          marginLeft: "5px",
                        }}
                      ></Box>
                      
                    </Box>
                  </Box>
                  {/* Column Dots */}
                 {/* Right Dots */}
                 <Box sx={{ position: "absolute", top: "1210px", left: "43%" }}>
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                      <Box
                        sx={{
                          width: "15px",
                          height: "15px",
                          borderRadius: "15%",
                          background:
                            "linear-gradient(to right, #ec6ead, #3494e6)",
                          marginTop: "5px",
                        }}
                      ></Box>
                      
                      
                      
                    </Box>
                  </Box>
                  {/* Column Dots */}

              </Box>
              <Box sx={{ flex: 2 }}>
                <Box
                  sx={{
                    height: "150px",
                    borderRadius: "20px",
                    overflow: "hidden",
                    marginTop:"5rem" 
                  }}
                >
                
                </Box>
                <Box sx={{ height: "220px" }}>
                  <Typography
                    fontFamily="Rounded Elegance"
                    fontSize="35px"
                    fontWeight="300"
                    align="left"
                    marginTop="0rem"
                    sx={{ wordSpacing: "5px" }}
                  >
                    2019
                  </Typography>
                  <Typography
                    fontFamily="Rounded Elegance"
                    fontSize="18px"
                    fontWeight="300"
                    align="left"
                    sx={{ wordSpacing: "2px" }}
                    className="texthistory"
                  >
                    Founded by two partners with strong background in Active
                    Sports and fashion. over 25 years of Market experience,
                    Freezone Set up Launched Fila watch{" "}
                  </Typography>
                </Box>
                <Box
                  sx={{
                    height: "150px",
                    borderRadius: "20px",
                    overflow: "hidden",
                    marginTop: "0rem",
                  }}
                >
              
                </Box>
                <Box sx={{ height: "230px" }}>
                  <Typography
                    fontFamily="Rounded Elegance"
                    fontSize="35px"
                    fontWeight="300"
                    align="left"
                    marginTop="0rem"
                    sx={{ wordSpacing: "5px" }}
                  >
                    2021
                  </Typography>
                  <Typography
                    fontFamily="Rounded Elegance"
                    fontSize="18px"
                    fontWeight="300"
                    align="left"
                    sx={{ wordSpacing: "2px" }}
                    className="texthistory"
                  >
                    Founded by two partners with strong background in Active
                    Sports and fashion. over 25 years of Market experience,
                    Freezone Set up Launched Fila watch{" "}
                  </Typography>
                </Box>
                <Box
                  sx={{
                    height: "150px",
                    borderRadius: "20px",
                    overflow: "hidden",
                  }}
                >
            
                </Box>
                <Box sx={{ height: "150px" }}>
                  <Typography
                    fontFamily="Rounded Elegance"
                    fontSize="35px"
                    fontWeight="300"
                    align="left"
                    marginTop="0rem"
                    sx={{ wordSpacing: "5px" }}
                  >
                    2023
                  </Typography>
                  <Typography
                    fontFamily="Rounded Elegance"
                    fontSize="18px"
                    fontWeight="300"
                    align="left"
                    sx={{ wordSpacing: "2px" }}
                    className="texthistory"
                  >
                    Founded by two partners with strong background in Active
                    Sports and fashion. over 25 years of Market experience,
                    Freezone Set up Launched Fila watch{" "}
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Container>
        </Box>
      </Box>
    </div>
  );
};

export default HistoryContent;
