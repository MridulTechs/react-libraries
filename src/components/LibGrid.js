import React from 'react'
import LibCard from './LibCard'
import styled from 'styled-components';

const LibGrid = ({ lib, search }) => {
    const filterLibs = lib.libraries.filter(item => {
        return item.name.toLowerCase().includes(search.toLowerCase())
    })

    return (
        <>
            {filterLibs.length > 0 && 
                <Section>
                    <Title>{lib.topic}</Title>
                    <GridWrap>
                        {filterLibs.map((item, id) => (
                            <LibCard 
                                key={id} 
                                item={item}
                            />
                        ))}
                    </GridWrap>
                </Section>
            }
        </>
    )
}

const Section = styled.section`
    margin-bottom: 20px;

    &:not(:last-of-type){
        border-bottom: .5px solid #ccc;
        padding-bottom: 20px;
    }
`

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

const Title = styled.h2`
    margin-bottom: 15px;
`

export default LibGrid
