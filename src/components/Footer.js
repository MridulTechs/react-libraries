import React from 'react'
import styled from 'styled-components'

const Footer = () => {
    const year = new Date().getFullYear()

    return (
        <Wrap>
            <Copyright>
                <p>
                    Copyright &copy; {year} by 
                    <br />
                    <a href="https://github.com/ByteClan" >
                        ByteClan
                    </a>
                </p>
            </Copyright>
        </Wrap>
    )
}

const Wrap = styled.footer`
    background: #fff;
    text-align: center;
`

const Copyright = styled.div`
    padding: 1rem 0;
    border-top: 1px solid #aaa;
    color: #555;
    line-height: 1.5;

    a {
        color: #000;
    }
`

export default Footer
