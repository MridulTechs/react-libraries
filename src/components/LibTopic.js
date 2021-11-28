import React from 'react'
import styled from 'styled-components'
import LibGrid from './LibGrid'

const LibTopic = ({ libs, search }) => {
    return (
        <Wrap>
            {libs.map((lib, id) => (
                <React.Fragment key={id}>
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
