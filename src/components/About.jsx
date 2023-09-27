import React from "react";
import img5 from "../assests/images/about_us1.jpg";
import { Grid, Typography ,Box,Button} from "@mui/material";
import CheckIcon from '@mui/icons-material/Check';
import { ActionAreaCard } from "./Profile_card";
import { useNavigate } from "react-router-dom";


const About = () => {
  const Navigate = useNavigate();
  return (
    <div className="about">
      <Grid container justifyContent={"center"} spacing={2} alignItems={"flex-start"}>
        <Grid item xs={12} sm={12} md={6} lg={6}>
          <img src={img5} alt="teaching" className="teaching_img"></img>
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6}>
          <Typography variant='h4' component={'p'} >ABOUT US</Typography>
          {/* <Typography variant='h4' component={'p'} >We help students get placed</Typography> */}
          <Typography variant='p' component={'p'}> We are the world’s ace software course training organization with an aim to bridge the gap between the demands of the industry and the curriculum of educational institutions.

With centers across the Globe, the institute is a platform where young minds are given the opportunity to build successful careers.</Typography>
          
          <Grid container alignItems={"center"} justifyContent={"space-between"} mt={2} marginRight={5}>
            <Grid item xs={6}>
          <CheckIcon /><b>Best Trainers</b>
            </Grid>
            <Grid item xs={6}>
          <CheckIcon /><b>Afordable Fee</b>
            </Grid>
            <Grid item xs={6}>
          <CheckIcon /><b>Online Tracking</b>
            </Grid>
            <Grid item xs={6}>
          <CheckIcon /><b>Guaranted Placements</b>
            </Grid>
          
            <Grid item container justifyContent={'center'} mt={2}> 
            <Button
              variant="contained"
              size="large"
              style={{background:'black'}}
              onClick={() => {
                Navigate("/Contact");
              }}
            >
              Contact US
            </Button></Grid>
            
          
   
          </Grid>
        </Grid>
      </Grid>
      

      <ActionAreaCard style={{marginTop:'3%'}}/>

   
      
    </div>
  );
};

export default About;
