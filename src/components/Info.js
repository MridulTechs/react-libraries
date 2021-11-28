import React from 'react'
import styled from 'styled-components'

const Info = ({ sum }) => {
    return (
        <MainWrap>
            <p>Total Libraries: {sum}</p>
            <InfoWrap>
                <a href="https://github.com/ByteClan/react-libraries/blob/main/CONTRIBUTING.md">Contributing Guide</a> •
                <a href="https://github.com/ByteClan/react-libraries/issues">Issues</a> •
                <a href="https://github.com/ByteClan/react-libraries/pulls">Pull Requests</a> •
                <a href="https://github.com/ByteClan/react-libraries/blob/main/LICENSE">License</a>
            </InfoWrap>
        </MainWrap>
    )
}

const MainWrap = styled.div`
    padding: 80px 15px 10px 15px;
    text-align: center;

    p {
        margin: 5px;
    }
`
const InfoWrap = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;

    a {
        margin: 0 10px;
        padding-bottom: 2px;
        border-bottom: 1px solid #000;
    }
`

export default Info
