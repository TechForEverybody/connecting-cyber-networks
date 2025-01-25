import Laptop3DComponent from '@/components/3d/Laptop'
import { ShaCDNButton } from '@/components/ui/button'
import { SettingContext } from '@/contexts/SettingContext'
import { Button, Container, Grid, Typography } from '@mui/material'
import Link from 'next/link'
import React, { useContext } from 'react'
import PlacementPartners from './PlacementPartners'
import NetworkIllustration from '@/components/animations/Network'

type Props = {}

function HomeHero({ }: Props) {
    const { settings } = useContext(SettingContext)
    return <Typography component={'div'} >
        {
            settings.screen !== 'mobile' ? <div style={{
                position: 'absolute',
                top: '0',
                right: '0',
                width: 'min(90%,700px)',
                height: 'min(90%,700px)',
                transform: "translate(10%,10%)",
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}>

                <Laptop3DComponent />
            </div> :
                <div style={{
                    width: '100%',
                    height: '500px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>

                    <Laptop3DComponent />
                </div>
        }

        <Container maxWidth="xl" style={{
            width: '100%',
            height: '90vh',
            overflow: 'hidden',
        }}>

            <Grid container style={{
                minHeight: settings.screen !== "mobile" ? '90dvh' : "auto",
            }}>
                <Grid item xs={12} md={6} sx={{
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
                        width: 'min(80%, 800px)',
                    }}>
                        Security is a never-ending process of learning and growing. We will help you to become an expert in Cyber Security, Networking, Ethical Hacking And Data Science.
                    </Typography>
                    <Link href="/course-demo-registration/cyber-security-associate">
                        <Button variant='contained' style={{
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
                <Grid item xs={12} md={6} sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    overflow: "visible",
                }}>

                </Grid>

            </Grid>
        </Container>

        <PlacementPartners />
    </Typography>
}

export default HomeHero
