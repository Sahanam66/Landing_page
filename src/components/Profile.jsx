import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {CardActionArea, Grid,TextField,Box,Button} from '@mui/material';
import img12 from '../assests/images/profile.jpg'

const Profile = () => {
  return (
    <div>
       <Grid container justifyContent={'center'}>
                      <Card sx={{width: '30vw',justifyContent:'center'}}>
                            <CardContent>
                            <CardActionArea>
        <CardMedia style={{display:'flex',justifyContent:'center'}}>
        <img src={img12} alt="Image 1" style={{width:"25%",height:"15vh",borderRadius:"80%"}} />
        </CardMedia>
        </CardActionArea>
                                <TextField style={{marginBottom: '2%', marginTop: '2%'}}
                                    fullWidth
                                    label="Name"
                                    name="name"
                                    value={
                                       "sahana"
                                    }
                                    />

                                <TextField style={
                                        {marginBottom: '1%',marginTop: '2%'}
                                    }

                                    fullWidth
                                    label="Email"
                                    name="email"
                                    type="email"
                                    value={
                                        "fghj@gmail.com"
                                    }
                                   />


                                <TextField style={
                                        {marginBottom: '1%',marginTop: '2%'}
                                    }

                                    fullWidth
                                    label="Mobile"
                                    name="mobile"
                                    type="tel"
                                    value={
                                       9902665623
                                    }
                                  />


                                <TextField style={
                                        {
                                            marginBottom: '1%',
                                            height: '10vh',
                                            marginTop: '2%'
                                        }
                                    }

                                    fullWidth
                                    label="Address"
                                    name="address"
                                    value={
                                       "Jayanagar,Bangalore"
                                    }
                                    />

                               
                            </CardContent>
                        </Card>
                        </Grid>
    </div>
  )
}

export default Profile