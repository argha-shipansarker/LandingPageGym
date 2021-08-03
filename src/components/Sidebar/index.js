import React from 'react'
import { SidebarContainer, CloseIcon, Icon, SideBtnWrapper, SidebarWrapper, SidebarMenu, SidebarLink, SideBtnRouter } from "./SidebarElements"

const Sidebar = ({ isOpen, toggle }) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>

            <SidebarWrapper>

                <SidebarMenu>
                    <SidebarLink to="about" onClick={toggle}>About</SidebarLink>
                    <SidebarLink to="discover" onClick={toggle}>Discover</SidebarLink>
                    <SidebarLink to="services" onClick={toggle}>Services</SidebarLink>
                    <SidebarLink to="signup" onClick={toggle}>Sign Up</SidebarLink>
                </SidebarMenu>

                <SideBtnWrapper>
                    <SideBtnRouter to="/sign-in" onClick={toggle}>Sign In</SideBtnRouter>
                </SideBtnWrapper>

            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar
