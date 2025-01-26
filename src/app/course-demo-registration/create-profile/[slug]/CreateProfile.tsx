"use client";
import { SettingContext } from '@/contexts/SettingContext'
import { uploadFileOnS3 } from '@/services/S3Storage/Upload';
import { CourseDataType } from '@/types/data-responses'
import { Button, Card, Container, Grid, TextField, Typography } from '@mui/material'
import React, { useContext, useState } from 'react'
import { FileUploader } from 'react-drag-drop-files'
import { toast } from 'react-toastify';




const fileTypes = ["JPG", "PNG", "GIF", "JPEG", "SVG", "HEIC"];

type Props = {
    courseData: CourseDataType
}

function CreateProfile({
    courseData
}: Props) {
    const { settings } = useContext(SettingContext)
    const [image, setImage] = React.useState<string | null>(null)
    const [isImageWindowOpen, setIsImageWindowOpen] = React.useState(true)
    const [formData, setFormData] = useState<{
        name: string;
        email: string;
        phone: string;
        address_line: string;
        country: string;
        state: string;
        city: string;
        pin_code: string;
    }>({
        name: '',
        email: '',
        phone: '',
        address_line: '',
        country: '',
        state: '',
        city: '',
        pin_code: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log(formData);
    };
    const handleFIleChange = async (file: File) => {
        const extension = file.name.split(".").pop();
        const newName = `${Date.now()}`;
        console.log(file, extension, newName);
        if (!!file) {
            console.log(file);

            try {
                const response = await uploadFileOnS3(file, newName) as {
                    location: string,
                    bucket: string,
                    key: string
                };
                console.log(response);
                if (!!response.location) {
                    setImage(response.location)
                    setIsImageWindowOpen(false)
                    toast.info("Image uploaded successfully")
                }
            } catch (error) {
                console.log(error);
            }
        }
    };
    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: '70vh',
            marginTop: "90px"
        }}>
            <Container>

                <Card style={{
                    padding: '20px',
                    borderRadius: '20px',
                    boxShadow: '0 0 10px 0 rgba(0,0,0,0.2)',
                    display: "grid",
                    gridTemplateColumns: settings.screen === "desktop" ? "2fr 3fr" : "1fr",
                }}>
                    <div style={{

                    }}>

                        <div style={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            flexDirection: 'column',
                        }}>
                            <img src={courseData.thumbnail} style={{
                                width: 'min(100%, 400px)',
                                height: 'auto',
                                borderRadius: '20px'
                            }} alt="" />
                            <div style={{
                                margin: '20px',
                                display: 'flex',
                                justifyContent: 'center',
                                flexDirection: 'column',
                            }}>
                                <Typography variant="h4" style={{
                                    // textAlign: 'center',
                                    marginTop: '20px'
                                }}>{courseData.name}</Typography>

                                <p style={{
                                    margin: '20px 0px',
                                    textAlign: 'justify'
                                }}>{courseData.description}</p>
                                <h3>Duration: {courseData.course_duration} days</h3>
                            </div>
                        </div>
                        {/* <div style={{
                            display: 'flex',
                            justifyContent: 'end',
                            flexWrap: 'wrap'
                        }}>
                            <Button variant="contained" color="secondary" style={{
                                margin: '20px',
                                padding: '10px 50px',
                                borderRadius: '10px'
                            }}>
                                <Link href={`/course-demo-registration/${courseData.course_slug}/create-profile`}>
                                    Register for Demo
                                </Link>
                            </Button>
                            <Button color="secondary" style={{
                                margin: '20px'
                            }}>Start from where you left</Button>
                        </div> */}
                    </div>
                    <div>
                        <div style={{
                            margin: "10px 0",
                            width: "100%",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            flexDirection: "column",
                            minHeight: "300px"
                        }}>
                            <p>
                                Upload Your Photo
                            </p>
                            {
                                isImageWindowOpen ?

                                    <FileUploader multiple={false} handleChange={handleFIleChange} name="file" types={fileTypes} style={{ width: "min(500px,90%)", }} classes="file_uploader" /> : image && <img onClick={() => {
                                        setIsImageWindowOpen(true)
                                    }} src={image} alt="" style={{
                                        maxWidth: "200px",
                                    }} />
                            }
                        </div>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <TextField
                                    label="Name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    fullWidth
                                    required
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    label="Email"
                                    name="email"
                                    type="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    fullWidth
                                    required
                                />
                            </Grid>
                            <div style={{
                                display: 'grid',
                                gridTemplateColumns: '1fr',
                                paddingLeft: '16px',
                                gap: '10px',
                                width: '100%',
                                margin: '10px 0'
                            }}>
                                
                                <Grid item xs={12}>
                                    <TextField
                                        label="Phone (with country code)"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        fullWidth
                                        required
                                    />
                                </Grid>
                            </div>
                            <Grid item xs={12}>
                                <TextField
                                    label="Address Line"
                                    name="address_line"
                                    value={formData.address_line}
                                    onChange={handleChange}
                                    fullWidth
                                    required
                                />
                            </Grid>
                            <div style={{
                                display: 'grid',
                                gridTemplateColumns: '1fr 1fr',
                                paddingLeft: '16px',
                                gap: '10px',
                                width: '100%',
                                margin: '10px 0'
                            }}>

                                <Grid item xs={12}>
                                    <TextField
                                        label="Country"
                                        name="country"
                                        value={formData.country}
                                        onChange={handleChange}
                                        fullWidth
                                        required
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        label="State"
                                        name="state"
                                        value={formData.state}
                                        onChange={handleChange}
                                        fullWidth
                                        required
                                    />
                                </Grid>
                            </div>
                            <div style={{
                                display: 'grid',
                                gridTemplateColumns: '1fr 1fr',
                                paddingLeft: '16px',
                                gap: '10px',
                                width: '100%'
                            }}>

                                <Grid item xs={12}>
                                    <TextField
                                        label="City"
                                        name="city"
                                        value={formData.city}
                                        onChange={handleChange}
                                        fullWidth
                                        required
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        label="Pin Code"
                                        name="pin_code"
                                        value={formData.pin_code}
                                        onChange={handleChange}
                                        fullWidth
                                        required
                                    />
                                </Grid>
                            </div>
                            <Grid item xs={12}>
                                <Button type="submit" variant="contained" color="primary" fullWidth>
                                    Submit
                                </Button>
                            </Grid>
                        </Grid>
                    </div>
                </Card>




            </Container>

        </div>
    )
}

export default CreateProfile