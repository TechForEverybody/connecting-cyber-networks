'use client'
import { SettingContext } from '@/contexts/SettingContext'
import { Button, Container, Typography } from '@mui/material'
import Grid from '@mui/material/Grid2'
import Link from 'next/link'
import React, { useContext } from 'react'
import PlacementPartners from './PlacementPartners'
import NetworkIllustration from '@/components/animations/Network'

function HomeHero() {
    const { settings } = useContext(SettingContext)
    return <Typography component={'div'} >
        
        <Container maxWidth="xl" style={{
            width: '100%',
            height: settings.screen !== "mobile" ? '90dvh' : "auto",
            overflow: 'hidden',
        }}>


            <Grid container style={{
                minHeight: settings.screen !== "mobile" ? '90dvh' : "auto",
            }}>
                <Grid size={{
                    xs: 12,
                    md: 6,
                }} sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'start',
                    
                }}>

                    <Typography variant="h2" sx={{
                        fontWeight: 700,
                        fontSize: 'clamp(2rem, 8vw, 4rem)',
                    }}>
                        Want to become an Expert?
                    </Typography>
                    <Typography component="p" style={{
                        width: 'min(100%, 800px)',
                    }}>
                        Security is a never-ending process of learning and growing. We will help you to become an expert in Cyber Security, Networking, Ethical Hacking And Data Science.
                    </Typography>
                    <Link href="/course-demo-registration/cyber-security-associate">
                        <Button variant='contained' color='secondary' style={{
                            padding: '0.6rem 4rem',
                            fontSize: '1.5rem',
                            margin: '2rem 0',
                        }}>Book a Demo</Button>
                    </Link>
                    {
                        settings.screen !== 'mobile' &&
                        <div style={{
                            position: 'absolute',
                            bottom: '0',
                            left: '0',
                            width: 'min(90%,50%)',
                            height: '200px',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            transform: "translate(85%,-40%)",
                            zIndex: -1,
                        }}>

                            <NetworkIllustration />
                        </div>
                    }
                </Grid>
                <Grid size={{
                    xs: 12,
                    md: 6,
                }} sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    overflow: "visible",
                    zIndex: -1,
                }}>

                </Grid>

            </Grid>

        </Container>

        <PlacementPartners />
    </Typography>
}

export default HomeHero
