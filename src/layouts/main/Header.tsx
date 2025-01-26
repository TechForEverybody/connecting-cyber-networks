'use client'
import { SettingContext } from '@/contexts/SettingContext'
import {
    AppBar,
    Box,
    Button,
    Container,
    IconButton,
    Typography,
} from '@mui/material'
import { Moon, Sun } from 'lucide-react'
import Image from 'next/image'
import { useContext, useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu'
import SwippleDrawer from '@/components/mui/SwippleDrawer'
import Navbar from './Navbar'
import Link from 'next/link'

function Header() {
    const { settings } = useContext(SettingContext)
    if (settings.screen == 'mobile') return <MobileHeader />
    else return <DesktopHeader />
}

export function DesktopHeader() {
    const { settings, toggleTheme } = useContext(SettingContext)

    return (
        <AppBar enableColorOnDark color="transparent" sx={{
            backdropFilter: 'blur(10px)',
            zIndex:99999999
        }}>
            <Container
                maxWidth="xl"
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: 1,
                }}
            >
                <Box>
                    <Typography variant="h4">
                        <Image
                            src="/logos/logo-white-bg.jpg"
                            alt="logo"
                            width={150}
                            height={50}
                            priority={true}
                            style={{
                                borderRadius: '5px',
                            }}
                        />
                    </Typography>
                </Box>
                <Box sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 2
                }}>
                    <Navbar />

                </Box>
                <Box>
                    <Button variant="contained" color='secondary'>
                        <Link href="/course-demo-registration/cyber-security-associate">
                            Start Learning
                        </Link>
                    </Button>
                    <Button
                        color="secondary"
                        onClick={() => {
                            toggleTheme()
                        }}
                    >
                        {settings.themeMode == 'dark' ? (
                            <Sun color="#e0c200" />
                        ) : (
                            <Moon />
                        )}
                    </Button>
                </Box>
            </Container>
        </AppBar>
    )
}

export function MobileHeader() {
    const { settings, toggleTheme } = useContext(SettingContext)
    const [sideBarOpen, setSideBarOpen] = useState(false)
    return (
        <AppBar color="default">
            <Container
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: 1,
                }}
            >
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                        onClick={() => setSideBarOpen(true)}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h4">
                        <Image
                            src="/logos/logo-white-bg.jpg"
                            alt="logo"
                            width={100}
                            height={30}
                            priority={true}
                        />
                    </Typography>
                </Box>
                <Box>
                    <Button
                        color="secondary"
                        onClick={() => {
                            toggleTheme()
                        }}
                    >
                        {settings.themeMode == 'dark' ? (
                            <Sun color="#e0c200" />
                        ) : (
                            <Moon  />
                        )}
                    </Button>
                </Box>
            </Container>
            <SwippleDrawer
                isOpen={sideBarOpen}
                onClose={() => setSideBarOpen(false)}
                content={
                    <Box
                        sx={{
                            width: 250,
                            height: '100vh',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'start',
                            alignItems: 'center',
                            gap: 2,
                            fontSize: '2rem',
                        }}
                    >

                        <Navbar />

                    </Box>
                }
            />
        </AppBar>
    )
}

export default Header
