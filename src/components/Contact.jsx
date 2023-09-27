import React, {useState} from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import {CardContent, Grid, Card} from '@mui/material';

const Contact = () => {
    const [formData, setFormData] = useState({name: '', email: '', mobile: '', query: ''});

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here, you can handle form submission, e.g., sending data to the server.
        console.log('Form data submitted:', formData);
    };

    return (
        <Grid container
            justifyContent={'center'}
            alignItems={'center'}>
            <Grid item>
                <div>
                    <Typography variant='h6'
                        component={'p'}
                        style={
                            {
                                textAlign: 'center',
                             
                            }
                    }>Feel Free To Contact Us</Typography>
                    <Typography variant='h3'
                        component={'p'}
                        style={
                            {
                                textAlign: 'center',
                                color: '#0C2B4B',
                                marginBottom: '2%'
                            }
                    }>If You Have Any Query And For Course Enrollment, Please Contact Us</Typography>
                    <Typography>
                        
                    </Typography>
                    <form onSubmit={handleSubmit}>
                      <Grid container justifyContent={'center'}>
                      <Card sx={{width: '30vw',justifyContent:'center'}}>
                            <CardContent>
                                <TextField style={{marginBottom: '1%', marginTop: '1%'}}
                                    fullWidth
                                    label="Name"
                                    name="name"
                                    value={
                                        formData.name
                                    }
                                    onChange={handleChange}
                                    required/>

                                <TextField style={
                                        {marginBottom: '1%'}
                                    }

                                    fullWidth
                                    label="Email"
                                    name="email"
                                    type="email"
                                    value={
                                        formData.email
                                    }
                                    onChange={handleChange}
                                    required/>


                                <TextField style={
                                        {marginBottom: '1%'}
                                    }

                                    fullWidth
                                    label="Mobile"
                                    name="mobile"
                                    type="tel"
                                    value={
                                        formData.mobile
                                    }
                                    onChange={handleChange}
                                    required/>


                                <TextField style={
                                        {
                                            marginBottom: '1%',
                                            height: '10vh'
                                        }
                                    }

                                    fullWidth
                                    label="Query"
                                    name="query"
                                    value={
                                        formData.query
                                    }
                                    onChange={handleChange}
                                    required/>

                                <Box mt={2}>
                                    <Button type="submit" variant="contained" color="primary" style={{background:'black'}}>
                                        Submit
                                    </Button>
                                </Box>
                            </CardContent>
                        </Card>
                        </Grid>

                   

                    </form>
                </div>
            </Grid>
        </Grid>

    );
};

export default Contact;