'use client'
import React, { useState, ChangeEvent } from 'react';
import { Container, Grid, TextField, Button } from '@mui/material';



interface FormData {
    name: string;
    email: string;
    phone: string;
    query: string;
}


function ContactHero() {

    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        phone: '',
        query: '',
    });

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };



    return (
        <div>
            <div className="containerHeadings" style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                margin: '5rem'
            }}>
                <h1 style={{
                    fontSize: '3rem',
                    fontWeight: 'bold',
                    textAlign: 'center',
                    marginBottom: '-2rem'
                }}>Get in touch
                </h1>

            </div>
            <Container style={{ marginTop: '32px' }}>
                <Grid container spacing={1} sx={{
                    boxShadow: 5,
                    border: '1px solid #2962FF',
                    borderRadius: '10px',
                }}>
                    <Grid item xs={12} md={6}>

                        <div style={{
                            width: '100%',
                            height: '100%',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            flexDirection: 'column',
                        }}>
                            <img src="/images/illustrations/contact-us.png" style={{
                                maxWidth: '70%',
                            }} alt="" />
                            
                        </div>
                    </Grid>
                    <Grid item xs={12} md={6} sx={{
                        padding: '2rem',
                    }}>
                        <Grid container spacing={3} sx={{
                            width: '100%',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            // alignItems: 'center',
                            marginTop: '1rem',
                        }}>
                            <Grid item xs={12}>
                                <TextField
                                    label="Name"
                                    variant="outlined"
                                    fullWidth
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    label="Email Address"
                                    variant="outlined"
                                    fullWidth
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    label="Phone Number"
                                    variant="outlined"
                                    fullWidth
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    label="Query"
                                    variant="outlined"
                                    multiline
                                    rows={4}
                                    fullWidth
                                    name="query"
                                    value={formData.query}
                                    onChange={handleChange}
                                />
                            </Grid>
                            <Grid item xs={12} style={{ display: 'flex', justifyContent: 'end' }}>
                                <Button
                                    type="submit"
                                    variant="contained"
                                    color="secondary"
                                    style={{ marginTop: '16px', padding: '8px 104px' }}
                                >
                                    Submit
                                </Button>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
 
        </div>
    );
}

export default ContactHero