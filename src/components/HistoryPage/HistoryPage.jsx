import React from "react";
import { Box, Container } from "@mui/material";
import Image1 from "../../assets/TimeLineImage1.jpg";
import Image2 from "../../assets/Timelin2.jpg";
import Image3 from "../../assets/timeline3.jpg";
import VideoImg from "../../assets/videoImg.jpeg";
import Typography from "@mui/material/Typography";
import Historybg from "./historybg";

const HistoryContent = () => {
  const boxArray = Array(197)
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
    <>
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

        <Box sx={{ marginTop: "4rem" }}>
          <Container>
            <Typography
              fontFamily="Rounded Elegance"
              fontSize="20px"
              fontWeight="500"
              align="center"
              sx={{ wordSpacing: "5px" }}
            >
              Our Journey
            </Typography>
          </Container>
        </Box>
        <Box>
          <Container>
            <Box sx={{ display: "flex" }}>
              <Box sx={{ flex: 2 }}>
                <Box sx={{ height: "300px" }}>
                  <Typography
                    fontFamily="Rounded Elegance"
                    fontSize="35px"
                    fontWeight="300"
                    align="right"
                    paddingTop="4rem"
                    sx={{ wordSpacing: "5px" }}
                  >
                    2018
                  </Typography>
                  <Typography
                    fontFamily="Rounded Elegance"
                    fontSize="18px"
                    fontWeight="300"
                    align="right"
                    sx={{ wordSpacing: "2px" }}
                  >
                    Founded by two partners with strong background in Active
                    Sports and fashion. over 25 years of Market experience,
                    Freezone Set up Launched Fila watch{" "}
                  </Typography>
                </Box>
                <Box
                  sx={{
                    height: "320px",
                    borderRadius: "20px",
                    overflow: "hidden",
                    paddingTop: "2.5rem",
                  }}
                >
                  <img
                    src={Image2}
                    className="historyimg"
                    alt="Img1"
                    style={{
                      width: "100%",
                      height: "100%",
                      borderRadius: "20px",
                      objectFit: "fill",
                    }}
                  />
                </Box>
                <Box sx={{ height: "300px" }}>
                  <Typography
                    fontFamily="Rounded Elegance"
                    fontSize="35px"
                    fontWeight="300"
                    align="right"
                    paddingTop="9rem"
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
                  >
                    Founded by two partners with strong background in Active
                    Sports and fashion. over 25 years of Market experience,
                    Freezone Set up Launched Fila watch{" "}
                  </Typography>
                </Box>
                <Box
                  sx={{
                    height: "410px",
                    borderRadius: "20px",
                    overflow: "hidden",
                    paddingTop: "8rem",
                  }}
                >
                  <img
                    src={Image2}
                    className="historyimg"
                    alt="Img1"
                    style={{
                      width: "100%",
                      height: "100%",
                      borderRadius: "20px",
                      objectFit: "fill",
                    }}
                  />
                </Box>
                <Box sx={{ height: "200px" }}>
                  <Typography
                    fontFamily="Rounded Elegance"
                    fontSize="35px"
                    fontWeight="300"
                    align="right"
                    paddingTop="7rem"
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
                  >
                    Founded by two partners with strong background in Active
                    Sports and fashion. over 25 years of Market experience,
                    Freezone Set up Launched Fila watch{" "}
                  </Typography>
                </Box>
                <Box
                  sx={{
                    height: "450px",
                    borderRadius: "20px",
                    overflow: "hidden",
                    paddingTop: "10rem",
                  }}
                >
                  <img
                    src={Image3}
                    className="historyimg"
                    alt="Img1"
                    style={{
                      width: "100%",
                      height: "100%",
                      borderRadius: "20px",
                      objectFit: "fill",
                    }}
                  />
                </Box>
              </Box>
              <Box sx={{ flex: 1 }}>
                <Box sx={{ position: "relative" }}>
                  {/* Column dots */}
                  <Box sx={{ position: "absolute", left: "50%" }}>
                    {boxArray}
                  </Box>
                  {/* Right Dots */}
                  <Box sx={{ position: "absolute", top: "150px", left: "48%" }}>
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
                    sx={{ position: "absolute", top: "470px", right: "45%" }}
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
                  <Box sx={{ position: "absolute", top: "850px", left: "48%" }}>
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
                    sx={{ position: "absolute", top: "1170px", right: "45%" }}
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
                  <Box
                    sx={{ position: "absolute", top: "1520px", left: "48%" }}
                  >
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

                  <Box
                    sx={{ position: "absolute", top: "1820px", right: "45%" }}
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
                </Box>
              </Box>
              <Box sx={{ flex: 2 }}>
                <Box
                  sx={{
                    height: "300px",
                    borderRadius: "20px",
                    overflow: "hidden",
                  }}
                >
                  <img
                    src={Image1}
                    className="historyimg"
                    alt="Img1"
                    style={{ width: "100%", height: "100%", objectFit: "fill" }}
                  />
                </Box>
                <Box sx={{ height: "300px" }}>
                  <Typography
                    fontFamily="Rounded Elegance"
                    fontSize="35px"
                    fontWeight="300"
                    align="left"
                    marginTop="5rem"
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
                  >
                    Founded by two partners with strong background in Active
                    Sports and fashion. over 25 years of Market experience,
                    Freezone Set up Launched Fila watch{" "}
                  </Typography>
                </Box>
                <Box
                  sx={{
                    height: "300px",
                    borderRadius: "20px",
                    overflow: "hidden",
                    marginTop: "2rem",
                  }}
                >
                  <img
                    src={Image3}
                    className="historyimg"
                    alt="Img1"
                    style={{ width: "100%", height: "100%", objectFit: "fill" }}
                  />
                </Box>
                <Box sx={{ height: "300px" }}>
                  <Typography
                    fontFamily="Rounded Elegance"
                    fontSize="35px"
                    fontWeight="300"
                    align="left"
                    marginTop="5rem"
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
                  >
                    Founded by two partners with strong background in Active
                    Sports and fashion. over 25 years of Market experience,
                    Freezone Set up Launched Fila watch{" "}
                  </Typography>
                </Box>
                <Box
                  sx={{
                    height: "300px",
                    borderRadius: "20px",
                    overflow: "hidden",
                  }}
                >
                  <img
                    src={Image1}
                    className="historyimg"
                    alt="Img1"
                    style={{ width: "100%", height: "100%", objectFit: "fill" }}
                  />
                </Box>
                <Box sx={{ height: "300px" }}>
                  <Typography
                    fontFamily="Rounded Elegance"
                    fontSize="35px"
                    fontWeight="300"
                    align="left"
                    marginTop="4rem"
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
    </>
  );
};

export default HistoryContent;
