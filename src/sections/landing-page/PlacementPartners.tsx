'use client'
import { Tooltip } from '@mui/material'
import React from 'react'



const partners = [
    {
        name: 'RT Network Solutions',
        logo: 'https://ccnstorage.s3.amazonaws.com/rtnetworks_2d35ef1f0c.png',
    },
    {
        name: 'IBM',
        logo: 'https://ccnstorage.s3.amazonaws.com/IBM_21cfa27577.png',
    },
    {
        name: "Secure Link",
        logo: "https://ccnstorage.s3.amazonaws.com/securelink_f3ccb4861a.png"
    },
    {
        name: "Velocis",
        logo: "https://ccnstorage.s3.amazonaws.com/velocis_de4493db89.png"
    },
    {
        name: "Inventa",
        logo: "https://ccnstorage.s3.amazonaws.com/inventa_2f6701566d.png"
    },
    {
        name: "Black Box Network Services",
        logo: "https://ccnstorage.s3.amazonaws.com/Black_Box_Network_Services_f7caa48dc9.png"
    },
    {
        name: "Airtel",
        logo: "https://logohistory.net/wp-content/uploads/2023/07/Airtel-Logo.png"
    },
    {
        name: "Cisco",
        logo: "https://ccnstorage.s3.amazonaws.com/cisco_png_logo_3774_5bda491450.png"
    },
    {
        name: "Coworks",
        logo: "https://ccnstorage.s3.amazonaws.com/Cowrks_d71003a6c5.png"
    }

]


function PlacementPartners() {
    const [isHovered, setIsHovered] = React.useState(false)
    return (
        <div onMouseEnter={() => {
            setIsHovered(true)
        }} onMouseLeave={() => {
            setIsHovered(false)
        }} style={{
            display: 'flex',
            // gridTemplateColumns: 'repeat(auto-fit, minmax(50px, 1fr))',
            gap: '1rem',
            justifyContent: 'space-around',
            alignItems: 'center',
            // padding: '2rem',
            height: '10dvh',
            zIndex: 100,
            position: 'relative',
        }}>
            {
                partners.map((partner, index) => (
                    <div key={index} className="flex items-center justify-center z-[200]">
                        <Tooltip title={partner.name} arrow>

                            <img src={partner.logo} alt={partner.name} style={{
                                width: "60px",
                            }} />
                        </Tooltip>
                    </div>
                ))
            }
            {
                isHovered &&
                <h6 style={{
                    position: 'absolute',
                    textAlign: 'center',
                    width: '100%',
                    fontWeight: 700,
                    height: '100%',
                    display: 'flex',
                    justifyContent: 'center',
                    // alignItems: 'center',
                    zIndex: -1,
                    color: "#64748b"
                }}>
                    Our Top Placement Partner
                </h6>
            }

        </div>
    )
}

export default PlacementPartners