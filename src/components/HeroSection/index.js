import React, { useState } from 'react'
import Video from "../../videos/video.mp4"
import { HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroP, HeroBtnWrapper, ArrowForward, ArrowRight } from "./HeroElements"
import { Button } from "../ButtonElement"

const HeroSection = () => {
    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }

    return (
        <HeroContainer id="home">
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
            </HeroBg>
            <HeroContent>
                <HeroH1>Start workout today</HeroH1>
                <HeroP>
                    You take the STEP, we are here to GUIDE you!!!
                </HeroP>
                <HeroBtnWrapper>
                    <Button onMouseEnter={onHover} onMouseLeave={onHover} primary dark>
                        Get started {hover ? <ArrowForward /> : <ArrowRight />}
                    </Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection
