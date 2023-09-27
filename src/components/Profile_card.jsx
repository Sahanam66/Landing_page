import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {CardActionArea, Grid} from '@mui/material';

import team3 from '../assests/images/team3.jpg'
import team1 from '../assests/images/team1.jpg'
import team2 from '../assests/images/team2.jpg'



export const ActionAreaCard = () => {

    let arr = [
        {
            name: "Arav",
            imgs: team1,
            designation: "Technical Head"
        }, {
            name: "Atharav",
            imgs: team3,
            designation: "Associate Trainer"
        }, {
            name: "Ahana",
            imgs: team2,
            designation: "Senior Associate Trainer"
        },
       
    ];

    return (
        <div style={{marginTop:'5%'}}>

          <Typography variant='h6' component={'p'} style={{textAlign:'center',marginTop:'1%'}}>MEET THE TEAM</Typography>
          <Typography  variant='h3' component={'p'} style={{textAlign:'center',marginBottom:'2%'}}>We Have Great Experience Of Teaching</Typography>

            <Grid container
                justifyContent={'space-between'}
                alignItems={'center'}>


                {arr.map((data, index) => {
                    return (
                        <Grid item>
                            <Card key={index}
                                sx={
                                    {maxWidth: 345}
                            }>
                                <CardActionArea>
                                    <CardMedia>
                                        <img src={
                                                data.imgs
                                            }
                                            alt=""
                                            style={
                                                {width: '100%'}
                                            }/>
                                    </CardMedia>
                                    <CardContent style={{textAlign:'center'}}>
                                        <Typography gutterBottom variant="h5" component="div">
                                            {
                                            data.name
                                        } </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            {
                                            data.designation
                                        } </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Grid>

                    )
                })
            } </Grid>

        </div>
    );
}
