import styled from "styled-components"
import { FaTimes } from "react-icons/fa"
import { Link as LinkS } from "react-scroll"
import { Link as LinkR } from "react-router-dom"

export const SidebarContainer = styled.aside`
    position: fixed;    
    top: 0;
    left: 0;
    z-index: 999;
    height: 100%;
    width: 100%;
    background-color: #0d0d0d;
    display: grid;
    align-items: center;
    transition: all 0.3s ease-in-out;
    opacity: ${({ isOpen }) => (isOpen ? '1' : '0')};
    top: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
    // left: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
    // right: ${({ isOpen }) => (isOpen ? '0' : '-100%')};

`

export const Icon = styled.div`
    font-size: 2rem;
    position: absolute;
    top: 1.2rem;
    right: 1.5rem;
    cursor: pointer;
    background: transparent;
    outline: none;
`

export const CloseIcon = styled(FaTimes)`
    color: #fff;
`

export const SidebarWrapper = styled.div`
    color: #fff;
`
export const SidebarMenu = styled.ul`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(6, 80px);
    text-align: center;

    @media screen and (max-width: 480px){
        grid-template-rows: repeat(6, 60px);
    }

`

export const SidebarLink = styled(LinkS)`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.5rem;
    list-style: none;
    text-decoration: none;
    transition: all 0.2s ease-in-out;
    color: #fff;
    cursor: pointer;

    &:hover{
        color: #01bf71;
        transition: all 0.2s ease-in-out;
    }
`
export const SideBtnWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`
export const SideBtnRouter = styled(LinkR)`
    color: #fff;
    text-decoration: none;
    cursor: pointer;
    padding: 16px 64px;
    border-radius: 50px;
    background-color: #01bf71;
    transition: all 0.2s ease-in-out;
    border: none;
    outline: none;
    white-space: nowrap;
    font-size: 1rem;

    &:hover{
        background-color: #fff;
        transition: all 0.2s ease-in-out;
        color: #01bf71;
    }
`
