import React from 'react'
import styled from 'styled-components'
import LibGrid from './LibGrid'
import { v4 as uuidv4 } from 'uuid';

const LibTopic = ({ libs }) => {
    return (
        <Wrap>
            {libs.map(lib => (
                <Section key={uuidv4()}>
                    <Title>{lib.topic}</Title>
                    <LibGrid libraries={lib.libraries} />
                </Section>
            ))}
        </Wrap>
    )
}

const Wrap = styled.div`
    padding: 90px 30px 30px 30px;
    max-width: 1500px;
    margin: 0 auto;
    width: 100%;

    @media (max-width: 600px) {
        padding: 90px 15px 30px 15px;
    }
`

const Section = styled.section`
    margin-bottom: 20px;

    &:not(:last-of-type){
        border-bottom: .5px solid #ccc;
        padding-bottom: 20px;
    }
`

const Title = styled.h2`
    margin-bottom: 15px;
`

export default LibTopic
