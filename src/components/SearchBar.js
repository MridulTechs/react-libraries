import React from 'react'
import styled from 'styled-components'
import { BiSearchAlt } from 'react-icons/bi'

const SearchBar = ({ search, setSearch }) => {
    return (
        <SearchWrap>
            <SearchInput 
                type="text"
                onChange={e => setSearch(e.target.value)}
                value={search}
                placeholder="Search Libraries"
            />
            <SearchIcon>
                <BiSearchAlt size="25px" />
            </SearchIcon>
        </SearchWrap>
    )
}

const SearchWrap = styled.div`
    padding: 90px 15px 0 15px;
    position: relative;
    max-width: 400px;
    margin: 0 auto;
    width: 100%;
`

const SearchInput = styled.input`
    width: 100%;
    padding: 5px 20px;
    outline: none;
    border: none;
    box-shadow: 3px 6px 20px rgba(0, 0, 0, 0.136);
    border-radius: 50px;
    height: 40px;
    transition: all .5s;

    &:active,
    &:focus {
        box-shadow: 3px 6px 20px rgba(0, 0, 0, 0.336);
    }
`

const SearchIcon = styled.div`
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 20px;
`

export default SearchBar
