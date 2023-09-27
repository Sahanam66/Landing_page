import React from "react";
import {
  Grid,
  Card,
  CardContent,
  CardActionArea,
  CardMedia,
  Typography,
  Box,
  Button,
} from "@mui/material";
import img1 from "../assests/images/9.jpg";
import img2 from "../assests/images/6.jpg";
import img3 from "../assests/images/8.jpg";
import img4 from "../assests/images/4.jpg";
import img5 from "../assests/images/java.jpg";
import img6 from "../assests/images/python.png";
import img7 from "../assests/images/JS.png";
import img8 from "../assests/images/img7.jpeg";
import img9 from "../assests/images/TESTIMONIAL1.jpg";
import img10 from "../assests/images/TESTIMONIAL2.jpg";
import img11 from "../assests/images/TESTIMONIAL3.jpg";

import { Splide, SplideSlide } from "@splidejs/react-splide";

// Default theme
import "@splidejs/react-splide/css";
// or other themes
import "@splidejs/react-splide/css/skyblue";
import "@splidejs/react-splide/css/sea-green";
// or only core styles
import "@splidejs/react-splide/css/core";
import { Navigate, useNavigate } from "react-router-dom";

const Home = () => {
  const Navigate = useNavigate();
  return (
    <div className="home">
      <div className="splide_cards">
        <Splide
          aria-label="My Favorite Images"
          hasTrack={true}
          options={{
            rewind: true,
            autoplay: true,
            pauseOnHover: false,
          }}
        >
          <SplideSlide>
            <img
              src={img1}
              alt="Image 1"
              style={{ width: "100%", height: "80vh" }}
            />
          </SplideSlide>
          <SplideSlide>
            <img
              src={img2}
              alt="Image 2"
              style={{ width: "100%", height: "80vh" }}
            />
          </SplideSlide>
          <SplideSlide>
            <img
              src={img3}
              alt="Image 3"
              style={{ width: "100%", height: "80vh" }}
            />
          </SplideSlide>
          <SplideSlide>
            <img
              src={img4}
              alt="Image 4"
              style={{ width: "100%", height: "80vh" }}
            />
          </SplideSlide>
        </Splide>
      </div>
      <div className="card">
        <Grid container className="cards" justifyContent={"center"}>
          <Grid item>
            <Card className="card1" sx={{ minWidth: 275 }} >
              <CardContent style={{ textAlign: "center", fontSize: "12px" }}>
                <h4>
                  <b>Mission and Vision</b>
                </h4>
                <p>To continually improve quality education system that,</p>
                <p>
                  produces thinking candidates having good technical
                  capabilities
                </p>
              </CardContent>
            </Card>
          </Grid>
          <Grid item>
            <Card className="card1" sx={{ minWidth: 275 }}>
              <CardContent style={{ textAlign: "center", fontSize: "12px" }}>
                <h4>
                  <b>Faculty & Staff</b>
                </h4>
                <p>The quality of Our educators and staff have greatly influenced the </p>
                <p>
                   education provided.
                  which makes candidate focus on their career.
                </p>
              </CardContent>
            </Card>
          </Grid>
          <Grid item>
            <Card className="card1" sx={{ minWidth: 275 }}>
              <CardContent style={{ textAlign: "center", fontSize: "12px" }}>
                <h4>
                  <b>Assessment and Evaluation</b>
                </h4>
                <p>
                  We include  projects, presentations, and other forms of
                  evaluation,
                </p>
                <p>such as mock-interview.</p>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </div>
      <Grid container justifyContent={"center"} spacing={2} mt={2} >
        <Grid item className='grid2'>
          <Card
            sx={{ maxWidth: 345 }}
            className='cardJPJ'
            style={{ bowShadow:"10px 10px 10px 10 px red", textAlign: "center" }}
          >
            <CardActionArea>
              <CardMedia>
                <img src={img5} alt="java" height={"120px"} />
              </CardMedia>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  JAVA
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Java Full Stack course is more of job-oriented training which
                  is designed as per current industry standards. You can start
                  your career in IT industry with basic and advance skills.
                  Course will be trained by top industry experts who have
                  passion to train students and help them get job in IT industry
                  or excel in IT industry.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item>
          <Card
            sx={{ maxWidth: 345 }}
            style={{  textAlign: "center" }}
          >
            <CardActionArea>
              <CardMedia>
                <img src={img6} alt="python" height={"120px"} />
              </CardMedia>

              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Python
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Python course is more of job-oriented training which is
                  designed as per current industry standards. You can start your
                  career in IT industry with basic and advance skills. Course
                  will be trained by top industry experts who have passion to
                  train students and help them get job in IT industry or excel
                  in IT industry.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>

        <Grid item>
          <Card
            sx={{ maxWidth: 345 }}
            style={{  textAlign: "center" }}
          >
            <CardActionArea>
              <CardMedia>
                <img src={img7} alt="python" height={"120px"} />
              </CardMedia>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  JAVASCRIPT
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  JavaScript course is more of job-oriented training which is
                  designed as per current industry standards. You can start your
                  career in IT industry with basic and advance skills. Course
                  will be trained by top industry experts who have passion to
                  train students and help them get job in IT industry or excel
                  in IT industry.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "2%",
            }}
          >
            <Button
              variant="contained"
              size="large"
              style={{background:'black'}}
              onClick={() => {
                Navigate("/Contact");
              }}
            >
              Enroll for courses by Contacting us
            </Button>
          </div>
      </Grid>
      <Grid
        container
        justifyContent={"center"}
        mt={4}
        style={{ padding: "3%" }}
      >
        <Grid item xs={12} sm={12} md={6} lg={6}>
          <img
            src={img8}
            alt="professionals"
            height={"100%"}
            width={"90%"}
          ></img>
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6} mt={6}>
          <Typography variant="h6" component={"p"}>
            Why choose us!
          </Typography>
          <Typography variant="h4" component={"p"}>
            Best Coaching Agency In Your City
          </Typography>
          <Typography variant="p" component={"p"}>
          We have created a hype across the globe as 
          we claim to deliver the best talents and offer the most professional training/service at our academy. 
          </Typography>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "2%",
            }}
          >
            <Button
              variant="contained"
              size="large"
              style={{background:'black'}}
              onClick={() => {
                Navigate("/Contact");
              }}
            >
              Contact US
            </Button>
          </div>
        </Grid>
      </Grid>
      <div className="splide_cards" style={{ height: "40vh" }}>
        <Grid container justifyContent={"center"} spacing={2} mt={2}>
          <Grid item container justifyContent={"center"} xs={12}>
            <h1 style={{ marginTop: "4" }}>Testimonal</h1>
          </Grid>
          <Splide
            aria-label="My Favorite Images"
            hasTrack={true}
            options={{
              rewind: true,
              autoplay: true,
              pauseOnHover: false,
            }}
          >
            <SplideSlide>
              <Grid container justifyContent={'center'}>
              <Card  sx={{maxWidth:400}}>
                <CardActionArea>
                  <CardMedia style={{display:'flex',justifyContent:'center'}}>
                    <img
                      src={img9}
                      alt="Image 1"
                      style={{
                        width: "15%",
                        height: "10vh",
                        borderRadius: "75%",
                      }}
                    />
                  </CardMedia>

                  <CardContent>
                    
                    <Typography variant="body2" color="text.secondary">
                    I had the privilege of studying here and it was an incredible experience.The faculty is highly knowledgeable and dedicated to nurturing students' intellectual growth.
                    The curriculum is well-structured, providing a perfect blend of theoretical knowledge and practical application. 
                    The institute's emphasis on hands-on projects and real-world experiences truly sets it apart.  
                    </Typography>
                  </CardContent>
                </CardActionArea>
                </Card>
                </Grid>
              
            </SplideSlide>
            <SplideSlide>
            <Grid container justifyContent={'center'}>
              <Card  sx={{maxWidth:400}}>
                <CardActionArea>
                  <CardMedia style={{display:'flex',justifyContent:'center'}}>
                    <img
                      src={img10}
                      alt="Image 2"
                      style={{
                        width: "15%",
                        height: "10vh",
                        borderRadius: "75%",
                      }}
                    />
                  </CardMedia>

                  <CardContent>
                   
                    <Typography variant="body2" color="text.secondary">
                    I'm thoroughly impressed with this institute's commitment to academic excellence. 
                    The faculty members are not only experts in their fields but are also approachable and eager to help students succeed.
                    </Typography>
                  </CardContent>
                </CardActionArea>
                </Card>
                </Grid>
              
            </SplideSlide>
            <SplideSlide>
            <Grid container justifyContent={'center'}>
              <Card  sx={{maxWidth:400}}>
                <CardActionArea>
                  <CardMedia style={{display:'flex',justifyContent:'center'}}>
                    <img
                      src={img11}
                      alt="Image 3"
                      style={{
                        width: "15%",
                        height: "10vh",
                        borderRadius: "75%",
                      }}
                    />
                  </CardMedia>

                  <CardContent>
                    
                    <Typography variant="body2" color="text.secondary">
                    I can't say enough good things about this institute. 
                    The faculty here are not only highly knowledgeable but also deeply passionate about their subjects. 
                    They go the extra mile to ensure every student understands the material. 
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
              </Grid>
            </SplideSlide>
          </Splide>
        </Grid>
      </div>
    </div>
  );
};

export default Home;
