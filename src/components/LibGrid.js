import React from 'react'
import LibCard from './LibCard'
import { v4 as uuidv4 } from 'uuid';
import styled from 'styled-components';

const LibGrid = ({ libraries }) => {
    return (
        <GridWrap>
            {libraries.map(item => (
                <LibCard 
                    key={uuidv4()} 
                    item={item}
                />
            ))}
        </GridWrap>
    )
}

const GridWrap = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 15px;

    @media (max-width: 1200px) {
        grid-template-columns: repeat(3, 1fr);
    }

    @media (max-width: 800px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 600px) {
        grid-template-columns: repeat(1, 1fr);
    }
`

export default LibGrid
