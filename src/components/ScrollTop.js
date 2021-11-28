import React, { useState } from 'react'
import { IoIosArrowUp } from 'react-icons/io'
import styled from 'styled-components'

const ScrollTop = () => {
    const [showTop, setShowTop] = useState(false)

    const showScrollButton = () => {
        if(window.scrollY >= 50) {
            setShowTop(true)
        }
        else {
            setShowTop(false)
        }
    }

    window.addEventListener('scroll', showScrollButton)

    const scrollToTop = () => {
        window.scroll(0, 0)
    }

    return (
        <Arrow onClick={scrollToTop} className={showTop ? 'active' : ''}>
            <IoIosArrowUp size="24px" />
        </Arrow>
    )
}

const Arrow = styled.div`
    position: fixed;
    bottom: 20px;
    right: -100%;
    opacity: 0;
    background: #61dafb;
    color: #000;
    padding: 5px;
    border-radius: 3px;
    cursor: pointer;
    transition: all.5s;

    &:hover {
        box-shadow: 2px 5px 10px rgba(0, 0, 0, 0.3);
    }

    &.active {
        right: 2rem;
        opacity: 1;
    }
`

export default ScrollTop
