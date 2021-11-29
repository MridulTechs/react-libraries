import React from 'react'
import styled from 'styled-components'
import { AiFillGithub } from 'react-icons/ai'
import { RiExternalLinkLine } from 'react-icons/ri'
import { Button } from '../styles/Styles'

const LibCard = ({ item }) => {
    return (
        <Card>
            <h3>{item.name}</h3>
            <p>{item.description}</p>

            <Links>
                <Github 
                    target="_blank" 
                    rel="noreferrer" 
                    href={item.repository}
                    aria-label="Github"
                >
                    <AiFillGithub size="22px" />
                </Github>

                <ButtonLink 
                    href={item.installation}
                    target="_blank" 
                    rel="noreferrer" 
                >
                    <p>Install</p>
                    <RiExternalLinkLine size="21px"/>
                </ButtonLink>
                <ButtonLink
                    href={item.docs}
                    target="_blank" 
                    rel="noreferrer" 
                >
                    <p>Docs</p>
                    <RiExternalLinkLine size="21px"/>
                </ButtonLink>
            </Links>
        </Card>
    )
}

const Card = styled.div`
    position: relative;
    padding: 15px;
    border-radius: 5px;
    background: rgba(238, 238, 238, .3);
    transition: all .5s;
    box-shadow: 0 2px 2px 0 rgb(0 0 0 / 14%), 0 3px 1px -2px rgb(0 0 0 / 12%), 0 1px 5px 0 rgb(0 0 0 / 20%);

    &:hover {
        box-shadow: 0 4px 5px 0 rgb(0 0 0 / 14%), 0 1px 10px 0 rgb(0 0 0 / 12%), 0 2px 4px -1px rgb(0 0 0 / 30%);
    }

    h3 {
        margin-bottom: 10px;
    }
`

const Links = styled.div`
    display: flex;
    margin-top: 15px;
`

const ButtonLink = styled(Button)`
    transition: all .5s;

    &:hover {
        box-shadow: 0 2px 2px 0 rgb(0 0 0 / 14%), 0 3px 1px -2px rgb(0 0 0 / 12%), 0 1px 5px 0 rgb(0 0 0 / 20%);
    }

    p {
        margin-right: 5px;
    }
`


const Github = styled.a`
    position: absolute;
    top: 15px;
    right: 15px;
`

export default LibCard
