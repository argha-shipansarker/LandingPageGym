import React from 'react'
import { ServicesContainer, ServicesH1, ServicesWrapper, ServiceCard, ServiceIcon, ServiceTitle, ServiceSubtitle } from "./ServicesElement"
import image_1 from "../../images/body-2.png"
import image_2 from "../../images/body-3.png"
import image_3 from "../../images/body-4.png"

const Services = () => {
    return (
        <ServicesContainer id="services">
            <ServicesH1>Our Services</ServicesH1>
            <ServicesWrapper>
                <ServiceCard>
                    <ServiceIcon src={image_1} alt="body" />
                    <ServiceTitle>Fittness</ServiceTitle>
                    <ServiceSubtitle>We are dedicated to ensure your fitness.</ServiceSubtitle>
                </ServiceCard>
                <ServiceCard>
                    <ServiceIcon src={image_2} alt="body" />
                    <ServiceTitle>Fighting</ServiceTitle>
                    <ServiceSubtitle>We teach you different steps about fighting.</ServiceSubtitle>
                </ServiceCard>
                <ServiceCard>
                    <ServiceIcon src={image_3} alt="body" />
                    <ServiceTitle>MemberShip</ServiceTitle>
                    <ServiceSubtitle>We give membership to the best performer.</ServiceSubtitle>
                </ServiceCard>
            </ServicesWrapper>
        </ServicesContainer>
    )
}

export default Services
