import React, { useState } from 'react'
import { AiFillGithub } from 'react-icons/ai'
import styled from 'styled-components'
import { InfiniteRotate } from '../styles/Keyframes'

const Header = () => {
    const [nav, setNav] = useState(false)

    const changeBackground = () => {
        if(window.scrollY >= 50) {
            setNav(true)
        }
        else {
            setNav(false)
        }
    }

    window.addEventListener('scroll', changeBackground)

    return (
        <NavBar className={nav ? 'navbar active' : 'navbar'}>
            <Image src="/assets/react.svg" alt="react" />
            <Heading>React Libraries</Heading>
            <Image src="/assets/react.svg" alt="react" />

            <Github 
                target="_blank" 
                rel="noreferrer" 
                href="https://github.com/ByteClan/react-libraries"
            >
                <AiFillGithub size="22px" />
            </Github>
        </NavBar>
    )
}

const NavBar = styled.nav`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: 1px solid #000;
    padding: 10px 20px;
    background: #fff;
    z-index: 10;

    &.active{
        box-shadow: 2px 5px 10px rgba(0, 0, 0, 0.3);
    }
`

const Heading = styled.h1`
    margin: 0 20px;

    @media (max-width: 600px) {
        margin: 0 10px;
        font-size: 22px;
    }
`

const Image = styled.img`
    height: 50px;
    width: 50px;
    animation: ${InfiniteRotate} 10s linear infinite;

    @media (max-width: 600px) {
        height: 35px;
        width: 35px;
    }
`

const Github = styled.a`
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 20px;

    @media (max-width: 600px) {
        right: 10px;
    }
`

export default Header
