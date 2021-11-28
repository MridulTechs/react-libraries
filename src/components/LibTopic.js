import React from 'react'
import styled from 'styled-components'
import LibGrid from './LibGrid'
import { v4 as uuidv4 } from 'uuid';

const LibTopic = ({ libs, search }) => {
    return (
        <Wrap>
            {libs.map(lib => (
                <React.Fragment key={uuidv4()}>
                    <LibGrid 
                        lib={lib} 
                        search={search}
                    />
                </React.Fragment>
            ))}
        </Wrap>
    )
}

const Wrap = styled.div`
    padding: 30px;
    max-width: 1500px;
    margin: 0 auto;
    width: 100%;

    @media (max-width: 600px) {
        padding: 20px 15px 20px 15px;
    }
`

export default LibTopic
