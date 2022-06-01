import React from "react"
import styled from "styled-components"

const HeaderStyle = styled.header`
    display: flex;
    align-items: center;
    color: white;
    background-color: #5C16C5;
    margin: 0 auto;
    height: 3.5em;
    padding: 1em 7em;

    p{
        font-size: 1.5em;
        font-weight: 900;
        letter-spacing: 2px;
    }

    .icon{
        height: 1.5em;
        background-color: white;
        width: 3em;
        height: 1.5em;
        border-radius: 25px;
        margin-left: 0.5em;
    }
`


const Header: React.FC = () => {
    return (
        <HeaderStyle>
            <p>IMDB</p>
            <div className="icon"></div>
        </HeaderStyle>
    )
}

export default Header