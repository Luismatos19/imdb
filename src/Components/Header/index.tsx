import React from "react"
import { HeaderStyle } from "./style"



const Header: React.FC = () => {
    return (
        <HeaderStyle>
            <p>IMDB</p>
            <div className="icon"></div>
        </HeaderStyle>
    )
}

export default Header