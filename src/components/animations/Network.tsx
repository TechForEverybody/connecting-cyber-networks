import { DotLottieReact } from '@lottiefiles/dotlottie-react'
import React from 'react'

type Props = {}

function NetworkIllustration({ }: Props) {
    return (
        <div
            style={{
                maxWidth: '280px',
            }}
        >
            <DotLottieReact
                src="/animations/network.lottie"
                loop
                autoplay
            />
        </div>
    )
}

export default NetworkIllustration